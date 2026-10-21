// =========================================================
//  EJAAN AKHIRAN (SPELLING RULES) — -s/-es/-ies, -ed, -ing, -er/-est, -ly
//  + generator bentuk kata & tambahan aturan pengecek tulisan
//  (dimuat setelah grammar.js & writing.js)
// =========================================================
const SPELLING_GROUP = {
  id: "spelling", emoji: "🔡", title: "Ejaan Akhiran (-s, -es, -ies, -ed, -ing…)",
  intro: "Kapan tambah -s, -es, -ies, -ed, -ing, -er, -ly? Aturannya ternyata konsisten — dan setiap aturan punya alasan. Coba juga generator di materi pertama: ketik kata, lihat semua bentuknya.",
  items: [
    {
      id: "sp-tool", emoji: "🪄", title: "Generator Bentuk Kata",
      short: "Ketik kata kerja / kata benda / kata sifat → lihat bentuk -s, -ed, -ing, jamak, -er/-est, -ly beserta aturannya.",
      widget: "suffix",
      when: [
        "Cocok untuk cek cepat saat menulis: 'stop' jadi 'stoped' atau 'stopped'?",
        "Generator mengenali ~90 irregular verb umum dan kata benda jamak tidak beraturan.",
        "Untuk kata 2+ suku kata, penggandaan konsonan bergantung pada tekanan (stress) — generator memberi catatan bila perlu dicek.",
      ],
      tips: ["Coba kata-kata ini: study, play, stop, open, commit, make, lie, fix, go, have, easy, big, happy, child, knife."],
    },
    {
      id: "sp-s", emoji: "➕", title: "Kapan -s, -es, atau -ies?",
      short: "Untuk he/she/it (present simple) DAN kata benda jamak. Aturannya sama.",
      table: {
        head: ["Akhiran kata", "Aturan", "Kata kerja (he/she/it)", "Kata benda (jamak)"],
        rows: [
          ["umum", "+ s", "work → works, run → runs", "book → books, bug → bugs"],
          ["-s, -ss, -sh, -ch, -x, -z", "+ es", "pass → passes, push → pushes, watch → watches, fix → fixes", "class → classes, box → boxes, branch → branches"],
          ["-o (kata kerja)", "+ es", "go → goes, do → does", "potato → potatoes, hero → heroes"],
          ["-o (kata benda modern/pendek)", "+ s", "—", "photo → photos, video → videos, demo → demos, logo → logos"],
          ["konsonan + y", "y → ies", "try → tries, study → studies, reply → replies", "company → companies, story → stories, query → queries"],
          ["vokal + y (ay, ey, oy, uy)", "+ s", "play → plays, say → says, deploy → deploys", "day → days, key → keys, guy → guys"],
          ["-f / -fe (kata benda)", "f → ves", "—", "knife → knives, life → lives, half → halves, shelf → shelves"],
          ["tidak beraturan", "hafalkan", "have → has, be → is", "lihat materi 'Jamak Tidak Beraturan'"],
        ],
      },
      when: [
        "Kata kerja: HANYA untuk subjek he / she / it / satu nama / satu benda di Present Simple. 'The server crashes', 'Anna reviews'.",
        "Kata benda: untuk jumlah lebih dari satu. 'two bugs', 'many companies'.",
        "Cara cepat: ucapkan katanya — kalau setelah ditambah akhiran muncul suku kata baru ('watch-es', 'fix-es'), tulis -es.",
      ],
      table2: null,
      contrast: [
        ["plays", "studies", "Huruf sebelum y: 'a' (vokal) → cukup +s. 'd' (konsonan) → y jadi ies."],
        ["photos", "potatoes", "Kata benda berakhiran -o: kata pendek/serapan modern (photo, video, logo, piano) cukup +s; beberapa kata lama +es (potato, tomato, hero, echo)."],
        ["roofs", "knives", "Tidak semua -f jadi -ves: roof → roofs, chief → chiefs, belief → beliefs, proof → proofs."],
      ],
      tips: [
        "Pelafalan -s/-es ada 3: /s/ setelah bunyi tak bersuara (works, stops, writes), /z/ setelah bunyi bersuara (plays, runs, needs), /ɪz/ setelah bunyi desis s, sh, ch, x, z, ge (watches, fixes, changes, uses).",
        "Kata kerja yang sudah pakai does/doesn't → JANGAN tambah -s lagi: 'She doesn't works' ❌.",
      ],
      mistakes: [
        ["He studys every night.", "He studies every night."],
        ["She watchs YouTube tutorials.", "She watches YouTube tutorials."],
        ["Two companys applied.", "Two companies applied."],
        ["He plaies football.", "He plays football."],
      ],
      quiz: [
        { q: "He ___ every bug he finds.", options: ["fixs", "fixes", "fixies"], a: 1 },
        { q: "Jamak dari 'company':", options: ["companys", "companies", "companyes"], a: 1 },
        { q: "She ___ games on weekends.", options: ["plaies", "plays", "playes"], a: 1 },
      ],
    },
    {
      id: "sp-ed", emoji: "⏪", title: "Kapan -ed, -d, -ied, atau Konsonan Ganda?",
      short: "Untuk Past Simple & V3 kata kerja beraturan (regular verbs).",
      table: {
        head: ["Akhiran kata", "Aturan", "Contoh"],
        rows: [
          ["umum", "+ ed", "work → worked, fix → fixed, deploy → deployed"],
          ["berakhiran -e", "+ d", "use → used, like → liked, merge → merged, code → coded"],
          ["konsonan + y", "y → ied", "try → tried, study → studied, apply → applied, copy → copied"],
          ["vokal + y", "+ ed (y tetap)", "play → played, stay → stayed, deploy → deployed"],
          ["1 suku kata: konsonan-vokal-konsonan (CVC)", "gandakan konsonan akhir + ed", "stop → stopped, plan → planned, ship → shipped, drop → dropped"],
          ["2+ suku kata, tekanan di AKHIR", "gandakan + ed", "commit → committed, prefer → preferred, occur → occurred, admit → admitted"],
          ["2+ suku kata, tekanan di AWAL", "+ ed (tidak digandakan)", "open → opened, visit → visited, happen → happened, listen → listened"],
          ["berakhiran w, x, y", "TIDAK digandakan", "fix → fixed, show → showed, play → played"],
          ["berakhiran -c", "+ ked", "panic → panicked, picnic → picnicked"],
          ["irregular", "hafalkan", "go → went, write → wrote, send → sent"],
        ],
      },
      when: [
        "CVC = Consonant + Vowel + Consonant di AKHIR kata: s-T-O-P, p-L-A-N. Kalau vokalnya dua (rain, need) atau konsonannya dua (help, work) → tidak digandakan.",
        "UK vs US: UK menggandakan -l walau tekanan di awal (travelled, cancelled, modelled), US tidak (traveled, canceled, modeled). Pilih satu dan konsisten — perusahaan US biasanya pakai ejaan US.",
      ],
      contrast: [
        ["hoped (hope)", "hopped (hop)", "Satu p = berharap. Dua p = melompat. Konsonan ganda menjaga bunyi vokal tetap pendek."],
        ["planned", "opened", "plan (1 suku kata, CVC) → digandakan. open (o-pen, tekanan di 'O') → tidak digandakan."],
        ["committed", "visited", "com-MIT (tekanan di akhir) → digandakan. VIS-it (tekanan di awal) → tidak."],
        ["played", "tried", "a sebelum y (vokal) → +ed. r sebelum y (konsonan) → y jadi ied."],
      ],
      tips: [
        "Pelafalan -ed ada 3: /t/ setelah bunyi tak bersuara (worked, fixed, stopped = 'stopt'), /d/ setelah bunyi bersuara (played, used, opened), /ɪd/ HANYA setelah t atau d (wanted, needed, started, added, committed).",
        "Kesalahan umum orang Indonesia: mengucapkan 'worked' sebagai 'wor-ked'. Yang benar satu suku kata: /wɜːkt/.",
        "Beberapa vokal + y tetap irregular: pay → paid, say → said, lay → laid.",
      ],
      mistakes: [
        ["I stoped the server.", "I stopped the server."],
        ["She studyed English.", "She studied English."],
        ["We commited the changes.", "We committed the changes."],
        ["The bug occured twice.", "The bug occurred twice."],
        ["I openned the file.", "I opened the file."],
      ],
      quiz: [
        { q: "Past tense dari 'plan':", options: ["planed", "planned", "planied"], a: 1 },
        { q: "Past tense dari 'apply':", options: ["applyed", "applied", "appled"], a: 1 },
        { q: "Past tense dari 'visit':", options: ["visitted", "visited", "visted"], a: 1 },
        { q: "'wanted' dibaca dengan akhiran…", options: ["/t/", "/d/", "/ɪd/"], a: 2 },
      ],
    },
    {
      id: "sp-ing", emoji: "▶️", title: "Kapan -ing, Buang -e, atau Konsonan Ganda?",
      short: "Untuk continuous tense, gerund (kata benda dari kata kerja), dan setelah preposisi.",
      table: {
        head: ["Akhiran kata", "Aturan", "Contoh"],
        rows: [
          ["umum", "+ ing", "work → working, fix → fixing, read → reading"],
          ["berakhiran -e (tidak dibaca)", "buang e + ing", "make → making, write → writing, code → coding, use → using"],
          ["berakhiran -ee, -ye, -oe", "+ ing (e tetap)", "see → seeing, agree → agreeing, free → freeing"],
          ["be", "+ ing", "be → being"],
          ["berakhiran -ie", "ie → ying", "lie → lying, die → dying, tie → tying"],
          ["berakhiran -y", "+ ing (y TETAP!)", "study → studying, play → playing, try → trying, deploy → deploying"],
          ["1 suku kata CVC", "gandakan + ing", "run → running, stop → stopping, get → getting, sit → sitting"],
          ["2+ suku kata, tekanan di akhir", "gandakan + ing", "begin → beginning, commit → committing, forget → forgetting"],
          ["2+ suku kata, tekanan di awal", "+ ing", "open → opening, visit → visiting, listen → listening, develop → developing"],
          ["berakhiran w, x, y", "TIDAK digandakan", "fix → fixing, show → showing, play → playing"],
          ["berakhiran -c", "+ king", "panic → panicking"],
        ],
      },
      when: [
        "Continuous: I am writing. She was running.",
        "Gerund (kata kerja jadi kata benda): Coding is fun. I enjoy learning.",
        "Setelah preposisi: Thanks for helping. Before starting…",
      ],
      contrast: [
        ["studying", "studied", "-ing: y TETAP (studying — tidak boleh ada 'ii'). -ed: y jadi i (studied)."],
        ["writing", "written", "write → writing (buang e, t tunggal). Tapi V3-nya 'written' (t ganda) — karena bunyi vokalnya berubah jadi pendek."],
        ["hoping (hope)", "hopping (hop)", "Satu p = berharap, dua p = melompat. Sama seperti di -ed."],
        ["coming", "running", "come → buang e (coming). run → CVC, gandakan n (running)."],
      ],
      tips: [
        "Trik 'buang e': kalau e di akhir tidak dibaca (make, write, use), buang e sebelum -ing. Kalau dibaca (see, agree, be), pertahankan.",
        "Ingat: TIDAK pernah 'ii' dalam ejaan bahasa Inggris (kecuali skiing) — itu sebabnya 'study → studying', bukan 'studiing'.",
      ],
      mistakes: [
        ["I'm writting an email.", "I'm writing an email."],
        ["She is comming soon.", "She is coming soon."],
        ["He is runing the tests.", "He is running the tests."],
        ["I'm studing English.", "I'm studying English."],
        ["We are makeing progress.", "We are making progress."],
      ],
      quiz: [
        { q: "Bentuk -ing dari 'make':", options: ["makeing", "making", "makking"], a: 1 },
        { q: "Bentuk -ing dari 'lie':", options: ["lieing", "lying", "liing"], a: 1 },
        { q: "Bentuk -ing dari 'begin':", options: ["begining", "beginning", "beginng"], a: 1 },
        { q: "Bentuk -ing dari 'study':", options: ["studing", "studiing", "studying"], a: 2 },
      ],
    },
    {
      id: "sp-er-est", emoji: "📈", title: "Kapan -er/-est vs more/most?",
      short: "Perbandingan kata sifat: lebih … (comparative) & paling … (superlative).",
      table: {
        head: ["Jenis kata sifat", "Aturan", "Contoh"],
        rows: [
          ["1 suku kata", "+ er / + est", "fast → faster → fastest, cheap → cheaper → cheapest"],
          ["1 suku kata berakhiran -e", "+ r / + st", "large → larger → largest, safe → safer → safest"],
          ["1 suku kata CVC", "gandakan + er/est", "big → bigger → biggest, hot → hotter, thin → thinner"],
          ["2 suku kata berakhiran -y", "y → ier / iest", "easy → easier → easiest, busy → busier, happy → happiest"],
          ["2+ suku kata lainnya", "more / most", "important → more important → most important, efficient → more efficient"],
          ["tidak beraturan", "hafalkan", "good → better → best, bad → worse → worst, far → further → furthest, little → less → least, many/much → more → most"],
        ],
      },
      when: [
        "Comparative (+ than): This API is faster than the old one.",
        "Superlative (+ the): This is the fastest solution.",
        "Beberapa kata 2 suku kata bisa keduanya: simple → simpler / more simple, quiet → quieter, clever → cleverer.",
      ],
      contrast: [
        ["more fast", "faster", "❌ vs ✅. Kata 1 suku kata pakai -er, bukan 'more'."],
        ["more better", "better", "❌ vs ✅. Jangan gabungkan 'more' dengan -er (double comparative)."],
        ["importanter", "more important", "❌ vs ✅. Kata panjang pakai 'more'."],
      ],
      tips: ["Kata yang dimulai 'un-' + -y (unhappy, untidy) tetap pakai -ier: unhappier."],
      quiz: [
        { q: "This laptop is ___ than mine.", options: ["more cheap", "cheaper", "cheapper"], a: 1 },
        { q: "This is the ___ task of the sprint.", options: ["most difficult", "difficultest", "more difficult"], a: 0 },
        { q: "Comparative dari 'busy':", options: ["busyer", "busier", "more busy"], a: 1 },
      ],
    },
    {
      id: "sp-ly", emoji: "🏃", title: "Kapan -ly, -ily, -ically?",
      short: "Mengubah kata sifat jadi kata keterangan (adverb): cara melakukan sesuatu.",
      table: {
        head: ["Akhiran kata sifat", "Aturan", "Contoh"],
        rows: [
          ["umum", "+ ly", "quick → quickly, clear → clearly, careful → carefully"],
          ["konsonan + y", "y → ily", "easy → easily, happy → happily, busy → busily"],
          ["-le", "e → y", "simple → simply, possible → possibly, probable → probably"],
          ["-ic", "+ ally", "basic → basically, automatic → automatically, specific → specifically (kecuali public → publicly)"],
          ["-ll", "+ y", "full → fully, dull → dully"],
          ["-ue", "buang e + ly", "true → truly, due → duly"],
          ["tidak beraturan", "hafalkan", "good → well, fast → fast, hard → hard, late → late"],
        ],
      },
      when: [
        "Adverb menjelaskan KATA KERJA: She codes quickly. (bukan 'quick')",
        "Adjective menjelaskan KATA BENDA / setelah be: She is a quick coder. She is quick.",
      ],
      contrast: [
        ["He works hard.", "He hardly works.", "hard = keras/rajin. hardly = HAMPIR TIDAK. Arti berlawanan!"],
        ["I arrived late.", "I've been busy lately.", "late = terlambat. lately = akhir-akhir ini."],
        ["She speaks English good.", "She speaks English well.", "❌ vs ✅. 'good' = adjective (a good speaker), 'well' = adverb (speaks well)."],
        ["friendly", "in a friendly way", "Kata sifat yang sudah berakhiran -ly (friendly, lovely, lonely) tidak punya bentuk adverb — pakai 'in a … way'."],
      ],
      quiz: [
        { q: "Adverb dari 'basic':", options: ["basicly", "basically", "basicaly"], a: 1 },
        { q: "Adverb dari 'easy':", options: ["easyly", "easily", "easly"], a: 1 },
        { q: "'I can hardly hear you' artinya…", options: ["Aku mendengar dengan keras", "Aku hampir tidak bisa mendengarmu", "Aku susah payah mendengar"], a: 1 },
      ],
    },
    {
      id: "sp-plural-irregular", emoji: "👥", title: "Jamak Tidak Beraturan & Uncountable",
      short: "Kata benda yang tidak ikut aturan -s/-es — dan yang tidak boleh dijamakkan.",
      table: {
        head: ["Tunggal", "Jamak", "Catatan"],
        rows: [
          ["man / woman", "men / women", "perubahan vokal"],
          ["person", "people", "'persons' hanya di dokumen hukum"],
          ["child", "children", ""],
          ["foot / tooth", "feet / teeth", "perubahan vokal"],
          ["mouse", "mice", "(perangkat komputer: mice / mouses keduanya dipakai)"],
          ["analysis / crisis", "analyses / crises", "-is → -es"],
          ["criterion / phenomenon", "criteria / phenomena", "-on → -a"],
          ["index / matrix", "indices / matrices", "di kode sering 'indexes' juga benar"],
          ["datum", "data", "'data' sehari-hari dipakai sebagai uncountable: the data is…"],
          ["sheep / fish / series", "sheep / fish / series", "bentuk sama"],
        ],
      },
      when: [
        "UNCOUNTABLE (tidak bisa dijamakkan, tidak pakai a/an): information, advice, feedback, software, hardware, equipment, knowledge, research, homework, furniture, traffic, code (dalam arti kode program).",
        "Untuk menghitungnya pakai 'a piece of / some / a lot of': a piece of advice, some feedback, two pieces of information.",
      ],
      mistakes: [
        ["Thanks for the feedbacks.", "Thanks for the feedback."],
        ["I need some informations.", "I need some information."],
        ["We hired three new peoples.", "We hired three new people."],
        ["Can you give me an advice?", "Can you give me some advice / a piece of advice?"],
      ],
      quiz: [
        { q: "Mana yang benar?", options: ["two softwares", "two software tools", "two softwares tools"], a: 1 },
        { q: "Jamak dari 'child':", options: ["childs", "childrens", "children"], a: 2 },
      ],
    },
    {
      id: "sp-word-suffix", emoji: "🧩", title: "Akhiran Pembentuk Kata (-er, -tion, -ment, -ness, -able, -ful, -less)",
      short: "Satu kata dasar bisa jadi kata benda, sifat, atau orang — cukup ganti akhiran.",
      table: {
        head: ["Akhiran", "Membentuk", "Contoh"],
        rows: [
          ["-er / -or", "orang / alat", "develop → developer, manage → manager, edit → editor, compile → compiler"],
          ["-tion / -sion", "kata benda (proses)", "integrate → integration, decide → decision, deploy → (deployment)"],
          ["-ment", "kata benda (hasil/proses)", "deploy → deployment, improve → improvement, manage → management"],
          ["-ness", "kata benda (sifat)", "aware → awareness, ready → readiness (y → i), happy → happiness"],
          ["-ity", "kata benda (sifat)", "available → availability, secure → security, scalable → scalability"],
          ["-able / -ible", "kata sifat (bisa di-…)", "scale → scalable, read → readable, access → accessible"],
          ["-ful", "kata sifat (penuh …)", "use → useful, help → helpful, success → successful (SATU l!)"],
          ["-less", "kata sifat (tanpa …)", "use → useless, server → serverless, care → careless"],
          ["-ize (US) / -ise (UK)", "kata kerja (menjadikan)", "optimal → optimize, priority → prioritize, custom → customize"],
        ],
      },
      when: [
        "Berguna untuk memperkaya kosakata kerja: dari 'scale' kamu dapat scalable, scalability, scaling.",
        "Tulisan profesional banyak memakai kata benda -tion/-ment: 'the deployment of…', 'an improvement in…'.",
      ],
      contrast: [
        ["useful", "usefull", "✅ vs ❌. Akhiran -ful hanya SATU l (beautiful, helpful, successful). Kata 'full' sendiri dua l."],
        ["optimize", "optimise", "Keduanya benar: -ize (US) dan -ise (UK). Pilih sesuai perusahaan & konsisten."],
      ],
      quiz: [
        { q: "Kata sifat dari 'help' (suka membantu):", options: ["helpfull", "helpful", "helpable"], a: 1 },
        { q: "Kata benda dari 'available':", options: ["availableness", "availability", "availation"], a: 1 },
      ],
    },
  ],
};

