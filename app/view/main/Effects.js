Ext.define('challenge.view.main.Effects', {
    extend: 'Ext.panel.Panel',
    xtype: 'effects',

    title: 'Effects',

    layout: 'fit',
    items: {
        xtype: 'cartesian',
        reference: 'chart',
        bind: {
            store: '{effects}'
        },
        interactions: {
            type: 'crosszoom',
            zoomOnPanGesture: true
        },
        series: [
            {
                type: 'line',
                fill: true,
                smooth: true,
                xField: 'time',
                yField: 'plan',
                colors: ['blue'],
                style: {
                    opacity: 0.6
                }
            },
            {
                type: 'line',
                fill: true,
                smooth: true,
                xField: 'time',
                yField: 'actual',
                colors: ['red'],
                style: {
                    opacity: 0.6
                }
            }
        ],
        axes: [
            {
                type: 'numeric',
                position: 'left',
                fields: ['plan', 'actual'],
                grid: true
            },
            {
                type: 'category',
                position: 'bottom',
                fields: 'time'
            }
        ]
    }
});
