/* ══════════════════════════════════════
   INSTRUMENTS DATA
══════════════════════════════════════ */
const INSTRUMENTS = [
  // FOREX
  {s:'EURUSD',l:'Euro / US Dollar',c:'forex',cs:100000,p:0.0001,pp:4,q:'USD'},
  {s:'GBPUSD',l:'Pound / US Dollar',c:'forex',cs:100000,p:0.0001,pp:4,q:'USD'},
  {s:'USDJPY',l:'USD / Japanese Yen',c:'forex',cs:100000,p:0.01,pp:2,q:'JPY'},
  {s:'USDCHF',l:'USD / Swiss Franc',c:'forex',cs:100000,p:0.0001,pp:4,q:'CHF'},
  {s:'USDCAD',l:'USD / Canadian Dollar',c:'forex',cs:100000,p:0.0001,pp:4,q:'CAD'},
  {s:'AUDUSD',l:'Aussie / US Dollar',c:'forex',cs:100000,p:0.0001,pp:4,q:'USD'},
  {s:'NZDUSD',l:'Kiwi / US Dollar',c:'forex',cs:100000,p:0.0001,pp:4,q:'USD'},
  {s:'EURGBP',l:'Euro / Pound',c:'forex',cs:100000,p:0.0001,pp:4,q:'GBP'},
  {s:'EURJPY',l:'Euro / Japanese Yen',c:'forex',cs:100000,p:0.01,pp:2,q:'JPY'},
  {s:'GBPJPY',l:'Pound / Japanese Yen',c:'forex',cs:100000,p:0.01,pp:2,q:'JPY'},
  {s:'AUDJPY',l:'Aussie / Yen',c:'forex',cs:100000,p:0.01,pp:2,q:'JPY'},
  {s:'CADJPY',l:'CAD / Yen',c:'forex',cs:100000,p:0.01,pp:2,q:'JPY'},
  {s:'CHFJPY',l:'CHF / Yen',c:'forex',cs:100000,p:0.01,pp:2,q:'JPY'},
  {s:'NZDJPY',l:'Kiwi / Yen',c:'forex',cs:100000,p:0.01,pp:2,q:'JPY'},
  {s:'EURAUD',l:'Euro / Aussie',c:'forex',cs:100000,p:0.0001,pp:4,q:'AUD'},
  {s:'EURCAD',l:'Euro / CAD',c:'forex',cs:100000,p:0.0001,pp:4,q:'CAD'},
  {s:'EURCHF',l:'Euro / CHF',c:'forex',cs:100000,p:0.0001,pp:4,q:'CHF'},
  {s:'EURNZD',l:'Euro / Kiwi',c:'forex',cs:100000,p:0.0001,pp:4,q:'NZD'},
  {s:'GBPAUD',l:'Pound / Aussie',c:'forex',cs:100000,p:0.0001,pp:4,q:'AUD'},
  {s:'GBPCAD',l:'Pound / CAD',c:'forex',cs:100000,p:0.0001,pp:4,q:'CAD'},
  {s:'GBPCHF',l:'Pound / CHF',c:'forex',cs:100000,p:0.0001,pp:4,q:'CHF'},
  {s:'GBPNZD',l:'Pound / Kiwi',c:'forex',cs:100000,p:0.0001,pp:4,q:'NZD'},
  {s:'AUDCAD',l:'Aussie / CAD',c:'forex',cs:100000,p:0.0001,pp:4,q:'CAD'},
  {s:'AUDCHF',l:'Aussie / CHF',c:'forex',cs:100000,p:0.0001,pp:4,q:'CHF'},
  {s:'AUDNZD',l:'Aussie / Kiwi',c:'forex',cs:100000,p:0.0001,pp:4,q:'NZD'},
  {s:'CADCHF',l:'CAD / CHF',c:'forex',cs:100000,p:0.0001,pp:4,q:'CHF'},
  {s:'NZDCAD',l:'Kiwi / CAD',c:'forex',cs:100000,p:0.0001,pp:4,q:'CAD'},
  {s:'NZDCHF',l:'Kiwi / CHF',c:'forex',cs:100000,p:0.0001,pp:4,q:'CHF'},
  {s:'USDINR',l:'USD / Indian Rupee',c:'forex',cs:1000,p:0.01,pp:2,q:'INR',k:['RUPEE','INR','INDIA']},
  // METALS
  {s:'XAUUSD',l:'Gold / USD',c:'metals',cs:100,p:0.1,pp:2,q:'USD',k:['GOLD','XAU','SONA','XAUUSD']},
  {s:'XAGUSD',l:'Silver / USD',c:'metals',cs:5000,p:0.001,pp:3,q:'USD',k:['SILVER','XAG','CHANDI','XAGUSD']},
  {s:'XPTUSD',l:'Platinum',c:'metals',cs:50,p:0.1,pp:2,q:'USD',k:['PLATINUM','XPT','PLAT']},
  {s:'XPDUSD',l:'Palladium',c:'metals',cs:100,p:0.1,pp:2,q:'USD',k:['PALLADIUM','XPD','PALL']},
  {s:'XCUUSD',l:'Copper',c:'metals',cs:25000,p:0.0001,pp:4,q:'USD',k:['COPPER','CU','TAMBA']},
  // ENERGY
  {s:'USOIL',l:'WTI Crude Oil',c:'energy',cs:1000,p:0.01,pp:2,q:'USD',k:['OIL','CRUDE','WTI','USOIL','PETROLEUM','TEL']},
  {s:'UKOIL',l:'Brent Crude Oil',c:'energy',cs:1000,p:0.01,pp:2,q:'USD',k:['BRENT','OIL','CRUDE','UKOIL','PETROLEUM']},
  {s:'XTIUSD',l:'Oil (Generic)',c:'energy',cs:1000,p:0.01,pp:2,q:'USD',k:['OIL','CRUDE','XTI','TEL']},
  {s:'NGAS',l:'Natural Gas',c:'energy',cs:10000,p:0.001,pp:3,q:'USD',k:['GAS','NATURALGAS','NATGAS','NG']},
  // CRYPTO
  {s:'BTCUSD',l:'Bitcoin / USD',c:'crypto',cs:1,p:1,pp:0,q:'USD',k:['BITCOIN','BTC','CRYPTO']},
  {s:'ETHUSD',l:'Ethereum / USD',c:'crypto',cs:1,p:0.01,pp:2,q:'USD',k:['ETHEREUM','ETH','ETHER','CRYPTO']},
  {s:'XRPUSD',l:'XRP / USD',c:'crypto',cs:1,p:0.0001,pp:4,q:'USD',k:['XRP','RIPPLE','CRYPTO']},
  {s:'SOLUSD',l:'Solana / USD',c:'crypto',cs:1,p:0.01,pp:2,q:'USD',k:['SOLANA','SOL','CRYPTO']},
  {s:'BNBUSD',l:'BNB / USD',c:'crypto',cs:1,p:0.01,pp:2,q:'USD',k:['BNB','BINANCE','CRYPTO']},
  {s:'DOGEUSD',l:'Dogecoin / USD',c:'crypto',cs:1,p:0.0001,pp:4,q:'USD',k:['DOGE','DOGECOIN','DOG','CRYPTO']},
  {s:'ADAUSD',l:'Cardano / USD',c:'crypto',cs:1,p:0.0001,pp:4,q:'USD',k:['ADA','CARDANO','CRYPTO']},
  {s:'LTCUSD',l:'Litecoin / USD',c:'crypto',cs:1,p:0.01,pp:2,q:'USD',k:['LTC','LITECOIN','CRYPTO']},
  {s:'AVAXUSD',l:'Avalanche / USD',c:'crypto',cs:1,p:0.01,pp:2,q:'USD',k:['AVAX','AVALANCHE','CRYPTO']},
  {s:'LINKUSD',l:'Chainlink / USD',c:'crypto',cs:1,p:0.001,pp:3,q:'USD',k:['LINK','CHAINLINK','CRYPTO']},
  // INDICES
  {s:'US30',l:'Dow Jones',c:'indices',cs:1,p:1,pp:0,q:'USD',k:['DOW','DOWJONES','DJI','US30','WALL']},
  {s:'NAS100',l:'NASDAQ 100',c:'indices',cs:1,p:0.1,pp:1,q:'USD',k:['NASDAQ','NAS','NAS100','TECH','NDX']},
  {s:'SPX500',l:'S&P 500',c:'indices',cs:1,p:0.1,pp:1,q:'USD',k:['SP500','SPX','SNP','S&P','SPX500']},
  {s:'GER40',l:'DAX 40',c:'indices',cs:1,p:0.1,pp:1,q:'EUR',k:['DAX','GERMANY','GER','GER40']},
  {s:'UK100',l:'FTSE 100',c:'indices',cs:1,p:0.1,pp:1,q:'GBP',k:['FTSE','UK','UK100','BRITAIN']},
  {s:'JPN225',l:'Nikkei 225',c:'indices',cs:1,p:1,pp:0,q:'JPY',k:['NIKKEI','JAPAN','JPN','JPN225']},
  {s:'AUS200',l:'ASX 200',c:'indices',cs:1,p:0.1,pp:1,q:'AUD',k:['ASX','AUSTRALIA','AUS','AUS200']},
  {s:'NIFTY50',l:'Nifty 50',c:'indices',cs:75,p:0.05,pp:2,q:'INR',k:['NIFTY','INDIA','NSE','NIFTY50']},
  {s:'SENSEX',l:'BSE Sensex',c:'indices',cs:1,p:1,pp:0,q:'INR',k:['SENSEX','BSE','INDIA','BOMBAY']},
];

