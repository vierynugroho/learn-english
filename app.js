// =========================================================
//  English Quest — logic & tracking (localStorage)
// =========================================================
const STORE_KEY = "english-quest-v1";
const UNLOCK_THRESHOLD = 0.6;
const XP = { task: 10, quiz: 15, topic: 50, vocab: 5, flashcard: 2, grammar: 20 };

const defaultState = () => ({
  name: "",
  goal: 30,
  unlockAll: false,
  xp: 0,
  topics: {},      // { [topicId]: { tasks: [bool], quiz: { [i]: true }, done: bool } }
  logs: [],        // [{ id, date, min, type, note }]
  vocab: [],       // [{ id, word, mean, ex, known }]
  grammar: {},     // { [itemId]: { learned: bool, quiz: { [i]: true } } }
  writings: [],    // [{ id, promptId, title, text, register, words, minutes, checks, created, updated, revisions }]
  writingDraft: null, // { editingId, promptId, title, text, register, checks }
  activeDays: {},  // { "YYYY-MM-DD": true }
  phraseIdx: 0,
});

let state = load();

// ---------- storage ----------
function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return { ...defaultState(), ...JSON.parse(raw) };
  } catch (e) { /* storage unavailable */ }
  return defaultState();
}
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
}

// ---------- helpers ----------
const $ = (sel) => document.querySelector(sel);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const uid = () => Math.random().toString(36).slice(2, 10);
function dateKey(d = new Date()) {
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
const allTopics = () => CURRICULUM.flatMap((l) => l.topics);

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 1800);
}

function confetti(n = 60) {
  const box = $("#confetti");
  const colors = ["#7c5cff", "#ff6b9a", "#ff9f43", "#22c55e", "#38bdf8", "#facc15"];
  for (let i = 0; i < n; i++) {
    const c = document.createElement("div");
    c.className = "cf";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = 1.5 + Math.random() * 1.5 + "s";
    c.style.animationDelay = Math.random() * 0.3 + "s";
    box.appendChild(c);
    setTimeout(() => c.remove(), 3500);
  }
}

function speak(text) {
  if (!("speechSynthesis" in window)) return toast("Browser tidak mendukung suara 😢");
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.92;
  speechSynthesis.speak(u);
}

function addXP(n, msg) {
  const before = currentRank().name;
  state.xp = Math.max(0, state.xp + n);
  if (n > 0) state.activeDays[dateKey()] = true;
  save();
  if (msg && n > 0) toast(`+${n} XP · ${msg}`);
  const after = currentRank();
  if (n > 0 && after.name !== before) {
    confetti(120);
    setTimeout(() => toast(`🎉 Rank baru: ${after.emoji} ${after.name}!`), 600);
  }
  renderHeaderStats();
}

// ---------- progress calculations ----------
function topicState(id) {
  if (!state.topics[id]) state.topics[id] = { tasks: [], quiz: {}, done: false };
  return state.topics[id];
}
function topicProgress(t) {
  const s = state.topics[t.id];
  if (!s) return 0;
  const total = t.tasks.length + t.quiz.length + 1;
  const got = s.tasks.filter(Boolean).length + Object.keys(s.quiz).length + (s.done ? 1 : 0);
  return got / total;
}
function levelProgress(level) {
  const sum = level.topics.reduce((a, t) => a + topicProgress(t), 0);
  return sum / level.topics.length;
}
function isLevelUnlocked(idx) {
  if (state.unlockAll || idx === 0) return true;
  return levelProgress(CURRICULUM[idx - 1]) >= UNLOCK_THRESHOLD;
}
function currentRank() {
  let r = RANKS[0];
  for (const rank of RANKS) if (state.xp >= rank.xp) r = rank;
  return r;
}
function nextRank() { return RANKS.find((r) => r.xp > state.xp); }

function streak() {
  const active = new Set([...Object.keys(state.activeDays), ...state.logs.map((l) => l.date)]);
  let d = new Date();
  if (!active.has(dateKey(d))) d = addDays(d, -1);
  let count = 0;
  while (active.has(dateKey(d))) { count++; d = addDays(d, -1); }
  return count;
}
function minutesOn(key) {
  return state.logs.filter((l) => l.date === key).reduce((a, l) => a + Number(l.min), 0);
}

// ---------- header ----------
function renderHeaderStats() {
  $("#mini-streak").textContent = streak();
  $("#mini-xp").textContent = state.xp;
}

