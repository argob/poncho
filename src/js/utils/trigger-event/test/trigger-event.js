/**
 * @jest-environment jsdom
 */

// Si estás exportando la función, impórtala aquí:
import { triggerEvent } from '../trigger-event.js';



describe('triggerEvent()', () => {
    beforeEach(() => {
        // Activar temporizadores falsos antes de cada prueba
        jest.useFakeTimers();
        // Limpiar o preparar el DOM básico
        document.body.innerHTML = '<input id="my-input" type="text" />';
        // Espiar console.error para evitar ruidos o validar errores esperados
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        // Restaurar temporizadores y mocks después de cada prueba
        jest.useRealTimers();
        jest.restoreAllMocks();
    });

    test('debe cambiar el valor y disparar el evento usando un selector de cadena válido', () => {
        const input = document.getElementById('my-input');
        const eventHandler = jest.fn();
        input.addEventListener('input', eventHandler);

        triggerEvent('#my-input', 'nuevo valor', 'input', 50);

        // Avanzar el tiempo del setTimeout por 50ms
        jest.advanceTimersByTime(50);

        expect(input.value).toBe('nuevo valor');
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test('debe aceptar un objeto Element directamente', () => {
        const input = document.getElementById('my-input');
        const eventHandler = jest.fn();
        input.addEventListener('change', eventHandler);

        triggerEvent(input, 'otro valor', 'change', 100);

        // Avanzar el tiempo personalizado (100ms)
        jest.advanceTimersByTime(100);

        expect(input.value).toBe('otro valor');
        expect(eventHandler).toHaveBeenCalledTimes(1);
    });

    test('no debe modificar el valor del elemento si value es undefined', () => {
        const input = document.getElementById('my-input');
        input.value = 'valor inicial';
        const eventHandler = jest.fn();
        input.addEventListener('click', eventHandler);

        triggerEvent(input, undefined, 'click', 50);

        jest.advanceTimersByTime(50);

        expect(input.value).toBe('valor inicial'); // No cambia
        expect(eventHandler).toHaveBeenCalledTimes(1); // Pero el evento sí se dispara
    });

    test('debe registrar un error en consola si el selector no existe en el DOM', () => {
        triggerEvent('#elemento-fantasma', 'valor', 'input', 50);

        expect(console.error).toHaveBeenCalledWith(
            "[triggerEvent]", 
            "Debe incorporar un selector o un objeto Element."
        );
    });

    test('debe registrar un error en consola si el eventType es inválido o vacío', () => {
        const input = document.getElementById('my-input');
        triggerEvent(input, 'valor', '   ', 50);

        expect(console.error).toHaveBeenCalledWith(
            "[triggerEvent]", 
            "Debe incorporar un eventType válido."
        );
    });

    test('debe respetar y propagar las eventOptions proporcionadas', () => {
        const input = document.getElementById('my-input');
        const eventHandler = jest.fn();
        input.addEventListener('custom-event', eventHandler);

        triggerEvent(input, undefined, 'custom-event', 50, { bubbles: true, cancelable: true });

        jest.advanceTimersByTime(50);

        expect(eventHandler).toHaveBeenCalled();
        const dispatchedEvent = eventHandler.mock.calls[0][0];
        expect(dispatchedEvent.bubbles).toBe(true);
        expect(dispatchedEvent.cancelable).toBe(true);
    });
});