process.env['NODE_DEV'] = 'TEST';
const {calendar} = require('../src/js/national-holidays');

// isValidDate(year, month, day) 
test('isValidDate()', () => {
    expect(calendar.isValidDate(2025, 1, 1)).toBe(true);
    expect(calendar.isValidDate('2025', 1, 1)).toBe(true);
    expect(calendar.isValidDate(2025, 1, '1')).toBe(true);
    expect(calendar.isValidDate(2025, '01', 1)).toBe(true);
    expect(calendar.isValidDate(2025, 2, 31)).toBe(false);
    expect(calendar.isValidDate(2025, 2, 55)).toBe(false);
});


test('isValidEntry()', () => {
    const entryTest1 = {"date": "1/01/2025", "label": "Año Nuevo", "type": "inamovible"};
    expect(calendar.isValidEntry(entryTest1)).toBe(true);
    expect(calendar.isValidEntry({"date": "1/1/2025", "label": "sample", "type": "sample"})).toBe(true);
    expect(calendar.isValidEntry({"date": "01/1/2025", "label": "sample", "type": "sample"})).toBe(true);
    expect(calendar.isValidEntry({"date": "1/01/2025", "label": "sample", "type": "sample"})).toBe(true);
    
    const entryTest0 = {"date": 1, "label": "Año Nuevo", "type": "inamovible"};
    const err0 = () => calendar.isValidEntry(entryTest0);
    expect(err0).toThrow('El formato de la fecha es incorrecto: ' + JSON.stringify(entryTest0));

    const entryTest2 = {"date": "/01/2025", "label": "Año Nuevo", "type": "inamovible"};
    const err2 = () => calendar.isValidEntry(entryTest2);
    expect(err2).toThrow('El formato de la fecha es incorrecto: ' + JSON.stringify(entryTest2));
    
    const entryTest3 = {"date": "55/01/2025", "label": "Año Nuevo", "type": "inamovible"};
    const err3 = () => calendar.isValidEntry(entryTest3);
    expect(err3).toThrow('La fecha es incorrecta: ' + JSON.stringify(entryTest3));
    
    const entryTest4 = {"date": "01/01/2025", "label": "", "type": "inamovible"};
    const err4 = () => calendar.isValidEntry(entryTest4);
    expect(err4).toThrow('El label debe ser una cadena de texto y no puede estár vacío: ' + JSON.stringify(entryTest4));

    const entryTest5 = {"_date": "01/01/2025", "label": "", "type": "inamovible"};
    const err5 = () => calendar.isValidEntry(entryTest5);
    expect(err5).toThrow('La entrada tiene claves incorrectas o errores sintácticos: ' + JSON.stringify(entryTest5));
});