const RATES = {USD:1,EUR:1.08,GBP:1.26,JPY:0.0067,CHF:1.11,CAD:0.74,AUD:0.65,NZD:0.60,INR:0.012};
const CAT_BADGE = {forex:'bf',metals:'bm',energy:'be',crypto:'bc',indices:'bi'};
const CAT_LABEL = {forex:'Forex',metals:'Metals',energy:'Energy',crypto:'Crypto',indices:'Indices'};

/* ── State ── */
let selectedSym = null;
let direction = 'buy';
let slMode = 'price';
let tpMode = 'price';
let isDark = true;
let hasCon = true, hasMinD = true, hasMinP = true, ddBase = 'balance';

/* ══════════════════════════════════════
   THEME
══════════════════════════════════════ */
function toggleTheme() {
  isDark = !isDark;
  document.body.className = isDark ? '' : 'light';
  document.getElementById('themeBtn').textContent = isDark ? '☀️' : '🌙';
}

/* ══════════════════════════════════════
   TABS
══════════════════════════════════════ */
function switchTab(tab) {
  const isCalc = tab === 'calc';
  document.getElementById('tab1').className = 'tab-btn' + (isCalc ? ' active' : '');
  document.getElementById('tab2').className = 'tab-btn' + (!isCalc ? ' active' : '');
  document.getElementById('calcTab').style.display = isCalc ? 'block' : 'none';
  document.getElementById('pfTab').style.display = isCalc ? 'none' : 'block';
}

