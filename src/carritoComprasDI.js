export class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

export class Carrito {

    constructor() {
        this.productos = [];
        this.cuponAplicado = null;
    }

    agregarProducto(nombre, precio, cantidad) {
        if (cantidad <= 0) {
            throw new Error('Cantidad invalida');
        }
        const producto = new Producto(nombre, precio, cantidad);
        this.productos.push(producto);
    }

    aplicarCupon(cupon) {
        if (this.cuponAplicado) {
            throw new Error('Ya se aplico un cupon');
        }

        if (cupon !== 'DESC10' && cupon !== 'DESC20') {
            throw new Error('Cupon invalido');
        }

        this.cuponAplicado = cupon;
    }

    calcularTotal() {
        const subtotal = this.productos.reduce((total, p) => total + (p.precio * p.cantidad), 0);
        
        let descuento = 0;
        if (this.cuponAplicado === 'DESC10') {
            descuento = subtotal * 0.10;
        } else if (this.cuponAplicado === 'DESC20') {
            descuento = subtotal * 0.20;
        }

        const subtotalConDescuento = subtotal - descuento;
        const impuesto = subtotalConDescuento * 0.19;
        const total = subtotalConDescuento + impuesto;
        
        return Number(total.toFixed(2));
    }

}
