Ext.define('challenge.view.main.ActivitiesList', {
    extend: 'Ext.grid.Panel',
    xtype: 'activitylist',

    bind: {
        store: '{activities}'
    },

    viewConfig: {
        getRowClass: function(record, index) {
            var finishDelay = record.get('finishDelay');

            if (finishDelay <= 0) {
                return 'no-delay';
            }
            
            if (finishDelay <= 5) {
                return '';
            }

            if (finishDelay < 30) {
                return 'bad-delay';
            }

            return 'critical-delay';
        }
    },

    columns: {
        defaults: {
            align: 'left'
        },
        items: [
            {
                text: 'Activity',
                dataIndex: 'activity',
                flex: 1
            },
            {
                text: 'Planned Start',
                dataIndex: 'startPlanned',
                xtype: 'datecolumn',
                format:'d.m.Y',
                width: 120
            },
            {
                text: 'Actual Start',
                dataIndex: 'startActual',
                xtype: 'datecolumn',
                format:'d.m.Y',
                width: 120
            },
            {
                text: 'Planned End',
                dataIndex: 'endPlanned',
                xtype: 'datecolumn',
                format:'d.m.Y',
                width: 120
            },
            {
                text: 'Actual End',
                dataIndex: 'endActual',
                xtype: 'datecolumn',
                format:'d.m.Y',
                width: 120
            },
            {
                text: 'Responsible user',
                dataIndex: 'user',
                flex: 1
            },
            {
                text: 'Start Delay',
                dataIndex: 'startDelay',
                flex: 0.5
            },
            {
                text: 'Finish Delay',
                dataIndex: 'finishDelay',
                flex: 0.5
            }
        ]
    },

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