/* ══════════════════════════════════════
   DIRECTION
══════════════════════════════════════ */
function setDir(d) {
  direction = d;
  document.getElementById('buyBtn').className = 'dir-btn buy' + (d === 'buy' ? ' active' : '');
  document.getElementById('sellBtn').className = 'dir-btn sell' + (d === 'sell' ? ' active' : '');
  updateHints();
}

/* ══════════════════════════════════════
   SEARCH / DROPDOWN
══════════════════════════════════════ */
function filterSymbols() {
  const q = document.getElementById('symInput').value.trim().toUpperCase();
  const dd = document.getElementById('dropdown');
  dd.classList.add('open');
  if (!q) { dd.innerHTML = '<div class="no-result">Start typing to search an instrument...</div>'; return; }
  const matches = INSTRUMENTS.filter(i =>
    i.s.includes(q) ||
    i.l.toUpperCase().includes(q) ||
    (i.k && i.k.some(k => k.includes(q)))
  ).slice(0, 16);
  if (!matches.length) { dd.innerHTML = '<div class="no-result">No instrument found. Try: GOLD, EURUSD, BTC, OIL</div>'; return; }
  const groups = {};
  matches.forEach(i => { if (!groups[i.c]) groups[i.c] = []; groups[i.c].push(i); });
  let html = '';
  for (const cat in groups) {
    html += `<div class="drop-cat">${CAT_LABEL[cat]}</div>`;
    groups[cat].forEach(i => {
      html += `<div class="drop-item" onclick="pickSymbol('${i.s}')">
        <div><div class="drop-sym">${i.s}</div><div class="drop-lbl">${i.l}</div></div>
        <span class="drop-badge ${CAT_BADGE[i.c]}">${i.c}</span>
      </div>`;
    });
  }
  dd.innerHTML = html;
}

function openDropdown() {
  if (document.getElementById('symInput').value.trim().length >= 1) filterSymbols();
}