GRAMMAR.splice(1, 0, SPELLING_GROUP);

Object.assign(GRAMMAR_WHY, {
  "sp-s": [
    ["Kenapa -es setelah s, sh, ch, x, z?", "Karena bunyi desis + 's' sulit diucapkan tanpa vokal di antaranya ('watchs' susah dibaca). 'e' ditambahkan supaya muncul suku kata baru: watch-es /ɪz/."],
    ["Kenapa y → ies tapi play → plays?", "Kalau sebelum y ada konsonan, y berbunyi seperti vokal 'i' dan diubah jadi 'ie' supaya bunyinya terjaga. Kalau sebelumnya vokal (ay, ey, oy), y sudah jadi bagian dari bunyi vokal ganda, jadi cukup +s."],
    ["Kenapa go → goes tapi photo → photos?", "Kata kerja dasar yang sangat tua (go, do) & beberapa kata benda lama memakai -es. Kata-kata pendek/serapan baru (photo, video, demo) cukup +s karena berasal dari singkatan atau bahasa lain."],
  ],
  "sp-ed": [
    ["Kenapa konsonan digandakan (stop → stopped)?", "Untuk menjaga bunyi vokal tetap PENDEK. Dalam ejaan Inggris, vokal + satu konsonan + vokal biasanya dibaca panjang (hope = 'houp'). 'stoped' akan terbaca 'stoup-t'. Konsonan ganda menjadi 'pagar' agar 'o' tetap pendek: stopped."],
    ["Kenapa tekanan suku kata menentukan?", "Penggandaan hanya diperlukan pada suku kata yang ditekan. com-MIT → bunyi 'mit' harus tetap pendek & jelas → committed. VIS-it → suku kata akhir lemah, jadi tidak perlu dijaga → visited."],
    ["Kenapa use → used (bukan useed)?", "Huruf e sudah ada di akhir kata, jadi cukup tambah -d supaya tidak ada 'ee' yang mengubah bunyi."],
  ],
  "sp-ing": [
    ["Kenapa e dibuang (make → making)?", "Huruf e di akhir 'make' tidak dibaca — tugasnya hanya membuat 'a' berbunyi panjang. Setelah -ing ditambah, huruf 'i' sudah menjalankan tugas itu, jadi e tidak diperlukan lagi."],
    ["Kenapa study → studying (y tetap), padahal studied (y jadi i)?", "Jika y diubah jadi i di -ing, hasilnya 'studiing' dengan 'ii' — kombinasi yang dihindari ejaan Inggris. Jadi y dipertahankan."],
    ["Kenapa lie → lying?", "'lieing' akan membuat tiga vokal berturut-turut (i-e-i). Diganti y supaya mudah dibaca."],
  ],
  "sp-er-est": [
    ["Kenapa kata panjang pakai more/most?", "Menambah suku kata ke kata yang sudah panjang membuatnya sulit diucapkan (importanter, beautifullest). 'more/most' menjaga kata tetap ringkas."],
  ],
  "sp-ly": [
    ["Kenapa basic → basically (bukan basicly)?", "Banyak kata -ic dulunya punya bentuk '-ical' (basical, specifical), jadi adverb-nya dibentuk dari -ical + ly. Sekarang aturan praktisnya: -ic → -ically."],
    ["Kenapa 'good' jadi 'well'?", "'Well' adalah bentuk adverb asli dari bahasa Inggris kuno, bukan dari 'good'. Jadi tidak mengikuti pola -ly."],
  ],
  "sp-plural-irregular": [
    ["Kenapa man → men, bukan mans?", "Kata-kata ini berasal dari bahasa Inggris Kuno yang membentuk jamak dengan mengubah vokal. Karena sangat sering dipakai, bentuk lamanya bertahan."],
    ["Kenapa 'feedback' tidak bisa jamak?", "Kata uncountable dianggap sebagai 'massa' (seperti air atau pasir), bukan benda yang bisa dihitung satu-satu. Untuk menghitung, beri satuan: 'two pieces of feedback'."],
  ],
  "sp-word-suffix": [
    ["Kenapa perlu tahu akhiran ini?", "Dengan memahami akhiran, satu kata dasar bisa jadi 4–5 kata baru. Ini cara tercepat menambah kosakata & memahami kata baru tanpa kamus."],
  ],
});

