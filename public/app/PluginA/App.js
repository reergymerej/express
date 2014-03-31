// This is a plugin file used to register what
// this plugin brings to the table.
Ext.define('MEEN.PluginA.App', {
    extend: 'Ext.data.Tree',
    root: {
        text: 'foo',
        children: [
            {
                text: 'bar',
                leaf: true
            },
            {
                text: 'baz',
                leaf: true
            }
        ]
    }
});