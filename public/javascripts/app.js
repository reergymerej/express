Ext.application({
    name: 'MEEN',
    autoCreateViewport: true,
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'MEEN Stack',
                    html : 'Ext JS instead of Angular JS'
                }
            ]
        });
    }
});