// tautkan ke topik roadmap
GRAMMAR_LINKS["l1-present"].push("sp-s");
GRAMMAR_LINKS["l2-past"].push("sp-ed");
GRAMMAR_LINKS["l2-continuous"].push("sp-ing");
GRAMMAR_LINKS["l1-sounds"] = ["sp-s", "sp-ed"];

// ---------------------------------------------------------
//  GENERATOR BENTUK KATA
// ---------------------------------------------------------
const IRREGULAR_VERBS = {
  be: ["was/were", "been"], have: ["had", "had"], do: ["did", "done"], go: ["went", "gone"], get: ["got", "got/gotten"],
  make: ["made", "made"], take: ["took", "taken"], write: ["wrote", "written"], send: ["sent", "sent"], build: ["built", "built"],
  buy: ["bought", "bought"], bring: ["brought", "brought"], think: ["thought", "thought"], teach: ["taught", "taught"],
  catch: ["caught", "caught"], find: ["found", "found"], give: ["gave", "given"], know: ["knew", "known"], see: ["saw", "seen"],
  say: ["said", "said"], pay: ["paid", "paid"], lay: ["laid", "laid"], run: ["ran", "run"], come: ["came", "come"],
  become: ["became", "become"], begin: ["began", "begun"], break: ["broke", "broken"], choose: ["chose", "chosen"],
  speak: ["spoke", "spoken"], tell: ["told", "told"], sell: ["sold", "sold"], feel: ["felt", "felt"], keep: ["kept", "kept"],
  leave: ["left", "left"], meet: ["met", "met"], lead: ["led", "led"], read: ["read", "read"], put: ["put", "put"],
  set: ["set", "set"], let: ["let", "let"], cut: ["cut", "cut"], hit: ["hit", "hit"], cost: ["cost", "cost"], shut: ["shut", "shut"],
  hurt: ["hurt", "hurt"], spend: ["spent", "spent"], lose: ["lost", "lost"], win: ["won", "won"], sit: ["sat", "sat"],
  stand: ["stood", "stood"], understand: ["understood", "understood"], forget: ["forgot", "forgotten"], drive: ["drove", "driven"],
  eat: ["ate", "eaten"], fall: ["fell", "fallen"], fly: ["flew", "flown"], grow: ["grew", "grown"], hold: ["held", "held"],
  hear: ["heard", "heard"], lend: ["lent", "lent"], mean: ["meant", "meant"], ride: ["rode", "ridden"], rise: ["rose", "risen"],
  sleep: ["slept", "slept"], swim: ["swam", "swum"], throw: ["threw", "thrown"], wake: ["woke", "woken"], wear: ["wore", "worn"],
  draw: ["drew", "drawn"], show: ["showed", "shown"], sing: ["sang", "sung"], drink: ["drank", "drunk"], learn: ["learned/learnt", "learned/learnt"],
  fight: ["fought", "fought"], seek: ["sought", "sought"], feed: ["fed", "fed"], hang: ["hung", "hung"], hide: ["hid", "hidden"],
  shake: ["shook", "shaken"], steal: ["stole", "stolen"], forgive: ["forgave", "forgiven"], undo: ["undid", "undone"],
  rewrite: ["rewrote", "rewritten"], rebuild: ["rebuilt", "rebuilt"], withdraw: ["withdrew", "withdrawn"], bet: ["bet", "bet"],
  quit: ["quit", "quit"], upset: ["upset", "upset"], broadcast: ["broadcast", "broadcast"], lie: ["lay (berbaring) / lied (berbohong)", "lain / lied"],
};
const IRREGULAR_PLURALS = {
  man: "men", woman: "women", person: "people", child: "children", foot: "feet", tooth: "teeth", mouse: "mice", goose: "geese",
  analysis: "analyses", crisis: "crises", basis: "bases", thesis: "theses", criterion: "criteria", phenomenon: "phenomena",
  index: "indices / indexes", matrix: "matrices", datum: "data", sheep: "sheep", fish: "fish", series: "series", species: "species",
  roof: "roofs", chief: "chiefs", belief: "beliefs", proof: "proofs", photo: "photos", video: "videos", piano: "pianos", logo: "logos",
  demo: "demos", memo: "memos", radio: "radios", zero: "zeros", potato: "potatoes", tomato: "tomatoes", hero: "heroes", echo: "echoes",
};
const UNCOUNTABLE_NOUNS = ["information", "advice", "feedback", "software", "hardware", "equipment", "knowledge", "research", "homework", "furniture", "traffic", "news", "money", "water", "progress"];
const IRREGULAR_ADJ = { good: ["better", "best"], bad: ["worse", "worst"], far: ["further/farther", "furthest/farthest"], little: ["less", "least"], many: ["more", "most"], much: ["more", "most"] };
const IRREGULAR_ADV = { good: "well", fast: "fast", hard: "hard (hardly = hampir tidak!)", late: "late (lately = akhir-akhir ini)", public: "publicly", true: "truly", due: "duly", whole: "wholly" };
// kata 2+ suku kata dengan tekanan di akhir → konsonan digandakan
const STRESS_FINAL = ["commit", "begin", "prefer", "refer", "occur", "admit", "permit", "submit", "regret", "control", "forget", "omit", "transfer", "equip", "upset", "compel", "expel", "excel", "propel", "patrol", "confer", "defer", "deter", "incur", "recur", "infer", "acquit", "embed", "rebut", "unzip", "outrun", "kidnap"];

