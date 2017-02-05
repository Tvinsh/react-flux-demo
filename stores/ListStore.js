/** store保存整个应用的状态，所有的数据都存放在这里*/
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

//ListStore继承了EventEmitter.prototype，
//因此就能使用ListStore.on()和ListStore.emit()，来监听和触发事件了。
var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = ListStore;
