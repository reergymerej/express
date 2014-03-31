Ext.define('MEEN.controller.Navigation', {
    extend: 'Ext.app.Controller',
    
    views: [
        'MEEN.view.DummyPanel'
    ],

    models: [
        'MEEN.model.NavItem',
        'MEEN.model.Plugin'
    ],

    refs: [
        {
            ref: 'navPanel',
            selector: '#navigation'
        },

        {
            ref: 'contentPanel',
            selector: '#content'
        }
    ],
    
    init: function () {
        
        this.control({

            '#navigation': {
                afterrender: this.buildNavTree
            },

            '#navigation treepanel': {
                itemclick: this.onNavItemClick
            },

            '#navigation button[name="new"]': {
                click: this.onNewClick
            },

            '#navigation button[name="close"]': {
                click: this.onCloseClick
            }
        });

        // Create a store to house the navigation.
        Ext.create('Ext.data.TreeStore', {
            storeId: 'nav-items',
            model: 'MEEN.model.NavItem',
            root: {
                expanded: true,
                children: []
            }
        });

        Ext.create('Ext.data.Store', {
            storeId: 'plugins',
            model: 'MEEN.model.Plugin',
            autoLoad: true,
            listeners: {
                load: this.loadPlugins
            }
        });
    },

    loadPlugins: function (pluginStore) {
        var pluginApps = [];

        pluginStore.each(function (plugin) {
            pluginApps.push(plugin.get('class'));
        });

        Ext.require(pluginApps, function () {
            console.log('plugins loaded');

            Ext.Array.each(pluginApps, function (pluginTree) {
                pluginTree = Ext.create(pluginTree);
                
                Ext.StoreManager.get('nav-items').getRootNode().appendChild(pluginTree.getRootNode());
            });

        })
    },

    buildNavTree: function (navPanel) {
        navPanel.createNavTree(Ext.StoreManager.get('nav-items'));
        // navPanel.createNavTree(Ext.StoreManager.get('plugins'));
    },

    onNewClick: function () {
        this.addContentPanel();
    },

    /**
    * @private
    */
    addContentPanel: function (node) {

        var content = this.getContentPanel(),
            panelConfig,
            newPanel;

        node = node || this.addNode();
        panelConfig = this.getPanelConfigFromNode(node),
        newPanel = content.add(panelConfig);

        content.setActiveTab(newPanel);
    },

    /**
    * @private
    */
    addNode: function () {
        var store = Ext.StoreManager.get('nav-items');
        var root = store.getRootNode();
        var count = (root.childNodes.length || 0) + 1;
        
        return root.appendChild({
            id: count,
            title: 'New Page' + count,
            text: 'new page ' + count,
            leaf: true
        });
    },

    /**
    * @private
    */
    getPanelConfigFromNode: function (node) {
        return {
            itemId: node.getId(),
            xtype: 'dummy',
            title: node.get('title'),
            html: node.get('text')
        };        
    },

    onNavItemClick: function (treepanel, navItem) {
        var activatedTab = this.getContentPanel().setActiveTab(navItem.getId() + '');

        if (!activatedTab) {
            this.addContentPanel(navItem);
        }
    },

    onCloseClick: function () {
        this.getContentPanel().removeAll();
    }
});