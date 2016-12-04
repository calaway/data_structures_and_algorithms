function List(data) {
  this.head = null;
  this.nextNode = null;
  this.data = data || null;
  this._length = 0;
}

List.prototype.push = function (data) {
  if (this.head === null) {
    this.head = new List(data);
  } else if (this.head.nextNode === null) {
    this.head.nextNode = new List(data);
    this.head.nextNode.head = this.head.nextNode;
  } else {
    this.head.nextNode.push(data);
  }
  this.calculateLength();
};

List.prototype.calculateLength = function () {
  if (this.head === null) {
    this._length = 0
  } else if (this.head.nextNode === null || this.head.nextNode.head === null) {
    this.head.nextNode = null;
    this._length = 1
  } else {
    this.head.nextNode.calculateLength();
    this._length = 1 + this.head.nextNode._length;
  }
};

List.prototype.pop = function () {
  current = this;
  while (current.head != null && current.head.nextNode != null) {
    current = current.head.nextNode;
  }
  var output = current.head;
  current.head = null;
  this.calculateLength();
  return output;
};