function pickSymbol(sym) {
  selectedSym = INSTRUMENTS.find(i => i.s === sym);
  document.getElementById('symInput').value = '';
  document.getElementById('dropdown').classList.remove('open');
  document.getElementById('dropdown').innerHTML = '';
  document.getElementById('pill').classList.add('show');
  document.getElementById('pillName').textContent = selectedSym.s + ' — ' + selectedSym.l;
  document.getElementById('pillDet').textContent = 'Pip: ' + selectedSym.p + ' · CS: ' + selectedSym.cs.toLocaleString();
  updateHints();
  updateSLPh();
  updateTPPh();
}

function clearSymbol() {
  selectedSym = null;
  document.getElementById('pill').classList.remove('show');
  document.getElementById('resultCard').classList.remove('show');
}

document.addEventListener('click', function(e) {
  if (!document.getElementById('searchWrap').contains(e.target))
    document.getElementById('dropdown').classList.remove('open');
});

/* ══════════════════════════════════════
   SL / TP MODE
══════════════════════════════════════ */
function setSL(m) {
  slMode = m;
  document.getElementById('slPrice').className = 'pp-btn' + (m === 'price' ? ' active' : '');
  document.getElementById('slPips').className = 'pp-btn' + (m === 'pips' ? ' active' : '');
  document.getElementById('slVal').value = '';
  document.getElementById('slHint').textContent = '';
  updateSLPh();
}
function setTP(m) {
  tpMode = m;
  document.getElementById('tpPrice').className = 'pp-btn' + (m === 'price' ? ' active' : '');
  document.getElementById('tpPips').className = 'pp-btn' + (m === 'pips' ? ' active' : '');
  document.getElementById('tpRR').className = 'pp-btn' + (m === 'rr' ? ' active' : '');
  document.getElementById('tpVal').value = '';
  document.getElementById('tpHint').textContent = '';
  updateTPPh();
}
function updateSLPh() {
  document.getElementById('slVal').placeholder = slMode === 'price' ? 'e.g. 1.08000' : 'e.g. 50  (pips)';
}
function updateTPPh() {
  const ph = {price:'e.g. 1.09500', pips:'e.g. 100  (pips)', rr:'e.g. 2  → 1:2 R:R'};
  document.getElementById('tpVal').placeholder = ph[tpMode];
}

/* ══════════════════════════════════════
   HINTS
══════════════════════════════════════ */
function updateHints() {
  if (!selectedSym) return;
  const s = selectedSym;
  const entry = parseFloat(document.getElementById('entryPrice').value);
  if (isNaN(entry)) return;
  const slv = parseFloat(document.getElementById('slVal').value);
  if (!isNaN(slv)) {
    if (slMode === 'price') {
      document.getElementById('slHint').textContent = '≈ ' + (Math.abs(slv - entry) / s.p).toFixed(1) + ' pips';
    } else {
      const p = direction === 'buy' ? entry - slv * s.p : entry + slv * s.p;
      document.getElementById('slHint').textContent = '≈ price ' + p.toFixed(s.pp);
    }
  }
  const tpv = parseFloat(document.getElementById('tpVal').value);
  if (!isNaN(tpv)) {
    if (tpMode === 'price') {
      document.getElementById('tpHint').textContent = '≈ ' + (Math.abs(tpv - entry) / s.p).toFixed(1) + ' pips';
    } else if (tpMode === 'pips') {
      const p = direction === 'buy' ? entry + tpv * s.p : entry - tpv * s.p;
      document.getElementById('tpHint').textContent = '≈ price ' + p.toFixed(s.pp);
    } else if (tpMode === 'rr' && !isNaN(slv)) {
      const slPips = slMode === 'price' ? Math.abs(slv - entry) / s.p : slv;
      const tpPips = slPips * tpv;
      const tpPrice = direction === 'buy' ? entry + tpPips * s.p : entry - tpPips * s.p;
      document.getElementById('tpHint').textContent = '≈ ' + tpPrice.toFixed(s.pp) + ' (' + tpPips.toFixed(1) + ' pips)';
    }
  }
}

/* ══════════════════════════════════════
   RISK
══════════════════════════════════════ */
function updateRisk() {
  const pct = parseFloat(document.getElementById('riskSlider').value);
  document.getElementById('riskPct').textContent = pct.toFixed(1) + '%';
  const bal = parseFloat(document.getElementById('balance').value);
  document.getElementById('riskAmt').textContent = (!isNaN(bal) && bal > 0) ? '$' + (bal * pct / 100).toFixed(2) : '—';
  [0.5, 1, 2, 3, 5].forEach((v, i) => {
    document.querySelectorAll('.preset-btn')[i].className = 'preset-btn' + (v === pct ? ' active' : '');
  });
}
function setRisk(v) { document.getElementById('riskSlider').value = v; updateRisk(); }

