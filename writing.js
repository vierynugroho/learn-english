// =========================================================
//  WRITING LAB — prompt latihan menulis + pengecek otomatis
// =========================================================
const WRITING_PROMPTS = [
  {
    id: "w-free", level: "Semua", emoji: "📓", register: "informal", title: "Free Writing / Daily Journal",
    task: "Tulis bebas tentang harimu: apa yang kamu kerjakan, rasakan, atau pelajari hari ini.",
    minWords: 50,
    hints: ["Pakai Past Simple untuk yang sudah terjadi hari ini.", "Pakai 'I'm going to…' untuk rencana besok.", "Jangan takut salah — tulis dulu, cek belakangan."],
    phrases: ["Today I…", "I felt…", "I learned that…", "Tomorrow I'm going to…", "The best part of my day was…"],
    template: "Today I ...\n\nI learned that ...\n\nTomorrow I'm going to ...",
    sample: "Today I worked on a new login page. It took longer than I expected because the API kept returning errors. In the end, I found the problem: a missing header. I learned that reading the logs carefully saves a lot of time. Tomorrow I'm going to write tests for the login flow.",
  },
  {
    id: "w-intro-formal", level: "A1–A2", emoji: "🤝", register: "formal", title: "Self-Introduction (Formal)",
    task: "Perkenalkan dirimu seperti di awal interview atau ke klien baru (4–6 kalimat).",
    minWords: 50,
    hints: ["Urutan: Nama → peran → pengalaman → keahlian utama → hal yang kamu cari.", "Pakai Present Simple untuk peran, Present Perfect untuk pengalaman."],
    phrases: ["My name is…", "I'm a … based in …", "I have … years of experience in …", "I specialize in …", "I'm currently looking for …"],
    template: "My name is ... and I'm a ... based in ...\nI have ... years of experience in ...\nI specialize in ...\nI'm currently looking for ...",
    sample: "My name is Viery, and I'm a full-stack developer based in Indonesia. I have four years of experience building web applications, mainly with React and Node.js. I specialize in creating fast, accessible user interfaces. Recently, I have led the redesign of an e-commerce dashboard used by over 5,000 merchants. I'm currently looking for a remote role where I can grow with an international team.",
  },
  {
    id: "w-intro-slack", level: "A2", emoji: "👋", register: "informal", title: "Intro di Slack #introductions",
    task: "Kamu baru gabung tim remote. Tulis pesan perkenalan santai di channel #introductions.",
    minWords: 40,
    hints: ["Boleh pakai emoji & contraction (I'm, I'll).", "Tambahkan 1 fakta personal (hobi) supaya akrab.", "Tutup dengan ajakan ngobrol."],
    phrases: ["Hey everyone! 👋", "I'm super excited to join…", "I'll be working on…", "Fun fact:", "Feel free to reach out!"],
    template: "Hey everyone! 👋 I'm ... and I just joined as ...\nI'll be working on ...\nFun fact: ...\nFeel free to reach out anytime!",
    sample: "Hey everyone! 👋 I'm Viery and I just joined the platform team as a frontend engineer. I'm based in Jakarta (GMT+7), so I'll usually be online in your morning. I'll be working on the new billing UI. Fun fact: I make my own coffee every morning and I'm slightly obsessed with it ☕. Feel free to reach out anytime — looking forward to working with you all!",
  },
  {
    id: "w-routine", level: "A1–A2", emoji: "🔁", register: "neutral", title: "Rutinitas Kerja (Present Simple)",
    task: "Ceritakan rutinitas kerja harianmu dari pagi sampai selesai kerja.",
    minWords: 60,
    hints: ["Pakai Present Simple + adverb frekuensi (usually, always, sometimes).", "Ingat -s untuk he/she/it.", "Pakai kata urutan: first, then, after that, finally."],
    phrases: ["I usually start work at…", "First, I…", "After that,…", "In the afternoon,…", "I always finish by…"],
    template: "I usually start work at ...\nFirst, I ...\nAfter that, ...\nIn the afternoon, ...\nFinally, ...",
    sample: "I usually start work at 8 AM. First, I check Slack and my emails to see if anything urgent happened overnight. Then I join our daily stand-up at 9. After that, I focus on coding for about three hours. In the afternoon, I review pull requests and sometimes have meetings with the product team. I always finish by 5 PM and write a short update for the team.",
  },
  {
    id: "w-weekend", level: "A2", emoji: "🏖️", register: "informal", title: "Cerita Akhir Pekan (Past Simple)",
    task: "Ceritakan apa yang kamu lakukan akhir pekan lalu — seperti small talk Senin pagi.",
    minWords: 50,
    hints: ["Semua kejadian pakai Past Simple (went, saw, ate).", "Tambahkan perasaan: It was amazing / a bit tiring.", "Akhiri dengan bertanya balik."],
    phrases: ["Last weekend I…", "On Saturday,…", "It was really…", "The highlight was…", "How about you?"],
    template: "Last weekend I ...\nOn Saturday, ...\nOn Sunday, ...\nIt was ...\nHow was your weekend?",
    sample: "Last weekend was pretty relaxing. On Saturday, I went hiking with some friends near Bogor. The view at the top was amazing, but my legs were dead afterwards 😅. On Sunday, I stayed home, watched a movie, and cooked fried rice. How was your weekend?",
  },
  {
    id: "w-standup", level: "B1", emoji: "🧍", register: "neutral", title: "Daily Stand-up Update",
    task: "Tulis update stand-up tertulis (async): kemarin, hari ini, blocker.",
    minWords: 30,
    hints: ["Kemarin → Past Simple. Hari ini → will / going to / present continuous.", "Ringkas dan pakai bullet.", "Blocker: sebutkan siapa yang bisa bantu."],
    phrases: ["Yesterday: …", "Today: I'll …", "Blockers: none / waiting on …", "ETA: …", "FYI: …"],
    template: "Yesterday:\n- \n\nToday:\n- \n\nBlockers:\n- ",
    sample: "Yesterday:\n- Finished the payment form validation\n- Reviewed Anna's PR on the search API\n\nToday:\n- I'll connect the form to the new endpoint\n- I'm going to write unit tests for edge cases\n\nBlockers:\n- Waiting on the API key from @Budi — ETA this afternoon",
  },
  {
    id: "w-slack-help", level: "B1", emoji: "💬", register: "informal", title: "Minta Bantuan di Slack (Async)",
    task: "Kamu stuck dengan error. Tulis pesan minta bantuan ke rekan senior dalam SATU pesan lengkap.",
    minWords: 40,
    hints: ["Jangan cuma 'Hi, are you there?'.", "Format: konteks → masalah → yang sudah dicoba → pertanyaan spesifik.", "Pakai 'Could you…' supaya sopan."],
    phrases: ["Hey …! Quick question:", "I'm trying to…", "I've already tried…", "Could you point me in the right direction?", "No rush!"],
    template: "Hey ...! Quick question about ...\n\nI'm trying to ...\nBut I'm getting ...\n\nI've already tried:\n- \n- \n\nCould you ...? No rush 🙏",
    sample: "Hey Sarah! Quick question about the staging deploy.\n\nI'm trying to deploy the new auth service, but the pipeline fails with a 403 error at the push step.\n\nI've already tried:\n- Re-generating my access token\n- Checking the IAM role (it has write access)\n\nCould you point me in the right direction when you have a moment? No rush 🙏",
  },
  {
    id: "w-email-leave", level: "B1", emoji: "🏝️", register: "formal", title: "Email: Izin Cuti / Out of Office",
    task: "Tulis email ke manajer untuk mengajukan cuti 3 hari.",
    minWords: 60,
    hints: ["Subject yang jelas.", "Sebutkan tanggal, alasan singkat, dan rencana handover.", "Pakai would/could untuk permintaan."],
    phrases: ["I'm writing to request…", "from … to …", "I'll make sure that…", "… will cover for me", "Please let me know if…"],
    template: "Subject: Leave request – [dates]\n\nHi [Name],\n\nI'm writing to request ...\n\nBefore I leave, I'll ...\n... will cover for me while I'm away.\n\nPlease let me know if ...\n\nBest regards,\n[Your name]",
    sample: "Subject: Leave request – 12 to 14 November\n\nHi Mark,\n\nI'm writing to request three days of annual leave from 12 to 14 November for a family event.\n\nBefore I leave, I'll make sure the dashboard feature is merged and documented. Rina has kindly agreed to cover any urgent issues while I'm away.\n\nPlease let me know if these dates work for the team.\n\nBest regards,\nViery",
  },
  {
    id: "w-formal-informal", level: "B2", emoji: "🎩", register: "neutral", title: "Ubah Formal ↔ Informal",
    task: "Tulis ulang setiap kalimat di bawah ke register yang berlawanan:\n1. Can't make it today, sorry!\n2. I would appreciate it if you could review the document at your earliest convenience.\n3. Gimme a sec, checking.\n4. Please be informed that the meeting has been rescheduled.\n5. Thanks a ton, you're a lifesaver!",
    minWords: 40,
    hints: ["Formal: kalimat lengkap, tanpa singkatan, pakai would/could, unfortunately, please.", "Informal: contraction, kata pendek, emoji boleh."],
    phrases: ["Unfortunately, I am unable to…", "Could you take a look…", "Just a heads-up:", "Thank you very much for…"],
    template: "1. \n2. \n3. \n4. \n5. ",
    sample: "1. Unfortunately, I am unable to attend today. My apologies.\n2. Could you take a look at the doc when you get a chance?\n3. Please give me a moment while I check.\n4. Heads-up: we moved the meeting!\n5. Thank you very much for your help — I really appreciate it.",
  },
  {
    id: "w-incident", level: "B2", emoji: "🚨", register: "formal", title: "Incident Report (Passive Voice)",
    task: "Tulis laporan insiden singkat: apa yang terjadi, dampak, penyebab, perbaikan, pencegahan.",
    minWords: 80,
    hints: ["Gunakan passive untuk fokus ke sistem, bukan orang (was caused by, was fixed).", "Sebutkan waktu & angka dampak.", "Akhiri dengan langkah pencegahan (will be added)."],
    phrases: ["On [date], …", "… was caused by …", "Approximately … users were affected.", "The issue was resolved by …", "To prevent this, … will be …"],
    template: "Summary:\n\nImpact:\n\nRoot cause:\n\nResolution:\n\nNext steps:",
    sample: "Summary:\nOn 14 October, the checkout page was unavailable for 25 minutes.\n\nImpact:\nApproximately 1,200 users were affected, and around 80 orders could not be completed.\n\nRoot cause:\nThe outage was caused by an expired SSL certificate on the payment gateway.\n\nResolution:\nThe certificate was renewed and the service was restarted at 10:45.\n\nNext steps:\nAutomatic certificate renewal will be enabled, and an alert will be added 14 days before expiry.",
  },
  {
    id: "w-pr", level: "B2", emoji: "🔀", register: "neutral", title: "Pull Request Description",
    task: "Tulis deskripsi PR untuk fitur atau perbaikan yang baru kamu kerjakan.",
    minWords: 50,
    hints: ["Bagian: What, Why, How to test, Notes.", "Kalimat imperatif/pendek: 'Add…', 'Fix…', 'Refactor…'.", "Sebutkan hal yang perlu diperhatikan reviewer."],
    phrases: ["This PR adds/fixes…", "Why: …", "How to test: …", "Note: …", "Closes #…"],
    template: "## What\nThis PR ...\n\n## Why\n...\n\n## How to test\n1. \n2. \n\n## Notes\n- ",
    sample: "## What\nThis PR adds pagination to the orders table and fixes the sorting bug on the date column.\n\n## Why\nLarge merchants have 10k+ orders, which made the page slow to load.\n\n## How to test\n1. Log in as a merchant with many orders\n2. Open /orders and check that 20 rows are shown per page\n3. Sort by date and confirm the order is correct\n\n## Notes\n- I haven't changed the API; pagination is handled with the existing `limit` param.",
  },
  {
    id: "w-review", level: "C1", emoji: "🎯", register: "neutral", title: "Komentar Code Review yang Diplomatis",
    task: "Tulis 5 komentar code review untuk masalah berbeda (nama variabel, performa, missing test, duplikasi, security) dengan nada sopan.",
    minWords: 50,
    hints: ["Pakai pertanyaan & softener: Have you considered…? What do you think about…?", "Gunakan label: nit:, suggestion:, question:", "Puji yang bagus juga!"],
    phrases: ["Nit: …", "Have you considered…?", "What do you think about…?", "This might cause…", "Nice work on…!"],
    template: "1. Nit: \n2. Suggestion: \n3. Question: \n4. \n5. ",
    sample: "1. Nit: maybe rename `d` to `orderDate` so it's easier to read?\n2. Suggestion: this loop runs a query for each item — have you considered fetching them in one batch?\n3. Question: could we add a test for the empty-cart case?\n4. This logic looks similar to `calculateTotal()` in utils. What do you think about reusing it?\n5. This might expose the API key in the client bundle. Could we move it to the server? Otherwise, nice work on the clean structure! 👏",
  },
  {
    id: "w-star", level: "C1", emoji: "⭐", register: "formal", title: "Jawaban Interview STAR",
    task: "Jawab: 'Tell me about a time you solved a difficult problem.' dengan format STAR.",
    minWords: 120,
    hints: ["Situation & Task: singkat (Past Simple).", "Action: paling panjang, fokus pada 'I', bukan 'we'.", "Result: angka + pelajaran."],
    phrases: ["In my previous role at…", "I was responsible for…", "First, I… Then, I…", "As a result,…", "What I learned was…"],
    template: "Situation:\n\nTask:\n\nAction:\n\nResult:",
    sample: "Situation: In my previous role at an e-commerce startup, our product page became very slow during a big sale, and the bounce rate doubled.\n\nTask: I was responsible for finding the cause and fixing it within two days.\n\nAction: First, I profiled the page and found that we were loading over 200 product images at once. I then implemented lazy loading and moved the images to a CDN. I also added caching for the product API and worked with the backend team to optimize two slow queries.\n\nResult: As a result, the load time dropped from 6 seconds to 1.8 seconds, and conversion increased by 15%. What I learned was the importance of measuring first before optimizing.",
  },
  {
    id: "w-cover", level: "C2", emoji: "✉️", register: "formal", title: "Cover Letter Singkat",
    task: "Tulis cover letter 3 paragraf untuk posisi remote impianmu.",
    minWords: 150,
    hints: ["P1: posisi & kenapa perusahaan ini (spesifik).", "P2: 2–3 bukti pencapaian relevan (angka!).", "P3: penutup & ajakan interview.", "Hindari 'I am writing to apply…' yang terlalu klise di awal — langsung ke antusiasme."],
    phrases: ["I'm excited to apply for…", "What draws me to [Company] is…", "In my current role, I…", "I would welcome the opportunity to…", "Thank you for your time and consideration."],
    template: "Dear Hiring Team,\n\nI'm excited to apply for ... What draws me to ... is ...\n\nIn my current role at ..., I ...\n\nI would welcome the opportunity to ...\n\nThank you for your time and consideration.\n\nBest regards,\n...",
    sample: "Dear Hiring Team,\n\nI'm excited to apply for the Senior Frontend Engineer role at Acme. What draws me to Acme is your focus on making financial tools simple for small businesses — a problem I care about deeply after growing up in a family that ran a small shop.\n\nIn my current role at ShopKu, I led the rebuild of our merchant dashboard in React and TypeScript, which reduced page load time by 45% and support tickets by 30%. I have also worked fully remotely with teams across four time zones, so I'm comfortable with async communication and clear written updates.\n\nI would welcome the opportunity to discuss how my experience could help Acme's frontend team. Thank you for your time and consideration.\n\nBest regards,\nViery",
  },
  {
    id: "w-linkedin", level: "C2", emoji: "💼", register: "neutral", title: "LinkedIn 'About' Section",
    task: "Tulis bagian About LinkedIn yang menarik recruiter luar negeri.",
    minWords: 100,
    hints: ["Kalimat pertama = hook (apa yang kamu lakukan & untuk siapa).", "Sebutkan stack, pencapaian, dan nilai yang kamu tawarkan.", "Tutup dengan 'Open to remote opportunities'."],
    phrases: ["I help … build …", "Over the past … years, I've…", "My core stack:", "What I enjoy most is…", "Open to remote roles in…"],
    template: "I help ... build ...\n\nOver the past ... years, I've ...\n\nMy core stack: ...\n\nWhat I enjoy most is ...\n\n📩 Open to remote opportunities ...",
    sample: "I help startups build fast, reliable web products that users love.\n\nOver the past five years, I've shipped features used by more than 100,000 people, from payment flows to real-time dashboards. I enjoy turning messy requirements into clean, maintainable code.\n\nMy core stack: TypeScript, React, Node.js, PostgreSQL, AWS.\n\nWhat I enjoy most is working closely with designers and product managers to solve real user problems.\n\n📩 Open to remote opportunities with product-focused teams in Europe and the US.",
  },
];

