// =========================================================
//  GRAMMAR GUIDE — rumus, kapan dipakai, contoh, tips & trik
//  formula: [[simbol, rumus], ...]   mistakes: [[salah, benar], ...]
//  table:   { head: [...], rows: [[...], ...] }
// =========================================================
const GRAMMAR = [
  // ---------------------------------------------------------
  {
    id: "tenses", emoji: "⏳", title: "Tenses",
    intro: "Tense = kapan sesuatu terjadi + bagaimana 'bentuknya' (biasa, sedang, sudah, sudah-dan-masih). Fokus dulu ke 6 yang paling sering dipakai kerja: Present Simple, Present Continuous, Present Perfect, Past Simple, Future (will / going to).",
    items: [
      {
        id: "t-cheatsheet", emoji: "🗺️", title: "Cheat Sheet: 12 Tenses",
        short: "Peta semua tense dalam satu tabel. Simpan ini!",
        table: {
          head: ["", "Simple", "Continuous", "Perfect", "Perfect Continuous"],
          rows: [
            ["Present", "I work", "I am working", "I have worked", "I have been working"],
            ["Past", "I worked", "I was working", "I had worked", "I had been working"],
            ["Future", "I will work", "I will be working", "I will have worked", "I will have been working"],
          ],
        },
        when: [
          "Simple → fakta, kebiasaan, kejadian selesai.",
          "Continuous (be + -ing) → sedang berlangsung pada suatu waktu.",
          "Perfect (have + V3) → sudah terjadi & terhubung ke waktu lain.",
          "Perfect Continuous (have been + -ing) → sudah dan MASIH berlangsung, menekankan durasi.",
        ],
        tips: [
          "Trik baca tabel: kolom = 'bentuk', baris = 'waktu'. Rumusnya konsisten, tinggal ganti bentuk be/have/will.",
          "Di percakapan kerja, ~90% kalimat cukup pakai: Present Simple, Present Continuous, Present Perfect, Past Simple, will, going to.",
          "Future Perfect Continuous hampir tidak pernah dipakai sehari-hari — cukup tahu saja.",
        ],
        quiz: [
          { q: "'I have been working' adalah…", options: ["Past Continuous", "Present Perfect Continuous", "Future Perfect"], a: 1 },
        ],
      },
      {
        id: "t-present-simple", emoji: "🔁", title: "Present Simple",
        short: "Fakta, kebiasaan, jadwal.",
        formula: [
          ["+", "S + V1 (+s/es untuk he/she/it)"],
          ["−", "S + do/does + not + V1"],
          ["?", "Do/Does + S + V1?"],
        ],
        when: [
          "Kebiasaan / rutinitas: I check emails every morning.",
          "Fakta / kebenaran umum: Water boils at 100°C.",
          "Jadwal tetap: The standup starts at 9.",
          "Deskripsi pekerjaan: I work as a backend developer.",
        ],
        signal: "always, usually, often, sometimes, never, every day, on Mondays",
        examples: [
          { tag: "neutral", en: "I work remotely for a startup in Berlin.", idn: "Saya kerja remote untuk startup di Berlin." },
          { tag: "neutral", en: "She doesn't use Windows.", idn: "Dia tidak pakai Windows." },
          { tag: "neutral", en: "Does the team have a standup every day?", idn: "Apakah tim ada standup setiap hari?" },
        ],
        tips: [
          "Trik 'S' untuk He-She-It: kalau subjeknya satu orang/benda (bukan I/you), tambah -s → he works, it runs.",
          "Setelah does/doesn't, kata kerja KEMBALI ke bentuk dasar: She doesn't works ❌ → She doesn't work ✅.",
          "Kata kerja berakhiran -s, -sh, -ch, -x, -o → tambah -es: watches, fixes, goes.",
        ],
        mistakes: [
          ["He work in IT.", "He works in IT."],
          ["Does she likes coffee?", "Does she like coffee?"],
          ["I am work from home.", "I work from home."],
        ],
        quiz: [
          { q: "My manager ___ in London.", options: ["live", "lives", "living"], a: 1 },
          { q: "___ you use Docker?", options: ["Does", "Do", "Are"], a: 1 },
        ],
      },
      {
        id: "t-present-cont", emoji: "▶️", title: "Present Continuous",
        short: "Sedang terjadi sekarang / sementara / rencana pasti.",
        formula: [
          ["+", "S + am/is/are + V-ing"],
          ["−", "S + am/is/are + not + V-ing"],
          ["?", "Am/Is/Are + S + V-ing?"],
        ],
        when: [
          "Sedang terjadi saat bicara: I'm sharing my screen now.",
          "Situasi sementara: I'm working on the API this sprint.",
          "Rencana masa depan yang sudah diatur: I'm meeting the client tomorrow.",
          "Tren / perubahan: Remote jobs are becoming more popular.",
        ],
        signal: "now, right now, at the moment, currently, this week, today",
        examples: [
          { tag: "neutral", en: "I'm currently working on the checkout flow.", idn: "Saya sedang mengerjakan alur checkout." },
          { tag: "informal", en: "We're having a quick call at 3, wanna join?", idn: "Kita mau call singkat jam 3, mau ikut?" },
        ],
        tips: [
          "Stative verbs (know, like, want, need, believe, understand, own) TIDAK pakai -ing: I'm knowing ❌ → I know ✅.",
          "Untuk status kerja di Slack, pakai ini: 'I'm looking into it' terdengar natural & proaktif.",
          "Ejaan: make → making (hapus e), run → running (konsonan ganda), lie → lying.",
        ],
        mistakes: [
          ["I am understand.", "I understand."],
          ["She working now.", "She is working now."],
        ],
        quiz: [
          { q: "Mana yang BENAR?", options: ["I'm needing help.", "I need help.", "I needing help."], a: 1 },
        ],
      },
      {
        id: "t-present-perfect", emoji: "✅", title: "Present Perfect",
        short: "Sudah terjadi, waktunya tidak penting / masih relevan sekarang.",
        formula: [
          ["+", "S + have/has + V3"],
          ["−", "S + have/has + not + V3"],
          ["?", "Have/Has + S + V3?"],
        ],
        when: [
          "Pengalaman (tanpa waktu spesifik): I have worked with AWS.",
          "Sudah dimulai di masa lalu & masih berlangsung: I have lived here since 2019.",
          "Hasil yang terasa sekarang: I've fixed the bug (jadi sekarang sudah aman).",
          "Baru saja: I've just sent the file.",
        ],
        signal: "already, yet, just, ever, never, since, for, so far, recently",
        examples: [
          { tag: "formal", en: "I have managed a team of five engineers.", idn: "Saya pernah memimpin tim 5 engineer." },
          { tag: "informal", en: "Have you seen the new design yet?", idn: "Udah lihat desain baru belum?" },
          { tag: "neutral", en: "I've already deployed it to staging.", idn: "Sudah saya deploy ke staging." },
        ],
        tips: [
          "RULE emas: ada waktu spesifik di masa lalu (yesterday, last week, in 2020) → JANGAN pakai present perfect, pakai Past Simple.",
          "Interview: pakai ini untuk pengalaman umum ('I've built…'), lalu Past Simple untuk detail ceritanya ('In 2022, I built…').",
          "'yet' → di kalimat negatif/tanya (Have you finished yet?), 'already' → positif (I've already finished).",
        ],
        mistakes: [
          ["I have finished it yesterday.", "I finished it yesterday."],
          ["I work here since 2020.", "I have worked here since 2020."],
          ["She have done it.", "She has done it."],
        ],
        quiz: [
          { q: "I ___ the report last Monday.", options: ["have sent", "sent", "has sent"], a: 1 },
          { q: "___ you ever worked remotely?", options: ["Did", "Have", "Has"], a: 1 },
        ],
      },
      {
        id: "t-present-perfect-cont", emoji: "⏱️", title: "Present Perfect Continuous",
        short: "Sudah dimulai & MASIH berlangsung — fokus ke durasi.",
        formula: [
          ["+", "S + have/has + been + V-ing"],
          ["−", "S + have/has + not + been + V-ing"],
          ["?", "Have/Has + S + been + V-ing?"],
        ],
        when: [
          "Durasi aktivitas sampai sekarang: I've been learning English for 6 months.",
          "Aktivitas yang baru selesai & ada bekasnya: I'm tired, I've been debugging all day.",
        ],
        signal: "for, since, all day, how long, lately",
        examples: [
          { tag: "neutral", en: "I've been working as a developer for five years.", idn: "Saya sudah jadi developer selama 5 tahun (dan masih)." },
          { tag: "informal", en: "How long have you been waiting?", idn: "Udah nunggu berapa lama?" },
        ],
        tips: [
          "Perfect vs Perfect Continuous: 'I've written 3 articles' (hasil/jumlah) vs 'I've been writing all morning' (durasi/proses).",
          "Pertanyaan 'How long…?' hampir selalu cocok pakai tense ini.",
        ],
        quiz: [
          { q: "She ___ on this bug for 3 hours.", options: ["has been working", "is working", "worked since"], a: 0 },
        ],
      },
      {
        id: "t-past-simple", emoji: "⏪", title: "Past Simple",
        short: "Kejadian yang sudah selesai di waktu tertentu di masa lalu.",
        formula: [
          ["+", "S + V2 (worked / went)"],
          ["−", "S + did not (didn't) + V1"],
          ["?", "Did + S + V1?"],
        ],
        when: [
          "Kejadian selesai dengan waktu jelas: I joined the company in 2021.",
          "Urutan cerita (STAR interview): First I analyzed…, then I proposed…",
          "Stand-up: Yesterday I reviewed two PRs.",
        ],
        signal: "yesterday, last week/month/year, ago, in 2020, when I was…",
        examples: [
          { tag: "formal", en: "In my previous role, I led the migration to Kubernetes.", idn: "Di peran sebelumnya, saya memimpin migrasi ke Kubernetes." },
          { tag: "informal", en: "Did you get my message?", idn: "Pesanku udah sampai?" },
        ],
        tips: [
          "Setelah 'did/didn't', verb KEMBALI ke V1: I didn't went ❌ → I didn't go ✅.",
          "Hafalkan irregular verbs secara berkelompok pola: (sing-sang-sung, ring-rang-rung), (buy-bought, bring-brought, think-thought).",
          "Ejaan -ed: stop → stopped, try → tried, plan → planned.",
        ],
        mistakes: [
          ["Did you finished?", "Did you finish?"],
          ["I go to the office yesterday.", "I went to the office yesterday."],
        ],
        quiz: [
          { q: "We ___ the bug two days ago.", options: ["have found", "found", "find"], a: 1 },
          { q: "She didn't ___ the email.", options: ["read", "reads", "readed"], a: 0 },
        ],
      },
      {
        id: "t-past-cont", emoji: "🎞️", title: "Past Continuous",
        short: "Sedang berlangsung di suatu titik masa lalu (sering ada interupsi).",
        formula: [
          ["+", "S + was/were + V-ing"],
          ["−", "S + was/were + not + V-ing"],
          ["?", "Was/Were + S + V-ing?"],
        ],
        when: [
          "Latar cerita yang terpotong kejadian lain: I was deploying when the server crashed.",
          "Aktivitas pada jam tertentu kemarin: At 8 PM, I was still working.",
        ],
        signal: "while, when, at that time, at 5 PM yesterday",
        examples: [
          { tag: "neutral", en: "Sorry, I was presenting when you called.", idn: "Maaf, aku lagi presentasi waktu kamu telepon." },
        ],
        tips: [
          "Pola emas: [Past Continuous] + when + [Past Simple]. Yang panjang = continuous, yang memotong = simple.",
          "I/He/She/It → was, You/We/They → were.",
        ],
        quiz: [
          { q: "I ___ coding when the power went out.", options: ["was", "were", "am"], a: 0 },
        ],
      },
      {
        id: "t-past-perfect", emoji: "⏮️", title: "Past Perfect",
        short: "Kejadian yang terjadi SEBELUM kejadian lain di masa lalu.",
        formula: [
          ["+", "S + had + V3"],
          ["−", "S + had not (hadn't) + V3"],
          ["?", "Had + S + V3?"],
        ],
        when: [
          "Dua kejadian lampau, mana yang lebih dulu: When I joined, they had already launched the app.",
          "Reported speech: He said he had finished it.",
          "Penyesalan (3rd conditional): If I had known, I would have helped.",
        ],
        signal: "before, after, by the time, already, when",
        examples: [
          { tag: "formal", en: "By the time we noticed the issue, it had affected 200 users.", idn: "Saat kami sadar, masalah itu sudah berdampak ke 200 user." },
        ],
        tips: [
          "Kalau urutan sudah jelas dengan 'before/after', Past Simple saja sering cukup: I left after I finished.",
          "Sering muncul di incident report / postmortem.",
        ],
        quiz: [
          { q: "The meeting ___ already started when I joined.", options: ["has", "had", "was"], a: 1 },
        ],
      },
      {
        id: "t-past-perfect-cont", emoji: "⌛", title: "Past Perfect Continuous",
        short: "Durasi aktivitas sebelum titik di masa lalu.",
        formula: [
          ["+", "S + had been + V-ing"],
          ["−", "S + had not been + V-ing"],
          ["?", "Had + S + been + V-ing?"],
        ],
        when: ["Menjelaskan penyebab/durasi sebelum kejadian lampau: I had been working there for 3 years before I moved abroad."],
        signal: "for, since, before, how long",
        examples: [
          { tag: "neutral", en: "We had been waiting for an hour when the client finally joined.", idn: "Kami sudah menunggu sejam saat klien akhirnya bergabung." },
        ],
        tips: ["Jarang dipakai di percakapan — tapi bagus untuk storytelling di interview."],
        quiz: [
          { q: "He was tired because he ___ all night.", options: ["had been coding", "has coded", "codes"], a: 0 },
        ],
      },
      {
        id: "t-future-will", emoji: "🔮", title: "Future: Will",
        short: "Keputusan spontan, janji, prediksi, tawaran.",
        formula: [
          ["+", "S + will + V1"],
          ["−", "S + will not (won't) + V1"],
          ["?", "Will + S + V1?"],
        ],
        when: [
          "Keputusan saat itu juga: I'll check it now.",
          "Janji / komitmen: I'll send it by Friday.",
          "Tawaran: I'll help you with that.",
          "Prediksi berdasarkan opini: I think it will work.",
        ],
        signal: "tomorrow, soon, I think, probably, by EOD",
        examples: [
          { tag: "neutral", en: "I'll get back to you by end of day.", idn: "Saya kabari lagi sebelum akhir hari." },
          { tag: "formal", en: "We will provide an update once the issue is resolved.", idn: "Kami akan beri update setelah masalah selesai." },
        ],
        tips: [
          "Setelah 'will' SELALU V1: will sends ❌ → will send ✅.",
          "Kalimat 'when/if/after/before' tentang masa depan TIDAK pakai will: When I will finish ❌ → When I finish, I'll call you ✅.",
          "'Shall I…?' = tawaran sopan (UK): Shall I share my screen?",
        ],
        mistakes: [
          ["I will to send it.", "I will send it."],
          ["If it will rain, …", "If it rains, …"],
        ],
        quiz: [
          { q: "I'll call you when I ___ home.", options: ["will get", "get", "got"], a: 1 },
        ],
      },
      {
        id: "t-future-going", emoji: "📅", title: "Future: Going to",
        short: "Rencana yang sudah diputuskan & prediksi berdasarkan bukti.",
        formula: [
          ["+", "S + am/is/are + going to + V1"],
          ["−", "S + am/is/are + not + going to + V1"],
          ["?", "Am/Is/Are + S + going to + V1?"],
        ],
        when: [
          "Rencana yang sudah dipikirkan sebelumnya: We're going to release v2 next month.",
          "Prediksi dengan bukti yang terlihat: Look at the logs — it's going to crash.",
        ],
        signal: "next week, this weekend, soon, plan",
        examples: [
          { tag: "neutral", en: "I'm going to apply for remote jobs next month.", idn: "Saya berencana melamar kerja remote bulan depan." },
          { tag: "informal", en: "I'm gonna grab lunch, back in 30.", idn: "Aku mau makan siang, balik 30 menit lagi." },
        ],
        tips: [
          "Will vs Going to: 'I'll do it' (baru saja diputuskan) vs 'I'm going to do it' (sudah direncanakan).",
          "'gonna' = going to, HANYA untuk informal (chat/ngobrol). Jangan di email formal.",
        ],
        quiz: [
          { q: "Lihat awan gelap! It ___ rain.", options: ["will", "is going to", "goes to"], a: 1 },
        ],
      },
      {
        id: "t-future-cont-perfect", emoji: "🚀", title: "Future Continuous & Future Perfect",
        short: "Sedang berlangsung di masa depan / sudah selesai sebelum titik di masa depan.",
        formula: [
          ["FC", "S + will be + V-ing"],
          ["FP", "S + will have + V3"],
        ],
        when: [
          "Future Continuous: sedang apa pada waktu tertentu nanti → This time tomorrow, I'll be flying to Singapore.",
          "Future Continuous (sopan): Will you be joining the call? (lebih halus daripada 'Will you join?')",
          "Future Perfect: target selesai sebelum deadline → By Friday, I'll have finished the migration.",
        ],
        signal: "this time tomorrow, by + waktu, by the time",
        examples: [
          { tag: "formal", en: "By the end of Q3, we will have onboarded 50 new clients.", idn: "Di akhir Q3, kami sudah onboard 50 klien baru." },
          { tag: "neutral", en: "I'll be offline from 2 to 4 PM.", idn: "Saya offline jam 2–4 sore." },
        ],
        tips: ["'I'll be out of office…' / 'I'll be offline…' — frasa wajib untuk status remote work."],
        quiz: [
          { q: "By next year, I ___ here for 5 years.", options: ["will work", "will have worked", "am working"], a: 1 },
        ],
      },
    ],
  },

  // ---------------------------------------------------------
  {
    id: "aux", emoji: "🔧", title: "Auxiliary Verbs (Be / Do / Have)",
    intro: "Kata kerja bantu untuk membentuk kalimat negatif, tanya, dan tense. Kuasai ini = 80% grammar beres.",
    items: [
      {
        id: "aux-be", emoji: "🧱", title: "Be: am / is / are / was / were",
        short: "Untuk kalimat tanpa kata kerja utama, continuous, dan passive.",
        table: {
          head: ["Subjek", "Present", "Past", "Negatif"],
          rows: [
            ["I", "am", "was", "I'm not / wasn't"],
            ["He / She / It", "is", "was", "isn't / wasn't"],
            ["You / We / They", "are", "were", "aren't / weren't"],
          ],
        },
        when: [
          "Kalimat nominal (kata benda/sifat/tempat): I am a developer. She is busy. They are in a meeting.",
          "Continuous: I am working.",
          "Passive: The bug was fixed.",
        ],
        examples: [
          { tag: "neutral", en: "The API is down. Are you aware?", idn: "API-nya mati. Sudah tahu?" },
          { tag: "neutral", en: "We were in the same team last year.", idn: "Kita satu tim tahun lalu." },
        ],
        tips: [
          "Orang Indonesia sering lupa 'be' karena bahasa kita tidak punya: 'I busy' ❌ → 'I am busy' ✅.",
          "Kalimat tanpa kata kerja (adjective/noun) → WAJIB pakai be.",
          "JANGAN gabung be + V1: 'I am agree' ❌ → 'I agree' ✅. 'I am work' ❌ → 'I work' ✅.",
        ],
        mistakes: [
          ["I am agree with you.", "I agree with you."],
          ["She very smart.", "She is very smart."],
          ["Are you understand?", "Do you understand?"],
        ],
        quiz: [
          { q: "Mana yang BENAR?", options: ["I am agree.", "I agree.", "I agreeing."], a: 1 },
          { q: "The servers ___ down yesterday.", options: ["was", "were", "are"], a: 1 },
        ],
      },
      {
        id: "aux-do", emoji: "🛠️", title: "Do / Does / Did",
        short: "Untuk tanya & negatif di Present Simple dan Past Simple.",
        table: {
          head: ["Subjek", "Present", "Past"],
          rows: [
            ["I / You / We / They", "do / don't", "did / didn't"],
            ["He / She / It", "does / doesn't", "did / didn't"],
          ],
        },
        formula: [
          ["?", "Do/Does/Did + S + V1?"],
          ["−", "S + don't/doesn't/didn't + V1"],
          ["!", "S + do/does/did + V1 (penekanan): I DO care."],
        ],
        when: [
          "Membuat pertanyaan & negatif untuk kalimat yang punya kata kerja utama.",
          "Penekanan: I did send it! (aku BENERAN udah kirim)",
          "'Do' juga bisa jadi kata kerja utama = melakukan: I do code reviews. What do you do? (kerja apa?)",
        ],
        examples: [
          { tag: "neutral", en: "What do you do? — I'm a frontend engineer.", idn: "Kerja apa? — Saya frontend engineer." },
          { tag: "neutral", en: "Does this work on mobile?", idn: "Apakah ini jalan di mobile?" },
          { tag: "informal", en: "I didn't get the invite, can you resend?", idn: "Aku nggak dapat undangannya, bisa kirim ulang?" },
        ],
        tips: [
          "Trik: -s/-ed 'pindah' ke do. He works → He DOES work → Does he work? / She worked → She DID work → Did she work?",
          "Jadi setelah does/did, verb selalu polos (V1).",
          "Kalimat dengan be / modal TIDAK pakai do: Do you are ready? ❌ → Are you ready? ✅. Do you can? ❌ → Can you? ✅.",
          "'Do' vs 'Make': do = aktivitas/tugas (do homework, do a review), make = menciptakan (make a decision, make a mistake).",
        ],
        mistakes: [
          ["Do she work here?", "Does she work here?"],
          ["He doesn't knows.", "He doesn't know."],
          ["Did you went?", "Did you go?"],
        ],
        quiz: [
          { q: "___ he know about the deadline?", options: ["Do", "Does", "Is"], a: 1 },
          { q: "We didn't ___ the issue.", options: ["noticed", "notice", "notices"], a: 1 },
        ],
      },
      {
        id: "aux-have", emoji: "🔑", title: "Have / Has / Had",
        short: "Bisa jadi kata kerja utama (punya) ATAU kata kerja bantu (perfect tense).",
        table: {
          head: ["Subjek", "Present", "Past"],
          rows: [
            ["I / You / We / They", "have", "had"],
            ["He / She / It", "has", "had"],
          ],
        },
        when: [
          "MAIN VERB (punya / mengalami): I have a question. She has a meeting at 3. We had lunch.",
          "AUXILIARY (perfect tense): I have finished. She has worked here for 2 years. They had left.",
          "Have to / has to (harus): I have to leave early.",
          "Have + kegiatan: have a call, have a break, have lunch, have a look.",
        ],
        examples: [
          { tag: "neutral", en: "I have a quick question about the ticket.", idn: "Saya ada pertanyaan singkat soal tiket ini." },
          { tag: "neutral", en: "She has already reviewed it.", idn: "Dia sudah me-review-nya." },
          { tag: "informal", en: "Let me have a look.", idn: "Coba aku lihat." },
        ],
        tips: [
          "HAS hanya untuk He/She/It (dan nama 1 orang / 1 benda). Sisanya HAVE.",
          "Setelah does/did/modal → kembali ke HAVE: Does she has ❌ → Does she have ✅. She can has ❌ → She can have ✅.",
          "Sebagai main verb (punya), tanya pakai do: Do you have time? (bukan Have you time? — itu kuno/UK).",
          "Sebagai auxiliary, tanya langsung dibalik: Have you finished? (bukan Do you have finished).",
        ],
        mistakes: [
          ["She have two monitors.", "She has two monitors."],
          ["Does he has access?", "Does he have access?"],
          ["Do you have finished?", "Have you finished?"],
        ],
        quiz: [
          { q: "The client ___ approved the design.", options: ["have", "has", "having"], a: 1 },
          { q: "Do you ___ a minute?", options: ["has", "have", "had"], a: 1 },
        ],
      },
      {
        id: "aux-question", emoji: "❓", title: "Rumus Membuat Pertanyaan",
        short: "Satu pola untuk semua: (WH) + Auxiliary + Subject + Verb?",
        formula: [
          ["Yes/No", "Aux + S + V? → Are you ready? / Do you agree? / Can you help?"],
          ["WH", "WH + Aux + S + V? → When will you finish? / Why did it fail?"],
          ["Subjek", "Who/What + V (tanpa aux) → Who broke the build? / What happened?"],
        ],
        when: [
          "Cari auxiliary di kalimat positif, lalu pindahkan ke depan.",
          "Tidak ada auxiliary? Pakai do/does/did.",
        ],
        examples: [
          { tag: "neutral", en: "She is working → Is she working?", idn: "Ada 'is' → pindah ke depan." },
          { tag: "neutral", en: "She works → Does she work?", idn: "Tidak ada aux → pakai does." },
          { tag: "neutral", en: "She has worked → Has she worked?", idn: "Ada 'has' → pindah ke depan." },
          { tag: "formal", en: "Could you tell me when the meeting starts?", idn: "Indirect question: TIDAK dibalik setelah 'tell me'." },
        ],
        tips: [
          "Indirect question (lebih sopan) → urutan seperti kalimat biasa: 'Do you know where IS the file?' ❌ → 'Do you know where the file is?' ✅.",
          "Pertanyaan tentang SUBJEK tidak pakai do: Who did call you? ❌ → Who called you? ✅.",
        ],
        quiz: [
          { q: "Could you tell me where ___?", options: ["is the office", "the office is", "does the office"], a: 1 },
          { q: "___ fixed the bug?", options: ["Who did", "Who", "Who does"], a: 1 },
        ],
      },
    ],
  },

  // ---------------------------------------------------------
  {
    id: "modals", emoji: "🙏", title: "Modal Verbs",
    intro: "Modal = can, could, may, might, will, would, shall, should, must. Rumusnya SELALU: Modal + V1 (tanpa to, tanpa -s). Modal adalah kunci sopan santun dalam bahasa Inggris profesional.",
    items: [
      {
        id: "m-overview", emoji: "🗺️", title: "Peta Modal Verbs",
        short: "Ringkasan fungsi semua modal dalam satu tabel.",
        table: {
          head: ["Modal", "Fungsi utama", "Contoh"],
          rows: [
            ["can", "kemampuan, izin (santai)", "I can code in Go."],
            ["could", "kemampuan lampau, permintaan sopan, kemungkinan", "Could you help me?"],
            ["may", "izin (formal), kemungkinan", "May I ask a question?"],
            ["might", "kemungkinan kecil, saran halus", "It might be a cache issue."],
            ["will", "masa depan, janji, keputusan", "I'll send it today."],
            ["would", "sopan, pengandaian, kebiasaan lampau", "Would you like to join?"],
            ["shall", "tawaran / ajakan (UK, formal)", "Shall we start?"],
            ["should", "saran, ekspektasi", "You should restart it."],
            ["must", "keharusan kuat, kesimpulan pasti", "You must sign the NDA."],
          ],
        },
        formula: [
          ["+", "S + modal + V1 → She can speak French."],
          ["−", "S + modal + not + V1 → She can't speak French."],
          ["?", "Modal + S + V1? → Can she speak French?"],
        ],
        tips: [
          "Modal TIDAK pernah pakai -s, to, atau do: She cans ❌, I can to ❌, Do you can ❌.",
          "Bentuk negatif singkat: can't, couldn't, won't, wouldn't, shouldn't, mustn't, mightn't (jarang).",
          "Kesopanan meningkat: can < could < would < would you mind…",
        ],
        mistakes: [
          ["She can speaks English.", "She can speak English."],
          ["I must to go.", "I must go."],
          ["Do you can help?", "Can you help?"],
        ],
        quiz: [
          { q: "He should ___ the docs.", options: ["reads", "read", "to read"], a: 1 },
        ],
      },
      {
        id: "m-can-could", emoji: "💪", title: "Can & Could",
        short: "Kemampuan, izin, permintaan, kemungkinan.",
        when: [
          "CAN — kemampuan sekarang: I can work in your timezone.",
          "CAN — izin/permintaan santai: Can I ask something? Can you check this?",
          "COULD — kemampuan di masa lalu: I could read English before I could speak it.",
          "COULD — permintaan lebih sopan: Could you send me the link?",
          "COULD — kemungkinan / saran: It could be a DNS issue. / We could try another approach.",
        ],
        examples: [
          { tag: "informal", en: "Can you hop on a quick call?", idn: "Bisa call sebentar?" },
          { tag: "formal", en: "Could you please clarify the requirements?", idn: "Mohon bisa dijelaskan kebutuhannya?" },
          { tag: "neutral", en: "We could split the task into two PRs.", idn: "Kita bisa pecah tugasnya jadi dua PR." },
        ],
        tips: [
          "Ke atasan / klien / orang baru → default pakai COULD, bukan can.",
          "'Be able to' dipakai untuk tense yang tidak bisa pakai can: I will be able to join tomorrow. I haven't been able to reproduce it.",
          "Untuk satu keberhasilan spesifik di masa lalu pakai 'was able to', bukan could: I was able to fix it last night.",
        ],
        quiz: [
          { q: "Paling sopan ke klien:", options: ["Can you send it?", "Could you please send it?", "Send it."], a: 1 },
          { q: "I'm sorry, I ___ join tomorrow's meeting.", options: ["won't be able to", "can't to", "couldn't to"], a: 0 },
        ],
      },
      {
        id: "m-would", emoji: "🎩", title: "Would",
        short: "Modal paling 'serba guna' untuk sopan santun & pengandaian.",
        when: [
          "Permintaan sangat sopan: Would you mind sharing your screen?",
          "Menawarkan: Would you like some help?",
          "Keinginan sopan: I would like (I'd like) to discuss my salary.",
          "Pengandaian (conditional): If I lived in Europe, I would work in CET.",
          "Melunakkan opini: I would suggest… / I would say… / I'd recommend…",
          "Masa depan dari sudut pandang lampau: She said she would call.",
          "Kebiasaan di masa lalu: When I was a junior, I would stay late every night.",
        ],
        examples: [
          { tag: "formal", en: "I would appreciate your feedback on this proposal.", idn: "Saya akan sangat menghargai masukan Anda." },
          { tag: "formal", en: "Would it be possible to move the meeting to Thursday?", idn: "Apakah memungkinkan meeting dipindah ke Kamis?" },
          { tag: "neutral", en: "I'd say it's about 80% done.", idn: "Menurut saya sekitar 80% selesai." },
          { tag: "informal", en: "Would you rather have the call now or later?", idn: "Kamu lebih suka call sekarang atau nanti?" },
        ],
        tips: [
          "'Would you mind + V-ing?' — jawaban 'No, not at all' artinya BOLEH (karena artinya 'apakah keberatan?').",
          "'I want' terdengar kasar di konteks formal → ganti 'I would like'.",
          "'I'd' bisa = I would ATAU I had. Lihat kata setelahnya: I'd like (would), I'd finished (had).",
          "'Would rather' = lebih suka: I'd rather work async.",
        ],
        mistakes: [
          ["Would you mind to help me?", "Would you mind helping me?"],
          ["If I would have time, I would help.", "If I had time, I would help."],
        ],
        quiz: [
          { q: "Would you mind ___ the file?", options: ["to send", "sending", "send"], a: 1 },
          { q: "'Would you mind if I join?' — 'Not at all.' artinya…", options: ["Tidak boleh", "Boleh, silakan", "Tidak tahu"], a: 1 },
        ],
      },
      {
        id: "m-should", emoji: "🧭", title: "Should / Ought to / Had better",
        short: "Saran, rekomendasi, ekspektasi.",
        when: [
          "SHOULD — saran umum: You should add tests for this.",
          "SHOULD — ekspektasi: The build should be ready in 10 minutes.",
          "OUGHT TO — sama dengan should, lebih formal/jarang: We ought to inform the client.",
          "HAD BETTER ('d better) — saran tegas + ada konsekuensi: You'd better back up the DB first.",
        ],
        examples: [
          { tag: "neutral", en: "We should probably write a postmortem.", idn: "Sebaiknya kita tulis postmortem." },
          { tag: "neutral", en: "It should work now — can you try again?", idn: "Seharusnya sudah jalan — bisa coba lagi?" },
        ],
        tips: [
          "Lunakkan saran: 'You should…' bisa terdengar menggurui → 'Maybe we should…' / 'It might be worth…'.",
          "Pakai 'we' bukan 'you' saat memberi saran ke tim → terdengar kolaboratif.",
        ],
        quiz: [
          { q: "Saran paling halus:", options: ["You must change it.", "You'd better change it.", "Maybe we should change it."], a: 2 },
        ],
      },
      {
        id: "m-must-haveto", emoji: "⚠️", title: "Must / Have to / Need to",
        short: "Keharusan & larangan.",
        when: [
          "MUST — keharusan dari pembicara sendiri / aturan tertulis: All PRs must be reviewed.",
          "HAVE TO — keharusan dari luar (aturan, situasi): I have to attend a meeting at 3.",
          "NEED TO — perlu (netral, paling umum di percakapan kerja): I need to finish this first.",
          "MUST — kesimpulan pasti: You must be tired after that flight.",
        ],
        table: {
          head: ["Bentuk", "Arti"],
          rows: [
            ["mustn't", "DILARANG — You mustn't share the API key."],
            ["don't have to", "TIDAK PERLU (boleh kalau mau) — You don't have to come."],
            ["don't need to / needn't", "tidak perlu"],
          ],
        },
        examples: [
          { tag: "formal", en: "Candidates must have at least 3 years of experience.", idn: "Kandidat wajib punya min. 3 tahun pengalaman." },
          { tag: "neutral", en: "Sorry, I have to drop off early today.", idn: "Maaf, hari ini aku harus keluar call lebih awal." },
        ],
        tips: [
          "JEBAKAN: mustn't ≠ don't have to. 'You mustn't come' = dilarang datang. 'You don't have to come' = tidak wajib datang.",
          "'Must' punya bentuk lampau? Tidak! Pakai 'had to': I had to work overtime yesterday.",
          "Di percakapan sehari-hari 'have to / need to' lebih natural daripada 'must'.",
        ],
        quiz: [
          { q: "'You don't have to join' artinya…", options: ["Dilarang ikut", "Tidak wajib ikut", "Harus ikut"], a: 1 },
          { q: "Yesterday I ___ fix a production bug.", options: ["must", "had to", "musted"], a: 1 },
        ],
      },
      {
        id: "m-may-might", emoji: "🎲", title: "May & Might",
        short: "Kemungkinan & izin formal.",
        when: [
          "MAY — izin formal: May I ask a question?",
          "MAY / MIGHT — kemungkinan (might sedikit lebih kecil kemungkinannya): The release may be delayed. It might rain.",
          "MIGHT — saran sangat halus: You might want to check the logs.",
        ],
        examples: [
          { tag: "formal", en: "May I suggest an alternative approach?", idn: "Bolehkah saya usulkan pendekatan lain?" },
          { tag: "neutral", en: "I might be a few minutes late.", idn: "Saya mungkin telat beberapa menit." },
        ],
        tips: [
          "'You might want to…' = cara native menyuruh dengan sangat sopan. Hafalkan!",
          "'Maybe' (adverb, di awal kalimat) vs 'may be' (modal + be): Maybe it's broken = It may be broken.",
        ],
        quiz: [
          { q: "Mana penulisan yang benar?", options: ["It maybe broken.", "It may be broken.", "It may broken."], a: 1 },
        ],
      },
      {
        id: "m-will-shall", emoji: "🤝", title: "Will & Shall",
        short: "Janji, tawaran, ajakan.",
        when: [
          "WILL — janji/keputusan: I'll take care of it.",
          "WILL — permintaan langsung: Will you send me the doc?",
          "SHALL — tawaran/ajakan (UK, formal): Shall we get started? Shall I take notes?",
        ],
        examples: [
          { tag: "formal", en: "Shall we begin? Everyone seems to be here.", idn: "Kita mulai? Sepertinya semua sudah hadir." },
          { tag: "neutral", en: "No worries, I'll handle it.", idn: "Tenang, aku yang urus." },
        ],
        tips: [
          "'Shall we…?' adalah cara elegan membuka meeting.",
          "Di US, 'shall' jarang; ganti dengan 'Should we…?' atau 'Let's…'.",
        ],
        quiz: [
          { q: "Ajakan membuka meeting (formal):", options: ["Shall we start?", "Will we start?", "Must we start?"], a: 0 },
        ],
      },
      {
        id: "m-perfect", emoji: "🔙", title: "Modal + Have + V3 (should have, could have…)",
        short: "Membicarakan masa lalu: penyesalan, kemungkinan, kritik.",
        table: {
          head: ["Bentuk", "Arti", "Contoh"],
          rows: [
            ["should have + V3", "seharusnya (tapi tidak dilakukan)", "I should have tested it."],
            ["could have + V3", "bisa saja (tapi tidak terjadi)", "It could have been worse."],
            ["would have + V3", "akan (jika kondisinya lain)", "I would have helped if I'd known."],
            ["must have + V3", "pasti sudah (kesimpulan)", "He must have forgotten."],
            ["might/may have + V3", "mungkin sudah", "She might have left already."],
            ["can't have + V3", "tidak mungkin sudah", "It can't have been him."],
          ],
        },
        examples: [
          { tag: "neutral", en: "I should have asked earlier — my bad.", idn: "Harusnya aku tanya lebih awal — salahku." },
          { tag: "formal", en: "This issue could have been prevented with proper monitoring.", idn: "Masalah ini bisa dicegah dengan monitoring yang baik." },
        ],
        tips: [
          "Diucapkan cepat: should've, could've, would've (terdengar 'shoulda'). JANGAN ditulis 'should of' ❌.",
          "Sangat berguna di retrospective & postmortem.",
        ],
        quiz: [
          { q: "Aku menyesal tidak backup: I ___ backed it up.", options: ["should have", "must have", "can't have"], a: 0 },
          { q: "Lampunya mati, dia ___ gone home.", options: ["should have", "must have", "would have"], a: 1 },
        ],
      },
    ],
  },

  // ---------------------------------------------------------
  {
    id: "compare", emoji: "⚖️", title: "Sering Tertukar",
    intro: "Pasangan kata/grammar yang sering bikin bingung — dibandingkan langsung.",
    items: [
      {
        id: "c-would-could-should", emoji: "🎯", title: "Would vs Could vs Should",
        short: "Tiga modal paling sering tertukar.",
        table: {
          head: ["", "Would", "Could", "Should"],
          rows: [
            ["Inti makna", "akan (andai) / sopan", "bisa / mungkin", "sebaiknya / seharusnya"],
            ["Permintaan", "Would you send it? (sangat sopan)", "Could you send it? (sopan)", "—"],
            ["Opini", "I'd recommend X.", "We could try X.", "We should try X."],
            ["Masa lalu", "I would have done it (kalau…)", "I could have done it (mampu, tapi tidak)", "I should have done it (menyesal)"],
          ],
        },
        tips: [
          "Ingat: WOULD = Will yang 'diandaikan', COULD = Can yang 'dilunakkan', SHOULD = Saran.",
          "Kekuatan saran: could (opsi) < should (rekomendasi) < must (wajib).",
        ],
        quiz: [
          { q: "'I could help' artinya…", options: ["Saya pasti akan bantu", "Saya bisa bantu (kalau perlu)", "Saya harus bantu"], a: 1 },
        ],
      },
      {
        id: "c-pastsimple-perfect", emoji: "🆚", title: "Past Simple vs Present Perfect",
        short: "'I did' vs 'I have done'.",
        table: {
          head: ["Past Simple", "Present Perfect"],
          rows: [
            ["Waktu spesifik & selesai", "Waktu tidak disebut / masih relevan"],
            ["I worked at Gojek in 2021.", "I have worked at a unicorn startup."],
            ["Did you see the email this morning?", "Have you seen the email?"],
            ["yesterday, last week, ago, in 2020", "already, yet, ever, just, since, for"],
          ],
        },
        tips: [
          "Tanya diri sendiri: 'Kapan?' Kalau jawabannya disebut → Past Simple.",
          "Percakapan biasanya MULAI dengan Present Perfect, lalu LANJUT detail dengan Past Simple: 'Have you been to Japan?' — 'Yes, I went there in 2019.'",
        ],
        quiz: [
          { q: "I ___ my CV two days ago.", options: ["have updated", "updated", "has updated"], a: 1 },
        ],
      },
      {
        id: "c-since-for", emoji: "📏", title: "Since vs For vs Ago",
        short: "Durasi vs titik awal.",
        table: {
          head: ["Kata", "Dipakai untuk", "Contoh"],
          rows: [
            ["for", "durasi (berapa lama)", "for 3 years, for two hours"],
            ["since", "titik awal (sejak kapan)", "since 2020, since Monday, since I joined"],
            ["ago", "berapa lama yang lalu (Past Simple)", "3 years ago"],
          ],
        },
        tips: ["'I have worked here since 3 years' ❌ → 'for 3 years' ✅ atau 'since 2022' ✅."],
        quiz: [
          { q: "I've been learning English ___ January.", options: ["for", "since", "ago"], a: 1 },
        ],
      },
      {
        id: "c-make-do", emoji: "🧰", title: "Make vs Do · Say vs Tell · Bring vs Take",
        short: "Kata kerja yang artinya mirip di bahasa Indonesia.",
        table: {
          head: ["Kata", "Pola", "Contoh"],
          rows: [
            ["do", "tugas, aktivitas", "do a task, do research, do a favor"],
            ["make", "membuat/menghasilkan", "make a decision, make a mistake, make progress"],
            ["say", "say something (to sb)", "She said that it's ready."],
            ["tell", "tell SOMEONE something", "She told me that it's ready."],
            ["bring", "bawa KE sini (ke pembicara)", "Bring your laptop to the meeting."],
            ["take", "bawa KE sana", "Take this to the client."],
          ],
        },
        tips: ["'Tell' WAJIB ada orangnya: 'He told that…' ❌ → 'He told me that…' / 'He said that…' ✅."],
        quiz: [
          { q: "We need to ___ a decision today.", options: ["do", "make", "take"], a: 1 },
          { q: "Can you ___ me the details?", options: ["say", "tell", "speak"], a: 1 },
        ],
      },
    ],
  },

  // ---------------------------------------------------------
  {
    id: "tricks", emoji: "💡", title: "Tips & Trik Umum",
    intro: "Jalan pintas untuk menguasai grammar tanpa hafalan berat.",
    items: [
      {
        id: "tr-verb-forms", emoji: "🧬", title: "3 Bentuk Kata Kerja (V1 / V2 / V3)",
        short: "Kunci semua tense.",
        table: {
          head: ["V1 (base)", "V2 (past)", "V3 (past participle)", "Dipakai di"],
          rows: [
            ["work", "worked", "worked", "regular: tambah -ed"],
            ["go", "went", "gone", "irregular"],
            ["write", "wrote", "written", "irregular"],
            ["do", "did", "done", "irregular"],
            ["V1 → present, will, modal, do/does/did", "V2 → past simple (+)", "V3 → have/has/had, passive", ""],
          ],
        },
        tips: [
          "Hafal 50 irregular verbs paling umum = cukup untuk 95% percakapan.",
          "Kelompokkan polanya: A-A-A (put, cut, set, let), A-B-B (buy-bought-bought, send-sent-sent), A-B-C (write-wrote-written).",
          "Tambahkan irregular verbs ke Vocab Bank & latih via Flashcard.",
        ],
        quiz: [
          { q: "V3 dari 'begin' adalah…", options: ["began", "begun", "beginned"], a: 1 },
        ],
      },
      {
        id: "tr-rules", emoji: "📐", title: "5 Aturan Emas",
        short: "Kalau ingat ini, kesalahan grammar berkurang drastis.",
        when: [
          "1️⃣ Satu kalimat = satu 'pemegang tense' (auxiliary / verb pertama). Sisanya ikut: does + V1, has + V3, is + V-ing, modal + V1.",
          "2️⃣ He/She/It di present → -s/-es atau does/has/is.",
          "3️⃣ Setelah to → V1 (I want to learn). Setelah preposisi (about, for, of, without, before) → V-ing (Thanks for helping).",
          "4️⃣ Kalimat tanpa kata kerja → wajib 'be' (I am ready).",
          "5️⃣ Ada waktu lampau spesifik → Past Simple, bukan Present Perfect.",
        ],
        tips: [
          "'Looking forward to' → diikuti V-ing! I look forward to hearing from you ✅ (bukan to hear).",
          "Kata kerja setelah 'enjoy, finish, mind, avoid, suggest, consider' → V-ing: I suggest using Redis.",
        ],
        mistakes: [
          ["I look forward to hear from you.", "I look forward to hearing from you."],
          ["Thanks for help me.", "Thanks for helping me."],
          ["I suggest to use Redis.", "I suggest using Redis."],
        ],
        quiz: [
          { q: "I'm looking forward to ___ with you.", options: ["work", "working", "worked"], a: 1 },
        ],
      },
      {
        id: "tr-contractions", emoji: "✂️", title: "Contractions & Bahasa Chat",
        short: "Kapan boleh disingkat, kapan tidak.",
        table: {
          head: ["Penuh", "Singkat", "Super informal (chat/lisan)"],
          rows: [
            ["I am / I will / I would", "I'm / I'll / I'd", "—"],
            ["do not / does not / did not", "don't / doesn't / didn't", "dunno (don't know)"],
            ["going to / want to / got to", "—", "gonna / wanna / gotta"],
            ["let me / give me", "—", "lemme / gimme"],
            ["kind of / sort of", "—", "kinda / sorta"],
          ],
        },
        tips: [
          "Email formal / cover letter / dokumen: kurangi contraction & JANGAN pakai gonna/wanna.",
          "Slack & meeting: contraction itu normal — justru tanpa contraction terdengar kaku/robot.",
          "it's = it is ✅, its = miliknya. you're = you are, your = milikmu. they're / their / there.",
        ],
        quiz: [
          { q: "Tulisan formal yang benar:", options: ["I'm gonna send it.", "I will send it.", "Imma send it."], a: 1 },
          { q: "The app lost ___ data.", options: ["it's", "its", "it is"], a: 1 },
        ],
      },
      {
        id: "tr-learning", emoji: "🧠", title: "Cara Belajar Grammar yang Efektif",
        short: "Grammar untuk dipakai, bukan dihafal.",
        when: [
          "Belajar 1 pola → langsung buat 5 kalimat tentang HIDUPMU sendiri (kerjaan, project, hobi).",
          "Sentence mining: saat nonton/baca, salin kalimat bagus ke Vocab Bank (contoh kalimat).",
          "Tulis 'daily journal' 3–5 kalimat dalam bahasa Inggris tiap hari, lalu cek dengan AI / Grammarly.",
          "Shadowing: tiru intonasi native → grammar masuk secara alami.",
          "Fokus ke kesalahan yang SERING kamu buat — catat di Log, ulang minggu depan.",
        ],
        tips: [
          "Jangan perfeksionis saat bicara — komunikasi > grammar sempurna. Perbaiki saat menulis.",
          "Minta AI: 'Correct my grammar and explain my mistakes in Indonesian' setelah kamu menulis.",
          "Review grammar ini 1x seminggu (spaced repetition) — tandai yang belum paham.",
        ],
      },
    ],
  },
];

