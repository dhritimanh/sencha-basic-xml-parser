Ext.application({
    name: 'bat',

    requires: [
        'Ext.MessageBox',
        'Ext.data.reader.Xml'
    ],
    stores: ['Stations'],
    models: ['Station'],
    views: ['Main'],
    

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('bat.view.Main'));

        var station = Ext.getStore('idStations');
        station.load(function(records, options, success){
 
        console.log(records);
            
        if(success){
            Ext.each(records,function(record){
                console.log('Station Name: '+record.data.name);
                
                });
            } 
                

        });
            
    }    

});    
    
