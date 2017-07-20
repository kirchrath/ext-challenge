Ext.define('challenge.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'firstname',
            type: 'string'
        },
        {
            name: 'lastname',
            type: 'string'
        },
        {
            name: 'department',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'login',
            type: 'string'
        },
        {
            name: 'status',
            type: 'string'
        }
    ]
});