// ---------- dashboard ----------
function renderDashboard() {
  const hour = new Date().getHours();
  const hi = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  $("#greeting").textContent = `${hi}${state.name ? ", " + state.name : ""}! 👋`;

  const r = currentRank(), nr = nextRank();
  $("#rank-title").textContent = `${r.emoji} ${r.name}`;
  if (nr) {
    const pct = ((state.xp - r.xp) / (nr.xp - r.xp)) * 100;
    $("#xp-fill").style.width = pct + "%";
    $("#xp-next").textContent = `${state.xp} XP · ${nr.xp - state.xp} XP lagi menuju ${nr.emoji} ${nr.name}`;
  } else {
    $("#xp-fill").style.width = "100%";
    $("#xp-next").textContent = `${state.xp} XP · Rank tertinggi! Kamu siap kerja global 🌍`;
  }

  const today = minutesOn(dateKey());
  $("#today-min").textContent = today;
  $("#goal-min").textContent = `/${state.goal} mnt`;
  $("#ring-fg").style.strokeDasharray = `${Math.min(100, (today / state.goal) * 100)} 100`;

  const totalMin = state.logs.reduce((a, l) => a + Number(l.min), 0);
  $("#s-streak").textContent = streak();
  $("#s-hours").textContent = (totalMin / 60).toFixed(1);
  $("#s-topics").textContent = `${allTopics().filter((t) => state.topics[t.id]?.done).length}/${allTopics().length}`;
  $("#s-vocab").textContent = state.vocab.length;

  const p = DAILY_PHRASES[state.phraseIdx % DAILY_PHRASES.length];
  $("#phrase-formal").textContent = p.formal;
  $("#phrase-informal").textContent = p.informal;

  // next topic = first unfinished topic in an unlocked level
  let next = null;
  CURRICULUM.some((lvl, i) => {
    if (!isLevelUnlocked(i)) return true;
    next = lvl.topics.find((t) => !state.topics[t.id]?.done);
    if (next) { next = { ...next, level: lvl }; return true; }
    return false;
  });
  $("#next-topic").innerHTML = next
    ? `<button class="topic" data-topic="${next.id}" style="width:100%">
         <span class="t-emoji">${next.emoji}</span>
         <span class="t-body"><span class="t-title">${esc(next.title)}</span>
           <div class="muted small">${next.level.emoji} ${next.level.name} · ${next.level.cefr}</div>
           <div class="mini-bar"><div style="width:${topicProgress(next) * 100}%"></div></div></span>
         <span>▶️</span></button>`
    : `<p class="empty">Semua topik yang terbuka sudah selesai! 🎉</p>`;

  const gItems = allGrammarItems();
  const gPct = Math.round((gItems.filter((g) => state.grammar[g.id]?.learned).length / gItems.length) * 100);
  $("#level-progress").innerHTML = CURRICULUM.map((l, i) => {
    const pct = Math.round(levelProgress(l) * 100);
    return `<div class="lvl-row"><div class="row-between"><span>${l.emoji} ${l.name} <span class="muted small">${l.cefr}</span></span>
      <span>${isLevelUnlocked(i) ? pct + "%" : "🔒"}</span></div><div class="bar"><div style="width:${pct}%"></div></div></div>`;
  }).join("") + `<div class="lvl-row"><div class="row-between"><span>📘 Grammar Guide</span><span>${gPct}%</span></div>
      <div class="bar"><div style="width:${gPct}%"></div></div></div>`;

  $("#quick-log").innerHTML = ACTIVITY_TYPES.map(
    (a) => `<button class="btn small" data-quick="${a.id}">${a.label} 15m</button>`
  ).join("");
}

// ---------- roadmap ----------
function renderRoadmap() {
  $("#roadmap").innerHTML = CURRICULUM.map((lvl, i) => {
    const unlocked = isLevelUnlocked(i);
    const pct = Math.round(levelProgress(lvl) * 100);
    return `<div class="level ${unlocked ? "" : "locked"}">
      <div class="level-head">
        <div class="level-badge">${unlocked ? lvl.emoji : "🔒"}</div>
        <div style="flex:1">
          <div class="cefr">LEVEL ${i + 1} · CEFR ${lvl.cefr}</div>
          <h2 style="margin:0">${lvl.name}</h2>
          <div class="muted small">${esc(lvl.goal)}</div>
          <div class="bar"><div style="width:${pct}%"></div></div>
        </div>
      </div>
      <div class="topics">${lvl.topics.map((t) => {
        const prog = topicProgress(t), done = state.topics[t.id]?.done;
        return `<button class="topic ${done ? "done" : ""}" data-topic="${t.id}">
          <span class="t-emoji">${t.emoji}</span>
          <span class="t-body"><span class="t-title">${esc(t.title)}</span>
            <div class="mini-bar"><div style="width:${prog * 100}%"></div></div></span>
          <span>${done ? "✅" : ""}</span></button>`;
      }).join("")}</div>
    </div>`;
  }).join("");
}

