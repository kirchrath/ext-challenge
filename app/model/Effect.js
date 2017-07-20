Ext.define('challenge.model.Effect', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'time',
            type: 'date',
            dateFormat: 'd.m.Y'
        },
        {
            name: 'plan',
            type: 'number'
        },
        {
            name: 'actual',
            type: 'number'
        }
    ]
});