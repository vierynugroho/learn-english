// =========================================================
//  CURRICULUM DATA — dari dasar (A1) sampai Remote-Ready (C2)
//  tag contoh: "formal" | "informal" | "neutral"
// =========================================================
const CURRICULUM = [
  {
    id: "l1", emoji: "🌱", name: "Foundation", cefr: "A1",
    goal: "Bisa memperkenalkan diri & memahami kalimat sangat sederhana.",
    topics: [
      {
        id: "l1-sounds", emoji: "🔤", title: "Alphabet & Pronunciation",
        summary: "Kenali bunyi huruf bahasa Inggris — beda dengan bahasa Indonesia, terutama vokal.",
        points: [
          "Vokal: A (ei), E (i:), I (ai), O (ou), U (yu:).",
          "Bunyi 'th' ada dua: think /θ/ (lidah di gigi, tanpa suara) & this /ð/ (bersuara).",
          "Belajar spell nama & email kamu — ini sering ditanya saat call kerja.",
        ],
        examples: [
          { tag: "neutral", en: "My name is Viery. That's V-I-E-R-Y.", idn: "Nama saya Viery. Dieja V-I-E-R-Y." },
          { tag: "neutral", en: "My email is viery at gmail dot com.", idn: "Email saya viery@gmail.com." },
          { tag: "neutral", en: "Three, think, thank you, this, that.", idn: "Latihan bunyi 'th'." },
        ],
        tasks: [
          "Ucapkan alfabet A–Z dengan keras 2x",
          "Spell nama lengkap & email kamu dalam bahasa Inggris",
          "Rekam suara 5 kata dengan 'th', lalu dengarkan ulang",
        ],
        quiz: [
          { q: "Huruf 'I' dalam alfabet Inggris dibaca…", options: ["i", "ai", "ei"], a: 1 },
          { q: "'@' dalam email dibaca…", options: ["at", "a", "et"], a: 0 },
        ],
      },
      {
        id: "l1-greet", emoji: "👋", title: "Greetings & Introductions",
        summary: "Cara menyapa & memperkenalkan diri — versi santai vs profesional.",
        points: [
          "Formal: Good morning / Nice to meet you / How do you do.",
          "Informal: Hey / Hi there / What's up? / How's it going?",
          "Struktur intro: Nama → Peran → Asal → 1 fakta menarik.",
        ],
        examples: [
          { tag: "formal", en: "Good morning. My name is Viery, and I'm a software developer from Indonesia.", idn: "Selamat pagi. Saya Viery, developer dari Indonesia." },
          { tag: "informal", en: "Hey! I'm Viery, I build web stuff. Nice to meet you!", idn: "Hai! Aku Viery, aku bikin web. Senang kenalan!" },
          { tag: "informal", en: "A: How's it going? — B: Pretty good, thanks! You?", idn: "A: Gimana kabar? — B: Baik, makasih! Kamu?" },
        ],
        tasks: [
          "Tulis self-intro 3 kalimat (versi formal)",
          "Tulis self-intro 3 kalimat (versi santai)",
          "Ucapkan keduanya di depan cermin / rekam",
        ],
        quiz: [
          { q: "Mana yang paling formal?", options: ["What's up?", "How do you do?", "Hey there!"], a: 1 },
          { q: "Jawaban natural untuk 'How's it going?'", options: ["I'm going to office.", "Pretty good, thanks!", "Yes, it is going."], a: 1 },
        ],
      },
      {
        id: "l1-tobe", emoji: "🧱", title: "To Be (am / is / are)",
        summary: "Pondasi kalimat bahasa Inggris. Hampir semua kalimat butuh kata kerja.",
        points: [
          "I am · You/We/They are · He/She/It is.",
          "Negatif: I'm not, he isn't, they aren't.",
          "Tanya: Are you ready? Is it done?",
        ],
        examples: [
          { tag: "neutral", en: "I am a developer. She is my manager.", idn: "Saya developer. Dia manajer saya." },
          { tag: "neutral", en: "Are you available tomorrow?", idn: "Apakah kamu senggang besok?" },
          { tag: "informal", en: "I'm not sure, tbh.", idn: "Aku nggak yakin, jujur." },
        ],
        tasks: ["Tulis 5 kalimat positif, 5 negatif, 5 tanya dengan to be"],
        quiz: [
          { q: "They ___ in a meeting.", options: ["is", "am", "are"], a: 2 },
          { q: "___ she your teammate?", options: ["Is", "Are", "Am"], a: 0 },
        ],
      },
      {
        id: "l1-numbers", emoji: "🔢", title: "Numbers, Dates & Time",
        summary: "Penting untuk jadwal meeting lintas timezone!",
        points: [
          "13 (thirTEEN) vs 30 (THIRty) — tekanan berbeda.",
          "Tanggal: October 15th (US) / 15 October (UK).",
          "Waktu: 9 AM, half past three, quarter to five. Timezone: GMT+7, PST, CET.",
        ],
        examples: [
          { tag: "formal", en: "Would 3 PM Jakarta time, which is 10 AM CET, work for you?", idn: "Apakah jam 3 sore WIB (10 pagi CET) cocok?" },
          { tag: "informal", en: "Let's sync at 9ish my time?", idn: "Kita ngobrol sekitar jam 9 waktuku?" },
        ],
        tasks: [
          "Hitung 1–100 dengan keras",
          "Sebutkan tanggal lahir & jam sekarang dalam bahasa Inggris",
          "Konversi jam kerja kamu ke 3 timezone (PST, CET, GMT)",
        ],
        quiz: [
          { q: "'Quarter to five' artinya…", options: ["5:15", "4:45", "4:15"], a: 1 },
          { q: "Tekanan pada 'fifty' ada di…", options: ["FIF-ty", "fif-TY", "sama saja"], a: 0 },
        ],
      },
      {
        id: "l1-present", emoji: "🔁", title: "Simple Present & Daily Routine",
        summary: "Menceritakan kebiasaan & pekerjaan sehari-hari.",
        points: [
          "He/She/It + verb-s: She works remotely.",
          "Negatif: don't / doesn't + verb dasar.",
          "Adverb frekuensi: always, usually, sometimes, never.",
        ],
        examples: [
          { tag: "neutral", en: "I usually start work at 8 AM and check Slack first.", idn: "Aku biasanya mulai kerja jam 8 dan cek Slack dulu." },
          { tag: "neutral", en: "He doesn't work on weekends.", idn: "Dia tidak bekerja di akhir pekan." },
        ],
        tasks: ["Tulis rutinitas harianmu (min. 8 kalimat)", "Pelajari 20 kosakata kerja: deploy, deadline, task, meeting, dll"],
        quiz: [
          { q: "She ___ code reviews every day.", options: ["do", "does", "doing"], a: 1 },
          { q: "I ___ drink coffee at night.", options: ["doesn't", "don't", "not"], a: 1 },
        ],
      },
    ],
  },
  {
    id: "l2", emoji: "🌿", name: "Elementary", cefr: "A2",
    goal: "Bisa small talk & bercerita tentang masa lalu dengan sederhana.",
    topics: [
      {
        id: "l2-past", emoji: "⏪", title: "Past Simple",
        summary: "Menceritakan apa yang sudah terjadi — penting untuk daily stand-up.",
        points: [
          "Regular: worked, fixed, deployed. Irregular: went, did, wrote, broke.",
          "Negatif: didn't + verb dasar. Tanya: Did you…?",
          "Stand-up: Yesterday I…, Today I'll…, Blockers: …",
        ],
        examples: [
          { tag: "neutral", en: "Yesterday I fixed the login bug and wrote some tests.", idn: "Kemarin aku memperbaiki bug login dan menulis test." },
          { tag: "informal", en: "Did you catch the game last night?", idn: "Kamu nonton pertandingan semalam?" },
        ],
        tasks: ["Hafalkan 30 irregular verbs paling umum", "Tulis 'stand-up update' kemarin kamu dalam bahasa Inggris"],
        quiz: [
          { q: "I ___ the PR yesterday.", options: ["merge", "merged", "merging"], a: 1 },
          { q: "Past form 'write' adalah…", options: ["writed", "wrote", "written"], a: 1 },
        ],
      },
      {
        id: "l2-continuous", emoji: "▶️", title: "Present Continuous",
        summary: "Hal yang sedang terjadi sekarang / dalam periode ini.",
        points: ["am/is/are + verb-ing.", "Sering dipakai untuk status kerja: I'm working on…"],
        examples: [
          { tag: "neutral", en: "I'm currently working on the payment feature.", idn: "Aku sedang mengerjakan fitur pembayaran." },
          { tag: "informal", en: "Brb, grabbing a coffee ☕", idn: "Bentar, ambil kopi dulu." },
        ],
        tasks: ["Deskripsikan 5 hal yang sedang kamu lakukan minggu ini"],
        quiz: [{ q: "We ___ migrating the database right now.", options: ["are", "is", "do"], a: 0 }],
      },
      {
        id: "l2-questions", emoji: "❓", title: "WH-Questions",
        summary: "What, Where, When, Why, Who, How — kunci untuk klarifikasi tugas.",
        points: ["Struktur: WH + aux + subject + verb?", "Klarifikasi sopan: Could you clarify…? / What do you mean by…?"],
        examples: [
          { tag: "formal", en: "Could you clarify what the deadline is for this task?", idn: "Bisa dijelaskan deadline tugas ini kapan?" },
          { tag: "informal", en: "Wait, what do you mean by 'ASAP'?", idn: "Bentar, maksudnya 'ASAP' itu gimana?" },
        ],
        tasks: ["Buat 10 pertanyaan WH tentang project kerja", "Latih bertanya balik saat tidak paham (3 variasi)"],
        quiz: [{ q: "___ did you choose React?", options: ["Why", "Who", "Where"], a: 0 }],
      },
      {
        id: "l2-prep", emoji: "📍", title: "Prepositions (in / on / at)",
        summary: "Sering salah! Hafalkan polanya.",
        points: ["at: jam (at 5 PM). on: hari/tanggal (on Monday). in: bulan/tahun (in May).", "Kerja: on the team, in the meeting, at the office."],
        examples: [
          { tag: "neutral", en: "The meeting is on Monday at 10 AM.", idn: "Meeting hari Senin jam 10." },
          { tag: "neutral", en: "I've been in tech since 2020.", idn: "Aku di dunia tech sejak 2020." },
        ],
        tasks: ["Kerjakan 20 soal latihan preposition online"],
        quiz: [
          { q: "See you ___ Friday!", options: ["in", "on", "at"], a: 1 },
          { q: "I was born ___ 1998.", options: ["in", "on", "at"], a: 0 },
        ],
      },
      {
        id: "l2-smalltalk", emoji: "☕", title: "Small Talk",
        summary: "Pembuka meeting dengan rekan luar negeri. Bikin kamu terlihat ramah.",
        points: ["Topik aman: cuaca, weekend, hobi, makanan, liburan.", "Hindari: gaji, agama, politik.", "Teknik: jawab + tanya balik."],
        examples: [
          { tag: "informal", en: "Any plans for the weekend?", idn: "Ada rencana akhir pekan?" },
          { tag: "informal", en: "It's super hot here in Jakarta. How's the weather over there?", idn: "Di Jakarta panas banget. Cuaca di sana gimana?" },
          { tag: "formal", en: "I hope you had a pleasant weekend.", idn: "Semoga akhir pekan Anda menyenangkan." },
        ],
        tasks: ["Siapkan 5 pertanyaan small talk favorit", "Praktik small talk 5 menit (dengan teman / AI / tutor)"],
        quiz: [{ q: "Topik small talk yang AMAN:", options: ["Gaji rekan", "Rencana weekend", "Politik"], a: 1 }],
      },
    ],
  },
  {
    id: "l3", emoji: "🌳", name: "Intermediate", cefr: "B1",
    goal: "Bisa ikut meeting sederhana & menulis email kerja yang jelas.",
    topics: [
      {
        id: "l3-perfect", emoji: "✅", title: "Present Perfect",
        summary: "Pengalaman & hasil yang relevan sekarang. Sering di interview!",
        points: ["have/has + V3: I have worked with Node.js for 3 years.", "already / yet / just / ever / since / for."],
        examples: [
          { tag: "formal", en: "I have led three projects from design to deployment.", idn: "Saya telah memimpin tiga proyek dari desain hingga deploy." },
          { tag: "informal", en: "Have you pushed the fix yet?", idn: "Fix-nya udah di-push belum?" },
        ],
        tasks: ["Tulis 10 kalimat pengalaman kerja dengan present perfect"],
        quiz: [
          { q: "I ___ already finished the report.", options: ["have", "has", "had been"], a: 0 },
          { q: "She has worked here ___ 2021.", options: ["for", "since", "from"], a: 1 },
        ],
      },
      {
        id: "l3-future", emoji: "🔮", title: "Future: will / going to",
        summary: "Janji, rencana, dan estimasi.",
        points: ["will: keputusan spontan / janji — I'll look into it.", "going to: rencana — We're going to release next week."],
        examples: [
          { tag: "neutral", en: "I'll get back to you by end of day.", idn: "Saya kabari lagi sebelum akhir hari." },
          { tag: "informal", en: "Gonna wrap this up and log off.", idn: "Mau beresin ini terus offline." },
        ],
        tasks: ["Tulis rencana kerja minggu depan (going to)", "Hafalkan: EOD, EOW, ETA, ASAP, FYI"],
        quiz: [{ q: "Phone rings. 'I ___ get it!'", options: ["am going to", "will", "going"], a: 1 }],
      },
      {
        id: "l3-modals", emoji: "🙏", title: "Modals untuk Sopan Santun",
        summary: "could, would, might, should — kunci terdengar sopan & profesional.",
        points: [
          "Can you…? → Could you…? → Would you mind…? (makin sopan).",
          "Saran halus: You might want to… / It might be worth…",
        ],
        examples: [
          { tag: "formal", en: "Would you mind reviewing my PR when you have a moment?", idn: "Boleh minta tolong review PR saya kalau ada waktu?" },
          { tag: "informal", en: "Can you take a look at this?", idn: "Bisa lihat ini?" },
          { tag: "formal", en: "You might want to double-check the config.", idn: "Mungkin perlu cek ulang config-nya." },
        ],
        tasks: ["Ubah 10 kalimat perintah langsung jadi permintaan sopan"],
        quiz: [{ q: "Paling sopan:", options: ["Review my code.", "Can you review my code?", "Would you mind reviewing my code?"], a: 2 }],
      },
      {
        id: "l3-email", emoji: "📧", title: "Writing Work Emails",
        summary: "Struktur email: Subject jelas → Greeting → Tujuan → Detail → Action → Closing.",
        points: [
          "Formal: Dear Ms. Smith, … Best regards,",
          "Semi-formal (paling umum): Hi Sarah, … Thanks, / Cheers,",
          "Baris pertama langsung ke tujuan: I'm writing to…",
        ],
        examples: [
          { tag: "formal", en: "Dear Mr. Lee, I'm writing to follow up on our conversation regarding the backend role.", idn: "Pak Lee, saya menindaklanjuti obrolan kita soal posisi backend." },
          { tag: "informal", en: "Hi Tom, quick question — is the staging server down?", idn: "Hai Tom, pertanyaan singkat — server staging mati ya?" },
          { tag: "neutral", en: "Please let me know if you have any questions. Best, Viery", idn: "Kabari saya jika ada pertanyaan. Salam, Viery" },
        ],
        tasks: ["Tulis 1 email formal (follow-up lamaran)", "Tulis 1 email semi-formal (minta bantuan rekan)"],
        quiz: [{ q: "Closing email yang FORMAL:", options: ["Cheers,", "Best regards,", "Later!"], a: 1 }],
      },
      {
        id: "l3-phrasal", emoji: "🧩", title: "Common Phrasal Verbs",
        summary: "Native speaker pakai ini terus — terutama di kantor tech.",
        points: ["set up, figure out, look into, follow up, reach out, roll out, back up, hand over.", "Formal alternatif: investigate (look into), contact (reach out)."],
        examples: [
          { tag: "informal", en: "Let me figure out what's going on.", idn: "Biar aku cari tahu ada apa." },
          { tag: "formal", en: "I will investigate the issue and follow up shortly.", idn: "Saya akan selidiki masalahnya dan segera kabari." },
          { tag: "neutral", en: "Feel free to reach out if you need anything.", idn: "Hubungi saja kalau butuh apa-apa." },
        ],
        tasks: ["Hafalkan 20 phrasal verbs kerja + buat kalimat", "Tambahkan ke Vocab Bank di app ini"],
        quiz: [{ q: "'Look into' paling dekat dengan…", options: ["investigate", "ignore", "look at quickly"], a: 0 }],
      },
      {
        id: "l3-listen", emoji: "🎧", title: "Listening Habit",
        summary: "Telinga terbiasa = bicara lebih lancar. Mulai dengan konten yang kamu suka.",
        points: ["Podcast: 6 Minute English (BBC), Syntax.fm, Lex Fridman.", "YouTube tech talks dengan subtitle Inggris (bukan Indonesia!).", "Shadowing: dengar 1 kalimat → ulangi persis."],
        examples: [{ tag: "neutral", en: "Could you say that again a bit more slowly?", idn: "Bisa diulang sedikit lebih pelan?" }],
        tasks: ["Dengarkan 3 episode podcast (≥15 menit)", "Shadowing 10 menit dari 1 video", "Tonton 1 tech talk tanpa subtitle Indonesia"],
        quiz: [{ q: "Teknik 'shadowing' artinya…", options: ["Menerjemahkan", "Mengulang ucapan persis setelah mendengar", "Membaca transkrip"], a: 1 }],
      },
    ],
  },
  {
    id: "l4", emoji: "🚀", name: "Upper-Intermediate", cefr: "B2",
    goal: "Bisa berdiskusi teknis, bernegosiasi ringan, & menulis async dengan percaya diri.",
    topics: [
      {
        id: "l4-cond", emoji: "🔀", title: "Conditionals",
        summary: "If… untuk diskusi trade-off & skenario.",
        points: ["1st: If we ship today, we'll hit the deadline.", "2nd: If I had more time, I would refactor it.", "3rd: If we had tested it, it wouldn't have broken."],
        examples: [
          { tag: "formal", en: "If we were to adopt this approach, we would need two more weeks.", idn: "Jika kita pakai pendekatan ini, butuh dua minggu lagi." },
          { tag: "informal", en: "If it breaks, just ping me.", idn: "Kalau rusak, colek aku aja." },
        ],
        tasks: ["Tulis 5 kalimat tiap tipe conditional (konteks kerja)"],
        quiz: [{ q: "If I ___ you, I'd take the offer.", options: ["am", "were", "will be"], a: 1 }],
      },
      {
        id: "l4-passive", emoji: "🔄", title: "Passive Voice",
        summary: "Untuk laporan, dokumentasi, & menghindari menyalahkan orang.",
        points: ["be + V3: The bug was fixed. The API is used by 3 services.", "Diplomatis: 'Mistakes were made' vs 'You made a mistake'."],
        examples: [
          { tag: "formal", en: "The incident was caused by an expired certificate.", idn: "Insiden disebabkan oleh sertifikat kedaluwarsa." },
          { tag: "neutral", en: "The release has been postponed to Friday.", idn: "Rilis diundur ke Jumat." },
        ],
        tasks: ["Tulis mini incident report (5–7 kalimat) pakai passive"],
        quiz: [{ q: "The feature ___ deployed last night.", options: ["was", "is being", "has"], a: 0 }],
      },
      {
        id: "l4-register", emoji: "🎩", title: "Formal vs Informal Register",
        summary: "Tahu kapan pakai bahasa santai vs resmi = skill penting kerja remote.",
        points: [
          "Formal: klien, HR, interview, dokumen resmi.",
          "Informal: Slack tim, standup, coffee chat.",
          "Tanda informal: contractions (I'm), slang (gonna), emoji, singkatan (btw, tbh, lmk).",
        ],
        examples: [
          { tag: "formal", en: "I would appreciate it if you could send the documents at your earliest convenience.", idn: "Saya akan berterima kasih jika dokumen bisa dikirim secepatnya." },
          { tag: "informal", en: "Could you send those docs over when you get a sec?", idn: "Kirim dokumennya ya pas sempat." },
          { tag: "formal", en: "Unfortunately, I am unable to attend.", idn: "Sayangnya saya tidak bisa hadir." },
          { tag: "informal", en: "Sorry, can't make it 😅", idn: "Maaf, nggak bisa ikut." },
        ],
        tasks: ["Ubah 10 kalimat formal → informal", "Ubah 10 kalimat informal → formal", "Pelajari singkatan: btw, tbh, imo, lmk, afaik, wfh, ooo"],
        quiz: [
          { q: "'At your earliest convenience' itu register…", options: ["Formal", "Informal", "Slang"], a: 0 },
          { q: "'lmk' artinya…", options: ["let me know", "look my keyboard", "later my king"], a: 0 },
        ],
      },
      {
        id: "l4-meetings", emoji: "🗣️", title: "Meeting Language",
        summary: "Frasa untuk interupsi, setuju, tidak setuju, & minta klarifikasi.",
        points: [
          "Interupsi: Sorry to jump in, but… / Can I add something?",
          "Setuju: Exactly. / That makes sense.",
          "Tidak setuju (halus): I see your point, but… / I'm not sure I agree with…",
          "Cek pemahaman: Just to make sure I understand, …",
        ],
        examples: [
          { tag: "formal", en: "I see your point, but I have some concerns about scalability.", idn: "Saya paham maksudnya, tapi ada kekhawatiran soal skalabilitas." },
          { tag: "informal", en: "Sorry, you're on mute!", idn: "Maaf, kamu masih mute!" },
          { tag: "neutral", en: "Just to make sure we're on the same page — we're launching on the 20th, right?", idn: "Biar sama-sama paham — kita launch tanggal 20, kan?" },
        ],
        tasks: ["Hafalkan 15 frasa meeting", "Role-play meeting 10 menit (rekam diri / dengan AI)"],
        quiz: [{ q: "Cara halus tidak setuju:", options: ["You're wrong.", "I see your point, but…", "No."], a: 1 }],
      },
      {
        id: "l4-async", emoji: "💬", title: "Async Communication (Slack/Jira)",
        summary: "Remote work = banyak tulisan. Pesan jelas & lengkap dalam 1 kali kirim.",
        points: [
          "Jangan kirim cuma 'Hi' lalu tunggu. Langsung ke inti (no hello).",
          "Format: Konteks → Masalah → Yang sudah dicoba → Pertanyaan spesifik.",
          "Pakai bullet & thread.",
        ],
        examples: [
          { tag: "informal", en: "Hey Anna! Quick q: the deploy to staging fails with a 403. I've checked the IAM role already. Any ideas? 🙏", idn: "Hai Anna! Deploy staging gagal 403. IAM sudah dicek. Ada ide?" },
          { tag: "neutral", en: "Heads up: I'll be OOO tomorrow. Ping @Budi for anything urgent.", idn: "Info: besok aku cuti. Hubungi @Budi kalau urgent." },
        ],
        tasks: ["Tulis ulang 3 pesan chat kerjamu dalam format async yang baik", "Tulis 1 deskripsi PR lengkap dalam bahasa Inggris"],
        quiz: [{ q: "Pesan async terbaik:", options: ["Hi", "Hi, are you there?", "Hi! The build fails on step X; I tried Y. Could you check Z?"], a: 2 }],
      },
    ],
  },
  {
    id: "l5", emoji: "💼", name: "Advanced", cefr: "C1",
    goal: "Terdengar natural, persuasif, & diplomatis di situasi profesional.",
    topics: [
      {
        id: "l5-idioms", emoji: "🦄", title: "Idioms & Workplace Slang",
        summary: "Biar nggak bingung saat rekan native pakai ungkapan.",
        points: [
          "on the same page, ballpark figure, touch base, low-hanging fruit, circle back, bandwidth, the ball is in your court.",
          "Slang santai: legit, no worries, my bad, kudos, ship it 🚢.",
        ],
        examples: [
          { tag: "informal", en: "Can you give me a ballpark figure for this feature?", idn: "Bisa kasih perkiraan kasar untuk fitur ini?" },
          { tag: "informal", en: "My bad, I'll fix it right away.", idn: "Salahku, langsung kuperbaiki." },
          { tag: "formal", en: "Let's circle back to this in next week's meeting.", idn: "Kita bahas lagi ini di meeting minggu depan." },
        ],
        tasks: ["Hafalkan 25 idiom kerja + arti", "Pakai 3 idiom di percakapan / chat minggu ini"],
        quiz: [
          { q: "'I don't have the bandwidth' artinya…", options: ["Internet lemot", "Tidak punya waktu/kapasitas", "Tidak paham"], a: 1 },
          { q: "'Touch base' artinya…", options: ["Bersentuhan", "Saling update singkat", "Main baseball"], a: 1 },
        ],
      },
      {
        id: "l5-feedback", emoji: "🎯", title: "Giving & Receiving Feedback",
        summary: "Feedback diplomatis — budaya barat lebih langsung, tapi tetap sopan.",
        points: ["Model SBI: Situation → Behavior → Impact.", "Softeners: I wonder if…, Have you considered…?, One thing that might help is…", "Menerima: Thanks for flagging that. / That's a fair point."],
        examples: [
          { tag: "formal", en: "Have you considered extracting this logic into a separate service?", idn: "Sudah pertimbangkan pisahkan logika ini ke service lain?" },
          { tag: "neutral", en: "Thanks for the feedback — that's a fair point. I'll update it.", idn: "Makasih masukannya — masuk akal. Akan saya perbarui." },
          { tag: "informal", en: "Nit: maybe rename this var? Otherwise LGTM 👍", idn: "Minor: ganti nama variabel? Selebihnya oke." },
        ],
        tasks: ["Tulis 5 komentar code review yang diplomatis", "Latih respons untuk menerima kritik (3 variasi)"],
        quiz: [{ q: "'LGTM' artinya…", options: ["Let's go to meeting", "Looks good to me", "Low grade test mode"], a: 1 }],
      },
      {
        id: "l5-present", emoji: "📊", title: "Presenting & Demos",
        summary: "Presentasi ide / demo fitur dengan struktur yang jelas.",
        points: ["Signposting: First, … Moving on to… To sum up, …", "Highlight: What's really important here is…", "Q&A: That's a great question. / Let me get back to you on that."],
        examples: [
          { tag: "formal", en: "Today I'd like to walk you through the new architecture.", idn: "Hari ini saya ingin jelaskan arsitektur baru." },
          { tag: "neutral", en: "Let me share my screen. Can everyone see it?", idn: "Saya share screen. Semua bisa lihat?" },
        ],
        tasks: ["Buat demo 3 menit tentang project kamu (rekam!)", "Tonton ulang & catat 3 hal yang bisa diperbaiki"],
        quiz: [{ q: "Jika tidak tahu jawaban saat Q&A:", options: ["I don't know.", "Let me get back to you on that.", "Next question."], a: 1 }],
      },
      {
        id: "l5-writing", emoji: "📝", title: "Technical & Persuasive Writing",
        summary: "RFC, design doc, README — tulisan yang ringkas & meyakinkan.",
        points: ["Prinsip: jelas > pintar. Kalimat pendek, kata aktif.", "Struktur doc: Problem → Proposal → Alternatives → Trade-offs → Decision.", "Kata kunci: propose, mitigate, trade-off, rationale, leverage."],
        examples: [
          { tag: "formal", en: "This proposal aims to reduce API latency by introducing a caching layer.", idn: "Proposal ini bertujuan menurunkan latensi API dengan caching." },
          { tag: "formal", en: "The main trade-off is increased infrastructure cost.", idn: "Trade-off utamanya biaya infrastruktur naik." },
        ],
        tasks: ["Tulis README project pribadi full English", "Tulis mini design doc (1 halaman)"],
        quiz: [{ q: "Gaya tulisan teknis yang baik:", options: ["Panjang & rumit", "Jelas, ringkas, aktif", "Banyak idiom"], a: 1 }],
      },
      {
        id: "l5-accent", emoji: "🎙️", title: "Fluency & Connected Speech",
        summary: "Bukan soal aksen sempurna — tapi jelas & mengalir.",
        points: ["Linking: 'pick it up' → pi-ki-tup.", "Reductions: going to → gonna, want to → wanna (informal).", "Intonasi naik untuk yes/no question, turun untuk statement.", "Filler natural: well, so, I mean, you know (jangan 'eee…')."],
        examples: [
          { tag: "informal", en: "Whaddya think? (What do you think?)", idn: "Gimana menurutmu?" },
          { tag: "neutral", en: "Well, I mean, it depends on the use case.", idn: "Ya, maksudku, tergantung kasusnya." },
        ],
        tasks: ["Shadowing 15 menit/hari selama 1 minggu", "Rekam 2 menit bicara spontan tentang topik acak"],
        quiz: [{ q: "Filler yang terdengar natural:", options: ["Eee…", "Well, …", "Anu…"], a: 1 }],
      },
    ],
  },
  {
    id: "l6", emoji: "🌍", name: "Remote-Ready Expert", cefr: "C2",
    goal: "Siap melamar, interview, negosiasi, & berkembang di perusahaan global.",
    topics: [
      {
        id: "l6-cv", emoji: "📄", title: "CV, LinkedIn & Portfolio",
        summary: "Dokumen pertama yang dilihat recruiter global.",
        points: ["Action verbs: Built, Led, Reduced, Shipped, Designed.", "Kuantifikasi: 'Reduced load time by 40%'.", "Tanpa foto, umur, agama (standar US/EU). Maks 1–2 halaman.", "LinkedIn headline: Role | Stack | Value."],
        examples: [
          { tag: "formal", en: "Built a real-time analytics dashboard used by 10k+ daily users.", idn: "Membangun dashboard analitik real-time dipakai 10rb+ user/hari." },
          { tag: "formal", en: "Senior Backend Engineer | Go & Node.js | Building scalable payment systems", idn: "Contoh headline LinkedIn." },
        ],
        tasks: ["Tulis ulang CV full English dengan action verbs + angka", "Update LinkedIn headline & About section", "Minta 1 orang review CV kamu"],
        quiz: [{ q: "Bullet CV terbaik:", options: ["Responsible for backend", "Did some API work", "Cut API response time by 35% via query optimization"], a: 2 }],
      },
      {
        id: "l6-cover", emoji: "✉️", title: "Cover Letter & Cold Outreach",
        summary: "Pendek, personal, dan tunjukkan value.",
        points: ["3 paragraf: Kenapa perusahaan ini → Value kamu (bukti) → Call to action.", "Cold DM recruiter: maks 4 kalimat."],
        examples: [
          { tag: "formal", en: "I'm excited to apply for the Senior Engineer role, as your mission to simplify payments aligns closely with my experience.", idn: "Saya antusias melamar karena misi Anda sejalan dengan pengalaman saya." },
          { tag: "informal", en: "Hi Sarah! I saw you're hiring backend engineers — I've built similar systems at scale. Would you be open to a quick chat?", idn: "Hai Sarah! Lihat kalian rekrut backend — aku pernah bikin sistem serupa. Mau ngobrol singkat?" },
        ],
        tasks: ["Tulis template cover letter", "Kirim 3 cold message ke recruiter di LinkedIn"],
        quiz: [{ q: "Cover letter yang baik itu…", options: ["Panjang 3 halaman", "Pendek & spesifik ke perusahaan", "Copy-paste ke semua"], a: 1 }],
      },
      {
        id: "l6-interview", emoji: "🎤", title: "Behavioral Interview (STAR)",
        summary: "Tell me about a time when… — jawab dengan Situation, Task, Action, Result.",
        points: ["Siapkan 6–8 cerita: konflik, kegagalan, leadership, deadline ketat, inisiatif.", "Fokus pada 'I' (kontribusimu), bukan cuma 'we'.", "Akhiri dengan hasil + pelajaran."],
        examples: [
          { tag: "formal", en: "Tell me about yourself. — I'm a backend engineer with five years of experience, mainly in fintech…", idn: "Ceritakan tentang dirimu." },
          { tag: "formal", en: "As a result, we reduced downtime by 60%, and I learned the importance of early monitoring.", idn: "Hasilnya downtime turun 60%, dan saya belajar pentingnya monitoring." },
          { tag: "neutral", en: "That's a great question — let me think for a second.", idn: "Pertanyaan bagus — beri saya waktu sebentar." },
        ],
        tasks: ["Siapkan jawaban 'Tell me about yourself' (90 detik)", "Tulis 6 cerita STAR", "Mock interview 30 menit (teman / AI / Pramp)"],
        quiz: [{ q: "STAR = …", options: ["Skill, Talent, Ability, Result", "Situation, Task, Action, Result", "Start, Think, Act, Rest"], a: 1 }],
      },
      {
        id: "l6-tech", emoji: "💻", title: "Technical Interview Talk",
        summary: "Berpikir dengan suara keras (think aloud) dalam bahasa Inggris.",
        points: ["Clarify: Can I assume the input is sorted?", "Rencana: My initial approach would be… then optimize.", "Kompleksitas: This runs in O(n log n) time.", "Stuck: Let me take a step back."],
        examples: [
          { tag: "neutral", en: "Before I start coding, let me clarify a few constraints.", idn: "Sebelum coding, saya klarifikasi beberapa batasan." },
          { tag: "neutral", en: "The brute-force solution would be O(n²), but we can do better with a hash map.", idn: "Solusi brute-force O(n²), tapi bisa lebih baik dengan hash map." },
        ],
        tasks: ["Selesaikan 3 soal LeetCode sambil menjelaskan dengan suara (rekam)", "Jelaskan 1 system design (mis. URL shortener) dalam 10 menit"],
        quiz: [{ q: "Hal pertama saat dapat soal coding:", options: ["Langsung coding", "Klarifikasi requirement", "Diam berpikir 10 menit"], a: 1 }],
      },
      {
        id: "l6-salary", emoji: "💰", title: "Salary Negotiation",
        summary: "Negosiasi dengan percaya diri tapi tetap ramah.",
        points: ["Riset range di Levels.fyi, Glassdoor, RemoteOK.", "Biarkan mereka sebut angka dulu jika bisa.", "Pakai range & alasan berbasis value."],
        examples: [
          { tag: "formal", en: "Based on my research and experience, I'm looking for a range of $X to $Y.", idn: "Berdasarkan riset & pengalaman, saya mengharapkan rentang $X–$Y." },
          { tag: "formal", en: "I'm very excited about this offer. Is there any flexibility on the base salary?", idn: "Saya senang dengan tawaran ini. Apakah gaji pokok masih bisa fleksibel?" },
        ],
        tasks: ["Riset range gaji role kamu (3 sumber)", "Latih script negosiasi dengan keras 3x"],
        quiz: [{ q: "Respons yang baik saat dapat offer:", options: ["OK deal!", "Thank you! Could I have a couple of days to review it?", "That's too low."], a: 1 }],
      },
      {
        id: "l6-culture", emoji: "🤝", title: "Cross-Cultural Remote Work",
        summary: "Sukses jangka panjang: komunikasi proaktif lintas budaya & timezone.",
        points: ["Over-communicate: update progres tanpa ditanya.", "Berani bilang 'No' / 'I don't know' — itu dihargai.", "Hormati timezone; pakai 'schedule send'.", "Budaya: US (langsung & positif), UK (understatement), Jerman/Belanda (sangat langsung)."],
        examples: [
          { tag: "formal", en: "I'd like to flag a potential risk: the API dependency may delay us by two days.", idn: "Saya ingin menandai risiko: dependensi API bisa telat 2 hari." },
          { tag: "informal", en: "Honestly, I'm not sure — let me check and get back to you.", idn: "Jujur aku belum tahu — aku cek dulu ya." },
          { tag: "neutral", en: "Quick update: feature X is done, Y is in review, Z is blocked by the design.", idn: "Update: X selesai, Y di-review, Z tertahan desain." },
        ],
        tasks: ["Kirim weekly update tertulis (EN) 4 minggu berturut-turut", "Pelajari perbedaan budaya kerja 3 negara target"],
        quiz: [{ q: "UK: 'That's not bad' biasanya berarti…", options: ["Jelek", "Cukup bagus / bagus", "Tidak peduli"], a: 1 }],
      },
    ],
  },
];

