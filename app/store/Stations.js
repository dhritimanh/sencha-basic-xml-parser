Ext.define('bat.store.Stations', {
    extend : 'Ext.data.Store',

    requires :['Ext.data.reader.Xml','bat.model.Station'] ,

    config : {
        autoload:true,
        storeId:'idStations',
        model : 'bat.model.Station',
        proxy : {
            type   : 'ajax',
            url    : 'data/a.xml',
            reader : {
                type         : 'xml',
                rootProperty : 'stations',
                record       : 'station'
            }
        }
    }
});