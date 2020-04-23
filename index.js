"use strict";
var _this = this;
exports.__esModule = true;
exports.Event = function () {
    _this.on = function (eventName, cb) {
        if (!_this.handles) {
            _this.handles = {};
        }
        if (!_this.handles[eventName]) {
            _this.handles[eventName] = [];
        }
        _this.handles[eventName].push(cb);
    };
    _this.emit = function (eventName, params) {
        if (_this.handles[eventName]) {
            for (var _i = 0, _a = _this.handles[eventName]; _i < _a.length; _i++) {
                var func = _a[_i];
                func(params);
            }
        }
    };
    return _this;
};
