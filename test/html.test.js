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

    expect(secureHTML('<svg onload=alert(1)>', ["*"]))
        .toBe("&lt;svg onload=alert(1)&gt;");

    expect(secureHTML('<svg onload=alert(1)>'))
        .toBe("&lt;svg onload=alert(1)&gt;");

    expect(secureHTML('<<strong>negrita</strong>>', "texto")).toBeUndefined();
    expect(secureHTML(true, [])).toBe(true);
    expect(secureHTML(true, true)).toBe(true);
    expect(secureHTML()).toBeUndefined();

});

test('Secure HTML - Image tag protection', () => {
    // Bloquear javascript: en src de imágenes
    expect(secureHTML('<img src="javascript:alert(1)">', ["img"]))
        .toBe('<img src="">');

    // Bloquear data: URIs peligrosos (no image/*)
    expect(secureHTML('<img src="data:text/html,<script>alert(1)</script>">', ["img"]))
        .toBe('<img src="">');

    // Permitir data:image/* que son seguros
    expect(secureHTML('<img src="data:image/png;base64,iVBORw0KG...">', ["img"]))
        .toBe('<img src="data:image/png;base64,iVBORw0KG...">');

    // Bloquear onerror en imágenes
    expect(secureHTML('<img src="test.jpg" onerror="alert(1)">', ["img"]))
        .toBe('<img src="test.jpg">');

    // Bloquear onload en imágenes
    expect(secureHTML('<img src="test.jpg" onload="alert(1)">', ["img"]))
        .toBe('<img src="test.jpg">');

    // Imagen segura con atributos válidos
    expect(secureHTML('<img src="test.jpg" alt="Test" width="100">', ["img"]))
        .toBe('<img src="test.jpg" alt="Test" width="100">');

    // Múltiples ataques combinados
    expect(secureHTML('<img src="javascript:alert(1)" onerror="alert(2)" onload="alert(3)">', ["img"]))
        .toBe('<img src="">');

    // Atributos sin comillas - onerror
    expect(secureHTML('<img src="x" onerror=alert(1)/>', ["img"]))
        .toBe('<img src="x">');

    // Atributos sin comillas - onload
    expect(secureHTML('<img src=x onload=alert(1)>', ["img"]))
        .toBe('<img src=x>');

    // Atributos sin comillas - javascript en src
    expect(secureHTML('<img src=javascript:alert(1)>', ["img"]))
        .toBe('<img src="">');

    // Atributos sin comillas - data URI peligroso
    expect(secureHTML('<img src=data:text/html,test>', ["img"]))
        .toBe('<img src="">');

    // Atributos sin comillas - data:image permitido
    expect(secureHTML('<img src=data:image/png;base64,abc>', ["img"]))
        .toBe('<img src=data:image/png;base64,abc>');
});

test('Secure HTML - Link attributes without quotes', () => {
    // Enlaces con javascript: sin comillas
    expect(secureHTML('<a href=javascript:alert(1)>Click</a>', ["a"]))
        .toBe('<a href="#">Click</a>');

    // Enlaces con data: sin comillas
    expect(secureHTML('<a href=data:text/html,test>Click</a>', ["a"]))
        .toBe('<a href="#">Click</a>');

    // Enlaces con onclick sin comillas
    expect(secureHTML('<a href="#" onclick=alert(1)>Click</a>', ["a"]))
        .toBe('<a href="#">Click</a>');

    // Enlaces seguros sin comillas
    expect(secureHTML('<a href=/page id=link>Click</a>', ["a"]))
        .toBe('<a href=/page id=link>Click</a>');
});