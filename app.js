const CELULARES = [
  {
    id: 1, nombre: 'Galaxy S24 Ultra', marca: 'Samsung', precio: 1299,
    memoria: '12GB RAM / 256GB', pantalla: '6.8" Dynamic AMOLED 2X',
    bateria: '5000 mAh', camara: '200MP + 50MP + 12MP + 10MP',
    color: 'Titanio Negro', stock: 15,
    descripcion: 'Buque insignia con S Pen integrado y pantalla de última generación.',
    img: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Samsung%20Galaxy%20S24%20Ultra%20smartphone%20black%20titanium%20product%20photo%20white%20background&image_size=square_hd'
  },
  {
    id: 2, nombre: 'iPhone 15 Pro Max', marca: 'Apple', precio: 1399,
    memoria: '8GB RAM / 256GB', pantalla: '6.7" Super Retina XDR',
    bateria: '4441 mAh', camara: '48MP + 12MP + 12MP',
    color: 'Titanio Natural', stock: 10,
    descripcion: 'El iPhone más potente con chip A17 Pro y diseño de titanio.',
    img: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=iPhone%2015%20Pro%20Max%20natural%20titanium%20smartphone%20product%20photo%20white%20background&image_size=square_hd'
  },
  {
    id: 3, nombre: 'Xiaomi 14 Ultra', marca: 'Xiaomi', precio: 999,
    memoria: '16GB RAM / 512GB', pantalla: '6.73" AMOLED LTPO',
    bateria: '5000 mAh', camara: '50MP x4 Leica',
    color: 'Blanco', stock: 20,
    descripcion: 'Cámaras Leica profesionales y carga rápida de 90W.',
    img: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Xiaomi%2014%20Ultra%20white%20smartphone%20Leica%20camera%20product%20photo%20white%20background&image_size=square_hd'
  },
  {
    id: 4, nombre: 'Galaxy A54 5G', marca: 'Samsung', precio: 449,
    memoria: '8GB RAM / 128GB', pantalla: '6.4" Super AMOLED',
    bateria: '5000 mAh', camara: '50MP + 12MP + 5MP',
    color: 'Grafito', stock: 30,
    descripcion: 'Excelente relación calidad-precio con resistencia al agua.',
    img: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Samsung%20Galaxy%20A54%20graphite%20smartphone%20product%20photo%20white%20background&image_size=square_hd'
  },
  {
    id: 5, nombre: 'iPhone 15', marca: 'Apple', precio: 799,
    memoria: '6GB RAM / 128GB', pantalla: '6.1" Super Retina XDR',
    bateria: '3349 mAh', camara: '48MP + 12MP',
    color: 'Rosa', stock: 25,
    descripcion: 'Dynamic Island y puerto USB-C en el iPhone estándar.',
    img: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=iPhone%2015%20pink%20smartphone%20product%20photo%20white%20background&image_size=square_hd'
  },
  {
    id: 6, nombre: 'Redmi Note 13 Pro+', marca: 'Xiaomi', precio: 499,
    memoria: '12GB RAM / 256GB', pantalla: '6.67" AMOLED 1.5K',
    bateria: '5000 mAh', camara: '200MP + 8MP + 2MP',
    color: 'Morado', stock: 40,
    descripcion: 'Cámara de 200MP y carga hiperrápida de 120W.',
    img: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Xiaomi%20Redmi%20Note%2013%20Pro%20Plus%20purple%20smartphone%20product%20photo%20white%20background&image_size=square_hd'
  },
  {
    id: 7, nombre: 'Edge 40 Pro', marca: 'Motorola', precio: 799,
    memoria: '12GB RAM / 256GB', pantalla: '6.67" POLED 165Hz',
    bateria: '4600 mAh', camara: '50MP + 12MP + 50MP',
    color: 'Azul Lunar', stock: 18,
    descripcion: 'Pantalla 165Hz y Snapdragon 8 Gen 2 para gamers.',
    img: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Motorola%20Edge%2040%20Pro%20blue%20smartphone%20product%20photo%20white%20background&image_size=square_hd'
  },
  {
    id: 8, nombre: 'P60 Pro', marca: 'Huawei', precio: 1099,
    memoria: '12GB RAM / 512GB', pantalla: '6.67" OLED LTPO',
    bateria: '4815 mAh', camara: '48MP + 48MP + 64MP',
    color: 'Perla Blanca', stock: 12,
    descripcion: 'Sistema de cámara XMAGE y carga inalámbrica de 50W.',
    img: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Huawei%20P60%20Pro%20pearl%20white%20smartphone%20product%20photo%20white%20background&image_size=square_hd'
  },
  {
    id: 9, nombre: 'Moto G84', marca: 'Motorola', precio: 299,
    memoria: '8GB RAM / 256GB', pantalla: '6.5" OLED 120Hz',
    bateria: '5000 mAh', camara: '50MP + 8MP',
    color: 'Verde Marino', stock: 50,
    descripcion: 'Accesible, con gran autonomía y pantalla OLED.',
    img: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Motorola%20Moto%20G84%20green%20smartphone%20product%20photo%20white%20background&image_size=square_hd'
  }
];

