var uuid = require('node-uuid'),
    moment = require('moment'),
    shortid = require('shortid');

module.exports = exports = {
    guid: function () {
        var str = uuid.v4();
        var regex = new RegExp('-', 'g');
        str = str.replace(regex, '');
        return str;
    },

    shortId: function () {
        return shortid.generate();
    },

    getNow: function () {
        var now = moment();
        return now.valueOf();
    }
};