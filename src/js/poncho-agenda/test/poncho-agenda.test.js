process.env['NODE_DEV'] = 'TEST';
const PonchoAgenda = require("../src/js/poncho-agenda.js");
const jsonDataEntries = require('./resources/response');
const jsonDataHeaders = require('./resources/headers');


global.console = {
    ...console,
    log: jest.fn(),
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
};


const dateNow = () => {
    const date = (new Date);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return {date, year, month, day, format: `${day}/${month}/${year}`};
}


test("PonchoAgenda: _ponchoTableExists()", () => {
    const instance = (new PonchoAgenda({}));

    expect( instance._ponchoTableExists() ).toBeFalsy();
});


test("PonchoAgenda: _isPastDate()", () => {
    const _d = dateNow();
    const instance = (new PonchoAgenda({}));

    expect( instance._isPastDate( "10/03/1977" ) ).toBeTruthy();
    expect( instance._isPastDate( _d ) ).toBeFalsy();
});


test("PonchoAgenda: _currentDate()", () => {
    const _d = dateNow();
    const instance = (new PonchoAgenda({}));

    expect( instance._currentDate().format ).toBe( _d.format );
    expect( instance._currentDate().day ).toBe( _d.day );
});


test("PonchoAgenda: _isValidDateFormat()", () => {
    var error = jest.spyOn(global.console, 'error');

    const instance = (new PonchoAgenda({}));
    
    expect( instance._isValidDateFormat( "1/3/1977" ) ).toBeTruthy();
    expect( instance._isValidDateFormat( "10/03/1977" ) ).toBeTruthy();
    expect( instance._isValidDateFormat( "10/03/77" ) ).toBeFalsy();
    expect( instance._isValidDateFormat( "10-03-1977" ) ).toBeFalsy();
    expect( instance._isValidDateFormat( "0/0/77" ) ).toBeFalsy();
    expect( instance._isValidDateFormat( "" ) ).toBeFalsy();
    expect( instance._isValidDateFormat(  ) ).toBeFalsy();
    expect( instance._isValidDateFormat( null ) ).toBeFalsy();
});


test("PonchoAgenda: _dateParser()", () => {
    const instance = (new PonchoAgenda({}));
    expect( instance._dateParser( "9/5/2012" ).day ).toBe("09");
    expect( instance._dateParser( "9/10/2015" ).hours ).toBe("00");
    expect( instance._dateParser( "27/5/1977", "6:00:00" ).hours ).toBe("06");
    expect( instance._dateParser( "27/5/1977" ).year ).toBe("1977");
});


test("PonchoAgenda: Entries", () => {
    const instance = (new PonchoAgenda({}));

    const refactorEntries = instance._refactorEntries( jsonDataEntries );
    expect( refactorEntries.length ).toBe(146);

    const grouped = instance._groupByFingerprintAndCategory(refactorEntries);
    const groupedList = Object.values(grouped);
    const groupedEntry = Object.values(groupedList[0]);

    expect( groupedList.length ).toBe( 20 );
    expect( groupedEntry.length ).toBe( 5 );
    expect( groupedEntry[0][0].desde ).toBe( "05/03/2024" );
    
    // const jd = instance.groupedEntries(grouped);
    // expect( jd.length ).toBe( 96 );
});