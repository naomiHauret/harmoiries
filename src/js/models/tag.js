class Tag {
  constructor(id, label) {
    this._id = id // Number
    this._label = label // String
  }

  get id() {
    return this._id
  }

  get label() {
    return this._label
  }
}

export default Tag
