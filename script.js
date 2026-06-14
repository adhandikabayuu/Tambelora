const isAdminPage =
  window.location.pathname.toLowerCase().includes('tambeloraadmin');
// ═══ DATA STORE ═══
let db = {
  wisata: [
    { id:1, nama:'Pantai Pulau Piling', kategori:'Pantai', desc:'Pantai berpasir putih dengan formasi batu granit yang eksotis. Air biru jernih dan ombak tenang menjadikannya destinasi sempurna untuk bersantai.', emoji:'🏖️', status:'Aktif', color:'ocean',
      photo:'images/Wisata1.jpeg' },
    { id:2, nama:'Pulau Tambelan Besar', kategori:'Pulau', desc:'Pulau utama Kecamatan Tambelan dengan kekayaan alam bawah laut yang menakjubkan. Garis pantai panjang dan hutan tropis yang masih terjaga.', emoji:'🏝️', status:'Aktif', color:'green',
      photo:'images/Poto1.jpeg' },
    { id:3, nama:'Hutan Lancang', kategori:'Hutan', desc:'Hutan Lancang menawarkan suasana alam yang sejuk dengan pepohonan rindang dan jalur setapak yang membelah kawasan hutan. Keasrian lingkungan dan udara yang segar menjadikan lokasi ini cocok untuk menikmati wisata alam dan relaksasi.', emoji:'🌿', status:'Aktif', color:'teal',
      photo:'images/Wisata3.jpeg' },
    { id:4, nama:'Spot Snorkeling Pulau Benua', kategori:'Bahari', desc:'Keindahan terumbu karang warna-warni dengan ratusan spesies ikan tropis. Kejernihan air laut mencapai 15 meter sehingga sempurna untuk menyelam.', emoji:'', status:'Aktif', color:'coral',
      photo:'images/Wisata4.jpeg' },
    { id:5, nama:'Pantai Teluk Abik', kategori:'Pantai', desc:'Keunikan pasir berwarna merah jambu di pantai ini menjadi daya tarik tersendiri. Fenomena alam langka yang hanya ditemukan di beberapa tempat di dunia.', emoji:'🌅', status:'Aktif', color:'gold',
      photo:'images/Wisata2.jpeg' },
    { id:6, nama:'Gua Teluk Kupang', kategori:'Bahari', desc:'Gua alami di tebing karang yang hanya dapat diakses dengan perahu saat air surut. Stalaktit dan stalagmit membentuk pemandangan yang memukau.', emoji:'🦇', status:'Aktif', color:'purple',
      photo:'images/Wisata6.jpeg' },
    { id:2, nama:'Pulau Piling', kategori:'Pulau', desc:'Pulau Piling memiliki keindahan pesisir yang alami dengan perairan jernih dan pemandangan laut yang menawan. Keasrian lingkungan sekitarnya menjadikan pulau ini tempat yang nyaman untuk menikmati wisata bahari.', emoji:'🏝️', status:'Aktif', color:'green',
      photo:'images/Wisata5.jpeg' },
    { id:3, nama:'Hutan Gunung Kute', kategori:'Hutan', desc:'Hutan Gunung Kute merupakan kawasan hutan tropis yang masih alami dengan keanekaragaman flora dan fauna yang terjaga. Dari kawasan ini, pengunjung dapat menikmati panorama perbukitan hijau serta pemandangan laut yang menawan khas Kecamatan Tambelan.', emoji:'🌿', status:'Aktif', color:'teal',
      photo:'images/Wisata7.jpeg' },
  ],
  budaya: [
    { id:1, nama:'Sampan Kayuh', kategori:'Festival', desc:'Festival Sampan Kayuh merupakan tradisi tahunan masyarakat Tambelan yang menampilkan perlombaan perahu dayung tradisional. Acara ini menjadi ajang pelestarian budaya bahari sekaligus hiburan yang menarik perhatian masyarakat dan wisatawan.', emoji:'⛵', status:'Aktif', color:'ocean', tanggal:'15 Agustus 2025', photo:'images/event1.jpeg' },
    { id:2, nama:'Silat Pengantin Pukul 7', kategori:'Tradisi', desc:'Tradisi khas masyarakat Melayu Tambelan yang ditampilkan dalam prosesi pernikahan adat. Pertunjukan silat ini melambangkan penghormatan, keberanian, serta doa restu bagi kedua mempelai, yang dipadukan dengan keindahan busana adat dan nuansa budaya Melayu yang kental.', emoji:'🎎', status:'Aktif', color:'gold', tanggal:'Setiap Jumat', photo:'images/event2.jpeg' },
    { id:3, nama:'Zapin Laba-Laba', kategori:'Seni', desc:'Pameran kerajinan batik bermotif laut khas Tambelan karya para perajin lokal. Motif ikan, terumbu karang, dan ombak laut menjadi ciri khas batik Tambelan.', emoji:'🎨', status:'Aktif', color:'purple', tanggal:'Oktober 2025', photo:'images/event3.jpeg' },
  ],
  galeri: [
    { id:1, nama:'', kategori:'Alam', emoji:'', color:'ocean',
      photo:'images/poto1.jpeg' },
    { id:2, nama:'', kategori:'Budaya', emoji:'', color:'gold',
      photo:'images/poto2.jpeg' },
    { id:3, nama:'', kategori:'Bawah Laut', emoji:'', color:'teal',
      photo:'images/poto3.jpeg' },
    { id:4, nama:'', kategori:'Alam', emoji:'', color:'green',
      photo:'images/poto4.jpeg' },
    { id:5, nama:'', kategori:'Kerajinan', emoji:'', color:'purple',
      photo:'images/poto7.jpeg' },
    { id:6, nama:'', kategori:'Kuliner', emoji:'', color:'coral',
      photo:'images/poto6.jpeg' },
    { id:7, nama:'', kategori:'Budaya', emoji:'', color:'ocean',
      photo:'images/poto5.jpeg' },
    { id:8, nama:'', kategori:'Alam', emoji:'', color:'gold',
      photo:'images/poto8.jpeg' },
    { id:9, nama:'', kategori:'Budaya', emoji:'', color:'ocean',
      photo:'images/poto9.jpeg' },
    { id:10, nama:'', kategori:'Budaya', emoji:'', color:'ocean',
      photo:'images/poto10.jpeg' },
  ],
  kuliner: [
    { id:1, nama:'Bingke Berendam', jenis:'Kuliner Khas', harga:'', desc:'Kue tradisional khas Melayu yang memiliki tekstur lembut dan cita rasa manis yang khas. Terbuat dari campuran tepung, telur, dan santan, Bingke Berendam menjadi salah satu kuliner favorit masyarakat Tambelan.', emoji:'🐟', status:'Aktif', color:'ocean', photo:'images/Kuliner1.jpeg' },
    { id:2, nama:'Bubur Pedas', jenis:'Kuliner Khas', harga:'', desc:'Makanan tradisional Melayu yang terbuat dari campuran beras, rempah-rempah, dan berbagai sayuran. Rasanya gurih dengan aroma rempah yang kuat, menjadikannya hidangan khas yang kaya akan cita rasa.', emoji:'🍜', status:'Aktif', color:'gold', photo:'images/Kuliner2.jpeg' },
    { id:3, nama:'Lakse Kuah', jenis:'Kuliner Khas', harga:'', desc:'Hidangan berbahan dasar lakse yang disajikan dengan kuah gurih berbumbu rempah. Perpaduan tekstur lakse yang lembut dan kuah yang kaya rasa menjadikan makanan ini salah satu kuliner khas Tambelan yang banyak diminati.', emoji:'🫓', status:'Aktif', color:'teal', photo:'images/Kuliner3.jpeg' },
  ],
  penginapan: [
    { id:1, nama:'Penginapan Tambelan', tipe:'Homestay', harga:'Rp 150.000/malam', desc:'Penginapan nyaman dekat pantai dengan pemandangan laut langsung. Tersedia fasilitas AC, sarapan, dan layanan antar-jemput pelabuhan.', emoji:'', status:'Aktif', kamar:'8 Kamar', color:'ocean', photo:'images/Penginapan1.jpeg' },
    { id:2, nama:'Penginapan Aek Simbat', tipe:'Homestay', harga:'Rp 100.000/malam', desc:'Menginap bersama keluarga lokal dan rasakan kehidupan masyarakat Tambelan yang ramah. Sarapan tradisional dan pemandu wisata gratis.', emoji:'', status:'Aktif', kamar:'3 Kamar', color:'green', photo:'images/Penginapan1.jpeg' },
  ],
  ulasan: [
{
  id: 1,
  nama: 'Rina Oktaviani',
  rating: 5,
  komentar: 'Pantai Pulau Piling memiliki pemandangan yang sangat indah dan masih alami. Air lautnya jernih serta suasananya tenang, cocok untuk menikmati liburan bersama keluarga. Saya berharap kebersihan pantai ini terus dijaga.',
  wisata: 'Pantai Pulau Piling',
  tanggal: '15 Januari 2026',
  color: '#1a6faf'
},
{
  id: 2,
  nama: 'Andi Saputra',
  rating: 4,
  komentar: 'Saya berkesempatan mengunjungi Spot Snorkeling Pulau Benua dan cukup terkesan dengan keindahan bawah lautnya. Terumbu karang masih terlihat baik dan banyak ikan yang dapat dilihat dengan jelas. Akses menuju lokasi cukup menantang tetapi sepadan dengan pengalaman yang didapat.',
  wisata: 'Spot Snorkeling Pulau Benua',
  tanggal: '8 Maret 2026',
  color: '#16a34a'
},
{
  id: 3,
  nama: 'Nur Aisyah',
  rating: 5,
  komentar: 'Festival Sampan Kayuh menjadi pengalaman yang sangat menarik bagi saya. Acara berlangsung meriah dan masyarakat setempat sangat antusias. Tradisi seperti ini menjadi daya tarik budaya yang membuat Tambelan berbeda dari daerah lain.',
  wisata: 'Sampan Kayuh',
  tanggal: '22 Mei 2026',
  color: '#c0392b'
}
]
};

