'use strict'
var extend = require("extend")
var config = {
    name: 'Mock Server',
    root: process.cwd(),
    static: './',
    read: [],
    autoListen: true,
    CORS: true,
    connect: [],
    urlRewrite: false,
    staticReplace: function (req, data, filepath) {
        if(/\.(css|js|html)$/.test(filepath)) {
            return data.replace(/<!--MOSE([\S\s]*?)MOSE-->/g,'$1')
        }
    },
    ajax: {
        title: false,
        type: 'get',
        url: false,
        req: false,
        match: false,
        res: {},
        resDefault: false,
        resStatus: 200,
        timeout: 0,
        dataType: 'html',
        doc: false,
        headers: false
    },
    render: {
        templatedDir: './',
        server: '/_mobe_render_server/',
        data: false
    },
    view: {
        type: 'get',
        req: false,
        res: {},
        resDefault: false,
        resStatus: 200,
        timeout: 0,
        dataType: 'html',
        doc: {},
        headers: false
    },
    resDatabase: 'file',
}
module.exports = function () {
    return extend(true, {}, config)
}
