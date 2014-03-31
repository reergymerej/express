Ext.define('MEEN.model.Plugin', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name' },
        { name: 'class' }
    ],
    proxy: {
        type: 'ajax',
        url: 'plugins'
    }
});