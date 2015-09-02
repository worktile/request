var uuid = require('node-uuid'),
    moment = require('moment');

module.exports = exports = {
    guid: function () {
        var str = uuid.v4();
        var regex = new RegExp('-', 'g');
        str = str.replace(regex, '');
        return str;
    },

    getNow: function () {
        var now = moment();
        return now.valueOf();
    }
};