// ---------- topic modal ----------
function openTopic(id) {
  const lvl = CURRICULUM.find((l) => l.topics.some((t) => t.id === id));
  const t = lvl.topics.find((x) => x.id === id);
  const s = topicState(id);
  const m = $("#modal-content");

  m.innerHTML = `
    <div class="cefr" style="color:var(--primary);font-weight:900;font-size:.75rem">${lvl.emoji} ${lvl.name.toUpperCase()} · ${lvl.cefr}</div>
    <h1>${t.emoji} ${esc(t.title)}</h1>
    <p class="muted">${esc(t.summary)}</p>

    <div class="section"><h3>📌 Poin Penting</h3>
      <ul class="points">${t.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>

    <div class="section"><h3>💬 Contoh Kalimat</h3>
      ${t.examples.map((e) => `
        <div class="example">
          <div class="ex-body"><span class="tag ${e.tag}">${e.tag}</span>
            <div class="en">${esc(e.en)}</div><div class="idn">${esc(e.idn)}</div></div>
          <button class="speak" data-say="${esc(e.en)}" title="Dengar">🔊</button>
        </div>`).join("")}</div>

    ${(GRAMMAR_LINKS[t.id] || []).length ? `<div class="section"><h3>📘 Grammar Terkait</h3>
      <div class="g-links">${GRAMMAR_LINKS[t.id].map((gid) => {
        const g = allGrammarItems().find((x) => x.id === gid);
        return g ? `<button class="chip" data-glink="${gid}">${g.emoji} ${esc(g.title)}</button>` : "";
      }).join("")}</div></div>` : ""}

    <div class="section"><h3>🛠️ Misi Latihan <span class="muted small">(+${XP.task} XP)</span></h3>
      ${t.tasks.map((task, i) => `
        <label class="task ${s.tasks[i] ? "checked" : ""}">
          <input type="checkbox" data-task="${i}" ${s.tasks[i] ? "checked" : ""} />
          <span>${esc(task)}</span></label>`).join("")}</div>

    <div class="section"><h3>🧩 Mini Quiz <span class="muted small">(+${XP.quiz} XP)</span></h3>
      ${t.quiz.map((q, qi) => `
        <div class="quiz" data-q="${qi}">
          <div class="q">${qi + 1}. ${esc(q.q)}</div>
          <div class="opts">${q.options.map((o, oi) => `
            <button class="opt ${s.quiz[qi] && oi === q.a ? "correct" : ""}" data-opt="${oi}">${esc(o)}</button>`).join("")}</div>
        </div>`).join("")}</div>

    <div class="complete-box" id="complete-box"></div>`;

  const renderComplete = () => {
    const quizDone = t.quiz.every((_, i) => s.quiz[i]);
    $("#complete-box").innerHTML = s.done
      ? `<p><b>✅ Topik selesai!</b></p><button class="btn small ghost" id="undo-done">Batalkan status selesai</button>`
      : `<button class="btn green" id="mark-done" ${quizDone ? "" : "disabled"}>🏁 Tandai Selesai (+${XP.topic} XP)</button>
         ${quizDone ? "" : `<p class="muted small">Jawab semua quiz dengan benar dulu ya!</p>`}`;
  };
  renderComplete();

  m.onclick = (ev) => {
    const say = ev.target.closest("[data-say]");
    if (say) return speak(say.dataset.say);

    const glink = ev.target.closest("[data-glink]");
    if (glink) { closeModal(); return openGrammarItem(glink.dataset.glink); }

    const opt = ev.target.closest("[data-opt]");
    if (opt) {
      const qi = Number(opt.closest(".quiz").dataset.q), oi = Number(opt.dataset.opt);
      if (s.quiz[qi]) return;
      if (oi === t.quiz[qi].a) {
        opt.classList.add("correct");
        s.quiz[qi] = true;
        addXP(XP.quiz, "Jawaban benar!");
        renderComplete();
      } else {
        opt.classList.remove("wrong"); void opt.offsetWidth; opt.classList.add("wrong");
        toast("Coba lagi! 💪");
      }
      return;
    }

    if (ev.target.id === "mark-done") {
      s.done = true;
      addXP(XP.topic, "Topik selesai!");
      confetti();
      renderComplete();
      checkLevelUnlock(lvl);
      return;
    }
    if (ev.target.id === "undo-done") {
      s.done = false;
      addXP(-XP.topic);
      renderComplete();
    }
  };
  m.onchange = (ev) => {
    const cb = ev.target.closest("[data-task]");
    if (!cb) return;
    const i = Number(cb.dataset.task);
    s.tasks[i] = cb.checked;
    cb.closest(".task").classList.toggle("checked", cb.checked);
    addXP(cb.checked ? XP.task : -XP.task, cb.checked ? "Misi selesai!" : null);
  };

  $("#modal").hidden = false;
  document.body.style.overflow = "hidden";
}

function checkLevelUnlock(lvl) {
  const idx = CURRICULUM.indexOf(lvl);
  const next = CURRICULUM[idx + 1];
  if (!next || state.unlockAll) return;
  const key = "unlocked_" + next.id;
  if (isLevelUnlocked(idx + 1) && !state[key]) {
    state[key] = true;
    save();
    setTimeout(() => { confetti(150); toast(`🔓 Level baru terbuka: ${next.emoji} ${next.name}!`); }, 700);
  }
}

function closeModal() {
  $("#modal").hidden = true;
  document.body.style.overflow = "";
  speechSynthesis?.cancel?.();
  renderAll();
}

// ---------- log ----------
function addLog(date, min, type, note) {
  state.logs.push({ id: uid(), date, min: Number(min), type, note });
  state.activeDays[date] = true;
  const before = minutesOn(date) - Number(min);
  addXP(Number(min), `${min} menit belajar dicatat`);
  if (date === dateKey() && before < state.goal && minutesOn(date) >= state.goal) {
    setTimeout(() => { confetti(); toast("🎯 Target harian tercapai!"); }, 500);
  }
  renderAll();
}

function renderLog() {
  // heatmap: 16 minggu, kolom = minggu (mulai Minggu)
  const today = new Date();
  const start = addDays(today, -(15 * 7 + today.getDay()));
  const cells = [];
  for (let d = new Date(start); d <= today; d = addDays(d, 1)) {
    const k = dateKey(d), min = minutesOn(k);
    const lvl = min === 0 ? 0 : min < 15 ? 1 : min < 30 ? 2 : min < 60 ? 3 : 4;
    cells.push(`<i class="l${lvl} ${k === dateKey() ? "today" : ""}" title="${k}: ${min} menit"></i>`);
  }
  $("#heatmap").innerHTML = cells.join("");

  // skill balance
  const totals = Object.fromEntries(ACTIVITY_TYPES.map((a) => [a.id, 0]));
  state.logs.forEach((l) => { if (totals[l.type] !== undefined) totals[l.type] += Number(l.min); });
  const max = Math.max(1, ...Object.values(totals));
  $("#skill-balance").innerHTML = ACTIVITY_TYPES.map((a) => `
    <div class="lvl-row"><div class="row-between"><span>${a.label}</span><span class="muted small">${totals[a.id]} mnt</span></div>
    <div class="bar"><div style="width:${(totals[a.id] / max) * 100}%"></div></div></div>`).join("") +
    `<p class="muted small" style="margin-top:8px">💡 Usahakan seimbang — speaking & listening paling penting untuk interview remote.</p>`;

  const logs = [...state.logs].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 50);
  $("#log-list").innerHTML = logs.length
    ? logs.map((l) => {
        const t = ACTIVITY_TYPES.find((a) => a.id === l.type);
        return `<li><div><b>${t ? t.label : l.type}</b> · ${l.min} mnt
          <div class="muted small">${l.date}${l.note ? " — " + esc(l.note) : ""}</div></div>
          <button class="del" data-del-log="${l.id}" title="Hapus">🗑️</button></li>`;
      }).join("")
    : `<li class="empty">Belum ada catatan. Yuk mulai! 🚀</li>`;
}

