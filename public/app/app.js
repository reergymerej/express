Ext.application({
    name: 'MEEN',

    models: [
        'MEEN.model.NavItem'
    ],

    views: [
        'MEEN.view.Header',
        'MEEN.view.Navigation',
        'MEEN.view.Content'
    ],

    controllers: [
        'MEEN.controller.Navigation'
    ],

    launch: function () {

        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [

                Ext.create('MEEN.view.Header', {
                    id: 'header',
                    region: 'north',
                    height: 50
                }),
                
                Ext.create('MEEN.view.Navigation', {
                    id: 'navigation',
                    region: 'west',
                    width: 200,
                    split: true
                }),

                Ext.create('MEEN.view.Content', {
                    id: 'content',
                    region: 'center',
                    flex: 9
                })
            ]
        });
    }
});