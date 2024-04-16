jest.mock('./googleTagManager', () => ({
    googleTagManager: () => ({
        id: '404634',
        tipo: 'noticia',
        padres: [404463],
        padre: 'Área Circular',
        raiz: 'Área Circular',
    }),
}));


test('extrae datos GTM de meta tags', () => {
    const datosExtraidos = extraerDatosGTM();
    expect(datosExtraidos.id).toBe('404634');
    expect(datosExtraidos.tipo).toBe('noticia');
    expect(datosExtraidos.padres).toEqual([404463]); // Usar toEqual para comparar arrays
    expect(datosExtraidos.padre).toBe('Área Circular');
    expect(datosExtraidos.raiz).toBe('Área Circular');
});