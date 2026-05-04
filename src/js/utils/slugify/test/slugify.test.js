const {charMap} = require('../../char-map.js');
global.charMap = charMap;
const {slugify} = require('../slugify.js');



test('Slugify', () => {
    expect(slugify('El murciélago remolón')).toBe('el-murcielago-remolon');
    expect(slugify('Inglés Français')).toBe('ingles-francais');
    expect(slugify('Las niñas juegan')).toBe('las-ninas-juegan');
    expect(slugify('--Las [niñas]-. juegan.')).toBe('las-ninas-juegan');
});