let nextId = { wisata:7, budaya:5, galeri:9, kuliner:5, penginapan:4, ulasan:5 };
let currentModal = null, editingId = null, deleteTarget = null;
let activeFilter = { wisata:'Semua', budaya:'Semua' };

// ═══ NAVIGATION ═══
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══ PHOTO HELPERS ═══
function destPhoto(d, height) {
  const h = height || 200;
  if (d.photo) {
    return `<div class="dest-photo" style="height:${h}px">
      <img src="${d.photo}" alt="${d.nama}" loading="lazy" onerror="this.parentElement.innerHTML=photoPlaceholder(d)">
      <div class="dest-overlay"></div>
      <div class="dest-cat-badge">${d.kategori}</div>
      <div class="dest-status-dot"></div>
    </div>`;
  }
  return `<div class="dest-photo-placeholder ${d.color||'ocean'}" style="height:${h}px">
    ${d.emoji}
    <div class="dest-cat-badge" style="position:absolute;top:12px;left:12px">${d.kategori}</div>
  </div>`;
}
function photoPlaceholder(d) {
  return `<div class="dest-photo-placeholder ${d.color||'ocean'}" style="height:100%;font-size:56px;display:flex;align-items:center;justify-content:center">${d.emoji}</div>`;
}

function galleryPhoto(d) {
  if (d.photo) {
    return `<img src="${d.photo}" alt="${d.nama}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="g-thumb-placeholder ${d.color||'ocean'}" style="display:none">${d.emoji}</div>`;
  }
  return `<div class="g-thumb-placeholder ${d.color||'ocean'}">${d.emoji}</div>`;
}

