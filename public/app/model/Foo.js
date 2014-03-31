Ext.define('MEEN.model.Foo', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'foo' },
        { name: 'bar' }
    ],
    proxy: {
        type: 'ajax',
        url: 'foos'
    }
});