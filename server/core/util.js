var uuid = require('node-uuid'),
    moment = require('moment'),
    shortid = require('shortid'),
    _ = require('lodash');

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
    },

    objectToArray: function (obj) {
        return _.map(obj, function (value, key) {
            return {key: key, value: value}
        });
    }
};