// color class map
function cc(c) { return c||'ocean'; }

// ═══ RENDER WISATA ═══
function renderWisata(target, limit) {
  let data = db.wisata;
  if (activeFilter.wisata !== 'Semua') data = data.filter(d => d.kategori === activeFilter.wisata);
  if (limit) data = data.slice(0, limit);
  const el = document.getElementById(target);
  if (!el) return;
  if (!data.length) { el.innerHTML = emptyState('🏝️','Belum ada destinasi wisata'); return; }
  el.innerHTML = data.map(d => `
    <div class="dest-card">
      ${destPhoto(d)}
      <div class="dest-body">
        <div class="dest-name">${d.nama}</div>
        <div class="dest-desc">${d.desc}</div>
        <div class="dest-meta">
          <span class="tag tag-blue">${d.kategori}</span>
          <span class="badge badge-active">${d.status}</span>
        </div>
      </div>
      ${target !== 'beranda-wisata-cards' ? `
      <div class="dest-actions">
        ${isAdminPage ? `
<div class="action-buttons">
  <button class="btn btn-ghost btn-sm" onclick="editItem('wisata',${d.id})">
    <i class="fa fa-edit"></i> Edit
  </button>

  <button class="btn btn-danger btn-sm" onclick="confirmDelete('wisata',${d.id})">
    <i class="fa fa-trash"></i>
  </button>
</div>
` : ''}
      </div>` : ''}
    </div>`).join('');
}

// ═══ RENDER BUDAYA ═══
function renderBudaya(target, limit) {
  let data = db.budaya;
  if (activeFilter.budaya !== 'Semua') data = data.filter(d => d.kategori === activeFilter.budaya);
  if (limit) data = data.slice(0, limit);
  const el = document.getElementById(target);
  if (!el) return;
  if (!data.length) { el.innerHTML = emptyState('🎭','Belum ada event budaya'); return; }
  el.innerHTML = data.map(d => `
    <div class="dest-card">
      ${destPhoto(d)}
      <div class="dest-body">
        <div class="dest-name">${d.nama}</div>
        <div class="dest-desc">${d.desc}</div>
        <div class="dest-meta">
          <span class="tag tag-blue">${d.kategori}</span>
          <span class="tag tag-gold"><i class="fa fa-calendar"></i> ${d.tanggal}</span>
          <span class="badge badge-active">${d.status}</span>
        </div>
      </div>
      ${target !== 'beranda-budaya-cards' ? `
      ${isAdminPage ? `
<div class="dest-actions">
  <button class="btn btn-ghost btn-sm" onclick="editItem('budaya',${d.id})">
    <i class="fa fa-edit"></i> Edit
  </button>
  <button class="btn btn-danger btn-sm" onclick="confirmDelete('budaya',${d.id},'${d.nama}')">
    <i class="fa fa-trash"></i>
  </button>
</div>
` : ''}
      </div>` : ''}
    </div>`).join('');
}

