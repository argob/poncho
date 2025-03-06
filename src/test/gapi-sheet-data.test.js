const GapiSheetData = require('../js/gapi-sheet-data/gapi-sheet-data');
const jsonData = require('./resources/response');

test('GAPI', () => {
    const gapi = new GapiSheetData();
    
    const url = gapi.url("dataset", "13fMXLCN-aqeAVo6YH9eNP1ojljFWB0ocRR3sWNMYaIg");
    expect(url).toBe('https://sheets.googleapis.com/v4/spreadsheets/13fMXLCN-aqeAVo6YH9eNP1ojljFWB0ocRR3sWNMYaIg/values/dataset?key=AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY&alt=json');
    
    const gapi_data = gapi.json_data(jsonData);
    const {headers={}, entries={}, feed={}} = gapi_data;
    expect(feed[1].direccion).toBe("Mendoza 2419, Santa Fe Capital")
    expect(headers["filtro-provincia"]).toBe("Provincia");
    expect(headers["btn-ver"]).toBe("Ubicalo en el mapa");
    expect(entries[0]["filtro-provincia"]).toBe("Santa Fe");
    expect(entries[0]["btn-ver"]).toBe('/prueba-mapas-enfermedades-poco-frecuentes#0000001');
});