/* ══════════════════════════════════════
   LEVERAGE
══════════════════════════════════════ */
function toggleLeverage() {
  const on = document.getElementById('levToggle').checked;
  document.getElementById('levBody').style.display = on ? 'block' : 'none';
  document.getElementById('levSub').textContent = on
    ? '1:' + document.getElementById('levSlider').value + ' selected'
    : 'Off — margin not calculated';
}
function updateLev() {
  const v = document.getElementById('levSlider').value;
  document.getElementById('levDisplay').textContent = '1:' + v;
  document.getElementById('levSub').textContent = '1:' + v + ' selected';
  document.querySelectorAll('.lev-pre').forEach(b => b.classList.remove('active'));
}
function setLev(v) {
  document.getElementById('levSlider').value = v;
  updateLev();
  document.querySelectorAll('.lev-pre').forEach(b => {
    b.className = 'lev-pre' + (b.textContent === '1:' + v ? ' active' : '');
  });
}

/* ══════════════════════════════════════
   FORMAT HELPER
══════════════════════════════════════ */
function fmt(n, d = 2) {
  return isNaN(n) ? '—' : n.toLocaleString('en-US', {minimumFractionDigits:d, maximumFractionDigits:d});
}

/* ══════════════════════════════════════
   CALCULATE P&L
══════════════════════════════════════ */
function calculate() {
  if (!selectedSym) { toast('Please select an instrument first.'); return; }
  const s = selectedSym;
  const lot = parseFloat(document.getElementById('lotSize').value);
  const entry = parseFloat(document.getElementById('entryPrice').value);
  const bal = parseFloat(document.getElementById('balance').value);
  const rp = parseFloat(document.getElementById('riskSlider').value);
  const lOn = document.getElementById('levToggle').checked;
  const lv = parseInt(document.getElementById('levSlider').value);

  if (isNaN(lot) || lot <= 0) { toast('Please enter a valid lot size.'); return; }
  if (isNaN(entry) || entry <= 0) { toast('Please enter a valid entry price.'); return; }

  // SL
  let slPrice = NaN, slPips = NaN;
  const slRaw = parseFloat(document.getElementById('slVal').value);
  if (!isNaN(slRaw)) {
    if (slMode === 'price') { slPrice = slRaw; slPips = Math.abs(slPrice - entry) / s.p; }
    else { slPips = slRaw; slPrice = direction === 'buy' ? entry - slPips * s.p : entry + slPips * s.p; }
  }

  // TP
  let tpPrice = NaN, tpPips = NaN;
  const tpRaw = parseFloat(document.getElementById('tpVal').value);
  if (!isNaN(tpRaw)) {
    if (tpMode === 'price') { tpPrice = tpRaw; tpPips = Math.abs(tpPrice - entry) / s.p; }
    else if (tpMode === 'pips') { tpPips = tpRaw; tpPrice = direction === 'buy' ? entry + tpPips * s.p : entry - tpPips * s.p; }
    else if (tpMode === 'rr' && !isNaN(slPips)) { tpPips = slPips * tpRaw; tpPrice = direction === 'buy' ? entry + tpPips * s.p : entry - tpPips * s.p; }
  }

  // Pip value
  let pvUSD;
  if (s.q === 'USD') pvUSD = s.p * s.cs;
  else if (s.q === 'JPY') pvUSD = (s.p * s.cs) / entry;
  else pvUSD = s.p * s.cs * (RATES[s.q] || 1);
  const pipVal = pvUSD * lot;

  const tpPnl = !isNaN(tpPips) ? tpPips * pipVal * (direction === 'buy' ? (tpPrice > entry ? 1 : -1) : (tpPrice < entry ? 1 : -1)) : NaN;
  const slPnl = !isNaN(slPips) ? slPips * pipVal * (direction === 'buy' ? (slPrice < entry ? -1 : 1) : (slPrice > entry ? -1 : 1)) : NaN;
  const rr = (!isNaN(tpPips) && !isNaN(slPips) && slPips > 0) ? (tpPips / slPips).toFixed(2) : null;

  document.getElementById('rrChip').textContent = rr ? 'R:R  1 : ' + rr : 'R:R —';

  if (!isNaN(tpPnl)) {
    document.getElementById('tpRow').style.display = 'flex';
    document.getElementById('tpPnlVal').textContent = (tpPnl >= 0 ? '+' : '') + '$' + fmt(tpPnl);
    document.getElementById('tpPipsText').textContent = '+' + fmt(tpPips, 1) + ' pips';
    document.getElementById('tpPriceText').textContent = '@ ' + tpPrice.toFixed(s.pp);
  } else { document.getElementById('tpRow').style.display = 'none'; }

  document.getElementById('entryDisplay').textContent = '@ ' + entry.toFixed(s.pp);

  if (!isNaN(slPnl)) {
    document.getElementById('slRow').style.display = 'flex';
    document.getElementById('slPnlVal').textContent = (slPnl >= 0 ? '+' : '−') + '$' + fmt(Math.abs(slPnl));
    document.getElementById('slPipsText').textContent = '-' + fmt(slPips, 1) + ' pips';
    document.getElementById('slPriceText').textContent = '@ ' + slPrice.toFixed(s.pp);
  } else { document.getElementById('slRow').style.display = 'none'; }

  document.getElementById('sPipVal').textContent = '$' + fmt(pipVal, 4);
  document.getElementById('sPosition').textContent = (lot * s.cs).toLocaleString() + ' units';
  document.getElementById('sLot').textContent = lot + ' lot' + (lot !== 1 ? 's' : '');

  if (!isNaN(bal) && bal > 0) {
    document.getElementById('sRisk').textContent = '$' + fmt(bal * rp / 100);
    document.getElementById('sTpPct').textContent = !isNaN(tpPnl) ? fmt((tpPnl / bal) * 100, 2) + '%' : '—';
    document.getElementById('sSlPct').textContent = !isNaN(slPnl) ? fmt((Math.abs(slPnl) / bal) * 100, 2) + '%' : '—';
    const slPct = !isNaN(slPnl) ? (Math.abs(slPnl) / bal) * 100 : 0;
    document.getElementById('warnBox').className = 'warn-box' + (slPct > 2 ? ' show' : '');
  } else {
    document.getElementById('sRisk').textContent = '—';
    document.getElementById('sTpPct').textContent = '—';
    document.getElementById('sSlPct').textContent = '—';
    document.getElementById('warnBox').className = 'warn-box';
  }

  if (lOn) {
    const margin = (lot * s.cs * entry) / lv;
    document.getElementById('sMargin').textContent = '$' + fmt(margin);
    document.getElementById('sLevVal').textContent = '1:' + lv;
    document.getElementById('sMarginCell').style.display = '';
    document.getElementById('sLevCell').style.display = '';
  } else {
    document.getElementById('sMarginCell').style.display = 'none';
    document.getElementById('sLevCell').style.display = 'none';
  }

  document.getElementById('resultCard').classList.add('show');
  setTimeout(() => document.getElementById('resultCard').scrollIntoView({behavior:'smooth', block:'start'}), 80);
}

