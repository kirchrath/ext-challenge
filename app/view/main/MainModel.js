Ext.define('challenge.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    session: Ext.create('Ext.data.Session'),

    requires: [
        'Ext.data.Store',
        'Ext.data.Session',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'challenge.model.User',
        'challenge.model.Activity',
        'challenge.model.Effect',
        'challenge.CsvReader'
    ],
 
    stores: {
        users: {
            storeId: 'users',
            autoLoad: true,
            model: 'challenge.model.User',
            proxy: {
                type: 'ajax',
                url: '/resources/data/users.csv',
                reader: {
                    type: 'csv',
                    rootProperty: 'data',
                    idProperty: 'id',
                    fields: [
                        {
                            name: 'name'
                        },
                        {
                            name: 'firstname'
                        },
                        {
                            name: 'lastname'
                        },
                        {
                            name: 'department'
                        },
                        {
                            name: 'email'
                        },
                        {
                            name: 'login'
                        },
                        {
                            name: 'status'
                        }
                    ]
                }
            }
        },

        activities: {
            storeId: 'activities',
            autoLoad: true,
            model: 'challenge.model.Activity',
            proxy: {
                type: 'ajax',
                url: '/resources/data/activities.csv',
                reader: {
                    type: 'csv',
                    rootProperty: 'data',
                    idProperty: 'id',
                    fields: [
                        {
                            name: 'activity'
                        },
                        {
                            name: 'startPlanned'
                        },
                        {
                            name: 'startActual'
                        },
                        {
                            name: 'endPlanned'
                        },
                        {
                            name: 'endActual'
                        },
                        {
                            name: 'user'
                        }
                    ]
                }
            }
        },

        effects: {
            storeId: 'effects',
            autoLoad: true,
            model: 'challenge.model.Activity',
            proxy: {
                type: 'ajax',
                url: '/resources/data/effects.csv',
                reader: {
                    type: 'csv',
                    rootProperty: 'data',
                    idProperty: 'id',
                    fields: [
                        {
                            name: 'time'
                        },
                        {
                            name: 'plan'
                        },
                        {
                            name: 'actual'
                        }
                    ]
                }
            }
        }
    }
});