// Topik roadmap → grammar terkait (tombol "📘 Pelajari grammar")
const GRAMMAR_LINKS = {
  "l1-tobe": ["aux-be"],
  "l1-present": ["t-present-simple", "aux-do"],
  "l2-past": ["t-past-simple", "c-pastsimple-perfect", "tr-verb-forms"],
  "l2-continuous": ["t-present-cont"],
  "l2-questions": ["aux-question", "aux-do"],
  "l3-perfect": ["t-present-perfect", "aux-have", "c-since-for"],
  "l3-future": ["t-future-will", "t-future-going"],
  "l3-modals": ["m-overview", "m-can-could", "m-would", "c-would-could-should"],
  "l4-cond": ["m-would", "m-perfect"],
  "l4-register": ["tr-contractions"],
  "l5-feedback": ["m-should", "m-may-might"],
  "l6-interview": ["c-pastsimple-perfect", "t-past-simple"],
};

// =========================================================
//  ALASAN PERBANDINGAN — "Kenapa pakai ini, bukan yang lain?"
//  [pilihan, alasan]
// =========================================================
const GRAMMAR_WHY = {
  "t-cheatsheet": [
    ["Kenapa ada 12 tense, padahal bahasa Indonesia cukup pakai 'sudah/sedang/akan'?", "Bahasa Inggris menandai WAKTU dan STATUS aksi langsung di kata kerjanya. 'I worked' & 'I have worked' sama-sama 'sudah', tapi yang pertama menutup cerita (selesai di masa lalu) sedangkan yang kedua bilang 'hasilnya masih relevan sekarang'. Pendengar native menangkap perbedaan ini otomatis."],
    ["Simple vs Continuous", "Simple = melihat aksi sebagai satu 'titik/fakta utuh'. Continuous = melihat aksi sebagai 'proses yang sedang berjalan'. Jadi pilih continuous kalau kamu ingin menekankan sedang-berlangsung / sementara."],
    ["Perfect vs Simple", "Perfect selalu 'menghubungkan dua waktu' (masa lalu → sekarang, atau masa lalu → masa lalu lain). Kalau tidak ada hubungan itu, Simple sudah cukup."],
  ],
  "t-present-simple": [
    ["'I work from home' vs 'I'm working from home'", "Present Simple = kondisi permanen/kebiasaan (memang kerjanya remote). Present Continuous = sementara (minggu ini saja WFH). Pakai Simple saat memperkenalkan pekerjaanmu karena itu fakta tetap."],
    ["Kenapa jadwal pakai Present Simple, bukan will?", "'The meeting starts at 9' — jadwal resmi dianggap fakta yang pasti, bukan prediksi. 'Will start' tidak salah, tapi terdengar seperti tebakan."],
  ],
  "t-present-cont": [
    ["'I'm looking into it' vs 'I will look into it'", "Continuous memberi kesan kamu SUDAH mulai bergerak sekarang (proaktif). 'I will' = baru janji. Di remote work, 'I'm looking into it' membuat atasan lebih tenang."],
    ["'I'm meeting the client tomorrow' vs 'I'm going to meet…'", "Continuous untuk masa depan = sudah diatur (ada jadwal/undangan). Going to = niat/rencana di kepala. Keduanya benar, continuous terdengar lebih pasti."],
    ["Kenapa 'I know', bukan 'I'm knowing'?", "Stative verbs menyatakan KEADAAN, bukan aksi. Keadaan tidak 'berlangsung lalu selesai', jadi tidak cocok dengan bentuk -ing yang menunjukkan proses."],
  ],
  "t-present-perfect": [
    ["'I have built 3 APIs' vs 'I built 3 APIs'", "Present Perfect → fokus ke pengalaman/hasil yang kamu bawa SEKARANG (cocok di CV/interview pembuka). Past Simple → fokus ke kejadian di waktu tertentu (cocok saat bercerita detail). Jadi mulai dengan perfect, lanjut detail dengan past."],
    ["'I've lost my keys' vs 'I lost my keys'", "'I've lost' = sekarang masih hilang (masalahnya masih ada). 'I lost' = kejadian lampau, mungkin sudah ketemu. Perfect memberi info tambahan tentang SEKARANG."],
    ["Kenapa tidak bisa 'I have finished it yesterday'?", "Present Perfect menghubungkan masa lalu ke SEKARANG, sedangkan 'yesterday' mengunci waktunya di masa lalu. Dua sinyal ini bertentangan, jadi pilih Past Simple."],
  ],
  "t-present-perfect-cont": [
    ["'I've been fixing bugs' vs 'I've fixed bugs'", "Perfect Continuous menekankan PROSES & durasi (capek, masih jalan). Present Perfect menekankan HASIL/jumlah (sudah selesai 5 bug). Pilih sesuai yang mau kamu tonjolkan: usaha atau hasil."],
    ["'I've been working here for 5 years' vs 'I've worked here for 5 years'", "Hampir sama. Versi continuous terasa lebih 'hidup' & menekankan masih berlangsung; versi simple terasa lebih faktual. Dua-duanya aman di interview."],
  ],
  "t-past-simple": [
    ["Kenapa cerita STAR pakai Past Simple?", "Cerita interview terjadi di waktu & tempat spesifik (di perusahaan lama, tahun tertentu). Past Simple menandai kejadian yang selesai dan berurutan — jelas untuk pendengar."],
    ["'Did you finish?' vs 'Have you finished?'", "'Did you finish?' — konteks waktunya jelas/sudah lewat (misal tugas kemarin). 'Have you finished?' — menanyakan status sekarang. Di US keduanya sering dipakai bergantian; di UK perfect lebih umum."],
  ],
  "t-past-cont": [
    ["'I was coding when it crashed' vs 'I coded when it crashed'", "Past Continuous membuat 'latar' (sedang coding) yang terpotong kejadian singkat (crash). Kalau dua-duanya Past Simple, artinya urutan: crash dulu, lalu kamu coding."],
  ],
  "t-past-perfect": [
    ["'When I arrived, the meeting had started' vs '…the meeting started'", "Had started = meeting sudah mulai SEBELUM kamu datang (kamu telat). Started = meeting mulai SAAT/SETELAH kamu datang. Past Perfect dipakai untuk menjelaskan mana yang lebih dulu."],
  ],
  "t-past-perfect-cont": [
    ["Kenapa tidak pakai Past Perfect saja?", "Past Perfect = sudah selesai sebelum titik lampau. Past Perfect Continuous = menekankan DURASI/proses yang mengarah ke titik itu (sering menjelaskan sebab: capek, basah, kesal)."],
  ],
  "t-future-will": [
    ["Will vs Going to", "Will = keputusan DETIK ITU juga / janji / tawaran. Going to = rencana yang sudah diputuskan sebelumnya. Saat ada request di Slack, balas 'I'll check' (spontan), bukan 'I'm going to check'."],
    ["Will vs Present Continuous untuk masa depan", "Present Continuous = sudah dijadwalkan (ada kalender). Will = belum dijadwalkan, baru niat/janji."],
    ["Kenapa 'When I finish' bukan 'When I will finish'?", "Setelah when/if/after/before, bahasa Inggris memakai present untuk masa depan karena 'will' sudah ada di klausa utama. Dua kali 'will' dianggap berlebihan."],
  ],
  "t-future-going": [
    ["'It's going to crash' vs 'It will crash'", "Going to = prediksi berdasarkan BUKTI yang terlihat sekarang (memory sudah 99%). Will = prediksi berdasarkan opini/keyakinan (I think it will crash someday)."],
    ["'gonna' vs 'going to'", "Isinya sama; 'gonna' hanya ejaan dari cara ucap cepat. Pakai di chat/lisan santai, hindari di tulisan formal karena terlihat tidak profesional."],
  ],
  "t-future-cont-perfect": [
    ["'Will you join the call?' vs 'Will you be joining the call?'", "Future Continuous terdengar lebih sopan karena hanya menanyakan RENCANA orang itu, bukan meminta/menekan mereka untuk ikut."],
    ["'I'll finish by Friday' vs 'I'll have finished by Friday'", "Future Perfect menekankan 'sudah beres SEBELUM batas waktu' — terdengar lebih yakin & profesional saat memberi komitmen deadline."],
  ],
  "aux-be": [
    ["'I am agree' salah, kenapa?", "'Agree' sudah kata kerja. Bahasa Inggris hanya butuh SATU kata kerja utama; 'be' dipakai kalau tidak ada kata kerja lain (I am ready) atau untuk continuous/passive."],
    ["'Is' vs 'Are' untuk tim / perusahaan", "US: 'The team is…' (tim = satu unit). UK: 'The team are…' (anggota tim). Pilih satu style dan konsisten; versi US lebih umum di perusahaan global."],
  ],
  "aux-do": [
    ["Kenapa butuh 'do', padahal di bahasa Indonesia tidak ada?", "Bahasa Inggris membuat pertanyaan dengan MEMBALIK auxiliary dan subjek. Kalimat 'She works' tidak punya auxiliary, jadi 'do/does' dipinjam sebagai pembawa tense supaya bisa dibalik: Does she work?"],
    ["'I did send it' vs 'I sent it'", "'Did' di kalimat positif = penekanan/membantah. Pakai saat ingin bilang 'aku BENERAN sudah kirim' ketika ada yang meragukan."],
    ["Do vs Make", "Do = melakukan aktivitas/tugas yang sudah ada (do a review). Make = menghasilkan sesuatu yang baru (make a plan). Alasannya kolokasi — native sudah terbiasa pasangan kata ini, jadi hafalkan sebagai paket."],
  ],
  "aux-have": [
    ["'Do you have…?' vs 'Have you…?'", "Kalau 'have' = PUNYA (main verb), dia butuh 'do' untuk tanya → Do you have time? Kalau 'have' = AUXILIARY (perfect), dia sendiri yang dibalik → Have you finished?"],
    ["'Have to' vs 'Must'", "Have to = keharusan dari luar (aturan, jadwal, atasan) → netral & umum. Must = keharusan dari diri/aturan tertulis → terdengar lebih kuat/resmi."],
    ["'Have a look' vs 'Look'", "'Let me have a look' terdengar lebih santai & ramah daripada 'Let me look'. Pola 'have + kata benda' (have a call, have a chat) membuat aksi terdengar ringan."],
  ],
  "aux-question": [
    ["'Where is the file?' vs 'Do you know where the file is?'", "Indirect question lebih SOPAN karena tidak langsung menuntut jawaban. Karena sudah ada pertanyaan di depan ('Do you know'), bagian kedua kembali ke urutan kalimat biasa."],
    ["'Who called you?' vs 'Who did you call?'", "Who called you? → 'who' adalah SUBJEK (pelaku menelepon), jadi tidak butuh do. Who did you call? → 'who' adalah OBJEK (yang kamu telepon), jadi pakai did."],
  ],
  "m-overview": [
    ["Kenapa modal tidak pakai -s / to?", "Modal adalah auxiliary 'khusus' yang tidak berubah bentuk. Ia sudah membawa makna (bisa/harus/mungkin), jadi verb setelahnya selalu polos (V1)."],
    ["Kenapa modal penting untuk kerja remote?", "Budaya kerja barat (US/UK) sangat menghargai kalimat tidak langsung. Kalimat tanpa modal ('Send me the file') terdengar seperti perintah, sedangkan 'Could you send me the file?' terdengar seperti kolega yang menghargai."],
  ],
  "m-can-could": [
    ["Can vs Could untuk minta tolong", "Could = bentuk 'lampau/andai' dari can. Semakin 'jauh' bentuknya dari sekarang, semakin tidak langsung → semakin sopan. Can untuk teman setim, could untuk atasan/klien/orang baru."],
    ["Could vs Was able to (masa lalu)", "Could = kemampuan umum di masa lalu (I could swim at 5). Was able to = berhasil melakukan di SATU kejadian spesifik (I was able to fix it last night). Untuk prestasi spesifik di interview, pakai 'was able to' / 'managed to'."],
    ["Could vs Might (kemungkinan)", "'It could be DNS' = salah satu kemungkinan yang masuk akal. 'It might be DNS' = kemungkinan, tapi lebih ragu. Keduanya membuatmu terdengar tidak sok yakin saat debugging."],
  ],
  "m-would": [
    ["'I want' vs 'I would like'", "'I want' langsung ke keinginan diri → terdengar menuntut. 'I would like' memakai bentuk pengandaian → terdengar seperti permintaan, bukan tuntutan. Wajib saat negosiasi gaji & ke klien."],
    ["'Would you…?' vs 'Could you…?'", "Could menanyakan KEMAMPUAN (bisakah kamu?). Would menanyakan KESEDIAAN (maukah kamu?). Keduanya sopan; 'Would you mind…?' paling sopan karena memberi ruang untuk menolak."],
    ["'I would suggest' vs 'I suggest'", "'Would' melunakkan opini — terdengar sebagai saran, bukan klaim pasti. Bagus untuk code review & diskusi dengan senior."],
  ],
  "m-should": [
    ["Should vs Must", "Should = saran/rekomendasi (boleh tidak diikuti). Must = wajib. Pakai 'must' ke rekan kerja bisa terdengar memerintah; simpan 'must' untuk aturan/keamanan."],
    ["Should vs Had better", "Had better membawa 'ancaman' konsekuensi (kalau tidak, ada masalah). Pakai hanya saat risikonya nyata; kalau tidak, terdengar seperti memarahi."],
    ["'You should' vs 'Maybe we should'", "'You' menunjuk orang lain (bisa terasa menggurui). 'We' + 'maybe' menjadikannya keputusan tim — lebih kolaboratif, cocok untuk budaya remote."],
  ],
  "m-must-haveto": [
    ["Must vs Have to", "Must = keharusan dari sudut pandang pembicara / aturan tertulis (dokumen, kebijakan). Have to = keharusan dari situasi luar. Saat menjelaskan dirimu ('I have to leave early') pakai have to — terdengar natural, bukan dramatis."],
    ["Mustn't vs Don't have to", "Mustn't = DILARANG (larangan aktif). Don't have to = TIDAK WAJIB (bebas memilih). Salah pilih bisa mengubah arti total — ini jebakan klasik!"],
    ["Need to vs Have to", "Need to = karena perlu/penting untuk tujuan. Have to = karena diwajibkan. 'I need to finish this first' terdengar lebih profesional (prioritas) daripada 'I have to' (terpaksa)."],
  ],
  "m-may-might": [
    ["May vs Can untuk izin", "'May I…?' lebih formal & sopan (interview, klien). 'Can I…?' santai (teman setim). Dulu 'can' dianggap hanya 'kemampuan', jadi 'may' terasa lebih resmi."],
    ["May vs Might untuk kemungkinan", "May ≈ 50%, might sedikit lebih kecil/ragu. Di praktik sering dipakai bergantian; 'might' lebih umum di percakapan."],
    ["'You might want to…' vs 'You should…'", "'Might want to' membingkai perintah sebagai pilihan yang mungkin kamu inginkan. Hasilnya: pesan tersampaikan tanpa terasa menyuruh."],
  ],
  "m-will-shall": [
    ["Shall vs Will", "'Shall we…?' = mengajak/menawarkan (meminta persetujuan). 'Will we…?' = menanyakan prediksi masa depan. Jadi untuk mengajak mulai meeting, pakai 'Shall we start?' atau 'Let's start'."],
    ["'I'll handle it' vs 'I'm going to handle it'", "'I'll' = keputusan spontan & janji → menunjukkan responsif. Cocok saat membalas permintaan di chat."],
  ],
  "m-perfect": [
    ["Should have vs Could have", "Should have = ada kewajiban/ekspektasi yang tidak dilakukan (penyesalan/kritik). Could have = ada kemungkinan/opsi yang tidak dipakai (tanpa menyalahkan). Di postmortem, 'could have been prevented' lebih netral daripada 'you should have…'."],
    ["Must have vs Might have", "Must have = kesimpulan yakin (≈90%) berdasarkan bukti. Might have = tebakan (≈40%). Pilih sesuai seberapa kuat buktimu."],
  ],
  "c-would-could-should": [
    ["Kapan pilih Would?", "Saat ingin SOPAN atau membicarakan situasi ANDAI. Would = 'will yang dilunakkan'."],
    ["Kapan pilih Could?", "Saat menawarkan OPSI atau meminta dengan sopan tanpa menekan. Could = 'can yang dilunakkan'."],
    ["Kapan pilih Should?", "Saat memberi REKOMENDASI yang kamu yakini benar, atau ekspektasi ('It should work now')."],
    ["Contoh perbandingan dalam diskusi teknis", "'We could use Redis' (ini salah satu opsi) → 'We should use Redis' (aku rekomendasi ini) → 'I would use Redis' (kalau aku yang putuskan, aku pakai ini) → 'We must use Redis' (wajib, tidak ada pilihan)."],
  ],
  "c-pastsimple-perfect": [
    ["Alasan utama", "Pertanyaannya: apakah fokusmu ke WAKTU KEJADIAN (past simple) atau ke HUBUNGANNYA DENGAN SEKARANG (present perfect)? Kalau waktu disebut atau jelas dari konteks → past simple."],
    ["Kenapa CV pakai Past Simple?", "Bullet CV menggambarkan pekerjaan di periode tertentu (sudah tercantum tanggalnya), jadi pakai past simple: 'Built…', 'Led…'. Untuk pekerjaan sekarang, pakai present simple: 'Build…', 'Lead…'."],
  ],
  "c-since-for": [
    ["Kenapa 'since' + titik waktu, 'for' + durasi?", "Since menjawab 'sejak KAPAN?' (awal garis waktu). For menjawab 'BERAPA LAMA?' (panjang garis waktu). Ago menjawab 'berapa lama yang LALU?' dan karena menunjuk titik di masa lalu, ia pakai past simple."],
  ],
  "c-make-do": [
    ["Say vs Tell", "Tell selalu butuh penerima (tell someone). Say fokus ke kata-katanya (say something). Jadi kalau ada orangnya pakai tell, kalau tidak ada pakai say (atau 'say to someone')."],
    ["Bring vs Take", "Ditentukan arah dari posisi pembicara: bring = mendekat ke sini, take = menjauh ke sana."],
  ],
  "tr-verb-forms": [
    ["Kenapa V3 dipakai setelah have & be?", "V3 (past participle) menunjukkan aksi yang 'sudah selesai' atau 'dikenai'. Dengan have → perfect (sudah); dengan be → passive (di-…)."],
  ],
  "tr-rules": [
    ["Kenapa 'look forward to + V-ing'?", "'To' di sini adalah PREPOSISI (bukan bagian dari to-infinitive), dan setelah preposisi selalu kata benda / V-ing. Sama seperti 'used to working', 'committed to delivering'."],
    ["Kenapa 'suggest + V-ing' bukan 'suggest to'?", "Ini pola kata kerja yang sudah baku (verb pattern). Suggest, enjoy, avoid, consider, finish → diikuti V-ing. Want, need, plan, decide → diikuti to + V1. Hafalkan sebagai pasangan."],
  ],
  "tr-contractions": [
    ["Kenapa contraction normal di chat tapi dihindari di formal?", "Contraction = cara alami bicara. Tulisan formal meniru gaya dokumen resmi, jadi bentuk penuh terlihat lebih hati-hati. Di Slack, tanpa contraction justru terdengar kaku atau seperti marah ('I do not agree.')."],
  ],
};

