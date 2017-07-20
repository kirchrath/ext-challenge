Ext.define('challenge.view.main.ActivitiesGraph', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Bar',
        'Ext.chart.interactions.ItemHighlight'
    ],
    xtype: 'activitiesgrap',

    flex: 1,
    layout: 'fit',
    items: {
        xtype: 'cartesian',
        reference: 'chart',
        bind: {
            store: '{activities}'
        },
        insetPadding: {
            top: 40,
            bottom: 40,
            left: 20,
            right: 40
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            minimum: 1,
            titleMargin: 20,
            fields: ['startDelay', 'finishDelay'],
            title: {
                text: 'Delay in days'
            }
        }, {
            type: 'category',
            position: 'bottom'
        }],
        series: [
            {
                type: 'bar',
                xField: 'activity',
                yField: ['startDelay', 'finishDelay'],
                stacked: false,
                label: {
                    field: ['startDelay', 'finishDelay'],
                    display: 'insideEnd'
                },
                tooltip: {
                    renderer: function (toolTip, record) {
                        toolTip.setHtml(record.get('activity'));
                    }
                },
            }
        ],
        sprites: {
            type: 'text',
            text: 'Delay of activities',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40,
            y: 20
        }
    }
});