const MARCAS = ['Todas', ...Array.from(new Set(CELULARES.map(c => c.marca)))];

const state = {
  marca: 'Todas',
  precio: 'todos',
  orden: 'default',
  busqueda: '',
  carrito: []
};

const fmt = v => new Intl.NumberFormat('es-CO', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0
}).format(v);

const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

let toast;
function showToast(msg, tipo = 'success') {
  const el = $('#toast');
  el.classList.remove('text-bg-success', 'text-bg-danger', 'text-bg-warning');
  el.classList.add('text-bg-' + tipo);
  $('#toast-body').textContent = msg;
  toast.show();
}

function renderFiltros() {
  const box = $('#filtros-marca');
  box.innerHTML = MARCAS.map(m => `
    <button class="btn marca-btn ${m === state.marca ? 'btn-primary active' : 'btn-outline-primary'} btn-sm fw-medium" data-marca="${m}">
      ${m}
    </button>
  `).join('');
  $$('#filtros-marca button').forEach(b => {
    b.addEventListener('click', () => {
      state.marca = b.dataset.marca;
      renderFiltros();
      renderProductos();
    });
  });
}

function getFiltrados() {
  const q = state.busqueda.trim().toLowerCase();
  let list = CELULARES.filter(c => {
    if (state.marca !== 'Todas' && c.marca !== state.marca) return false;
    if (q && !(
      c.nombre.toLowerCase().includes(q) ||
      c.marca.toLowerCase().includes(q) ||
      c.color.toLowerCase().includes(q)
    )) return false;
    if (state.precio === '0-500'   && c.precio > 500)   return false;
    if (state.precio === '500-1000' && (c.precio < 500 || c.precio > 1000)) return false;
    if (state.precio === '1000+'    && c.precio < 1000) return false;
    return true;
  });
  switch (state.orden) {
    case 'precio-asc':  list.sort((a, b) => a.precio - b.precio); break;
    case 'precio-desc': list.sort((a, b) => b.precio - a.precio); break;
    case 'nombre':      list.sort((a, b) => a.nombre.localeCompare(b.nombre)); break;
  }
  return list;
}