// ---------- vocab ----------
let fcIndex = 0;
function renderVocab() {
  const q = ($("#v-search").value || "").toLowerCase();
  const list = state.vocab.filter((v) => (v.word + v.mean).toLowerCase().includes(q)).slice().reverse();
  $("#vocab-list").innerHTML = list.length
    ? list.map((v) => `<li><div><b>${esc(v.word)}</b> <span class="muted">— ${esc(v.mean)}</span>
        ${v.ex ? `<div class="muted small"><i>${esc(v.ex)}</i></div>` : ""}</div>
        <div style="display:flex;gap:4px;flex-shrink:0"><button class="del" data-say="${esc(v.word)}">🔊</button>
        <button class="del" data-del-vocab="${v.id}">🗑️</button></div></li>`).join("")
    : `<li class="empty">Belum ada kosakata.</li>`;

  // flashcard: prioritaskan yang belum dikuasai
  const deck = state.vocab.filter((v) => (v.known || 0) < 3);
  $("#fc-count").textContent = `${state.vocab.length - deck.length}/${state.vocab.length} dikuasai`;
  if (!deck.length) {
    $("#flashcard-area").innerHTML = `<p class="empty">${state.vocab.length ? "Semua kosakata dikuasai! 🏆" : "Tambah kosakata untuk mulai latihan flashcard."}</p>`;
    return;
  }
  const v = deck[fcIndex % deck.length];
  $("#flashcard-area").innerHTML = `
    <div class="flashcard" id="fc"><div class="fc-inner">
      <div class="fc-face fc-front">${esc(v.word)}<small style="font-size:.75rem;opacity:.8;margin-top:8px">tap untuk lihat arti</small></div>
      <div class="fc-face fc-back"><b>${esc(v.mean)}</b>${v.ex ? `<p class="muted"><i>${esc(v.ex)}</i></p>` : ""}</div>
    </div></div>
    <div class="btn-row" style="justify-content:center">
      <button class="btn" data-fc="again">😵 Belum hafal</button>
      <button class="btn green" data-fc="know" data-id="${v.id}">😎 Hafal!</button>
    </div>`;
}

// ---------- grammar ----------
const allGrammarItems = () => GRAMMAR.flatMap((g) => g.items);
const gOpen = new Set();
let gFilter = "all";

function grammarState(id) {
  if (!state.grammar[id]) state.grammar[id] = { learned: false, quiz: {} };
  return state.grammar[id];
}

function grammarItemHTML(it) {
  const s = state.grammar[it.id] || { quiz: {} };
  const why = GRAMMAR_WHY[it.id] || [];
  const sec = (title, html) => `<div class="section"><h3>${title}</h3>${html}</div>`;
  let body = `<p class="muted">${esc(it.short)}</p>`;
  if (it.widget === "suffix") body += sec("🪄 Coba Sekarang", `
    <div class="chips" style="margin-bottom:8px">
      <button class="chip active" data-suffix-type="verb">🏃 Kata kerja</button>
      <button class="chip" data-suffix-type="noun">📦 Kata benda</button>
      <button class="chip" data-suffix-type="adj">🎨 Kata sifat</button>
    </div>
    <input class="search" data-suffix-input placeholder="Ketik kata: study, stop, make, open, commit…" autocomplete="off" />
    <div class="suffix-out" data-suffix-out><p class="muted small">Hasil akan muncul di sini.</p></div>`);

  if (it.formula) body += sec("🧮 Rumus", `<div class="formula">${it.formula
    .map(([sym, f]) => `<span class="sym">${esc(sym)}</span><code>${esc(f)}</code>`).join("")}</div>`);
  if (it.table) body += sec("📋 Tabel", `<div class="table-wrap"><table class="g-table">
    <tr>${it.table.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr>
    ${it.table.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</table></div>`);
  if (it.when) body += sec("🕐 Kapan Dipakai", `<ul class="points">${it.when.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>`);
  if (it.signal) body += `<div class="signal">🔎 <b>Kata kunci:</b> ${esc(it.signal)}</div>`;
  if (it.breakdown) body += sec("🔬 Bedah Kalimat", it.breakdown.map((b) => `
    <div class="bd">
      <div class="bd-row">${b.parts.map(([w, r]) => `<span class="bd-part r-${r}"><b>${esc(w)}</b><small>${GRAMMAR_ROLES[r] || r}</small></span>`).join("")}
        <button class="speak" data-say="${esc(b.en)}" title="Dengar">🔊</button></div>
      <div class="idn">${esc(b.idn)}</div>
      ${b.note ? `<p class="bd-note">👉 ${esc(b.note)}</p>` : ""}
    </div>`).join(""));
  if (it.contrast) body += sec("🆚 Bandingkan", it.contrast.map(([a, b, d]) => `
    <div class="contrast">
      <div class="c-pair"><span class="mono">${esc(a)}</span>${b ? `<span class="vs">vs</span><span class="mono">${esc(b)}</span>` : ""}</div>
      <p>${esc(d)}</p>
    </div>`).join(""));
  if (why.length) body += sec("🤔 Kenapa Pakai Ini, Bukan yang Lain?", why
    .map(([q, a]) => `<div class="why"><b>${esc(q)}</b><p>${esc(a)}</p></div>`).join(""));
  if (it.examples) body += sec("💬 Contoh", it.examples.map((e) => `
    <div class="example"><div class="ex-body"><span class="tag ${e.tag}">${e.tag}</span>
      <div class="en">${esc(e.en)}</div><div class="idn">${esc(e.idn)}</div></div>
      <button class="speak" data-say="${esc(e.en)}" title="Dengar">🔊</button></div>`).join(""));
  if (it.tips) body += sec("💡 Tips & Trik", it.tips.map((t) => `<div class="tip">${esc(t)}</div>`).join(""));
  if (it.mistakes) body += sec("🚫 Kesalahan Umum", it.mistakes
    .map(([w, r]) => `<div class="mistake"><div class="wrong">❌ ${esc(w)}</div><div class="right">✅ ${esc(r)}</div></div>`).join(""));
  if (it.quiz) body += sec(`🧩 Quiz <span class="muted small">(+${XP.quiz} XP)</span>`, it.quiz.map((q, qi) => `
    <div class="quiz" data-gq="${qi}"><div class="q">${qi + 1}. ${esc(q.q)}</div>
      <div class="opts">${q.options.map((o, oi) => `<button class="opt ${s.quiz[qi] && oi === q.a ? "correct" : ""}" data-gopt="${oi}">${esc(o)}</button>`).join("")}</div>
    </div>`).join(""));

  body += `<div class="complete-box"><button class="btn ${s.learned ? "" : "green"}" data-glearn>
    ${s.learned ? "↩️ Tandai belum paham" : `✅ Sudah paham (+${XP.grammar} XP)`}</button></div>`;

  return `<details class="g-item ${s.learned ? "learned" : ""}" id="g-${it.id}" data-gid="${it.id}" ${gOpen.has(it.id) ? "open" : ""}>
    <summary><span class="t-emoji">${it.emoji}</span>
      <span class="t-body"><span class="t-title"><b>${esc(it.title)}</b></span><div class="muted small">${esc(it.short)}</div></span>
      <span>${s.learned ? "✅" : ""}</span><span class="chev">▶</span></summary>
    <div class="g-body">${body}</div></details>`;
}