const isVowel = (c) => "aeiou".includes(c);
const syllables = (w) => (w.toLowerCase().replace(/e$/, "").match(/[aeiouy]+/g) || []).length || 1;
function shouldDouble(w) {
  if (!/[^aeiou][aeiou][^aeiouwxy]$/.test(w)) return { double: false };
  if (/[aeiou]{2}[^aeiou]$/.test(w)) return { double: false };
  if (STRESS_FINAL.includes(w)) return { double: true, why: "tekanan di suku kata akhir → gandakan konsonan" };
  if (syllables(w) === 1) return { double: true, why: "1 suku kata pola konsonan-vokal-konsonan → gandakan konsonan akhir" };
  return { double: false, note: "kata 2+ suku kata: gandakan HANYA jika tekanan di suku kata terakhir (com-MIT → committed). Tekanan di awal (VIS-it) → tidak." };
}

function formS(w) {
  if (w === "have") return ["has", "tidak beraturan"];
  if (w === "be") return ["is", "tidak beraturan (am/is/are)"];
  if (/(s|ss|sh|ch|x|z)$/.test(w)) return [w + "es", "berakhiran s/sh/ch/x/z → + es"];
  if (/[^aeiou]o$/.test(w)) return [w + "es", "kata kerja berakhiran -o → + es (go → goes, do → does)"];
  if (/[^aeiou]y$/.test(w)) return [w.slice(0, -1) + "ies", "konsonan + y → y jadi ies"];
  if (/[aeiou]y$/.test(w)) return [w + "s", "vokal + y → cukup + s"];
  return [w + "s", "aturan umum → + s"];
}
function formPlural(w) {
  if (UNCOUNTABLE_NOUNS.includes(w)) return ["(tidak ada)", "UNCOUNTABLE — tidak bisa dijamakkan. Pakai 'some / a piece of'."];
  if (IRREGULAR_PLURALS[w]) return [IRREGULAR_PLURALS[w], "jamak khusus — hafalkan"];
  if (/(fe)$/.test(w)) return [w.slice(0, -2) + "ves", "berakhiran -fe → ves (umumnya; ada pengecualian)"];
  if (/[^f]f$/.test(w) && w.length > 3) return [w.slice(0, -1) + "ves", "berakhiran -f → ves (umumnya; pengecualian: roofs, chiefs, beliefs)"];
  const [f, r] = formS(w);
  if (/[^aeiou]o$/.test(w)) return [w + "s", "kata benda -o modern → + s (photo → photos); beberapa kata lama + es (potatoes, heroes)"];
  return [f, r];
}
function formEd(w) {
  if (IRREGULAR_VERBS[w]) return [IRREGULAR_VERBS[w][0], "IRREGULAR — hafalkan (V2)", IRREGULAR_VERBS[w][1]];
  let f, r;
  if (/c$/.test(w)) { f = w + "ked"; r = "berakhiran -c → + ked"; }
  else if (/e$/.test(w)) { f = w + "d"; r = "berakhiran -e → cukup + d"; }
  else if (/[^aeiou]y$/.test(w)) { f = w.slice(0, -1) + "ied"; r = "konsonan + y → y jadi ied"; }
  else if (/[aeiou]y$/.test(w)) { f = w + "ed"; r = "vokal + y → + ed (y tetap)"; }
  else {
    const d = shouldDouble(w);
    if (d.double) { f = w + w.slice(-1) + "ed"; r = d.why; }
    else { f = w + "ed"; r = "aturan umum → + ed" + (d.note ? ". Catatan: " + d.note : ""); }
  }
  if (/l$/.test(w) && !/ll$/.test(w) && syllables(w) > 1 && !STRESS_FINAL.includes(w)) r += ". UK: " + w + "led (l digandakan), US: " + f;
  return [f, r, f];
}
function formIng(w) {
  if (w === "be") return ["being", "be → being (e tetap)"];
  if (/ie$/.test(w)) return [w.slice(0, -2) + "ying", "berakhiran -ie → ying"];
  if (/(ee|ye|oe)$/.test(w)) return [w + "ing", "berakhiran -ee/-ye/-oe → e tetap + ing"];
  if (/c$/.test(w)) return [w + "king", "berakhiran -c → + king"];
  if (/[^aeiou]e$/.test(w) || /[aeiou]e$/.test(w) && !/(ee|ye|oe)$/.test(w)) return [w.slice(0, -1) + "ing", "e di akhir tidak dibaca → buang e + ing"];
  if (/y$/.test(w)) return [w + "ing", "berakhiran -y → + ing (y TETAP, hindari 'ii')"];
  const d = shouldDouble(w);
  if (d.double) return [w + w.slice(-1) + "ing", d.why];
  return [w + "ing", "aturan umum → + ing" + (d.note ? ". Catatan: " + d.note : "")];
}
function formCompare(w) {
  if (IRREGULAR_ADJ[w]) return [`${IRREGULAR_ADJ[w][0]} → ${IRREGULAR_ADJ[w][1]}`, "tidak beraturan — hafalkan"];
  const syl = syllables(w);
  if (syl >= 3 || (syl === 2 && !/y$/.test(w) && !/(le|er|ow)$/.test(w))) return [`more ${w} → most ${w}`, "2+ suku kata → more / most"];
  if (/[^aeiou]y$/.test(w)) return [`${w.slice(0, -1)}ier → ${w.slice(0, -1)}iest`, "konsonan + y → ier / iest"];
  if (/e$/.test(w)) return [`${w}r → ${w}st`, "berakhiran -e → + r / + st"];
  const d = shouldDouble(w);
  if (d.double && syl === 1) return [`${w}${w.slice(-1)}er → ${w}${w.slice(-1)}est`, "1 suku kata CVC → gandakan konsonan"];
  if (syl === 2) return [`${w}er → ${w}est  (atau more/most ${w})`, "2 suku kata (-le/-er/-ow) → keduanya umum"];
  return [`${w}er → ${w}est`, "1 suku kata → + er / + est"];
}
function formLy(w) {
  if (IRREGULAR_ADV[w]) return [IRREGULAR_ADV[w], "tidak beraturan"];
  if (/ly$/.test(w)) return [`in a ${w} way`, "sudah berakhiran -ly → pakai 'in a … way'"];
  if (/ic$/.test(w)) return [w + "ally", "-ic → -ically"];
  if (/[^aeiou]le$/.test(w)) return [w.slice(0, -1) + "y", "-le → -ly (e jadi y)"];
  if (/ll$/.test(w)) return [w + "y", "-ll → + y"];
  if (/[^aeiou]y$/.test(w)) return [w.slice(0, -1) + "ily", "konsonan + y → ily"];
  return [w + "ly", "aturan umum → + ly"];
}