// =========================================================
//  KONSEP DASAR — penjelasan istilah + bedah kalimat
//  breakdown: [{ en, idn, parts: [[kata, role]], note }]
//  contrast:  [[kalimat A, kalimat B, penjelasan beda]]
//  role: S (subjek) · aux (kata bantu) · V (kata kerja utama) · O (objek)
//        C (pelengkap) · neg (not) · T (waktu) · P (tempat) · by (pelaku passive)
// =========================================================
const GRAMMAR_ROLES = {
  S: "Subjek", aux: "Kata bantu", V: "Kata kerja", O: "Objek", C: "Pelengkap",
  neg: "Negatif", T: "Waktu", P: "Tempat", by: "Pelaku",
};

GRAMMAR.unshift({
  id: "basics", emoji: "🧠", title: "Konsep Dasar (Mulai di Sini)",
  intro: "Belum paham istilah 'present', 'continuous', 'perfect', 'passive'? Mulai dari sini. Setiap istilah dijelaskan, kalimatnya dibedah kata per kata, dan dibandingkan langsung.",
  items: [
    {
      id: "k-start", emoji: "🧭", title: "Cara Membaca Nama Tense",
      short: "Nama tense = WAKTU + BENTUK. Contoh: Present Continuous = sekarang + sedang berlangsung.",
      table: {
        head: ["Bagian nama", "Pilihan", "Menjawab pertanyaan"],
        rows: [
          ["WAKTU", "Present / Past / Future", "KAPAN? (sekarang / dulu / nanti)"],
          ["BENTUK (aspek)", "Simple / Continuous / Perfect / Perfect Continuous", "BAGAIMANA aksinya? (fakta / sedang / sudah / sudah & masih)"],
          ["SUARA (voice)", "Active / Passive", "SIAPA yang jadi fokus? (pelaku / yang dikenai)"],
        ],
      },
      when: [
        "Present Continuous → Present (sekarang) + Continuous (sedang) = 'sedang ... sekarang'.",
        "Past Perfect → Past (dulu) + Perfect (sudah) = 'sudah ... sebelum suatu waktu di masa lalu'.",
        "Future Simple → Future (nanti) + Simple (fakta/utuh) = 'akan ...'.",
        "Passive bisa digabung ke tense apa pun: Present Continuous Passive = 'sedang di-...'.",
      ],
      breakdown: [
        { en: "I am writing an email.", idn: "Saya sedang menulis email.", parts: [["I", "S"], ["am", "aux"], ["writing", "V"], ["an email", "O"]],
          note: "'am' = PRESENT (sekarang). '-ing' = CONTINUOUS (sedang). Jadi namanya Present Continuous." },
        { en: "The email was written yesterday.", idn: "Email itu ditulis kemarin.", parts: [["The email", "S"], ["was", "aux"], ["written", "V"], ["yesterday", "T"]],
          note: "'was' = PAST. be + V3 (written) = PASSIVE. Jadi namanya Past Simple Passive." },
      ],
      tips: [
        "Trik: lihat KATA BANTU pertama untuk tahu WAKTU (am/is/are/do/have = present, was/were/did/had = past, will = future).",
        "Lalu lihat BENTUK kata kerjanya: -ing = continuous, V3 setelah have = perfect, V3 setelah be = passive.",
      ],
      quiz: [
        { q: "'They had left' — waktu & bentuknya…", options: ["Present Perfect", "Past Perfect", "Past Continuous"], a: 1 },
      ],
    },
    {
      id: "k-time", emoji: "🕰️", title: "Present, Past, Future itu Apa?",
      short: "Penanda WAKTU. Dalam bahasa Inggris, waktu ditunjukkan dengan mengubah kata kerja / kata bantu.",
      when: [
        "PRESENT = sekarang, kebiasaan, fakta. Penanda: V1 / V1+s, am/is/are, do/does, have/has.",
        "PAST = masa lalu, sudah lewat. Penanda: V2 (worked, went), was/were, did, had.",
        "FUTURE = masa depan. Penanda: will, be going to.",
        "Bahasa Indonesia pakai kata keterangan (kemarin, besok) — kata kerjanya TIDAK berubah. Bahasa Inggris WAJIB mengubah kata kerjanya, walaupun sudah ada 'yesterday'.",
      ],
      breakdown: [
        { en: "She works from home.", idn: "Dia bekerja dari rumah (kebiasaan).", parts: [["She", "S"], ["works", "V"], ["from home", "P"]],
          note: "'works' (V1 + s) → PRESENT. Tambahan -s karena subjeknya She." },
        { en: "She worked from home yesterday.", idn: "Dia bekerja dari rumah kemarin.", parts: [["She", "S"], ["worked", "V"], ["from home", "P"], ["yesterday", "T"]],
          note: "'worked' (V2) → PAST. Kata kerjanya berubah, bukan hanya ditambah 'yesterday'." },
        { en: "She will work from home tomorrow.", idn: "Dia akan bekerja dari rumah besok.", parts: [["She", "S"], ["will", "aux"], ["work", "V"], ["from home", "P"], ["tomorrow", "T"]],
          note: "'will' → FUTURE. Setelah will, kata kerja kembali polos (work, tanpa -s)." },
      ],
      contrast: [
        ["I work here.", "I worked here.", "work (present) = masih kerja di sini sekarang. worked (past) = dulu kerja di sini, SEKARANG SUDAH TIDAK. Satu huruf -ed mengubah arti besar!"],
        ["She is busy.", "She was busy.", "is = sibuk sekarang. was = sibuk tadi/kemarin (sekarang mungkin tidak)."],
        ["I will call you.", "I would call you.", "will = pasti akan menelepon. would = 'akan menelepon (kalau…)' — ada syarat/pengandaian, atau bentuk lampau dari will."],
      ],
      tips: ["Kesalahan khas orang Indonesia: 'Yesterday I go to office' ❌. Ingat: kata kerja harus ikut berubah → 'Yesterday I went to the office' ✅."],
      quiz: [
        { q: "'I lived in Bandung' artinya…", options: ["Saya tinggal di Bandung (sekarang)", "Dulu saya tinggal di Bandung", "Saya akan tinggal di Bandung"], a: 1 },
      ],
    },
    {
      id: "k-simple", emoji: "⚪", title: "Simple itu Apa?",
      short: "Melihat aksi sebagai satu kesatuan utuh: fakta, kebiasaan, atau kejadian selesai.",
      formula: [
        ["Present", "S + V1(s)  → I work / She works"],
        ["Past", "S + V2  → I worked"],
        ["Future", "S + will + V1 → I will work"],
      ],
      when: [
        "Disebut 'simple' karena bentuknya paling sederhana — tanpa be + -ing, tanpa have + V3.",
        "Tidak menekankan 'sedang' atau 'sudah' — hanya menyatakan BAHWA aksi itu terjadi.",
      ],
      breakdown: [
        { en: "I write code every day.", idn: "Saya menulis kode setiap hari.", parts: [["I", "S"], ["write", "V"], ["code", "O"], ["every day", "T"]],
          note: "Hanya satu kata kerja (write). Tidak ada kata bantu → Simple. 'every day' menunjukkan kebiasaan." },
        { en: "She doesn't write tests.", idn: "Dia tidak menulis test.", parts: [["She", "S"], ["does", "aux"], ["n't", "neg"], ["write", "V"], ["tests", "O"]],
          note: "Kalimat negatif/tanya butuh 'do/does/did'. -s pindah ke does, jadi 'write' kembali polos." },
      ],
      contrast: [
        ["I drink coffee.", "I'm drinking coffee.", "Simple = kebiasaan (saya peminum kopi). Continuous = sedang minum kopi saat ini."],
      ],
      quiz: [
        { q: "Kalimat Simple:", options: ["He is coding.", "He codes.", "He has coded."], a: 1 },
      ],
    },
    {
      id: "k-continuous", emoji: "🔵", title: "Continuous itu Apa?",
      short: "Aksi yang SEDANG berlangsung (dalam proses) pada suatu waktu. Rumus inti: BE + V-ing.",
      formula: [
        ["Present", "am/is/are + V-ing → I am working"],
        ["Past", "was/were + V-ing → I was working"],
        ["Future", "will be + V-ing → I will be working"],
      ],
      when: [
        "Continuous = 'berkelanjutan / sedang berjalan'. Bayangkan seperti video yang sedang diputar, bukan foto.",
        "Dipakai untuk: sedang terjadi, situasi sementara, aksi yang terpotong kejadian lain, rencana yang sudah diatur.",
        "Dua bagian WAJIB ada: BE (menunjukkan waktu) + V-ing (menunjukkan proses).",
      ],
      breakdown: [
        { en: "I am writing an email.", idn: "Saya sedang menulis email.", parts: [["I", "S"], ["am", "aux"], ["writing", "V"], ["an email", "O"]],
          note: "am → present (sekarang). writing → -ing = sedang dalam proses. 'am' tidak punya arti sendiri, tugasnya membawa waktu." },
        { en: "They were having a meeting when I called.", idn: "Mereka sedang meeting ketika saya menelepon.", parts: [["They", "S"], ["were", "aux"], ["having", "V"], ["a meeting", "O"], ["when I called", "T"]],
          note: "were → past. having → sedang berlangsung. 'when I called' (past simple) = kejadian singkat yang memotong." },
        { en: "We are not using Docker this sprint.", idn: "Kami tidak sedang pakai Docker di sprint ini.", parts: [["We", "S"], ["are", "aux"], ["not", "neg"], ["using", "V"], ["Docker", "O"], ["this sprint", "T"]],
          note: "'not' diletakkan setelah be. 'this sprint' = situasi sementara." },
      ],
      contrast: [
        ["I work from home.", "I am working from home.", "work = permanen/kebiasaan (memang kerjanya remote). am working = sementara/saat ini saja (hari ini WFH)."],
        ["I am writing.", "I was writing.", "Yang berubah hanya am → was (waktunya). '-ing' tetap, karena aksinya tetap 'sedang berlangsung', hanya pindah ke masa lalu."],
        ["I writing.", "I am writing.", "❌ vs ✅. Dalam bahasa Inggris, 'writing' sendirian BUKAN kata kerja lengkap. Ia butuh 'be' untuk jadi kalimat."],
        ["He is fixing the bug.", "The bug is fixed.", "is fixING = dia SEDANG memperbaiki (aktif, continuous). is fixED = bug-nya SUDAH DIPERBAIKI (passive, keadaan). Akhiran -ing vs -ed mengubah semuanya!"],
      ],
      tips: [
        "Kata kerja 'keadaan' (know, like, want, need, believe, own, understand) TIDAK pakai continuous: 'I'm wanting' ❌ → 'I want' ✅.",
        "'Currently' + present continuous = kombinasi favorit untuk status kerja: I'm currently working on…",
      ],
      quiz: [
        { q: "Mana yang continuous?", options: ["She was cooking.", "She cooked.", "She has cooked."], a: 0 },
        { q: "Kenapa 'I working now' salah?", options: ["Kurang -s", "Kurang 'am'", "Harus pakai 'did'"], a: 1 },
      ],
    },
    {
      id: "k-perfect", emoji: "🟢", title: "Perfect itu Apa?",
      short: "Aksi yang SUDAH terjadi dan terhubung ke waktu lain. Rumus inti: HAVE + V3.",
      formula: [
        ["Present", "have/has + V3 → I have finished"],
        ["Past", "had + V3 → I had finished"],
        ["Future", "will have + V3 → I will have finished"],
      ],
      when: [
        "'Perfect' di sini artinya 'sempurna/lengkap = sudah selesai', bukan 'bagus'.",
        "Selalu menghubungkan DUA waktu: Present Perfect = masa lalu → sekarang. Past Perfect = masa lalu yang lebih awal → masa lalu.",
        "'have' di sini adalah kata bantu (artinya BUKAN 'punya').",
      ],
      breakdown: [
        { en: "I have finished the report.", idn: "Saya sudah menyelesaikan laporannya.", parts: [["I", "S"], ["have", "aux"], ["finished", "V"], ["the report", "O"]],
          note: "have → present (hasilnya terasa sekarang: laporannya siap). finished → V3 = sudah selesai." },
        { en: "She has worked here since 2021.", idn: "Dia bekerja di sini sejak 2021 (sampai sekarang).", parts: [["She", "S"], ["has", "aux"], ["worked", "V"], ["here", "P"], ["since 2021", "T"]],
          note: "has (karena She) + V3. Dimulai 2021, MASIH berlangsung sekarang." },
        { en: "The meeting had started before I joined.", idn: "Meeting sudah mulai sebelum saya bergabung.", parts: [["The meeting", "S"], ["had", "aux"], ["started", "V"], ["before I joined", "T"]],
          note: "had → past perfect: kejadian yang lebih dulu dari 'I joined'." },
      ],
      contrast: [
        ["I finished the report.", "I have finished the report.", "finished (past) = cerita tentang masa lalu, fokus pada kapan. have finished (perfect) = fokus pada hasil sekarang: 'laporannya sudah siap, silakan dicek'."],
        ["I have a laptop.", "I have bought a laptop.", "have + kata benda = PUNYA (main verb). have + V3 = SUDAH (kata bantu perfect). Kata yang sama, fungsi berbeda!"],
        ["She has gone to Bali.", "She has been to Bali.", "has gone = dia pergi dan SEKARANG masih di Bali. has been = dia pernah ke Bali (sudah pulang)."],
      ],
      tips: [
        "Perfect + waktu spesifik lampau = SALAH: 'I have finished it yesterday' ❌.",
        "Perfect Continuous = gabungan: have been + V-ing → 'I have been working' (sudah & masih sedang). 'been' = V3 dari be (perfect), 'working' = continuous.",
      ],
      quiz: [
        { q: "'have' pada 'I have sent it' berfungsi sebagai…", options: ["punya", "kata bantu (sudah)", "harus"], a: 1 },
        { q: "'He has gone to Japan' artinya…", options: ["Dia pernah ke Jepang", "Dia sedang/masih di Jepang", "Dia akan ke Jepang"], a: 1 },
      ],
    },
    {
      id: "k-passive", emoji: "🔄", title: "Active vs Passive itu Apa?",
      short: "Active = subjek MELAKUKAN. Passive = subjek DIKENAI (di-...). Rumus inti passive: BE + V3.",
      formula: [
        ["Active", "Pelaku + Kata kerja + Objek → Andi fixed the bug."],
        ["Passive", "Objek + be + V3 (+ by pelaku) → The bug was fixed (by Andi)."],
      ],
      when: [
        "Passive mirip 'di-' dalam bahasa Indonesia: memperbaiki → diperbaiki.",
        "Pakai passive saat: pelaku TIDAK PENTING / TIDAK DIKETAHUI (The server was hacked), tulisan formal/laporan, atau supaya tidak menyalahkan orang (A mistake was made).",
        "'by + pelaku' boleh dihilangkan jika tidak penting — dan memang sering dihilangkan.",
        "Tense ditunjukkan oleh 'BE'. V3-nya tidak pernah berubah.",
      ],
      breakdown: [
        { en: "Andi fixed the bug.", idn: "Andi memperbaiki bug itu. (ACTIVE)", parts: [["Andi", "S"], ["fixed", "V"], ["the bug", "O"]],
          note: "Fokus pada PELAKU (Andi). Subjek = yang melakukan." },
        { en: "The bug was fixed by Andi.", idn: "Bug itu diperbaiki oleh Andi. (PASSIVE)", parts: [["The bug", "S"], ["was", "aux"], ["fixed", "V"], ["by Andi", "by"]],
          note: "Objek pindah ke depan jadi subjek. was (past) + fixed (V3). Fokus pada BUG-nya." },
        { en: "The PR is being reviewed.", idn: "PR-nya sedang di-review.", parts: [["The PR", "S"], ["is", "aux"], ["being", "aux"], ["reviewed", "V"]],
          note: "Present Continuous Passive: is (present) + being (continuous dari be) + reviewed (V3 = passive)." },
        { en: "The feature has been deployed.", idn: "Fiturnya sudah di-deploy.", parts: [["The feature", "S"], ["has", "aux"], ["been", "aux"], ["deployed", "V"]],
          note: "Present Perfect Passive: has (perfect) + been (V3 dari be) + deployed (V3 = passive)." },
      ],
      table: {
        head: ["Tense", "Active", "Passive (be + V3)"],
        rows: [
          ["Present Simple", "They review the code.", "The code is reviewed."],
          ["Present Continuous", "They are reviewing the code.", "The code is being reviewed."],
          ["Present Perfect", "They have reviewed the code.", "The code has been reviewed."],
          ["Past Simple", "They reviewed the code.", "The code was reviewed."],
          ["Past Continuous", "They were reviewing the code.", "The code was being reviewed."],
          ["Past Perfect", "They had reviewed the code.", "The code had been reviewed."],
          ["Future", "They will review the code.", "The code will be reviewed."],
          ["Modal", "They should review the code.", "The code should be reviewed."],
        ],
      },
      contrast: [
        ["I made a mistake.", "A mistake was made.", "Active = mengakui langsung (jujur, bertanggung jawab). Passive = netral, tidak menunjuk orang (umum di laporan insiden)."],
        ["The bug fixed.", "The bug was fixed.", "❌ vs ✅. Tanpa 'be', kalimatnya berarti 'bug itu memperbaiki (sesuatu)' — tidak masuk akal. Passive WAJIB ada be."],
        ["The code is reviewing.", "The code is being reviewed.", "❌ vs ✅. 'is reviewing' = kode itu yang me-review (aktif). Karena kode dikenai, pakai passive continuous: is BEING reviewED."],
        ["is fixed / is being fixed / has been fixed", "", "is fixed = sudah dalam keadaan diperbaiki. is being fixed = sedang dalam proses diperbaiki. has been fixed = sudah diperbaiki (hasilnya relevan sekarang)."],
      ],
      tips: [
        "Trik ubah ke passive: (1) objek pindah ke depan, (2) tambahkan 'be' sesuai tense aslinya, (3) kata kerja jadi V3, (4) pelaku jadi 'by …' atau dihapus.",
        "Jangan berlebihan memakai passive di Slack/percakapan — terdengar kaku. Simpan untuk laporan & dokumen.",
      ],
      quiz: [
        { q: "Passive dari 'They built the app':", options: ["The app built.", "The app was built.", "The app was building."], a: 1 },
        { q: "'The server is being restarted' artinya…", options: ["Server sudah di-restart", "Server sedang di-restart", "Server me-restart"], a: 1 },
      ],
    },
    {
      id: "k-word-forms", emoji: "🔠", title: "Perbedaan Bentuk Kata: work · working · worked · be · being · been",
      short: "Satu kata kerja punya beberapa bentuk — dan setiap bentuk punya 'pasangan' kata bantunya sendiri.",
      table: {
        head: ["Bentuk", "Contoh", "Dipakai setelah / di mana", "Contoh kalimat"],
        rows: [
          ["V1 (dasar)", "work", "I/you/we/they, do/does/did, modal, to", "I work. Does she work? I can work. I want to work."],
          ["V1 + s", "works", "he/she/it (present simple positif)", "She works remotely."],
          ["V-ing", "working", "be (continuous), setelah preposisi, sebagai kata benda", "I am working. Thanks for working late. Working remotely is fun."],
          ["V2 (past)", "worked / went", "past simple positif (tanpa kata bantu)", "I worked yesterday."],
          ["V3 (participle)", "worked / gone", "have/has/had (perfect), be (passive)", "I have worked. It was done."],
        ],
      },
      breakdown: [
        { en: "The issue is being investigated.", idn: "Masalahnya sedang diselidiki.", parts: [["The issue", "S"], ["is", "aux"], ["being", "aux"], ["investigated", "V"]],
          note: "BEING = bentuk -ing dari be → dipakai untuk passive yang sedang berlangsung." },
        { en: "The issue has been resolved.", idn: "Masalahnya sudah diselesaikan.", parts: [["The issue", "S"], ["has", "aux"], ["been", "aux"], ["resolved", "V"]],
          note: "BEEN = bentuk V3 dari be → selalu muncul setelah have/has/had." },
        { en: "The issue will be resolved soon.", idn: "Masalahnya akan segera diselesaikan.", parts: [["The issue", "S"], ["will", "aux"], ["be", "aux"], ["resolved", "V"], ["soon", "T"]],
          note: "BE (bentuk dasar) → setelah modal (will, can, should) atau 'to'." },
      ],
      contrast: [
        ["be / being / been", "", "be → setelah modal/to (will be, to be). being → setelah am/is/are/was/were (is being). been → setelah have/has/had (has been)."],
        ["I am bored.", "I am boring.", "-ed = perasaan yang KAMU alami (saya bosan). -ing = sifat yang MENYEBABKAN (saya membosankan). Sama: interested vs interesting, confused vs confusing."],
        ["I used to work late.", "I am used to working late.", "used to + V1 = dulu biasa (sekarang tidak). be used to + V-ing = sudah terbiasa (sekarang)."],
        ["I stopped to check Slack.", "I stopped checking Slack.", "stop to + V1 = berhenti (dari aktivitas lain) UNTUK cek Slack. stop + V-ing = berhenti melakukan cek Slack."],
      ],
      tips: [
        "Pasangan wajib — hafalkan seperti rumus: do→V1, modal→V1, to→V1, be→V-ing / V3, have→V3, preposisi→V-ing.",
        "Kalau ragu, lihat KATA SEBELUMNYA — itu yang menentukan bentuk kata kerja.",
      ],
      quiz: [
        { q: "The report has ___ sent.", options: ["be", "being", "been"], a: 2 },
        { q: "The movie was so long, I was ___.", options: ["boring", "bored", "bore"], a: 1 },
      ],
    },
    {
      id: "k-anatomy", emoji: "🧬", title: "Anatomi Kalimat & Urutan Kata",
      short: "Urutan standar: Subjek → (Kata bantu) → Kata kerja → Objek → Tempat → Waktu.",
      formula: [
        ["Urutan", "S + aux + V + O + Place + Time"],
        ["Tanya", "(WH) + aux + S + V + O … ?"],
      ],
      when: [
        "Setiap kalimat lengkap WAJIB punya subjek + kata kerja. 'Is raining' ❌ → 'It is raining' ✅ (subjek 'it' wajib walau tidak ada artinya).",
        "Keterangan TEMPAT sebelum WAKTU: 'I worked at the office yesterday', bukan 'yesterday at the office' di tengah.",
        "Kata sifat SEBELUM kata benda (kebalikan bahasa Indonesia): 'a big project' (proyek besar).",
      ],
      breakdown: [
        { en: "I sent the report to my manager yesterday.", idn: "Saya mengirim laporan ke manajer saya kemarin.", parts: [["I", "S"], ["sent", "V"], ["the report", "O"], ["to my manager", "P"], ["yesterday", "T"]],
          note: "Urutan klasik: S + V + O + tujuan + waktu." },
        { en: "Have you deployed the new version to production?", idn: "Kamu sudah deploy versi baru ke production?", parts: [["Have", "aux"], ["you", "S"], ["deployed", "V"], ["the new version", "O"], ["to production", "P"]],
          note: "Pertanyaan: kata bantu pindah ke depan subjek. 'new' (sifat) sebelum 'version' (benda)." },
        { en: "It is important to test the code.", idn: "Penting untuk menguji kodenya.", parts: [["It", "S"], ["is", "aux"], ["important", "C"], ["to test the code", "O"]],
          note: "'It' = subjek bayangan. Bahasa Inggris tidak boleh kalimat tanpa subjek." },
      ],
      contrast: [
        ["Is important to test.", "It is important to test.", "Bahasa Indonesia boleh tanpa subjek ('Penting untuk diuji'), bahasa Inggris tidak — tambahkan 'It'."],
        ["The project big.", "The project is big. / The big project.", "Kata sifat butuh 'be' kalau jadi predikat, atau letakkan SEBELUM kata benda."],
      ],
      quiz: [
        { q: "Urutan yang benar:", options: ["I yesterday met the client.", "I met the client yesterday.", "Yesterday met I the client."], a: 1 },
      ],
    },
  ],
});