function renderGrammar() {
  const items = allGrammarItems();
  const learned = items.filter((g) => state.grammar[g.id]?.learned).length;
  $("#g-count").textContent = `${learned}/${items.length} dipahami`;
  $("#g-bar").style.width = (learned / items.length) * 100 + "%";

  $("#g-chips").innerHTML = [["all", "🌐 Semua"], ["todo", "⏳ Belum paham"], ...GRAMMAR.map((g) => [g.id, `${g.emoji} ${g.title}`])]
    .map(([id, label]) => `<button class="chip ${gFilter === id ? "active" : ""}" data-gfilter="${id}">${esc(label)}</button>`).join("");

  const q = ($("#g-search").value || "").toLowerCase().trim();
  const match = (it) => !q || JSON.stringify([it, GRAMMAR_WHY[it.id] || []]).toLowerCase().includes(q);

  const html = GRAMMAR.filter((g) => gFilter === "all" || gFilter === "todo" || gFilter === g.id).map((g) => {
    const list = g.items.filter((it) => match(it) && (gFilter !== "todo" || !state.grammar[it.id]?.learned));
    if (!list.length) return "";
    return `<div class="g-group"><h2>${g.emoji} ${esc(g.title)}</h2><p class="muted small intro">${esc(g.intro)}</p>
      ${list.map(grammarItemHTML).join("")}</div>`;
  }).join("");
  $("#grammar-list").innerHTML = html || `<p class="empty card">Tidak ada yang cocok 🤷</p>`;
}

function openGrammarItem(id) {
  gFilter = "all";
  $("#g-search").value = "";
  gOpen.add(id);
  switchView("grammar");
  renderGrammar();
  setTimeout(() => document.getElementById("g-" + id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
}

function bindGrammarEvents() {
  const list = $("#grammar-list");
  list.addEventListener("toggle", (e) => {
    const d = e.target.closest?.("details[data-gid]");
    if (d) d.open ? gOpen.add(d.dataset.gid) : gOpen.delete(d.dataset.gid);
  }, true);

  const renderSuffix = (inp) => {
    const box = inp.parentElement;
    const out = box.querySelector("[data-suffix-out]");
    const type = box.querySelector("[data-suffix-type].active")?.dataset.suffixType || "verb";
    const rows = suffixForms(inp.value, type);
    out.innerHTML = rows.length
      ? rows.map((r) => `<div class="suffix-row"><span class="muted small">${esc(r.label)}</span>
          <b>${esc(r.form)}</b><span class="small">${esc(r.rule)}</span></div>`).join("") +
        `<p class="muted small" style="margin-top:6px">ℹ️ Pilih jenis kata yang sesuai. Contoh: 'study' sebagai kata kerja, 'company' sebagai kata benda, 'happy' sebagai kata sifat.</p>`
      : `<p class="muted small">Hasil akan muncul di sini.</p>`;
  };
  list.addEventListener("input", (e) => {
    const inp = e.target.closest("[data-suffix-input]");
    if (inp) renderSuffix(inp);
  });

  list.addEventListener("click", (e) => {
    const st = e.target.closest("[data-suffix-type]");
    if (st) {
      st.parentElement.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === st));
      return renderSuffix(st.parentElement.parentElement.querySelector("[data-suffix-input]"));
    }
    const d = e.target.closest("details[data-gid]");
    if (!d) return;
    const it = allGrammarItems().find((x) => x.id === d.dataset.gid);
    const s = grammarState(it.id);

    const opt = e.target.closest("[data-gopt]");
    if (opt) {
      const qi = Number(opt.closest("[data-gq]").dataset.gq), oi = Number(opt.dataset.gopt);
      if (s.quiz[qi]) return;
      if (oi === it.quiz[qi].a) {
        opt.classList.add("correct");
        s.quiz[qi] = true;
        addXP(XP.quiz, "Jawaban benar!");
      } else {
        opt.classList.remove("wrong"); void opt.offsetWidth; opt.classList.add("wrong");
        toast("Coba lagi! 💪");
      }
      return;
    }

    if (e.target.closest("[data-glearn]")) {
      s.learned = !s.learned;
      addXP(s.learned ? XP.grammar : -XP.grammar, s.learned ? `${it.title} dipahami!` : null);
      if (s.learned) confetti(40);
      if (s.learned && gFilter === "todo") gOpen.delete(it.id);
      renderGrammar();
      renderDashboard();
    }
  });

  $("#g-chips").addEventListener("click", (e) => {
    const c = e.target.closest("[data-gfilter]");
    if (c) { gFilter = c.dataset.gfilter; renderGrammar(); }
  });
  $("#g-search").oninput = renderGrammar;
}

