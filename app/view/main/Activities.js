Ext.define('challenge.view.main.Activities', {
    extend: 'Ext.panel.Panel',
    xtype: 'activities',

    title: 'Personnel',

    requires: [
        'Ext.layout.container.VBox',
        'challenge.view.main.ActivitiesList',
        'challenge.view.main.ActivitiesGraph',
    ],

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'activitylist',
            flex: 1
        },
        {
            xtype: 'activitiesgrap',
            flex: 1
        }
    ]
});
