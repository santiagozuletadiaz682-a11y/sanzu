const CELULARES = [
  { id:1, nombre:'Galaxy S24 Ultra',         marca:'Samsung',  precio:5200000, memoria:'12GB / 256GB',               pantalla:'6.8" Dynamic AMOLED 2X', bateria:'5000 mAh', camara:'200MP + 50MP + 12MP + 10MP', color:'Titanio Negro', stock:15, descripcion:'Buque insignia con S Pen integrado y pantalla de última generación.', img:'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop' },
  { id:2, nombre:'iPhone 15 Pro Max',        marca:'Apple',    precio:5600000, memoria:'8GB / 256GB',                pantalla:'6.7" Super Retina XDR',  bateria:'4441 mAh', camara:'48MP + 12MP + 12MP',       color:'Titanio Natural', stock:10, descripcion:'El iPhone más potente con chip A17 Pro y diseño de titanio.',     img:'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop' },
  { id:3, nombre:'Xiaomi 14 Ultra',          marca:'Xiaomi',   precio:4000000, memoria:'16GB / 512GB',               pantalla:'6.73" AMOLED LTPO',       bateria:'5000 mAh', camara:'50MP x4 Leica',          color:'Blanco', stock:20, descripcion:'Cámaras Leica profesionales y carga rápida de 90W.',              img:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop' },
  { id:4, nombre:'Galaxy A54 5G',            marca:'Samsung',  precio:1800000, memoria:'8GB / 128GB',                pantalla:'6.4" Super AMOLED',       bateria:'5000 mAh', camara:'50MP + 12MP + 5MP',      color:'Grafito', stock:30, descripcion:'Excelente relación calidad-precio con resistencia al agua.',     img:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop' },
  { id:5, nombre:'iPhone 15',                marca:'Apple',    precio:3200000, memoria:'6GB / 128GB',                pantalla:'6.1" Super Retina XDR',   bateria:'3349 mAh', camara:'48MP + 12MP',            color:'Rosa', stock:25, descripcion:'Dynamic Island y puerto USB-C en el iPhone estándar.',           img:'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop' },
  { id:6, nombre:'Redmi Note 13 Pro+',       marca:'Xiaomi',   precio:2000000, memoria:'12GB / 256GB',               pantalla:'6.67" AMOLED 1.5K',       bateria:'5000 mAh', camara:'200MP + 8MP + 2MP',      color:'Morado', stock:40, descripcion:'Cámara de 200MP y carga hiperrápida de 120W.',                  img:'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop' },
  { id:7, nombre:'Edge 40 Pro',              marca:'Motorola', precio:3200000, memoria:'12GB / 256GB',               pantalla:'6.67" POLED 165Hz',       bateria:'4600 mAh', camara:'50MP + 12MP + 50MP',     color:'Azul Lunar', stock:18, descripcion:'Pantalla 165Hz y Snapdragon 8 Gen 2 para gamers.',              img:'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop' },
  { id:8, nombre:'P60 Pro',                  marca:'Huawei',   precio:4400000, memoria:'12GB / 512GB',               pantalla:'6.67" OLED LTPO',         bateria:'4815 mAh', camara:'48MP + 48MP + 64MP',     color:'Perla Blanca', stock:12, descripcion:'Sistema de cámara XMAGE y carga inalámbrica de 50W.',           img:'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop' },
  { id:9, nombre:'Moto G84',                 marca:'Motorola', precio:1200000, memoria:'8GB / 256GB',                pantalla:'6.5" OLED 120Hz',         bateria:'5000 mAh', camara:'50MP + 8MP',             color:'Verde Marino', stock:50, descripcion:'Accesible, con gran autonomía y pantalla OLED.',                img:'https://images.unsplash.com/photo-1589496933738-f0b4765d9c9f?w=400&h=400&fit=crop' }
];

const MARCAS = ['Todas', ...new Set(CELULARES.map(c => c.marca))];
const fmt = v => new Intl.NumberFormat('es-CO', { style:'currency', currency:'COP', maximumFractionDigits:0 }).format(v);
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

let toast;
const state = { marca:'Todas', precio:'todos', busqueda:'', carrito:[] };

function guardarStock() {
  state.carrito.forEach(i => {
    const p = CELULARES.find(c => c.id === i.id);
    if (i.cantidad > p.stock) i.cantidad = p.stock;
  });
}

function showToast(msg, tipo='success') {
  const el = $('#toast');
  el.className = `toast position-fixed bottom-0 end-0 m-3 border-0 text-bg-${tipo}`;
  $('#toast-body').textContent = msg;
  toast.show();
}

function abrirModal(id) {
  const c = CELULARES.find(x => x.id === id);
  if (!c) return;
  $('#modal-img').src = c.img;
  $('#modal-img').alt = c.nombre;
  $('#modal-marca').textContent = c.marca;
  $('#modal-nombre').textContent = c.nombre;
  $('#modal-color').textContent = c.color;
  $('#modal-precio').textContent = fmt(c.precio);
  $('#modal-descripcion').textContent = c.descripcion;
  $('#modal-pantalla').textContent = c.pantalla;
  $('#modal-memoria').textContent = c.memoria;
  $('#modal-bateria').textContent = c.bateria;
  $('#modal-camara').textContent = c.camara;

  const btn = $('#modal-agregar-btn');
  btn.disabled = !c.stock;
  btn.textContent = c.stock ? 'Agregar al carrito' : 'Agotado';
  btn.onclick = () => { agregarAlCarrito(c.id); bootstrap.Modal.getInstance($('#modalProducto')).hide(); };

  const msg = encodeURIComponent(`Hola! Me interesa el ${c.nombre} a ${fmt(c.precio)}. ¿Está disponible?`);
  $('#modal-whatsapp-btn').href = `https://wa.me/573237311482?text=${msg}`;

  bootstrap.Modal.getOrCreateInstance($('#modalProducto')).show();
}

function renderFiltros() {
  $('#filtros-marca').innerHTML = MARCAS.map(m =>
    `<button class="btn marca-btn ${m===state.marca?'btn-dark active':'btn-outline-dark'} btn-sm fw-medium" data-marca="${m}">${m}</button>`
  ).join('');
  $$('#filtros-marca button').forEach(b =>
    b.addEventListener('click', () => { state.marca = b.dataset.marca; renderFiltros(); renderProductos(); })
  );
}

function getFiltrados() {
  const q = state.busqueda.trim().toLowerCase();
  let list = CELULARES.filter(c => {
    if (state.marca !== 'Todas' && c.marca !== state.marca) return false;
    if (q && !c.nombre.toLowerCase().includes(q) && !c.marca.toLowerCase().includes(q)) return false;
    if (state.precio === '0-2m' && c.precio > 2000000) return false;
    if (state.precio === '2m-4m' && (c.precio < 2000000 || c.precio > 4000000)) return false;
    if (state.precio === '4m+' && c.precio < 4000000) return false;
    return true;
  });
  return list;
}

function renderProductos() {
  const list = getFiltrados();
  $('#resultado-info').textContent = list.length
    ? `Mostrando ${list.length} de ${CELULARES.length} productos`
    : 'No se encontraron productos.';

  $('#productos').innerHTML = list.map(c => `
    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
      <div class="card card-producto h-100 shadow-sm">
        <div class="position-relative">
          <img src="${c.img}" class="card-img-top" alt="${c.nombre}" />
          <span class="position-absolute top-0 end-0 m-2 badge ${c.stock?'bg-success':'bg-danger'} rounded-pill">${c.stock?c.stock+' en stock':'Agotado'}</span>
          <span class="position-absolute top-0 start-0 m-2 badge bg-dark rounded-pill">${c.marca}</span>
        </div>
        <div class="card-body d-flex flex-column p-3">
          <h6 class="card-title fw-bold mb-1">${c.nombre}</h6>
          <p class="text-muted small mb-2">${c.color}</p>
          <div class="precio mb-3">${fmt(c.precio)}</div>
          <div class="mt-auto d-flex gap-2">
            <button class="btn btn-outline-dark btn-sm flex-grow-1 rounded-pill ver-detalle-btn" data-id="${c.id}">Ver detalle</button>
            <button class="btn btn-dark btn-sm rounded-pill agregar-btn" data-id="${c.id}" ${c.stock?'':'disabled'}>
              <i class="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  $$('.agregar-btn').forEach(b => b.addEventListener('click', () => agregarAlCarrito(+b.dataset.id)));
  $$('.ver-detalle-btn').forEach(b => b.addEventListener('click', () => abrirModal(+b.dataset.id)));
}

function agregarAlCarrito(id) {
  const prod = CELULARES.find(c => c.id === id);
  const item = state.carrito.find(i => i.id === id);
  if (item) {
    if (item.cantidad >= prod.stock) { showToast('No hay más stock', 'warning'); return; }
    item.cantidad++;
  } else {
    state.carrito.push({ id, cantidad:1 });
  }
  showToast(`${prod.nombre} agregado al carrito`);
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

function renderCarrito() {
  const totalItems = state.carrito.reduce((s,i) => s + i.cantidad, 0);
  const total = state.carrito.reduce((s,i) => { const p=CELULARES.find(c=>c.id===i.id); return s + p.precio*i.cantidad; }, 0);

  const countEl = $('#cart-count');
  countEl.textContent = totalItems;
  countEl.classList.toggle('d-none', !totalItems);

  if (!state.carrito.length) {
    $('#cart-items').innerHTML = `<div class="empty-cart"><div class="icon"><i class="bi bi-cart-x"></i></div><h6>Tu carrito está vacío</h6><p class="small text-muted">Agrega algunos celulares</p></div>`;
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
          <div class="fw-semibold mb-2" style="color:var(--accent)">${fmt(p.precio*i.cantidad)}</div>
          <div class="d-flex align-items-center gap-2">
            <div class="input-group input-group-sm" style="width:100px">
              <button class="btn btn-outline-secondary qty-minus" data-id="${p.id}" ${i.cantidad<=1?'disabled':''}>−</button>
              <span class="input-group-text bg-white">${i.cantidad}</span>
              <button class="btn btn-outline-secondary qty-plus" data-id="${p.id}" ${i.cantidad>=p.stock?'disabled':''}>+</button>
            </div>
            <button class="btn btn-sm btn-outline-danger ms-auto quitar-btn" data-id="${p.id}"><i class="bi bi-trash3"></i></button>
          </div>
        </div>
      </div>`;
  }).join('');

  $('#cart-summary').innerHTML = `
    <div class="d-flex justify-content-between small text-muted mb-1">
      <span>Subtotal (${totalItems} prod.)</span><span>${fmt(total)}</span>
    </div>
    <div class="d-flex justify-content-between small text-muted mb-3">
      <span>Envío</span><span class="text-success fw-semibold">Gratis</span>
    </div>
    <div class="d-flex justify-content-between fw-bold fs-5 mb-3">
      <span>Total</span><span style="color:var(--accent)">${fmt(total)}</span>
    </div>
    <button class="btn btn-success w-100 fw-bold py-2 rounded-pill" id="finalizar-btn">Finalizar compra</button>
    <button class="btn btn-sm btn-outline-secondary w-100 mt-2 rounded-pill" id="vaciar-btn">Vaciar carrito</button>`;

  $$('.qty-minus').forEach(b => b.addEventListener('click', () => cambiarCantidad(+b.dataset.id, -1)));
  $$('.qty-plus').forEach(b  => b.addEventListener('click', () => cambiarCantidad(+b.dataset.id, 1)));
  $$('.quitar-btn').forEach(b => b.addEventListener('click', () => { state.carrito = state.carrito.filter(i => i.id !== +b.dataset.id); renderCarrito(); }));
  $('#vaciar-btn').addEventListener('click', () => { state.carrito = []; renderCarrito(); });
  $('#finalizar-btn').addEventListener('click', () => {
    const t = state.carrito.reduce((s,i) => { const p=CELULARES.find(c=>c.id===i.id); return s+p.precio*i.cantidad; }, 0);
    showToast(`Gracias por tu compra! Total ${fmt(t)}`);
    setTimeout(() => { state.carrito = []; renderCarrito(); bootstrap.Offcanvas.getInstance($('#carrito')).hide(); }, 1500);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  toast = new bootstrap.Toast($('#toast'));
  renderFiltros();
  renderProductos();
  renderCarrito();

  $('#buscador').addEventListener('input', e => { state.busqueda = e.target.value; renderProductos(); });
  $('#filtro-precio').addEventListener('change', e => { state.precio = e.target.value; renderProductos(); });
});