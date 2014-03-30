Ext.define('MEEN.view.Navigation', {
    extend: 'Ext.tab.Panel',
    title: 'Navigation',
    items: [
        {
            title: 'nav index',
            itemId: 'nav index',
            tbar: [
                {
                    name: 'new',
                    text: 'new content tab'
                },

                {
                    name: 'close',
                    text: 'close all'
                }
            ]
        }
    ],

    /**
    * @param {Ext.data.TreeStore} treeStore
    */
    createNavTree: function (treeStore) {
        var treePanel = Ext.create('Ext.tree.Panel', {
            store: treeStore,
            rootVisible: false
        });

        this.getComponent('nav index').add(treePanel);
    }
});