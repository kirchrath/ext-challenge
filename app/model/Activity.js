Ext.define('challenge.model.Activity', {
    extend: 'Ext.data.Model',
    requires: [
        'challenge.model.User'
    ],
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'activity',
            type: 'string'
        },
        {
            name: 'startPlanned',
            type: 'date',
            dateFormat: 'd.m.Y'
        },
        {
            name: 'startActual',
            type: 'date',
            dateFormat: 'd.m.Y'
        },
        {
            name: 'endPlanned',
            type: 'date',
            dateFormat: 'd.m.Y'
        },
        {
            name: 'endActual',
            type: 'date',
            dateFormat: 'd.m.Y'
        },
        {
            name: 'user',
            type: 'int',
            reference: {
                type: 'challenge.model.User',
                role: 'user'
            }
        },
        {
            name: 'startDelay',
            type: 'int',
            calculate: function (data) {
                return Ext.Date.diff(data.startPlanned, data.startActual, 'd');
            }
        },
        {
            name: 'finishDelay',
            type: 'int',
            calculate: function (data) {
                return Ext.Date.diff(data.endPlanned, data.endActual, 'd');
            }
        }
    ]
});