function suffixForms(raw, type = "verb") {
  const w = raw.toLowerCase().trim().replace(/[^a-z]/g, "");
  if (!w) return [];
  if (type === "noun") {
    const pl = formPlural(w);
    return [{ label: "Jamak (plural)", form: pl[0], rule: pl[1] }];
  }
  if (type === "adj") {
    const c = formCompare(w), l = formLy(w);
    return [
      { label: "Lebih → Paling", form: c[0], rule: c[1] },
      { label: "Adverb (-ly)", form: l[0], rule: l[1] },
    ];
  }
  const s = formS(w), ed = formEd(w), ing = formIng(w);
  return [
    { label: "He/She/It (Present)", form: s[0], rule: s[1] },
    { label: "Past (V2)", form: ed[0], rule: ed[1] },
    { label: "Past Participle (V3)", form: ed[2], rule: IRREGULAR_VERBS[w] ? "IRREGULAR — hafalkan (V3)" : "regular → sama dengan V2" },
    { label: "-ing", form: ing[0], rule: ing[1] },
  ];
}

// ---------------------------------------------------------
//  Tambahan aturan pengecek tulisan (Writing Lab)
// ---------------------------------------------------------
const SPELLING_FIXES = {
  writting: "writing", comming: "coming", runing: "running", stoped: "stopped", begining: "beginning", occured: "occurred",
  commited: "committed", commiting: "committing", refered: "referred", prefered: "preferred", studing: "studying", tryed: "tried",
  studyed: "studied", applyed: "applied", copyed: "copied", playes: "plays", plaied: "played", watchs: "watches", fixs: "fixes",
  pushs: "pushes", gos: "goes", dos: "does", makeing: "making", useing: "using", writeing: "writing", codeing: "coding",
  lieing: "lying", openned: "opened", visitted: "visited", happenned: "happened", developped: "developed", beautifull: "beautiful",
  usefull: "useful", helpfull: "helpful", successfull: "successful", truely: "truly", basicly: "basically", easyly: "easily",
  happyly: "happily", childs: "children", mans: "men", womans: "women", companys: "companies", storys: "stories", querys: "queries",
  feedbacks: "feedback", knifes: "knives", lifes: "lives", biger: "bigger", bigest: "biggest", easyer: "easier", busyer: "busier",
  goed: "went", writed: "wrote", sended: "sent", buyed: "bought", thinked: "thought", builded: "built", teached: "taught",
  catched: "caught", bringed: "brought", choosed: "chose", payed: "paid", sayed: "said", runned: "ran", maked: "made",
  taked: "took", gived: "gave", knowed: "knew", breaked: "broke", speaked: "spoke", leaved: "left", feeled: "felt",
};
for (const [wrong, right] of Object.entries(SPELLING_FIXES)) {
  WRITING_RULES.push({ re: new RegExp(`\\b${wrong}\\b`, "gi"), level: "error", msg: `Ejaan: '${wrong}' → '${right}'. (Lihat Grammar → Ejaan Akhiran)` });
}
// pola umum: konsonan + ys / yed (studys, tryed)
WRITING_RULES.push(
  { re: /\b\w*[bcdfghjklmnpqrstvwxz]ys\b/gi, level: "warn", msg: "Konsonan + y → ies (study → studies), bukan -ys." },
  { re: /\b\w*[bcdfghjklmnpqrstvwxz]yed\b/gi, level: "warn", msg: "Konsonan + y → ied (try → tried), bukan -yed." },
);

// hilangkan temuan ganda (mis. 'tryed' dari daftar ejaan & pola umum)
const _checkWriting = checkWriting;
checkWriting = function (text, register) {
  const seen = new Set();
  return _checkWriting(text, register).filter((r) => {
    const k = (r.found || r.msg).toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
};
