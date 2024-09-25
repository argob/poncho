const {secureHTML} = require('../src/js/utils/html');

test('Secure HTML', () => {
    expect(secureHTML('<h1>Hello world!</h1> <a href="#">Link</a>', ["a"]))
        .toBe('&lt;h1&gt;Hello world!&lt;/h1&gt; <a href="#">Link</a>');

    expect(secureHTML('<h1>Hello world!</h1> <a href="#">Link</a>', []))
        .toBe('&lt;h1&gt;Hello world!&lt;/h1&gt; &lt;a href="#"&gt;Link&lt;/a&gt;');
    
        expect(secureHTML('<h1>Hello world!</h1> <a href="#">Link</a>', ["*"]))
        .toBe('<h1>Hello world!</h1> <a href="#">Link</a>');

    expect(secureHTML('<< Texto en <strong>negrita</strong> >>', ["strong"]))
        .toBe('&lt;&lt; Texto en <strong>negrita</strong> &gt;&gt;');

    expect(secureHTML('<<strong>negrita</strong>>', ["strong"]))
        .toBe('&lt;<strong>negrita</strong>&gt;');

    expect(secureHTML('<<strong>negrita</strong>>', "texto")).toBeUndefined();
    expect(secureHTML(true, [])).toBe(true);
    expect(secureHTML(true, true)).toBe(true);
    expect(secureHTML()).toBeUndefined();

});