/* ══════════════════════════════════════
   PROPFIRM ANALYZER
══════════════════════════════════════ */
function setDDBase(v) {
  ddBase = v;
  document.getElementById('ddB1').className = 'yn-btn' + (v === 'balance' ? ' yes' : '');
  document.getElementById('ddB2').className = 'yn-btn' + (v === 'equity' ? ' yes' : '');
}
function setCon(v) {
  hasCon = v;
  document.getElementById('conY').className = 'yn-btn' + (v ? ' yes' : '');
  document.getElementById('conN').className = 'yn-btn' + (!v ? ' no' : '');
  document.getElementById('conBox').style.display = v ? 'block' : 'none';
}
function setMinD(v) {
  hasMinD = v;
  document.getElementById('minDY').className = 'yn-btn' + (v ? ' yes' : '');
  document.getElementById('minDN').className = 'yn-btn' + (!v ? ' no' : '');
  document.getElementById('minDBox').style.display = v ? 'block' : 'none';
}
function setMinP(v) {
  hasMinP = v;
  document.getElementById('minPY').className = 'yn-btn' + (v ? ' yes' : '');
  document.getElementById('minPN').className = 'yn-btn' + (!v ? ' no' : '');
  document.getElementById('minPBox').style.display = v ? 'block' : 'none';
}

