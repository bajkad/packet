#!/usr/bin/env node
require('./proof')(1, function (parse, equal) {
    try {
        parse('byte: b0')
    } catch (e) {
        equal(e.message, 'bit size must be non-zero at character 8', 'parse a 0 bit pattern.')
    }
})