function renderProductos() {
  const list = getFiltrados();
  $('#resultado-info').textContent = list.length
    ? `Mostrando ${list.length} de ${CELULARES.length} productos`
    : 'No se encontraron productos con esos filtros.';
  $('#productos').innerHTML = list.map(c => `
    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
      <div class="card card-producto h-100 shadow-sm rounded-4">
        <div class="position-relative">
          <img src="${c.img}" class="card-img-top" alt="${c.nombre}" />
          <span class="position-absolute top-2 end-2 badge ${c.stock ? 'bg-success' : 'bg-danger'} rounded-pill">
            ${c.stock ? c.stock + ' en stock' : 'Agotado'}
          </span>
          <span class="position-absolute top-2 start-2 badge bg-secondary rounded-pill">${c.marca}</span>
        </div>
        <div class="card-body d-flex flex-column p-3">
          <h5 class="card-title mb-1 fw-bold">${c.nombre}</h5>
          <p class="text-muted small mb-2">${c.color}</p>
          <div class="precio mb-3">${fmt(c.precio)}</div>
          <ul class="specs-list list-unstyled mb-3 flex-grow-1">
            <li class="mb-1">📱 ${c.pantalla}</li>
            <li class="mb-1">💾 ${c.memoria}</li>
            <li class="mb-1">🔋 ${c.bateria}</li>
            <li>📷 ${c.camara}</li>
          </ul>
          <p class="small text-muted mb-3">${c.descripcion}</p>
          <button
            class="btn btn-primary w-100 rounded-3 fw-semibold py-2 agregar-btn"
            data-id="${c.id}" ${c.stock ? '' : 'disabled'}
          >
            ${c.stock ? '🛒 Agregar al carrito' : 'Agotado'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
  $$('.agregar-btn').forEach(b =>
    b.addEventListener('click', () => agregarAlCarrito(Number(b.dataset.id)))
  );
}

function agregarAlCarrito(id) {
  const prod = CELULARES.find(c => c.id === id);
  const item = state.carrito.find(i => i.id === id);
  if (item) {
    if (item.cantidad >= prod.stock) {
      showToast('No hay más stock de este producto', 'warning');
      return;
    }
    item.cantidad++;
  } else {
    state.carrito.push({ id, cantidad: 1 });
  }
  showToast(`✅ ${prod.nombre} agregado al carrito`);
  renderCarrito();
}

function cambiarCantidad(id, delta) {
  const item = state.carrito.find(i => i.id === id);
  const prod = CELULARES.find(c => c.id === id);
  if (!item || !prod) return;
  const nueva = item.cantidad + delta;
  if (nueva < 1 || nueva > prod.stock) return;
  item.cantidad = nueva;
  renderCarrito();
}

function quitarDelCarrito(id) {
  state.carrito = state.carrito.filter(i => i.id !== id);
  renderCarrito();
}

function vaciarCarrito() {
  state.carrito = [];
  renderCarrito();
}

function finalizarCompra() {
  if (!state.carrito.length) return;
  const total = state.carrito.reduce((s, i) => {
    const p = CELULARES.find(c => c.id === i.id);
    return s + p.precio * i.cantidad;
  }, 0);
  showToast(`🎉 ¡Gracias por tu compra! Total ${fmt(total)}`, 'success');
  setTimeout(() => {
    state.carrito = [];
    renderCarrito();
    bootstrap.Offcanvas.getInstance($('#carrito')).hide();
  }, 1800);
}

function renderCarrito() {
  const totalItems = state.carrito.reduce((s, i) => s + i.cantidad, 0);
  const total = state.carrito.reduce((s, i) => {
    const p = CELULARES.find(c => c.id === i.id);
    return s + p.precio * i.cantidad;
  }, 0);
  const countEl = $('#cart-count');
  countEl.textContent = totalItems;
  countEl.classList.toggle('d-none', !totalItems);
  $('#cart-title-count').textContent = totalItems;

  if (!state.carrito.length) {
    $('#cart-items').innerHTML = `
      <div class="empty-cart">
        <div class="icon">📭</div>
        <h5>Tu carrito está vacío</h5>
        <p class="small">Agrega algunos celulares para comenzar</p>
      </div>`;
    $('#cart-summary').innerHTML = '';
    return;
  }

  $('#cart-items').innerHTML = state.carrito.map(i => {
    const p = CELULARES.find(c => c.id === i.id);
    return `
      <div class="d-flex gap-3 py-3 border-bottom">
        <img src="${p.img}" alt="${p.nombre}" class="cart-img" />
        <div class="flex-grow-1 min-w-0">
          <h6 class="mb-1 text-truncate">${p.nombre}</h6>
          <div class="text-primary fw-semibold mb-2">${fmt(p.precio * i.cantidad)}</div>
          <div class="d-flex align-items-center">
            <div class="qty-group input-group input-group-sm">
              <button class="btn btn-outline-secondary qty-minus" data-id="${p.id}" ${i.cantidad <= 1 ? 'disabled' : ''}>−</button>
              <span class="input-group-text bg-white">${i.cantidad}</span>
              <button class="btn btn-outline-secondary qty-plus" data-id="${p.id}" ${i.cantidad >= p.stock ? 'disabled' : ''}>+</button>
            </div>
            <button class="btn btn-sm btn-outline-danger ms-auto quitar-btn" data-id="${p.id}">🗑️</button>
          </div>
        </div>
      </div>`;
  }).join('');

  $('#cart-summary').innerHTML = `
    <button class="btn btn-sm btn-outline-secondary w-100 mb-3" id="vaciar-btn">Vaciar carrito</button>
    <div class="d-flex justify-content-between small text-muted mb-1">
      <span>Subtotal (${totalItems} productos)</span><span>${fmt(total)}</span>
    </div>
    <div class="d-flex justify-content-between small text-muted mb-3">
      <span>Envío</span><span class="text-success fw-semibold">Gratis 🚚</span>
    </div>
    <div class="d-flex justify-content-between fw-bold fs-5 mb-3">
      <span>Total</span><span class="text-primary">${fmt(total)}</span>
    </div>
    <button class="btn btn-success w-100 fw-bold py-2 rounded-3" id="finalizar-btn">
      💰 Finalizar compra
    </button>`;

  $$('.qty-minus').forEach(b => b.addEventListener('click', () => cambiarCantidad(+b.dataset.id, -1)));
  $$('.qty-plus').forEach(b  => b.addEventListener('click', () => cambiarCantidad(+b.dataset.id, +1)));
  $$('.quitar-btn').forEach(b  => b.addEventListener('click', () => quitarDelCarrito(+b.dataset.id)));
  $('#vaciar-btn').addEventListener('click', vaciarCarrito);
  $('#finalizar-btn').addEventListener('click', finalizarCompra);
}

document.addEventListener('DOMContentLoaded', () => {
  toast = new bootstrap.Toast($('#toast'));
  renderFiltros();
  renderProductos();
  renderCarrito();

  const b1 = $('#buscador-lg');
  const b2 = $('#buscador-sm');
  const onChange = e => {
    state.busqueda = e.target.value;
    if (b1 !== e.target) b1.value = state.busqueda;
    if (b2 !== e.target) b2.value = state.busqueda;
    renderProductos();
  };
  b1.addEventListener('input', onChange);
  b2.addEventListener('input', onChange);

  $('#filtro-precio').addEventListener('change', e => { state.precio = e.target.value; renderProductos(); });
  $('#ordenar').addEventListener('change',      e => { state.orden  = e.target.value; renderProductos(); });
});