function analyzePF() {
  const size      = parseFloat(document.getElementById('pfSize').value) || 10000;
  const target    = parseFloat(document.getElementById('pfTarget').value) || 10;
  const maxDD     = parseFloat(document.getElementById('pfMaxDD').value) || 10;
  const dailyDD   = parseFloat(document.getElementById('pfDailyDD').value) || 5;
  const days      = parseFloat(document.getElementById('pfDays').value) || 30;
  const conPct    = hasCon ? (parseFloat(document.getElementById('pfConPct').value) || 30) : 100;
  const minDays   = hasMinD ? (parseFloat(document.getElementById('pfMinDays').value) || 4) : 0;
  const minProfit = hasMinP ? (parseFloat(document.getElementById('pfMinProfit').value) || 0.5) : 0;
  const firm      = document.getElementById('pfName').value.trim() || 'Your Prop Firm';

  const targetAmt  = size * target / 100;
  const dailyDDAmt = size * dailyDD / 100;

  const tradingDays    = Math.floor(days * 0.65);
  const safeDailyPct   = dailyDD * 0.45;
  const safeDailyAmt   = size * safeDailyPct / 100;
  const rDayPct        = Math.max(target / tradingDays * 1.4, minProfit > 0 ? minProfit * 1.8 : 0.5);
  const rDayAmt        = size * rDayPct / 100;
  const maxRiskTrade   = Math.min(safeDailyPct * 0.45, 1.5);
  const maxRiskAmt     = size * maxRiskTrade / 100;
  const minRR          = hasCon ? 2.0 : 1.5;
  const minWR          = hasCon ? 42 : 38;
  const bufPct         = maxDD * 0.55;
  const bufAmt         = size * bufPct / 100;
  const maxTrades      = Math.max(1, Math.floor(safeDailyPct / maxRiskTrade));
  const bestDayMax     = hasCon ? targetAmt * conPct / 100 : null;

  const warns = [];
  if (dailyDD <= 3) warns.push('Daily drawdown limit of ' + dailyDD + '% is very tight — one bad trade can end your trading day. Be extra cautious.');
  if (maxDD <= 6)   warns.push('Max drawdown of ' + maxDD + '% is low — 3 to 4 consecutive losses could end the challenge. Strict risk management is essential.');
  if (hasCon && conPct <= 20) warns.push('Consistency rule of ' + conPct + '% is very strict — avoid making too much profit in a single day.');
  if (target >= 15) warns.push('Profit target of ' + target + '% is high — stay patient and avoid rushing trades.');
  if (ddBase === 'equity') warns.push('Daily drawdown is calculated from peak equity — floating profit also counts. Monitor open trades carefully.');

  const tips = [
    {cl:'g', ic:'✓', t:'Daily Profit Target', d:'Do not exceed this amount in a single day. Once your daily target is hit, stop trading and close your platform.', v:'$' + rDayAmt.toFixed(0) + ' (' + rDayPct.toFixed(2) + '%) over ' + tradingDays + ' trading days'},
    {cl:'r', ic:'✗', t:'Daily Hard Stop — Close for the Day', d: ddBase === 'balance' ? 'Calculated from daily balance — once this limit is hit, stop trading for the day. No exceptions.' : 'Calculated from peak equity — close all trades as soon as drawdown reaches this level from the peak.', v:'Max daily loss: $' + safeDailyAmt.toFixed(0) + ' (' + safeDailyPct.toFixed(1) + '% of ' + dailyDD + '% limit)'},
    {cl:'y', ic:'⚡', t:'Per Trade Max Risk', d:'This is the maximum you should risk on a single trade. Always use a stop loss — no exceptions.', v:'$' + maxRiskAmt.toFixed(0) + ' (' + maxRiskTrade.toFixed(1) + '%) · Max ' + maxTrades + ' trades/day'},
    {cl:'b', ic:'◈', t:'Minimum R:R Ratio', d: hasCon ? 'A higher R:R is required due to the consistency rule. Small TP targets will hurt your consistency score.' : 'Never take trades below this R:R. A lower ratio cannot be compensated by win rate alone.', v:'Every trade: minimum 1 : ' + minRR.toFixed(1) + ' R:R — better setups aim 1 : 2.5+'},
    {cl:'p', ic:'◉', t:'Profitable Days Plan', d: hasMinD ? 'You need a minimum of ' + minDays + ' profitable days — spread them across different sessions.' + (hasMinP ? ' Each day must show at least $' + (size * minProfit / 100).toFixed(0) + ' in profit to count.' : '') : 'No minimum days required — but aim to trade on at least ' + Math.ceil(tradingDays * 0.4) + ' separate days for consistency.', v: hasMinD ? minDays + ' green days in ' + days + ' days' + (hasMinP ? ' · min $' + (size * minProfit / 100).toFixed(0) + '/day to count' : ' · any green counts') : 'No rule — target ' + Math.ceil(tradingDays * 0.4) + ' green days'},
    {cl:'g', ic:'✓', t:'Overall Drawdown Buffer', d:'If your total loss reaches this level, stop trading for the day and the next. Always stay well below the maximum drawdown limit.', v:'Stop if total loss = $' + bufAmt.toFixed(0) + ' (' + bufPct.toFixed(1) + '% of ' + maxDD + '% max)'},
    hasCon && bestDayMax ? {cl:'y', ic:'⚡', t:'Consistency Cap — Best Day', d:'Do not exceed this amount in a single day — otherwise you will have very little room left for remaining trading days.', v:'Single best day max: $' + bestDayMax.toFixed(0) + ' = ' + conPct + '% of $' + targetAmt.toFixed(0) + ' target'}
      : {cl:'y', ic:'⚡', t:'No Consistency Rule', d:'You have no best-day cap — but stay disciplined anyway. Avoid making all your profit in a single session.', v:'No best-day restriction — but still limit yourself to 2–3 trades per day for discipline.'},
    {cl:'b', ic:'◈', t:'Winrate Needed', d:'With this win rate and R:R combination, you can be consistently profitable. Focus on quality setups only.', v: minWR + '%+ winrate with 1:' + minRR.toFixed(1) + ' RR = profitable long-term'},
    {cl:'p', ic:'◉', t:'Ideal Schedule', d:'Stick to one session per day — London (12:30–3:30 PM IST) or New York (6:30–10:30 PM IST). Overtrading is the #1 reason prop firm challenges fail.', v:'1 session · 2-3 trades max · No revenge · No news spikes'},
    {cl:'r', ic:'✗', t:'Danger Zone — Never Do These', d:'These 5 mistakes are responsible for 90% of prop firm challenge failures. Any one of them puts your challenge at serious risk.', v:'✗ Martingale · ✗ No SL · ✗ News trades · ✗ Weekend holds · ✗ Overlapping pairs'},
    {cl:'g', ic:'✓', t:'Total Target to Hit', d: 'This is the total profit needed to pass ' + firm + '. Follow the daily targets outlined above and you will reach it on time.', v:'$' + targetAmt.toFixed(0) + ' (' + target + '%) in ' + days + ' days · avg $' + (targetAmt / tradingDays).toFixed(0) + '/trading day'},
  ];

  document.getElementById('aiTitle').textContent = firm + ' — Challenge Strategy';
  document.getElementById('aiSub').textContent = '$' + size.toLocaleString() + ' · ' + target + '% target · ' + maxDD + '% max DD · ' + dailyDD + '% daily DD' + (hasCon ? ' · ' + conPct + '% consistency' : '');

  const icons = {g:'✓', y:'⚡', r:'✗', b:'◈', p:'◉'};
  let html = '';
  tips.forEach(t => {
    if (!t) return;
    html += `<div class="tip-row">
      <div class="tip-icon ${t.cl}">${icons[t.cl]||'●'}</div>
      <div style="flex:1;min-width:0">
        <div class="tip-title">${t.t}</div>
        <div class="tip-desc">${t.d}</div>
        <div class="tip-val ${t.cl}">${t.v}</div>
      </div>
    </div>`;
  });
  document.getElementById('tipGrid').innerHTML = html;

  const warnEl = document.getElementById('pfWarn');
  if (warns.length > 0) {
    warnEl.className = 'warn-box show';
    document.getElementById('pfWarnText').innerHTML = warns.map(w => '• ' + w).join('<br>');
  } else {
    warnEl.className = 'warn-box';
  }

  document.getElementById('aiResult').className = 'section ai-result show';
  setTimeout(() => document.getElementById('aiResult').scrollIntoView({behavior:'smooth', block:'start'}), 80);
}

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
function toast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position:'fixed', bottom:'22px', left:'50%', transform:'translateX(-50%)',
    background:'#ef4444', color:'#fff', padding:'9px 16px', borderRadius:'10px',
    fontFamily:'Nunito', fontWeight:'800', fontSize:'0.78rem',
    zIndex:'9999', boxShadow:'0 4px 20px rgba(239,68,68,0.4)', whiteSpace:'nowrap'
  });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
updateRisk();
updateSLPh();
updateTPPh();
setCon(true);
setMinD(true);
setMinP(true);