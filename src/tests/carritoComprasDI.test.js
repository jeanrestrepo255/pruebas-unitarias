import { Carrito } from "../carritoComprasDI";

describe('Carrito de Compras con Descuentos e Impuestos', () => {

    test('subtotal correcto', () => {
        const carrito = new Carrito();
        carrito.agregarProducto('Producto A', 100, 2);
        carrito.agregarProducto('Producto B', 50, 1);
        
        const total = carrito.calcularTotal();
        expect(total).toBe(297.5);
    });

    test('aplicacion correcta de cupon', () => {
        const carrito = new Carrito();
        carrito.agregarProducto('Producto A', 100, 1);
        carrito.aplicarCupon('DESC10');
        
        const total = carrito.calcularTotal();
        expect(total).toBe(107.1);
    });

    test('error por multiples cupones', () => {
        const carrito = new Carrito();
        carrito.agregarProducto('Producto A', 100, 1);
        carrito.aplicarCupon('DESC10');
        
        expect(() => {
            carrito.aplicarCupon('DESC20');
        }).toThrow('Ya se aplico un cupon');
    });

    test('calculo correcto de impuesto', () => {
        const carrito = new Carrito();
        carrito.agregarProducto('Producto A', 100, 1);
        
        const total = carrito.calcularTotal();
        expect(total).toBe(119);
    });

    test('total final correcto', () => {
        const carrito = new Carrito();
        carrito.agregarProducto('Producto A', 100, 1);
        carrito.aplicarCupon('DESC20');
        
        const total = carrito.calcularTotal();
        expect(total).toBe(95.2);
    });

});