// ═══ RENDER GALERI ═══
function renderGaleri(target, limit) {
  const tgt = target || 'galeri-grid';
  let data = db.galeri;
  if (limit) data = data.slice(0, limit);
  const el = document.getElementById(tgt);
  if (!el) return;
  if (!data.length) { el.innerHTML = emptyState('🖼️','Belum ada foto galeri'); return; }
  const wideIdx = [0, 4]; // indices that go wide
  el.innerHTML = data.map((d, i) => `
    <div class="gallery-item${wideIdx.includes(i) ? ' wide' : ''}">
      ${galleryPhoto(d)}
      <div class="gallery-overlay">
        <strong>${d.nama}</strong>
        <span>${d.kategori}</span>
       ${tgt === 'galeri-grid' && isAdminPage ? `
<button class="btn btn-danger btn-sm" style="margin-top:6px"
onclick="confirmDelete('galeri',${d.id},'${d.nama}')">
<i class="fa fa-trash"></i> Hapus
</button>
` : ''}
      </div>
    </div>`).join('');
}

// ═══ RENDER KULINER ═══
function renderKuliner() {
  const el = document.getElementById('kuliner-list');
  if (!el) return;
  if (!db.kuliner.length) { el.innerHTML = emptyState('🍽️','Belum ada data kuliner'); return; }
  el.innerHTML = db.kuliner.map(d => `
    <div class="dest-card">
      ${destPhoto({...d, kategori:d.jenis})}
      <div class="dest-body">
        <div class="dest-name">${d.nama}</div>
        <div class="dest-desc">${d.desc}</div>
        <div class="dest-meta">
          <span class="tag tag-blue">${d.jenis}</span>
          <span class="tag tag-gold">${d.harga}</span>
          <span class="badge badge-active">${d.status}</span>
        </div>
      </div>
      ${isAdminPage ? `
<div class="dest-actions">
  <button class="btn btn-ghost btn-sm" onclick="editItem('kuliner',${d.id})"><i class="fa fa-edit"></i> Edit</button>
  <button class="btn btn-danger btn-sm" onclick="confirmDelete('kuliner',${d.id},'${d.nama}')"><i class="fa fa-trash"></i></button>
</div>
` : ''}
    </div>`).join('');
}

// ═══ RENDER PENGINAPAN ═══
function renderPenginapan() {
  const el = document.getElementById('penginapan-list');
  if (!el) return;
  if (!db.penginapan.length) { el.innerHTML = emptyState('🏨','Belum ada data penginapan'); return; }
  el.innerHTML = db.penginapan.map(d => `
    <div class="dest-card">
      ${destPhoto({...d, kategori:d.tipe})}
      <div class="dest-body">
        <div class="dest-name">${d.nama}</div>
        <div class="dest-desc">${d.desc}</div>
        <div class="dest-meta">
          <span class="tag tag-blue">${d.tipe}</span>
          <span class="tag tag-green">${d.kamar}</span>
          <span class="tag tag-gold">${d.harga}</span>
          <span class="badge badge-active">${d.status}</span>
        </div>
      </div>
      ${isAdminPage ? `
<div class="dest-actions">
  <button class="btn btn-ghost btn-sm" onclick="editItem('penginapan',${d.id})">
    <i class="fa fa-edit"></i> Edit
  </button>

  <button class="btn btn-danger btn-sm" onclick="confirmDelete('penginapan',${d.id},'${d.nama}')">
    <i class="fa fa-trash"></i>
  </button>
</div>
` : ''}
    </div>`).join('');
}

// ═══ RENDER ULASAN ═══
function renderUlasan() {
  const el = document.getElementById('ulasan-list');
  if (!el) return;
  if (!db.ulasan.length) { el.innerHTML = emptyState('⭐','Belum ada ulasan'); return; }
  el.innerHTML = db.ulasan.map(d => `
    <div class="review-card" style="border-left-color:${d.color}">
      <div class="review-header">
        <div class="review-avatar" style="background:${d.color}">${d.nama[0]}</div>
        <div>
          <div class="review-name">${d.nama}</div>
          <div class="review-meta">📍 ${d.wisata} &bull; ${d.tanggal}</div>
          <div class="stars">${'★'.repeat(d.rating)}${'☆'.repeat(5-d.rating)}</div>
        </div>
        ${isAdminPage ? `
<div style="margin-left:auto;display:flex;gap:6px">
  <button class="btn btn-ghost btn-sm" onclick="editItem('ulasan',${d.id})">
    <i class="fa fa-edit"></i>
  </button>

  <button class="btn btn-danger btn-sm" onclick="confirmDelete('ulasan',${d.id},'ulasan dari ${d.nama}')">
    <i class="fa fa-trash"></i>
  </button>
</div>
` : ''}
      </div>
      <div class="review-text">"${d.komentar}"</div>
    </div>`).join('');

  const dist = [0,0,0,0,0];
  db.ulasan.forEach(u => dist[u.rating-1]++);
  const rdEl = document.getElementById('rating-dist');
  if (rdEl) rdEl.innerHTML = [5,4,3,2,1].map(r => {
    const count = dist[r-1];
    const pct = db.ulasan.length ? Math.round(count/db.ulasan.length*100) : 0;
    return `<div class="rating-bar">
      <div class="rb-star">${r}★</div>
      <div class="rb-track"><div class="rb-fill" style="width:${pct}%"></div></div>
      <div class="rb-count">${count}</div>
    </div>`;
  }).join('');
}

