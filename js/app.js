let productos = [];
let ventas = [];

function agregarProducto() {
  const nombre = document.getElementById('nombre').value;
  const stock = parseInt(document.getElementById('stock').value);
  const precio = parseFloat(document.getElementById('precio').value);

  productos.push({ nombre, stock, precio });
  mostrarInventario();
  verificarAlertas();
}

function mostrarInventario() {
  const contenedor = document.getElementById('inventario');
  contenedor.innerHTML = '';
  productos.forEach(p => {
    contenedor.innerHTML += `<div class="producto">${p.nombre} - Stock: ${p.stock} - S/ ${p.precio.toFixed(2)}</div>`;
  });
}

function registrarVenta() {
  const nombre = document.getElementById('nombreVenta').value;
  const cantidad = parseInt(document.getElementById('cantidadVenta').value);

  const producto = productos.find(p => p.nombre === nombre);
  if (!producto) {
    alert('Producto no encontrado');
    return;
  }

  if (producto.stock < cantidad) {
    alert('Stock insuficiente');
    return;
  }

  producto.stock -= cantidad;
  ventas.push({ nombre, cantidad, total: cantidad * producto.precio });
  alert(`Venta registrada. Total: S/ ${cantidad * producto.precio}`);

  mostrarInventario();
  verificarAlertas();
}

function verificarAlertas() {
  const alertas = document.getElementById('alertas');
  alertas.innerHTML = '';
  productos.forEach(p => {
    if (p.stock < 5) {
      alertas.innerHTML += `<div class="alerta">⚠️ Bajo stock de ${p.nombre} (Stock: ${p.stock})</div>`;
    }
  });
}

