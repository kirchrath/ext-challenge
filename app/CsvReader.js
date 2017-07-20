Ext.define('challenge.CsvReader', {
    extend : 'Ext.data.reader.Json',
    alias : 'reader.csv',

    read: function (response) {
        var me = this;
        var fiels = this.field;
        var data = response.responseText;
        var lines = data.split('\n');
        lines.shift();

        var parsed = lines.reduce(function (acc, line, index) {
            if (line) {
                acc.push(me.lineToObject(line, index));
            }
            return acc;
        }, []);

        var responseData = {};
        var root = me.getRootProperty();
        if (root) {
            responseData[root] = parsed;
        } else {
            responseData = parsed;
        }

        response.responseText = JSON.stringify(responseData);

        return this.callParent([response]);
    },

    lineToObject: function (line, index) {
        var data = line.split(';');
        var fields = this.fields;

        var output = data.reduce(function (acc, value, index) {
            var name = fields[index].name;
            acc[name] = value;
            return acc;
        }, {});

        output[this.idProperty] = index+1;

        return output;
    }
});