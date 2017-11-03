var orm = require("../config/orm.js");

var burger = {

	selectWhere: function(colToSearch, valOfCol) {
		orm.selectWhere("burgers", colToSearch, function(res) {
			valOfCol(res);
		});
	},

	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cd(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}
};


module.exports = burger;