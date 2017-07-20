Ext.define('challenge.view.main.Users', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',

    title: 'Users',

    bind: {
        store: '{users}'
    },

    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'Firstname',
            dataIndex: 'firstname',
            flex: 1
        },
        {
            text: 'Lastname',
            dataIndex: 'lastname',
            flex: 1
        },
        {
            text: 'Department',
            dataIndex: 'department',
            flex: 1
        },
        {
            text: 'E-Mail',
            dataIndex: 'email',
            flex: 1
        },
        {
            text: 'Status',
            dataIndex: 'status',
            flex: 1
        }
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