// ═══ RENDER DASHBOARD ═══
function renderDashboard() {
  const allData = [
    ...db.wisata.map(d => ({...d, modul:'Wisata'})),
    ...db.budaya.map(d => ({...d, modul:'Budaya'})),
    ...db.kuliner.map(d => ({...d, modul:'Kuliner', kategori:d.jenis})),
    ...db.penginapan.map(d => ({...d, modul:'Penginapan', kategori:d.tipe})),
    ...db.galeri.map(d => ({...d, modul:'Galeri'})),
    ...db.ulasan.map(d => ({...d, kategori:'Review', modul:'Ulasan', status:'Aktif'})),
  ];
  const search = (document.getElementById('search-input')||{}).value || '';
  const filtered = allData.filter(d => !search || d.nama.toLowerCase().includes(search.toLowerCase()) || d.modul.toLowerCase().includes(search.toLowerCase()));
  const tbody = document.getElementById('dashboard-table');
  if (tbody) tbody.innerHTML = filtered.map((d,i) => `
    <tr>
      <td style="color:var(--text-lt);font-size:12px">${i+1}</td>
      <td style="font-weight:600">${d.nama}</td>
      <td><span class="tag tag-blue">${d.kategori||'-'}</span></td>
      <td><span class="tag tag-gold">${d.modul}</span></td>
      <td><span class="badge badge-active">${d.status||'Aktif'}</span></td>
      <td><div class="td-actions">
        ${isAdminPage ? `
<button class="btn btn-ghost btn-sm" onclick="editItem('${d.modul.toLowerCase()}',${d.id})">
  <i class="fa fa-edit"></i>
</button>

<button class="btn btn-danger btn-sm" onclick="confirmDelete('${d.modul.toLowerCase()}',${d.id},'${d.nama}')">
  <i class="fa fa-trash"></i>
</button>
` : ''}
</div></td>
    </tr>`).join('') || `<tr><td colspan="6" style="text-align:center;padding:32px;color:var(--text-lt)">Tidak ada data ditemukan</td></tr>`;

  const ids = ['d-wisata','d-budaya','d-ulasan','d-total'];
  const vals = [db.wisata.length, db.budaya.length, db.ulasan.length, allData.length];
  ids.forEach((id,i) => { const el = document.getElementById(id); if(el) el.textContent = vals[i]; });

  const months = ['Jan','Feb','Mar','Apr','Mei','Jun'];
  const mVals = [45,62,38,78,55,90];
  const mx = Math.max(...mVals);
  const bc = document.getElementById('bar-chart');
  if (bc) bc.innerHTML = months.map((m,i) => `
    <div class="bar-col">
      <div class="bar-fill" style="height:${Math.round(mVals[i]/mx*100)}px"></div>
      <div class="bar-label">${m}</div>
    </div>`).join('');

  const cats = { Pantai:db.wisata.filter(w=>w.kategori==='Pantai').length, Pulau:db.wisata.filter(w=>w.kategori==='Pulau').length, Hutan:db.wisata.filter(w=>w.kategori==='Hutan').length, Bahari:db.wisata.filter(w=>w.kategori==='Bahari').length };
  const catColors = { Pantai:'var(--blue)', Pulau:'var(--gold)', Hutan:'#16a34a', Bahari:'#dc2626' };
  const cMax = Math.max(...Object.values(cats), 1);
  const kc = document.getElementById('kategori-chart');
  if (kc) kc.innerHTML = Object.entries(cats).map(([k,v]) => `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
      <div style="width:64px;font-size:12px;color:var(--text-lt)">${k}</div>
      <div style="flex:1;height:8px;background:var(--gray-100);border-radius:4px;overflow:hidden">
        <div style="height:100%;width:${Math.round(v/cMax*100)}%;background:${catColors[k]};border-radius:4px;transition:.5s"></div>
      </div>
      <div style="width:18px;font-size:12px;color:var(--text-lt);text-align:right">${v}</div>
    </div>`).join('');
}