Object.assign(GRAMMAR_WHY, {
  "k-start": [["Kenapa perlu tahu nama tense?", "Supaya bisa mencari materi, memahami penjelasan, dan menyadari kesalahan sendiri. Tapi yang lebih penting adalah paham FUNGSI-nya — nama hanyalah label."]],
  "k-continuous": [
    ["Kenapa pakai 'be' + -ing, bukan -ing saja?", "Dalam bahasa Inggris, kata -ing sendirian bukan kata kerja lengkap — ia tidak menunjukkan waktu. 'Be' (am/is/was) membawa informasi WAKTU, '-ing' membawa informasi PROSES. Dua-duanya dibutuhkan."],
    ["Kapan pilih Continuous dibanding Simple?", "Pilih continuous kalau kamu ingin pendengar 'melihat' aksinya sedang berjalan, sementara, atau belum selesai. Pilih simple kalau aksinya fakta/kebiasaan."],
  ],
  "k-perfect": [
    ["Kenapa bahasa Inggris punya Perfect, padahal Past sudah ada?", "Past hanya bilang 'terjadi di masa lalu'. Perfect menambahkan 'dan itu masih relevan dengan saat ini'. 'I've lost my key' memberi tahu kuncinya MASIH hilang — info yang tidak ada di 'I lost my key'."],
  ],
  "k-passive": [
    ["Kapan pilih Passive dibanding Active?", "Active lebih jelas, langsung, dan disukai di tulisan modern — pakai sebagai default. Pilih passive kalau: pelaku tidak diketahui/tidak penting, ingin fokus ke objek/hasil, menulis laporan resmi, atau ingin menghindari menyalahkan."],
    ["Kenapa di postmortem sering passive?", "Budaya 'blameless postmortem': fokus pada sistem & proses, bukan siapa yang salah. 'The config was changed' lebih netral daripada 'Budi changed the config'."],
  ],
  "k-word-forms": [
    ["Kenapa satu kata kerja punya banyak bentuk?", "Bahasa Inggris memakai bentuk kata untuk menunjukkan waktu & fungsi (yang di bahasa Indonesia ditunjukkan dengan kata tambahan: sedang, sudah, di-). Jadi bentuk kata = 'kode' informasi."],
  ],
  "k-anatomy": [
    ["Kenapa subjek wajib?", "Kata kerja bahasa Inggris berubah sesuai subjek (I am / she is). Tanpa subjek, kata kerja tidak tahu harus berbentuk apa — jadi subjek 'bayangan' (it/there) tetap dipakai."],
  ],
});