// ---------- writing ----------
const W = { editingId: null, startedAt: null, activeMs: 0, lastKey: 0, saveT: null };

function wPrompt(id) { return WRITING_PROMPTS.find((p) => p.id === id) || WRITING_PROMPTS[0]; }
function wMinutes() { return Math.round(W.activeMs / 60000); }

function trackTyping() {
  // hitung waktu aktif: jeda > 2 menit tidak dihitung
  const now = Date.now();
  if (W.lastKey && now - W.lastKey < 120000) W.activeMs += now - W.lastKey;
  W.lastKey = now;
  $("#w-timer").textContent = `⏱️ ${wMinutes()} mnt`;
}

function saveDraft() {
  clearTimeout(W.saveT);
  W.saveT = setTimeout(() => {
    state.writingDraft = {
      editingId: W.editingId, promptId: $("#w-prompt").value, title: $("#w-title").value,
      text: $("#w-text").value, register: $("#w-register").value, checks: currentChecks(),
    };
    save();
  }, 400);
}

function currentChecks() { return [...document.querySelectorAll("#w-checks input")].map((c) => c.checked); }

function renderPromptInfo() {
  const p = wPrompt($("#w-prompt").value);
  $("#w-prompt-info").innerHTML = `
    <div class="w-meta"><span class="tag ${p.register}">${p.register}</span><span class="muted small">Level ${p.level} · target ≥ ${p.minWords} kata</span></div>
    <div class="w-task">${esc(p.task)}</div>
    <ul class="points">${p.hints.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
    <p class="muted small" style="margin-top:8px">💡 Klik frasa untuk menyisipkan ke tulisan:</p>
    <div class="w-meta">${p.phrases.map((f) => `<button class="phrase-chip" data-insert="${esc(f)}">${esc(f)}</button>`).join("")}</div>
    <div class="btn-row"><button class="btn small" id="w-template">📋 Pakai template</button></div>
    <details class="w-sample"><summary>👀 Lihat contoh jawaban</summary>
      <pre>${esc(p.sample)}</pre>
      <button class="btn small ghost" data-say="${esc(p.sample)}">🔊 Dengarkan</button>
    </details>`;
  updateWritingStats();
}

function updateWritingStats() {
  const text = $("#w-text").value;
  const s = writingStats(text);
  const p = wPrompt($("#w-prompt").value);
  $("#w-stats").innerHTML = `<span>📝 <b>${s.words}</b>/${p.minWords} kata</span><span>🔤 <b>${s.sentences}</b> kalimat</span>
    <span>📏 rata-rata <b>${s.avg}</b> kata/kalimat</span><span>🔗 <b>${s.transitions}</b> kata penghubung</span>`;
  $("#w-target-bar").style.width = Math.min(100, (s.words / p.minWords) * 100) + "%";
}

function renderChecks(checks = []) {
  $("#w-checks").innerHTML = WRITING_CHECKLIST.map((c, i) => `
    <label class="task ${checks[i] ? "checked" : ""}"><input type="checkbox" data-wcheck="${i}" ${checks[i] ? "checked" : ""} /><span>${esc(c)}</span></label>`).join("");
}

function loadEditor(d = {}) {
  W.editingId = d.editingId || null;
  $("#w-prompt").value = d.promptId || WRITING_PROMPTS[0].id;
  $("#w-title").value = d.title || "";
  $("#w-text").value = d.text || "";
  $("#w-register").value = d.register || wPrompt($("#w-prompt").value).register;
  renderChecks(d.checks);
  $("#w-results").innerHTML = "";
  const editing = W.editingId && state.writings.find((w) => w.id === W.editingId);
  $("#w-editor-title").textContent = editing ? `✏️ Mengedit: ${editing.title}` : "📝 Tulisan Baru";
  renderPromptInfo();
}

function runCheck() {
  const text = $("#w-text").value;
  const p = wPrompt($("#w-prompt").value);
  const res = checkWriting(text, $("#w-register").value);
  const s = writingStats(text);
  const icon = { error: "❌", warn: "⚠️", tip: "💡", ok: "✅" };
  const extras = [];
  if (!text.trim()) return ($("#w-results").innerHTML = `<p class="empty">Tulis sesuatu dulu ya ✍️</p>`);
  if (s.words >= p.minWords) extras.push({ level: "ok", msg: `Target ${p.minWords} kata tercapai (${s.words} kata).` });
  else extras.push({ level: "tip", msg: `Baru ${s.words} kata — targetnya ${p.minWords}. Tambahkan detail/contoh.` });
  if (s.sentences >= 4 && s.transitions === 0) extras.push({ level: "tip", msg: "Belum ada kata penghubung. Coba pakai: first, then, however, as a result, because." });
  const usedPhrases = p.phrases.filter((f) => {
    const key = f.split("…")[0].replace(/[:!👋]/gu, "").trim().toLowerCase();
    return key.length >= 3 && text.toLowerCase().includes(key);
  });
  if (usedPhrases.length) extras.push({ level: "ok", msg: `Kamu memakai ${usedPhrases.length} frasa yang disarankan 👍` });
  if (!res.length) extras.push({ level: "ok", msg: "Tidak ditemukan kesalahan umum. Mantap! 🎉" });

  $("#w-results").innerHTML = `<h3 style="margin-top:16px">🔍 Hasil Cek</h3>` + [...res, ...extras].map((r) => `
    <div class="w-result ${r.level}"><span>${icon[r.level]}</span><div>${r.found ? `<mark>"${esc(r.found)}"</mark> — ` : ""}${esc(r.msg)}</div></div>`).join("") +
    `<p class="muted small" style="margin-top:8px">Pengecek ini berbasis aturan umum (kesalahan khas pelajar Indonesia), bukan pengganti AI/Grammarly. Untuk koreksi menyeluruh, salin tulisanmu ke AI dengan prompt: <i>"Correct my English and explain each mistake in Indonesian."</i></p>`;
}

