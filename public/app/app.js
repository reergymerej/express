Ext.application({
    name: 'MEEN',

    views: ['MEEN.view.Foo'],
    launch: function () {

        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'foo',
                    html: 'a foo'
                },

                {
                    title: 'MEEN Stack',
                    html : 'Ext JS instead of Angular JS'
                }
            ]
        });
    }
});