Ext.define('challenge.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'challenge.view.main.MainController',
        'challenge.view.main.MainModel',
        'challenge.view.main.Users',
        'challenge.view.main.Activities',
        'challenge.view.main.Effects'
    ],

    controller: 'main',
    viewModel: 'main',
    session: true,

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: '0 0 0 5',
        layout: 'fit',
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Users',
            iconCls: 'fa-home',
            items: [{
                xtype: 'userlist'
            }]
        },
        {
            title: 'Activities',
            iconCls: 'fa-area-chart',
            items: [{
                xtype: 'activities'
            }]
        },
        {
            title: 'Effects',
            iconCls: 'fa-bolt',
            items: [{
                xtype: 'effects'
            }]
        }
    ]
});
