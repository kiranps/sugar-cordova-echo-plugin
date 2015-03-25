cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova.demo.echo/www/echo.js",
        "id": "cordova.demo.echo.echo",
        "clobbers": [
            "echo"
        ]
    },
    {
        "file": "plugins/cordova.demo.echo/src/sugar/EchoProxy.js",
        "id": "cordova.demo.echo.EchoProxy",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova.demo.echo": "0.0.1"
}
// BOTTOM OF METADATA
});