// ═══ RENDER STATS ═══
function renderStats() {
  const m = { 's-wisata': db.wisata.length, 's-budaya': db.budaya.length, 's-ulasan': db.ulasan.length, 's-kuliner': db.kuliner.length + db.penginapan.length };
  Object.entries(m).forEach(([id, v]) => { const el = document.getElementById(id); if(el) el.textContent = v; });
}

function emptyState(icon, text) {
  return `<div class="empty-state"><div class="e-icon">${icon}</div><h4>${text}</h4><p>Klik tombol "Tambah" untuk menambahkan data baru.</p></div>`;
}

function renderAll() {
  renderStats();
  renderWisata('beranda-wisata-cards', 3);
  renderBudaya('beranda-budaya-cards', 4);
  renderGaleri('beranda-galeri', 6);
  renderWisata('wisata-cards');
  renderBudaya('budaya-cards');
  renderGaleri('galeri-grid');
  renderKuliner();
  renderPenginapan();
  renderUlasan();
  renderDashboard();
}

// ═══ FILTER ═══
function filterCards(type, value, el) {
  activeFilter[type] = value;
  document.querySelectorAll(`#chip-${type} .chip`).forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  if (type === 'wisata') renderWisata('wisata-cards');
  if (type === 'budaya') renderBudaya('budaya-cards');
}
function searchTable() { renderDashboard(); }