function saveWriting() {
  const text = $("#w-text").value.trim();
  if (!text) return toast("Tulisan masih kosong ✍️");
  const p = wPrompt($("#w-prompt").value);
  const words = writingStats(text).words;
  const minutes = wMinutes();
  const now = new Date().toISOString();
  const data = {
    promptId: p.id, title: $("#w-title").value.trim() || p.title, text, register: $("#w-register").value,
    words, checks: currentChecks(), updated: now,
  };

  let existing = W.editingId && state.writings.find((w) => w.id === W.editingId);
  if (existing) {
    Object.assign(existing, data, { minutes: (existing.minutes || 0) + minutes, revisions: (existing.revisions || 0) + 1 });
    addXP(5, "Revisi tersimpan");
  } else {
    existing = { id: uid(), created: now, revisions: 0, minutes, ...data };
    state.writings.push(existing);
    W.editingId = existing.id;
    const xp = 20 + Math.min(30, Math.floor(words / 10)) + (words >= p.minWords ? 10 : 0);
    addXP(xp, words >= p.minWords ? "Tulisan tersimpan + target kata tercapai!" : "Tulisan tersimpan!");
    if (words >= p.minWords) confetti(50);
  }

  if ($("#w-log").checked && minutes >= 1) {
    state.logs.push({ id: uid(), date: dateKey(), min: minutes, type: "writing", note: `Writing: ${data.title}` });
    addXP(minutes);
  }
  W.activeMs = 0; W.lastKey = 0;
  $("#w-timer").textContent = "⏱️ 0 mnt";
  $("#w-editor-title").textContent = `✏️ Mengedit: ${existing.title}`;
  saveDraft();
  renderAll();
}

function renderWriting() {
  const total = state.writings.reduce((a, w) => a + (w.words || 0), 0);
  $("#w-summary").textContent = `${state.writings.length} tulisan · ${total} kata`;
  const q = ($("#w-search").value || "").toLowerCase();
  const list = state.writings.filter((w) => (w.title + w.text).toLowerCase().includes(q))
    .sort((a, b) => b.updated.localeCompare(a.updated));
  $("#w-list").innerHTML = list.length
    ? list.map((w) => {
        const p = wPrompt(w.promptId);
        return `<li><div style="min-width:0">
            <b>${p.emoji} ${esc(w.title)}</b> <span class="tag ${w.register}">${w.register}</span>
            <div class="muted small">${w.updated.slice(0, 10)} · ${w.words} kata${w.revisions ? ` · ${w.revisions}x revisi` : ""}</div>
            <div class="w-preview">${esc(w.text)}</div></div>
          <div class="w-list-actions"><button class="del" data-wopen="${w.id}" title="Buka & edit">✏️</button>
            <button class="del" data-wdel="${w.id}" title="Hapus">🗑️</button></div></li>`;
      }).join("")
    : `<li class="empty">Belum ada tulisan tersimpan. Pilih latihan dan mulai menulis! 🚀</li>`;
}