// Checklist umum untuk self-review
const WRITING_CHECKLIST = [
  "Setiap kalimat punya subjek + kata kerja",
  "Tense sudah sesuai waktu (past untuk yang sudah terjadi)",
  "He/She/It → -s / has / does / is",
  "Register sesuai (formal / informal) dengan pembaca",
  "Kalimat tidak terlalu panjang (maks ~25 kata)",
  "Sudah dibaca ulang dengan suara keras",
];

// ---------------------------------------------------------
//  Pengecek otomatis (berbasis aturan sederhana — bukan pengganti AI/Grammarly)
//  level: "error" | "warn" | "tip"
// ---------------------------------------------------------
const UNCOUNTABLE = ["informations", "advices", "feedbacks", "softwares", "equipments", "knowledges", "furnitures", "researches", "homeworks"];

const WRITING_RULES = [
  { re: /(^|[^\w'])i(?=[\s,.!?']|$)/g, level: "error", msg: "'i' harus kapital → 'I'." },
  { re: /\b(am|is|are)\s+(agree|disagree|understand|know|want|need|believe)\b/gi, level: "error", msg: "Jangan pakai am/is/are sebelum kata kerja dasar. 'I am agree' → 'I agree' (atau 'I am working' kalau continuous)." },
  { re: /\blook(s|ing|ed)?\s+forward\s+to\s+(?!\w+ing\b)(?!(?:the|your|our|my|their|his|her|it|this|that|a|an|meeting|call|chat|next)\b)\w+/gi, level: "error", msg: "'look forward to' diikuti V-ing: 'look forward to hearing from you'." },
  { re: /\bsince\s+\d+\s+(years?|months?|weeks?|days?|hours?)\b/gi, level: "error", msg: "Durasi pakai 'for', bukan 'since': 'for 3 years' / 'since 2021'." },
  { re: /(?<!\b(?:does|did|doesn't|didn't|can|could|will|would|should|must|might|may|to|let|make|help|if)\s)\b(he|she|it)\s+(have|don't|are)\b/gi, level: "error", msg: "He/She/It → has / does / doesn't / is / was." },
  { re: /\b(does|did|doesn't|didn't|does not|did not)\s+(\w+ed|went|wrote|made|sent|got|had|was|were)\b/gi, level: "error", msg: "Setelah does/did, kata kerja kembali ke bentuk dasar (V1): 'didn't sent' → 'didn't send'." },
  { re: /\b(can|could|should|would|will|must|might|may)\s+to\s+\w+/gi, level: "error", msg: "Modal tidak pakai 'to': 'can to go' → 'can go'." },
  { re: /\b(can|could|should|will|must|might|may)\s+(is|are|was|were|has|does|goes|works|sends|makes)\b/gi, level: "error", msg: "Setelah modal pakai V1 polos: 'can goes' → 'can go', 'will is' → 'will be'." },
  { re: /\b(should|could|would|must)\s+of\b/gi, level: "error", msg: "'should of' salah tulis → 'should have' (should've)." },
  { re: /\bhave\s+\w+\s*(\w+\s+)?(yesterday|last\s+(week|month|year|night)|ago)\b/gi, level: "warn", msg: "Ada waktu spesifik lampau (yesterday/last/ago)? Pakai Past Simple, bukan Present Perfect." },
  { re: /\bsuggest(s|ed)?\s+to\s+\w+/gi, level: "warn", msg: "'suggest to do' → 'suggest doing' atau 'suggest that we do'." },
  { re: /\bdiscuss(ed|ing)?\s+about\b/gi, level: "error", msg: "'discuss' tidak pakai 'about': 'discuss the plan'." },
  { re: /\bmore\s+(better|easier|faster|bigger|worse)\b/gi, level: "error", msg: "Double comparative: 'more better' → 'better'." },
  { re: /\btold\s+that\b/gi, level: "error", msg: "'tell' butuh orang: 'told me that…' atau pakai 'said that…'." },
  { re: /\bplease\s+kindly\b/gi, level: "warn", msg: "'please kindly' berlebihan — pilih salah satu: 'please' saja." },
  { re: /\brevert\s+back\b/gi, level: "warn", msg: "'revert back' membingungkan bagi native — pakai 'reply' / 'get back to me'." },
  { re: /\bthe\s+(my|your|our|their|his|her)\b/gi, level: "error", msg: "Jangan pakai 'the' sebelum my/your/our: 'the my project' → 'my project'." },
  { re: /\b(\w+)\s+\1\b/gi, level: "warn", msg: "Kata berulang dua kali." },
  { re: /\bthanks?\s+for\s+(?!(?:the|your|you|all|this|that|a|an|my|our|everything|it|being|everyone|joining|helping)\b)(?!\w+ing\b)\w+/gi, level: "warn", msg: "Jika kata setelah 'for' adalah kata kerja, pakai -ing: 'thanks for help me' → 'thanks for helping me'." },
  { re: /\bhope\s+you\s+are\s+fine\b/gi, level: "tip", msg: "Lebih natural: 'I hope you're doing well.'" },
  { re: /\bvery\s+(good|bad|big|small|important|happy|tired)\b/gi, level: "tip", msg: "Variasi kata: very good → excellent, very important → crucial, very tired → exhausted." },
];

const FORMAL_AVOID = /\b(gonna|wanna|gotta|lemme|gimme|kinda|sorta|dunno|u|ur|pls|plz|thx|btw|lol|tbh|asap|yeah|yep|nope|hey)\b/gi;
const CONTRACTION = /\b\w+'(m|re|s|ll|ve|d|t)\b/gi;
const TRANSITIONS = /\b(however|therefore|also|first|then|after that|finally|in addition|as a result|for example|because|although|so|but|moreover)\b/gi;

function checkWriting(text, register) {
  const out = [];
  if (!text.trim()) return out;

  for (const r of WRITING_RULES) {
    const seen = new Set();
    for (const m of text.matchAll(r.re)) {
      const found = m[0].trim();
      if (r.level === "warn" && r.msg.startsWith("Kata berulang") && /^(had|that)\s/i.test(found)) continue;
      if (seen.has(found.toLowerCase())) continue;
      seen.add(found.toLowerCase());
      out.push({ level: r.level, found, msg: r.msg });
    }
  }

  for (const w of UNCOUNTABLE) {
    if (new RegExp(`\\b${w}\\b`, "i").test(text)) out.push({ level: "error", found: w, msg: `'${w}' tidak bisa jamak (uncountable) → '${w.replace(/s$/, "")}'.` });
  }

  if (register === "formal") {
    const slang = [...new Set((text.match(FORMAL_AVOID) || []).map((s) => s.toLowerCase()))];
    if (slang.length) out.push({ level: "warn", found: slang.join(", "), msg: "Kata informal/slang di tulisan formal — ganti dengan bentuk lengkap." });
    const con = text.match(CONTRACTION) || [];
    if (con.length > 3) out.push({ level: "tip", found: `${con.length} contraction`, msg: "Tulisan formal: kurangi contraction (I'm → I am, don't → do not)." });
  }

  // kalimat panjang & huruf awal
  const sentences = text.split(/(?<=[.!?])\s+|\n+/).map((s) => s.trim()).filter(Boolean);
  sentences.forEach((s) => {
    const n = s.split(/\s+/).length;
    if (n > 30) out.push({ level: "tip", found: s.slice(0, 40) + "…", msg: `Kalimat ${n} kata — coba pecah jadi 2 supaya lebih jelas.` });
    if (/^[a-z]/.test(s) && !/^(-|\d|[a-z]+:)/.test(s)) out.push({ level: "warn", found: s.slice(0, 30) + "…", msg: "Kalimat sebaiknya diawali huruf kapital." });
  });
  if (/ {2,}/.test(text)) out.push({ level: "tip", found: "spasi ganda", msg: "Ada spasi ganda." });

  return out;
}

function writingStats(text) {
  const words = (text.match(/[A-Za-z'’-]+/g) || []).length;
  const sentences = text.split(/[.!?\n]+/).filter((s) => s.trim().length > 1).length;
  const transitions = (text.match(TRANSITIONS) || []).length;
  return { words, sentences, transitions, avg: sentences ? Math.round(words / sentences) : 0 };
}