// ═══ MODAL ═══
const forms = {
  wisata: { icon:'🏝️', title:'Destinasi Wisata', fields:`
    <div class="form-row"><label>Nama Destinasi *</label><input id="f-nama" placeholder="cth. Pantai Batu Kasah"></div>
    <div class="form-2col">
      <div class="form-row"><label>Kategori *</label><select id="f-kategori"><option>Pantai</option><option>Pulau</option><option>Hutan</option><option>Bahari</option></select></div>
      <div class="form-row"><label>Emoji</label><input id="f-emoji" placeholder="🏖️" maxlength="4"></div>
    </div>
    <div class="form-row">
  <label>Deskripsi *</label>
  <textarea id="f-desc" rows="3" placeholder="Deskripsi destinasi..."></textarea>
</div>

<div class="form-row">
  <label>Foto Destinasi</label>

  <input
    type="file"
    id="f-photo"
    accept="image/*"
  >

  <img
    id="preview-photo"
    style="
      display:none;
      max-width:250px;
      margin-top:10px;
      border-radius:12px;
    "
  >
</div>
    <div class="form-2col">
      <div class="form-row"><label>Warna Kartu</label><select id="f-color"><option value="ocean">Biru Laut</option><option value="gold">Emas</option><option value="coral">Coral</option><option value="green">Hijau</option><option value="purple">Ungu</option><option value="teal">Teal</option></select></div>
      <div class="form-row"><label>Status</label><select id="f-status"><option>Aktif</option><option>Tidak Aktif</option></select></div>
    </div>` },
  budaya: { icon:'🎭', title:'Event Budaya', fields:`
    <div class="form-row"><label>Nama Event *</label><input id="f-nama" placeholder="cth. Festival Belayar"></div>
    <div class="form-2col">
      <div class="form-row"><label>Kategori *</label><select id="f-kategori"><option>Festival</option><option>Tradisi</option><option>Seni</option><option>Kuliner</option></select></div>
      <div class="form-row"><label>Emoji</label><input id="f-emoji" placeholder="🎉" maxlength="4"></div>
    </div>
    <div class="form-row"><label>Tanggal / Jadwal *</label><input id="f-tanggal" placeholder="cth. 15 Agustus 2025"></div>
    <div class="form-row"><label>Deskripsi *</label><textarea id="f-desc" rows="3" placeholder="Deskripsi event..."></textarea></div>
    <div class="form-2col">
      <div class="form-row"><label>Warna</label><select id="f-color"><option value="ocean">Biru Laut</option><option value="gold">Emas</option><option value="coral">Coral</option><option value="green">Hijau</option><option value="purple">Ungu</option><option value="teal">Teal</option></select></div>
      <div class="form-row"><label>Status</label><select id="f-status"><option>Aktif</option><option>Tidak Aktif</option></select></div>
    </div>` },
  galeri: { icon:'🖼️', title:'Upload Foto Galeri', fields:`
    <div class="form-row"><label>Nama Foto *</label><input id="f-nama" placeholder="cth. Sunrise Pantai Batu Kasah"></div>
    <div class="form-2col">
      <div class="form-row"><label>Kategori</label><select id="f-kategori"><option>Alam</option><option>Budaya</option><option>Bawah Laut</option><option>Kerajinan</option><option>Kuliner</option></select></div>
      <div class="form-row"><label>Emoji</label><input id="f-emoji" placeholder="🌄" maxlength="4"></div>
    </div>
    <div class="form-row"><label>Warna Background</label><select id="f-color"><option value="ocean">Biru Laut</option><option value="gold">Emas</option><option value="coral">Coral</option><option value="green">Hijau</option><option value="purple">Ungu</option><option value="teal">Teal</option></select></div>` },
  kuliner: { icon:'🍽️', title:'Kuliner Khas', fields:`
    <div class="form-row"><label>Nama Kuliner *</label><input id="f-nama" placeholder="cth. Ikan Asam Pedas"></div>
    <div class="form-2col">
      <div class="form-row"><label>Jenis</label><select id="f-jenis"><option>Masakan Utama</option><option>Mie & Noodle</option><option>Jajanan Pasar</option><option>Camilan</option><option>Minuman</option></select></div>
      <div class="form-row"><label>Emoji</label><input id="f-emoji" placeholder="🐟" maxlength="4"></div>
    </div>
    <div class="form-row"><label>Rentang Harga</label><input id="f-harga" placeholder="cth. Rp 25.000 – 40.000"></div>
    <div class="form-row"><label>Deskripsi</label><textarea id="f-desc" rows="3" placeholder="Deskripsi kuliner..."></textarea></div>
    <div class="form-2col">
      <div class="form-row"><label>Warna Kartu</label><select id="f-color"><option value="ocean">Biru Laut</option><option value="gold">Emas</option><option value="coral">Coral</option><option value="green">Hijau</option><option value="purple">Ungu</option><option value="teal">Teal</option></select></div>
      <div class="form-row"><label>Status</label><select id="f-status"><option>Aktif</option><option>Tidak Aktif</option></select></div>
    </div>` },
  penginapan: { icon:'🏨', title:'Penginapan', fields:`
    <div class="form-row"><label>Nama Penginapan *</label><input id="f-nama" placeholder="cth. Penginapan Bahari Indah"></div>
    <div class="form-2col">
      <div class="form-row"><label>Tipe</label><select id="f-tipe"><option>Guest House</option><option>Homestay</option><option>Villa</option><option>Hotel</option></select></div>
      <div class="form-row"><label>Jumlah Kamar</label><input id="f-kamar" placeholder="cth. 8 Kamar"></div>
    </div>
    <div class="form-2col">
      <div class="form-row"><label>Harga per Malam</label><input id="f-harga" placeholder="cth. Rp 150.000/malam"></div>
      <div class="form-row"><label>Emoji</label><input id="f-emoji" placeholder="🏠" maxlength="4"></div>
    </div>
    <div class="form-row"><label>Deskripsi</label><textarea id="f-desc" rows="3" placeholder="Deskripsi penginapan..."></textarea></div>
    <div class="form-2col">
      <div class="form-row"><label>Warna Kartu</label><select id="f-color"><option value="ocean">Biru Laut</option><option value="gold">Emas</option><option value="coral">Coral</option><option value="green">Hijau</option><option value="purple">Ungu</option><option value="teal">Teal</option></select></div>
      <div class="form-row"><label>Status</label><select id="f-status"><option>Aktif</option><option>Tidak Aktif</option></select></div>
    </div>` },
  ulasan: { icon:'⭐', title:'Ulasan & Komentar', fields:`
    <div class="form-row"><label>Nama Pengulas *</label><input id="f-nama" placeholder="Nama Anda"></div>
    <div class="form-2col">
      <div class="form-row"><label>Destinasi / Event</label><input id="f-wisata" placeholder="cth. Pantai Batu Kasah"></div>
      <div class="form-row"><label>Rating *</label><select id="f-rating"><option value="5">★★★★★ (5)</option><option value="4">★★★★☆ (4)</option><option value="3">★★★☆☆ (3)</option><option value="2">★★☆☆☆ (2)</option><option value="1">★☆☆☆☆ (1)</option></select></div>
    </div>
    <div class="form-row"><label>Komentar *</label><textarea id="f-komentar" rows="4" placeholder="Tulis pengalaman Anda..."></textarea></div>` },
};

function openModal(type, data) {
  currentModal = type;
  editingId = data ? data.id : null;

  const cfg = forms[type];

  document.getElementById('modal-icon').textContent = cfg.icon;
  document.getElementById('modal-title').textContent =
      (editingId ? 'Edit ' : 'Tambah ') + cfg.title;

  document.getElementById('modal-body').innerHTML = cfg.fields;

  if (data) {
    ['nama','kategori','emoji','desc','color','status','tanggal','jenis','harga','tipe','kamar','wisata','komentar','rating']
    .forEach(f => {
      const el = document.getElementById('f-' + f);
      if (el && data[f] !== undefined) el.value = data[f];
    });
  }

  // PREVIEW FOTO
  const input = document.getElementById('f-photo');
  const preview = document.getElementById('preview-photo');

  if (input) {
    input.addEventListener('change', function () {

      const file = this.files[0];

      if (!file) return;

      const reader = new FileReader();

      reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
      };

      reader.readAsDataURL(file);

    });
  }

  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('open');
  currentModal = null; editingId = null;
}

