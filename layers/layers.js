var wms_layers = [];

var lyr_este_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'este<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/este_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8227957.088396, 553925.532397, -8227711.077708, 554086.770742]
        })
    });
var format_Parcelas_1 = new ol.format.GeoJSON();
var features_Parcelas_1 = format_Parcelas_1.readFeatures(json_Parcelas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_1.addFeatures(features_Parcelas_1);
var lyr_Parcelas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelas_1, 
                style: style_Parcelas_1,
                popuplayertitle: 'Parcelas',
                interactive: true,
    title: 'Parcelas<br />\
    <img src="styles/legend/Parcelas_1_0.png" /> 1<br />\
    <img src="styles/legend/Parcelas_1_1.png" /> 2<br />\
    <img src="styles/legend/Parcelas_1_2.png" /> 3<br />\
    <img src="styles/legend/Parcelas_1_3.png" /> 4<br />\
    <img src="styles/legend/Parcelas_1_4.png" /> 5<br />\
    <img src="styles/legend/Parcelas_1_5.png" /> 6<br />\
    <img src="styles/legend/Parcelas_1_6.png" /> 7<br />\
    <img src="styles/legend/Parcelas_1_7.png" /> 8<br />\
    <img src="styles/legend/Parcelas_1_8.png" /> 9<br />\
    <img src="styles/legend/Parcelas_1_9.png" /> 10<br />\
    <img src="styles/legend/Parcelas_1_10.png" /> 11<br />\
    <img src="styles/legend/Parcelas_1_11.png" /> 12<br />\
    <img src="styles/legend/Parcelas_1_12.png" /> 13<br />\
    <img src="styles/legend/Parcelas_1_13.png" /> 14<br />\
    <img src="styles/legend/Parcelas_1_14.png" /> 15<br />\
    <img src="styles/legend/Parcelas_1_15.png" /> 16<br />\
    <img src="styles/legend/Parcelas_1_16.png" /> 17<br />\
    <img src="styles/legend/Parcelas_1_17.png" /> 18<br />\
    <img src="styles/legend/Parcelas_1_18.png" /> 19<br />\
    <img src="styles/legend/Parcelas_1_19.png" /> 20<br />\
    <img src="styles/legend/Parcelas_1_20.png" /> 21<br />\
    <img src="styles/legend/Parcelas_1_21.png" /> 22<br />\
    <img src="styles/legend/Parcelas_1_22.png" /> 23<br />\
    <img src="styles/legend/Parcelas_1_23.png" /> 24<br />\
    <img src="styles/legend/Parcelas_1_24.png" /> 25<br />\
    <img src="styles/legend/Parcelas_1_25.png" /> 26<br />\
    <img src="styles/legend/Parcelas_1_26.png" /> 27<br />\
    <img src="styles/legend/Parcelas_1_27.png" /> 28<br />\
    <img src="styles/legend/Parcelas_1_28.png" /> 29<br />\
    <img src="styles/legend/Parcelas_1_29.png" /> 30<br />\
    <img src="styles/legend/Parcelas_1_30.png" /> 31<br />\
    <img src="styles/legend/Parcelas_1_31.png" /> 32<br />\
    <img src="styles/legend/Parcelas_1_32.png" /> 33<br />\
    <img src="styles/legend/Parcelas_1_33.png" /> <br />' });

lyr_este_0.setVisible(true);lyr_Parcelas_1.setVisible(true);
var layersList = [lyr_este_0,lyr_Parcelas_1];
lyr_Parcelas_1.set('fieldAliases', {'id': 'id', 'Usuario': 'Usuario', 'Área m2': 'Área m2', });
lyr_Parcelas_1.set('fieldImages', {'id': 'TextEdit', 'Usuario': 'TextEdit', 'Área m2': 'TextEdit', });
lyr_Parcelas_1.set('fieldLabels', {'id': 'no label', 'Usuario': 'no label', 'Área m2': 'no label', });
lyr_Parcelas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});