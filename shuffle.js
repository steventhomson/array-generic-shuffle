/**
 * Implementation of a non-standard array generic method, shuffle, using the Fisher-Yates algorithm.
 *
 * Copyright (c) 2014 Steven Thomson
 * http://opensource.org/licenses/MIT
 */
(function (global, undefined) {
    'use strict';

    var Array = global.Array,
        Object = global.Object,
        TypeError = global.TypeError;

    // add standard
    if (!Array.prototype.shuffle) {
        Array.prototype.shuffle = function () {
            var elms, len, idx, tmp;

            if (this === null || this === undefined) {
                throw new TypeError('this is null or undefined');
            }

            // convert this to object
            elms = Object(this);

            // convert length to unsigned 32-bit integer
            len = elms.length >>> 0;

            // fisher-yates shuffle
            while (len) {
                idx = Math.random() * len-- | 0;
                tmp = elms[len];
                elms[len] = elms[idx];
                elms[idx] = tmp;
            }

            return elms;
        }
    }

    // add generic
    if (!Array.shuffle) {
        var shuffle = Array.prototype.shuffle;
        if (typeof shuffle === 'function') {
            Array.shuffle = function () {
                return shuffle.call.apply(shuffle, arguments);
            };
        }
    }

}(this, void 0));