// Frasa harian (formal vs informal) — ditampilkan acak di dashboard
const DAILY_PHRASES = [
  { formal: "I'd be happy to help with that.", informal: "Sure thing, happy to help!" },
  { formal: "Could we reschedule our meeting?", informal: "Can we move our call?" },
  { formal: "I apologize for the delay in responding.", informal: "Sorry for the late reply!" },
  { formal: "Please find attached the report.", informal: "Here's the report 👇" },
  { formal: "I'm afraid I won't be able to make it.", informal: "Can't make it, sorry!" },
  { formal: "Thank you for your patience.", informal: "Thanks for bearing with me!" },
  { formal: "Could you elaborate on that point?", informal: "What do you mean exactly?" },
  { formal: "I'll look into it and get back to you.", informal: "Let me check and ping you." },
  { formal: "I completely agree with your assessment.", informal: "Totally agree!" },
  { formal: "Would it be possible to extend the deadline?", informal: "Any chance we can push the deadline?" },
  { formal: "I'd appreciate your input on this.", informal: "What do you think?" },
  { formal: "Let's schedule a follow-up meeting.", informal: "Let's catch up later." },
  { formal: "I will be out of office tomorrow.", informal: "I'm OOO tomorrow." },
  { formal: "Congratulations on your achievement.", informal: "Congrats! Well deserved 🎉" },
];

// Gelar (rank) berdasarkan XP
const RANKS = [
  { xp: 0, name: "Newbie Explorer", emoji: "🐣" },
  { xp: 250, name: "Word Collector", emoji: "📚" },
  { xp: 700, name: "Small Talker", emoji: "☕" },
  { xp: 1400, name: "Confident Communicator", emoji: "🗣️" },
  { xp: 2400, name: "Professional Speaker", emoji: "💼" },
  { xp: 3600, name: "Global Remote Pro", emoji: "🌍" },
];

const ACTIVITY_TYPES = [
  { id: "listening", label: "🎧 Listening" },
  { id: "speaking", label: "🗣️ Speaking" },
  { id: "reading", label: "📖 Reading" },
  { id: "writing", label: "✍️ Writing" },
  { id: "vocab", label: "🧠 Vocab" },
  { id: "grammar", label: "🧱 Grammar" },
];