function saveModal() {
  const type = currentModal;
  const g = id => { const el = document.getElementById('f-' + id); return el ? el.value.trim() : ''; };
  if (!g('nama')) { showToast('Nama tidak boleh kosong!', 'error'); return; }
  let obj = {};
  if (type === 'wisata') {
  if (type === 'wisata') {

  if (!g('desc')) {
    showToast('Deskripsi tidak boleh kosong!', 'error');
    return;
  }

  const preview = document.getElementById('preview-photo');

  obj = {
    nama: g('nama'),
    kategori: g('kategori'),
    emoji: g('emoji') || '🏝️',
    desc: g('desc'),
    color: g('color'),
    status: g('status'),
    photo: preview ? preview.src : ''
  };
}  
  } else if (type === 'budaya') {
    obj = { nama:g('nama'), kategori:g('kategori'), emoji:g('emoji')||'🎭', desc:g('desc'), color:g('color'), status:g('status'), tanggal:g('tanggal')||'Segera', photo:'' };
  } else if (type === 'galeri') {
    obj = { nama:g('nama'), kategori:g('kategori'), emoji:g('emoji')||'🖼️', color:g('color'), photo:'' };
  } else if (type === 'kuliner') {
    obj = { nama:g('nama'), jenis:g('jenis'), emoji:g('emoji')||'🍽️', harga:g('harga')||'-', desc:g('desc'), color:g('color'), status:g('status'), photo:'' };
  } else if (type === 'penginapan') {
    obj = { nama:g('nama'), tipe:g('tipe'), kamar:g('kamar')||'-', harga:g('harga')||'-', emoji:g('emoji')||'🏨', desc:g('desc'), color:g('color'), status:g('status'), photo:'' };
  } else if (type === 'ulasan') {

  fetch('api/tambah_ulasan.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:
      'nama=' + encodeURIComponent(g('nama')) +
      '&wisata=' + encodeURIComponent(g('wisata')) +
      '&rating=' + encodeURIComponent(g('rating')) +
      '&komentar=' + encodeURIComponent(g('komentar'))
  })
  .then(res => res.text())
  .then(data => {
    if (data.trim() === 'success') {
      showToast('Ulasan berhasil dikirim! 🎉', 'success');
      closeModal();
      loadUlasan();
    } else {
      showToast('Gagal menyimpan ulasan', 'error');
    }
  });

  return;
}
function loadUlasan() {

  fetch('api/get_ulasan.php')
    .then(res => res.json())
    .then(data => {

      db.ulasan = data.map(item => ({
        id: parseInt(item.id),
        nama: item.nama,
        wisata: item.wisata,
        rating: parseInt(item.rating),
        komentar: item.komentar,
        tanggal: item.tanggal,
        color: '#1a6faf'
      }));

      renderUlasan();
    });
}
  if (editingId) {
    const idx = db[type].findIndex(d => d.id === editingId);
    if (idx !== -1) db[type][idx] = { ...db[type][idx], ...obj };
    showToast('Data berhasil diperbarui! ✅', 'success');
  } else {
    obj.id = nextId[type]++;
    db[type].push(obj);
    showToast('Data berhasil ditambahkan! 🎉', 'success');
  }
  closeModal();
  renderAll();
}

function editItem(type, id) {
  const data = db[type].find(d => d.id === id);
  if (data) openModal(type, data);
}

// ═══ DELETE ═══
function confirmDelete(type, id, name) {
  deleteTarget = { type, id };
  document.getElementById('confirm-text').textContent = `"${name}" akan dihapus permanen dan tidak bisa dipulihkan.`;
  document.getElementById('confirm-overlay').classList.add('open');
}
function closeConfirm() { document.getElementById('confirm-overlay').classList.remove('open'); deleteTarget = null; }
function executeDelete() {
  if (!deleteTarget) return;
  db[deleteTarget.type] = db[deleteTarget.type].filter(d => d.id !== deleteTarget.id);
  closeConfirm();
  showToast('Data berhasil dihapus.', 'info');
  renderAll();
}

// ═══ TOAST ═══
function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  const icons = { success:'✅', error:'❌', info:'ℹ️' };
  const el = document.createElement('div');
  el.className = `toast-item ${type}`;
  el.innerHTML = `<span>${icons[type]}</span> ${msg}`;
  toast.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  loadUlasan();
  // Animate stat numbers
  setTimeout(() => {
    document.querySelectorAll('.stat-num, .dash-num').forEach(el => {
      const target = parseInt(el.textContent) || 0;
      if (!target) return;
      let cur = 0;
      const step = Math.max(1, Math.floor(target / 20));
      const timer = setInterval(() => {
        cur = Math.min(cur + step, target);  
        el.textContent = cur;
        if (cur >= target) clearInterval(timer);
      }, 40);
    });
  }, 200);
});