Ext.application({
    name: 'MEEN',
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