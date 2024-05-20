const {flattenObject, flattenNestedObjects} = require('../src/js/utils/collections');

const DATA = {
    "id": 91,
    "nombre": "Barra Bonita - M\u00b4Bigu\u00e1",
    "latitud": -27.601313,
    "longitud": -54.843113,
    "pais": {
        "id": 85,
        "nombre": "Brasil"
    },
    "destino": null,
    "provincia": {
        "id": 13,
        "nombre": "Misiones",
        "attributos": {
            "color": "rojo",
            "largo": 100
        }
    },
    "estado": {
        "estado": "Cerrado",
        "demoras": {
            "tipo": 1
        },
        "motivo_demora": "",
        "motivo_cierre": "Otros",
        "tiempo_entrada": "00:10",
        "tiempo_salida": "00:10",
        "observaciones": "No opera desde Septiembre 2010",
        "ultima_actualizacion": "2024-03-24T18:13:43"
    },
    "origen": 1
};



test('flattenNestedObjects()', () => {
    const testData = flattenNestedObjects([DATA]);
    expect( Object.keys(testData[0])[12] ).toBe( "estado__demoras__tipo" );
    expect( Object.keys(testData[0])[0] ).toBe( "id" );
    expect( Object.keys(testData[0])[11] ).toBe( "estado__estado" );
});


test('flattenObject()', () => {
    const testData = flattenObject(DATA);
    expect( Object.keys(testData)[12] ).toBe( "estado__demoras__tipo" );
    expect( Object.keys(testData)[0] ).toBe( "id" );
    expect( Object.keys(testData)[11] ).toBe( "estado__estado" );
});