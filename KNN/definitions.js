function distance(p1,p2) {
  return Math.sqrt(
    p1.map((point, i) => p2[i]-point).reduce((sumOfSquares, diff) => sumOfSquares + (diff*diff), 0)
  )
}

class KNN {
  constructor(k=1,data,labels) {
    this.k = k
    this.data = data
    this.labels = labels
  }

  makeDistMap(datum) {
    const map = []
    let maxDist;

    for (i=0;i < this.data.length;i++) {
      const otherDatum = this.data[i]
      const otherDatumLabel = this.labels[i]
      const thisDist = distance(datum,otherDatum)

      if (!maxDist || thisDist < maxDist) {
        map.push(
          {
            i,
            distance: thisDist,
            label: otherDatumLabel
          }
        )
        map.sort((a,b) => a.distance < b.distance ? -1 : 1)

        if (map.length > this.k) {
          map.pop()
        }
        maxDist = map[map.length-1].distance
      }
    }
    return map
  }

  predict(datum) {
    const map = this.makeDistMap(datum)
    const similars = map.slice(0,this.k)
    const simInputs = similars.reduce((obj,similar) => Objext.assign({},
                                        obj,
                                        {[similar.label]: (obj[similar.label] || 0) + 1}
                                      ), 
                                        {}
                                     )
  }
}

module.exports = { KNN }
