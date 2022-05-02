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
}

module.exports = { KNN }
