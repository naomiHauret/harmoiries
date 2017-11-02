class Armoirie {
  constructor(id, imgSrc, desc, tagsList, date, motto, logotypeSrc) {
    this._id = id // Number
    this._imgSrc = imgSrc // String
    this._desc = desc // String
    this._tagsList = tagsList // Array of Number
    this._date = date // Number or String
    this._motto = motto // optional String
    this._logotypeSrc = logotypeSrc //optional String
  }

  get id() {
    return this._id
  }

  get imgSrc() {
    return this._imgSrc
  }

  get desc() {
    return this._desc
  }

  get tagsList() {
    return this._tagsList
  }

  get date() {
    return this._date
  }

  get motto() {
    return this._motto
  }

  get logotypeSrc() {
    return this._logotypeSrc
  }
}

export default Armoirie