function bindWritingEvents() {
  const levels = [...new Set(WRITING_PROMPTS.map((p) => p.level))];
  $("#w-prompt").innerHTML = levels.map((lv) => `<optgroup label="Level ${lv}">${WRITING_PROMPTS.filter((p) => p.level === lv)
    .map((p) => `<option value="${p.id}">${p.emoji} ${esc(p.title)}</option>`).join("")}</optgroup>`).join("");

  $("#w-prompt").onchange = () => {
    $("#w-register").value = wPrompt($("#w-prompt").value).register;
    renderPromptInfo(); saveDraft();
  };
  $("#w-text").addEventListener("input", () => { trackTyping(); updateWritingStats(); saveDraft(); });
  $("#w-title").addEventListener("input", saveDraft);
  $("#w-register").addEventListener("change", saveDraft);
  $("#w-checks").addEventListener("change", (e) => {
    const cb = e.target.closest("[data-wcheck]");
    if (cb) { cb.closest(".task").classList.toggle("checked", cb.checked); saveDraft(); }
  });

  $("#w-prompt-info").addEventListener("click", (e) => {
    const ins = e.target.closest("[data-insert]");
    const ta = $("#w-text");
    if (ins) {
      const txt = ins.dataset.insert.replace(/…/g, " ").replace(/\s+$/, " ");
      ta.focus();
      ta.setRangeText(txt, ta.selectionStart, ta.selectionEnd, "end");
      updateWritingStats(); saveDraft();
      return;
    }
    if (e.target.id === "w-template") {
      if (ta.value.trim() && !confirm("Ganti isi tulisan dengan template?")) return;
      ta.value = wPrompt($("#w-prompt").value).template;
      updateWritingStats(); saveDraft(); ta.focus();
    }
  });

  $("#w-check").onclick = runCheck;
  $("#w-save").onclick = saveWriting;
  $("#w-new").onclick = () => {
    if ($("#w-text").value.trim() && !confirm("Mulai tulisan baru? Draft yang belum disimpan akan hilang.")) return;
    loadEditor({ promptId: $("#w-prompt").value });
    saveDraft();
  };
  $("#w-search").oninput = renderWriting;

  $("#w-list").addEventListener("click", (e) => {
    const open = e.target.closest("[data-wopen]");
    if (open) {
      const w = state.writings.find((x) => x.id === open.dataset.wopen);
      loadEditor({ editingId: w.id, promptId: w.promptId, title: w.title, text: w.text, register: w.register, checks: w.checks });
      saveDraft();
      $("#w-editor-title").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const del = e.target.closest("[data-wdel]");
    if (del && confirm("Hapus tulisan ini?")) {
      state.writings = state.writings.filter((x) => x.id !== del.dataset.wdel);
      if (W.editingId === del.dataset.wdel) loadEditor({ promptId: $("#w-prompt").value });
      save(); renderWriting();
    }
  });

  loadEditor(state.writingDraft || {});
}

// ---------- settings ----------
function renderSettings() {
  $("#set-name").value = state.name;
  $("#set-goal").value = state.goal;
  $("#set-unlock").checked = state.unlockAll;
}

function renderAll() {
  renderHeaderStats();
  renderDashboard();
  renderRoadmap();
  renderGrammar();
  renderWriting();
  renderLog();
  renderVocab();
  renderSettings();
}

// ---------- events ----------
function switchView(name) {
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + name));
  document.querySelectorAll("#tabs button").forEach((b) => b.classList.toggle("active", b.dataset.view === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindEvents() {
  $("#tabs").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-view]");
    if (b) switchView(b.dataset.view);
  });

  document.addEventListener("click", (e) => {
    const topic = e.target.closest("[data-topic]");
    if (topic && !topic.closest(".locked")) return openTopic(topic.dataset.topic);

    const target = e.target.closest("[data-speak-target]");
    if (target) return speak($("#" + target.dataset.speakTarget).textContent);

    const say = e.target.closest("[data-say]");
    if (say && !say.closest("#modal")) return speak(say.dataset.say);

    const quick = e.target.closest("[data-quick]");
    if (quick) return addLog(dateKey(), 15, quick.dataset.quick, "Quick log");

    const delLog = e.target.closest("[data-del-log]");
    if (delLog) {
      const l = state.logs.find((x) => x.id === delLog.dataset.delLog);
      if (l && confirm("Hapus catatan ini?")) {
        state.logs = state.logs.filter((x) => x !== l);
        addXP(-l.min);
        renderAll();
      }
      return;
    }

    const delVocab = e.target.closest("[data-del-vocab]");
    if (delVocab) {
      state.vocab = state.vocab.filter((v) => v.id !== delVocab.dataset.delVocab);
      save(); renderAll();
      return;
    }

    if (e.target.closest("#fc")) return $("#fc").classList.toggle("flipped");
    const fc = e.target.closest("[data-fc]");
    if (fc) {
      if (fc.dataset.fc === "know") {
        const v = state.vocab.find((x) => x.id === fc.dataset.id);
        v.known = (v.known || 0) + 1;
        addXP(XP.flashcard, v.known >= 3 ? `"${v.word}" dikuasai! 🏆` : "Mantap!");
      } else {
        fcIndex++;
      }
      renderVocab();
      return;
    }
  });

  $("#new-phrase").onclick = () => {
    state.phraseIdx = (state.phraseIdx + 1 + Math.floor(Math.random() * (DAILY_PHRASES.length - 1))) % DAILY_PHRASES.length;
    save(); renderDashboard();
  };

  $("#modal-close").onclick = closeModal;
  $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#modal").hidden) closeModal(); });

  $("#log-type").innerHTML = ACTIVITY_TYPES.map((a) => `<option value="${a.id}">${a.label}</option>`).join("");
  $("#log-date").value = dateKey();
  $("#log-form").onsubmit = (e) => {
    e.preventDefault();
    addLog($("#log-date").value, $("#log-min").value, $("#log-type").value, $("#log-note").value.trim());
    $("#log-note").value = "";
  };

  $("#vocab-form").onsubmit = (e) => {
    e.preventDefault();
    state.vocab.push({ id: uid(), word: $("#v-word").value.trim(), mean: $("#v-mean").value.trim(), ex: $("#v-ex").value.trim(), known: 0 });
    e.target.reset();
    addXP(XP.vocab, "Kosakata baru!");
    renderAll();
  };
  $("#v-search").oninput = renderVocab;

  $("#settings-form").onsubmit = (e) => {
    e.preventDefault();
    state.name = $("#set-name").value.trim();
    state.goal = Math.max(5, Number($("#set-goal").value) || 30);
    state.unlockAll = $("#set-unlock").checked;
    save(); renderAll();
    toast("Tersimpan ✅");
  };

  $("#export-btn").onclick = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `english-quest-backup-${dateKey()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };
  $("#import-file").onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      state = { ...defaultState(), ...data };
      save(); renderAll();
      toast("Data berhasil di-import ✅");
    } catch {
      toast("File tidak valid ❌");
    }
    e.target.value = "";
  };
  $("#reset-btn").onclick = () => {
    if (confirm("Yakin reset semua progress? Data tidak bisa dikembalikan.")) {
      state = defaultState();
      save(); renderAll();
      toast("Progress direset");
    }
  };
}

// ---------- init ----------
if (state.phraseIdx === 0) state.phraseIdx = new Date().getDate() % DAILY_PHRASES.length;
bindEvents();
bindGrammarEvents();
bindWritingEvents();
renderAll();
