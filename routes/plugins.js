exports.list = function (req, res) {
    var plugins = [
            {
                name: 'Plugin A',
                class: 'MEEN.PluginA.App'
            }/*,

            {
                name: 'Plugin B',
                class: 'MEEN.PluginB'
            }*/
        ];

    res.jsonp(plugins);
};