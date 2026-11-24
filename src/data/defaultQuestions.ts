import { Question } from '../types';
import imgKomodo from '../assets/images/komodo_teks_deskripsi_1795499247735.jpg';
import imgProsedurCangkok from '../assets/images/prosedur_cangkok_tanaman_1795499248133.jpg';
import imgSiklusAir from '../assets/images/eksplanasi_siklus_air_1795499248572.jpg';
import imgPosterHematAir from '../assets/images/poster_hemat_air_1795499250453.jpg';
import imgKerjaBakti from '../assets/images/narasi_kerja_bakti_1795499250918.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // PILIHAN GANDA (18 SOAL: NO. 1 - 18, MASING-MASING 4 PILIHAN JAWABAN)
  // ============================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Teks Deskripsi - Gagasan Pokok',
    elemen: 'Teks Deskripsi',
    difficulty: 'Mudah',
    text: 'Bacalah paragraf berikut dengan saksama!\n\nTaman Nasional Bali Barat merupakan kawasan konservasi yang sangat kaya akan keanekaragaman hayati. Di kawasan ini, pengunjung dapat menjumpai hutan bakau yang rimbun, padang savana yang luas, serta terumbu karang yang masih alami. Selain keindahan bentang alamnya, taman nasional ini juga menjadi habitat asli bagi burung jalak bali yang langka dan dilindungi.\n\nGagasan pokok paragraf deskripsi tersebut adalah...',
    options: [
      { id: 'A', text: 'Keindahan terumbu karang dan hutan bakau di Pulau Bali.' },
      { id: 'B', text: 'Kekayaan keanekaragaman hayati di Taman Nasional Bali Barat.' },
      { id: 'C', text: 'Upaya pelestarian burung jalak bali yang hampir punah.' },
      { id: 'D', text: 'Padang savana yang menjadi tujuan wisata para pengunjung.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Gagasan pokok paragraf terdapat pada kalimat pertama (kalimat utama), yaitu Taman Nasional Bali Barat merupakan kawasan konservasi yang sangat kaya akan keanekaragaman hayati. Kalimat kedua dan ketiga merupakan gagasan pendukung yang menjelaskan rincian kekayaan hayati tersebut.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Teks Deskripsi & Visual - Komodo',
    elemen: 'Teks Deskripsi',
    difficulty: 'Sedang',
    imageUrl: imgKomodo,
    imageAlt: 'Ilustrasi Komodo di padang savana berbatu Pulau Komodo',
    imageCaption: 'Gambar 1. Ilustrasi satwa endemik komodo di habitat savana berbatu',
    text: 'Perhatikan gambar dan bacalah teks deskripsi berikut!\n\nKomodo merupakan kadal terbesar di dunia yang hidup di wilayah Nusa Tenggara Timur. Tubuhnya kekar dan diselimuti kulit bersisik tebal berwarna cokelat keabu-abuan. Keempat kakinya kokoh dilengkapi cakar tajam untuk mencengkeram mangsa, sedangkan ekornya yang panjang dan berotot berguna untuk menjaga keseimbangan saat bergerak cepat. Di bagian mulutnya, tampak lidah berwarna kuning yang bercabang dua untuk mendeteksi bau.\n\nBerdasarkan teks dan gambar tersebut, pernyataan yang sesuai dengan informasi tersurat adalah...',
    options: [
      { id: 'A', text: 'Komodo memiliki kulit halus dan berwarna hijau cerah untuk berkamuflase.' },
      { id: 'B', text: 'Lidah komodo berbentuk bercabang dua dan berfungsi untuk mendeteksi bau.' },
      { id: 'C', text: 'Ekor komodo berukuran pendek dan hanya digunakan saat berenang di laut.' },
      { id: 'D', text: 'Habitat asli komodo hanya berada di kawasan hutan hujan tropis yang lembap.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada gambar tampak jelas komodo memiliki kulit bersisik kasar cokelat, cakar tajam, ekor panjang berotot, dan lidah kuning bercabang dua di savana berbatu. Informasi tersurat pada kalimat terakhir menyebutkan bahwa lidah berwarna kuning yang bercabang dua berfungsi untuk mendeteksi bau.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Teks Deskripsi - Informasi Tersirat',
    elemen: 'Teks Deskripsi',
    difficulty: 'Sedang',
    text: 'Bacalah penggalan teks deskripsi berikut!\n\nJarum jam baru menunjukkan pukul 05.30 WITA, tetapi lorong-lorong Pasar Umum Negara sudah dipadati pembeli. Lampu-lampu kios pedagang sayur menyala terang menerangi tumpukan bayam segar, cabai merah, dan bumbu dapur. Terdengar riuh suara tawar-menawar antara ibu-ibu dan pedagang ikan yang masih basah oleh air laut. Aroma kopi panas dari sudut warung berpadu dengan segarnya udara pagi.\n\nInformasi tersirat yang dapat disimpulkan dari kutipan teks deskripsi tersebut adalah...',
    options: [
      { id: 'A', text: 'Aktivitas perdagangan di pasar tradisional tersebut dimulai sejak sangat pagi.' },
      { id: 'B', text: 'Pasar Umum Negara hanya menjual sayuran dan ikan laut segar saja.' },
      { id: 'C', text: 'Pembeli di pasar merasa terganggu dengan suasana yang terlalu bising.' },
      { id: 'D', text: 'Pedagang kopi membuka warungnya setelah matahari terbit tinggi.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Meskipun waktu baru pukul 05.30 WITA, lorong pasar sudah ramai oleh penjual dan pembeli yang bertransaksi. Hal ini menyiratkan bahwa aktivitas ekonomi di pasar tradisional dimulai sejak pagi hari sekali.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Teks Narasi - Tokoh, Watak, dan Latar',
    elemen: 'Teks Narasi dan Cerita',
    difficulty: 'Mudah',
    text: 'Bacalah kutipan cerita berikut!\n\nSore itu hujan rintik-rintik membasahi halaman balai banjar. Ketika hendak pulang dari latihan menari, Raka melihat sebuah dompet kulit berwarna hitam tergeletak di dekat bangku tunggu. Ia membukanya perlahan dan menemukan kartu identitas serta beberapa lembar uang. Tanpa berpikir panjang, Raka segera menyerahkan dompet tersebut kepada petugas jaga balai banjar agar dapat dikembalikan kepada pemiliknya.\n\nWatak tokoh Raka dan latar waktu dalam kutipan cerita tersebut adalah...',
    options: [
      { id: 'A', text: 'Peduli dan ceroboh; pagi hari.' },
      { id: 'B', text: 'Jujur dan bertanggung jawab; sore hari.' },
      { id: 'C', text: 'Pemalu dan penakut; siang hari.' },
      { id: 'D', text: 'Sombong dan tergesa-gesa; malam hari.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tindakan Raka yang langsung menyerahkan dompet berisi uang kepada petugas jaga tanpa mengambilnya menunjukkan watak jujur dan bertanggung jawab. Latar waktu tersurat pada kalimat pertama yaitu "Sore itu".',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Teks Narasi - Konflik dan Sebab-Akibat',
    elemen: 'Teks Narasi dan Cerita',
    difficulty: 'Sedang',
    text: 'Bacalah kutipan cerita berikut!\n\nMusim kemarau panjang membuat sungai di tepi hutan mengering. Warga desa kesulitan memperoleh air bersih untuk minum dan menyiram ladang. Pak Bima mengusulkan pembuatan sumur resapan di pekarangan masing-masing sebelum musim hujan tiba. Namun, sebagian warga menunda ajakan itu karena menganggap pekerjaan tersebut merepotkan. Ketika hujan deras akhirnya turun, air langsung mengalir deras tanpa terserap tanah sehingga menggenangi jalan desa.\n\nPenyebab utama terjadinya genangan air di jalan desa dalam cerita tersebut adalah...',
    options: [
      { id: 'A', text: 'Sungai di tepi hutan meluap karena terlalu dangkal.' },
      { id: 'B', text: 'Pak Bima terlambat memberikan usulan kepada warga desa.' },
      { id: 'C', text: 'Warga menunda pembuatan sumur resapan sehingga air hujan tidak terserap tanah.' },
      { id: 'D', text: 'Musim kemarau berlangsung terlalu singkat sehingga tanah menjadi keras.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Hubungan sebab-akibat dalam alur cerita tampak jelas: karena sebagian warga menunda pembuatan sumur resapan, saat hujan deras turun air tidak terserap ke dalam tanah dan menggenangi jalan desa.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Teks Narasi - Amanat Cerita',
    elemen: 'Teks Narasi dan Cerita',
    difficulty: 'Mudah',
    text: 'Bacalah penggalan cerita berikut!\n\nSetiap hari, Ayu menyisihkan sebagian uang jajannya ke dalam celengan bambu di kamarnya. Saat teman-temannya membeli mainan baru, Ayu tetap sabar menahan keinginannya. Setelah enam bulan menabung, celengan itu pun dibuka. Uang tersebut tidak hanya cukup untuk membeli kamus bahasa Indonesia yang diimpikannya, tetapi juga ia gunakan untuk membantu membeli buku tulis bagi adiknya.\n\nAmanat yang dapat dipetik dari cerita tersebut adalah...',
    options: [
      { id: 'A', text: 'Kita harus selalu menuruti keinginan membeli barang baru agar tidak ketinggalan.' },
      { id: 'B', text: 'Kebiasaan hidup hemat dan sabar menabung akan membawa manfaat bagi diri sendiri dan keluarga.' },
      { id: 'C', text: 'Menyimpan uang di celengan bambu lebih aman daripada menyimpannya di bank.' },
      { id: 'D', text: 'Seorang kakak wajib membelikan seluruh perlengkapan sekolah adiknya.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ketekunan Ayu menahan keinginan jajan dan menabung selama enam bulan membuahkan hasil yang bermanfaat bagi dirinya dan adiknya. Pesan moralnya adalah pentingnya hidup hemat dan gemar menabung.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Teks Prosedur - Ciri Kebahasaan & Tujuan',
    elemen: 'Teks Prosedur',
    difficulty: 'Mudah',
    text: 'Perhatikan kutipan teks prosedur berikut!\n\nCara Membuat Jus Jambu Biji Segar:\n1. Cuci buah jambu biji yang sudah matang hingga bersih.\n2. Potong buah menjadi beberapa bagian kecil.\n3. Masukkan potongan jambu, air matang, dan sedikit madu ke dalam blender.\n4. Haluskan selama dua menit, lalu saring sebelum dituangkan ke dalam gelas.\n\nKata yang menunjukkan ciri kebahasaan kalimat perintah (imperatif) pada langkah-langkah di atas adalah...',
    options: [
      { id: 'A', text: 'matang, bersih, kecil, segar' },
      { id: 'B', text: 'buah, air, madu, gelas' },
      { id: 'C', text: 'cuci, potong, masukkan, saring' },
      { id: 'D', text: 'hingga, ke dalam, selama, sebelum' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ciri kebahasaan teks prosedur adalah penggunaan kata kerja imperatif (perintah), seperti cuci, potong, masukkan, haluskan, dan saring.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Teks Prosedur & Visual - Mencangkok Tanaman',
    elemen: 'Teks Prosedur',
    difficulty: 'Sedang',
    imageUrl: imgProsedurCangkok,
    imageAlt: 'Diagram 4 langkah mencangkok batang tanaman berkayu',
    imageCaption: 'Gambar 2. Tahapan cara mencangkok batang tanaman mangga',
    text: 'Perhatikan gambar 4 tahapan mencangkok tanaman berikut!\n\nUrutan langkah yang tergambar pada ilustrasi tersebut adalah:\n(1) Sayat kulit batang sepanjang 3 cm lalu kupas kulitnya.\n(2) ... .\n(3) Bungkus bagian batang yang telah dikupas dengan tanah lembap dan plastik.\n(4) Ikat kedua ujung plastik dengan tali hingga rapat dan tunggu sampai akar tumbuh.\n\nKalimat perintah yang paling tepat untuk melengkapi langkah nomor (2) sesuai gambar adalah...',
    options: [
      { id: 'A', text: 'Siram daun pohon mangga setiap pagi agar tidak layu.' },
      { id: 'B', text: 'Kerok lapisan kambium pada batang yang terkelupas hingga bersih dan kering.' },
      { id: 'C', text: 'Potong dahan pohon mangga lalu tanam langsung ke dalam pot.' },
      { id: 'D', text: 'Beri pupuk kimia pada ujung ranting sebelum dibungkus plastik.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada panel gambar nomor (2), terlihat tangan mengerok bagian kayu batang menggunakan pisau untuk membersihkan lendir/lapisan kambium. Langkah penting setelah mengupas kulit batang dalam mencangkok adalah mengerok kambium hingga bersih agar kulit tidak tumbuh kembali.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Teks Eksplanasi - Fakta dan Opini',
    elemen: 'Teks Eksplanasi dan Informasi',
    difficulty: 'Sedang',
    text: 'Bacalah paragraf berikut!\n\n(1) Indonesia memiliki hutan mangrove terluas di dunia yang mencapai lebih dari tiga juta hektare. (2) Akar pohon mangrove mampu menahan gelombang laut sehingga mencegah pengikisan pantai atau abrasi. (3) Menurut banyak wisatawan, pemandangan hutan mangrove saat matahari terbenam merupakan panorama alam yang paling indah dan menenangkan jiwa. (4) Selain menahan abrasi, kawasan ini juga menjadi tempat berkembang biak berbagai jenis ikan dan kepiting.\n\nKalimat yang berisi opini pada paragraf tersebut ditunjukkan oleh nomor...',
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(2)' },
      { id: 'C', text: '(3)' },
      { id: 'D', text: '(4)' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kalimat (1), (2), dan (4) merupakan fakta ilmiah yang dapat dibuktikan kebenarannya. Kalimat (3) memuat penilaian subjektif ("paling indah dan menenangkan jiwa", diawali frasa "Menurut banyak wisatawan") sehingga termasuk opini.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Teks Eksplanasi - Hubungan Sebab-Akibat',
    elemen: 'Teks Eksplanasi dan Informasi',
    difficulty: 'Sedang',
    text: 'Bacalah teks eksplanasi berikut!\n\nTerjadinya tanah longsor di daerah perbukitan sering kali dipicu oleh berkurangnya tutupan vegetasi pohon berakar kuat. Ketika hutan di lereng bukit ditebangi secara liar, tanah kehilangan pengikat alaminya. Saat hujan berintensitas tinggi mengguyur wilayah tersebut dalam waktu lama, air meresap ke dalam lapisan tanah hingga menjadi jenuh dan berat. Akibatnya, massa tanah tidak mampu lagi bertahan dan meluncur menuruni lereng.\n\nHubungan sebab-akibat yang sesuai dengan isi teks eksplanasi di atas adalah...',
    options: [
      { id: 'A', text: 'Penebangan pohon liar menyebabkan air hujan langsung menguap ke udara.' },
      { id: 'B', text: 'Berkurangnya pohon berakar kuat membuat tanah jenuh air mudah meluncur saat hujan deras.' },
      { id: 'C', text: 'Tanah longsor menyebabkan tumbuhnya kembali pepohonan berakar kuat di lereng bukit.' },
      { id: 'D', text: 'Hujan berintensitas tinggi terjadi karena banyaknya lahan pertanian di daerah pegunungan.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Teks menjelaskan rantai sebab-akibat: penebangan pohon menghilangkan pengikat alami tanah, lalu hujan deras membuat tanah jenuh dan berat sehingga akhirnya meluncur menjadi tanah longsor.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Teks Eksplanasi & Visual - Siklus Air',
    elemen: 'Teks Eksplanasi dan Informasi',
    difficulty: 'Sedang',
    imageUrl: imgSiklusAir,
    imageAlt: 'Diagram proses siklus air dari penguapan laut hingga turun hujan',
    imageCaption: 'Gambar 3. Bagan ilustrasi proses terjadinya siklus air di alam',
    text: 'Perhatikan gambar siklus air dan bacalah teks eksplanasi berikut!\n\nAir di bumi selalu berputar melalui rangkaian proses yang disebut siklus air. Panas matahari menyebabkan air laut, sungai, dan danau menguap ke atmosfer (evaporasi), dibantu pula oleh penguapan dari tumbuhan (transpirasi). Uap air naik ke lapisan udara yang dingin sehingga berubah menjadi titik-titik air dan membentuk awan (kondensasi). Ketika awan semakin berat dan jenuh, titik-titik air jatuh ke permukaan bumi sebagai hujan (presipitasi) lalu mengalir kembali menuju laut.\n\nKesimpulan yang tepat berdasarkan gambar dan teks eksplanasi tersebut adalah...',
    options: [
      { id: 'A', text: 'Jumlah air di bumi terus berkurang setiap kali terjadi penguapan oleh sinar matahari.' },
      { id: 'B', text: 'Hujan terbentuk karena air sungai langsung mengalir naik menuju puncak pegunungan.' },
      { id: 'C', text: 'Siklus air terjadi berulang secara berkesinambungan mulai dari penguapan, pembentukan awan, hujan, hingga aliran kembali ke laut.' },
      { id: 'D', text: 'Proses kondensasi hanya terjadi di permukaan laut saat matahari bersinar terik.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Gambar panah melingkar dan teks eksplanasi menjelaskan bahwa siklus air berlangsung berkesinambungan: air menguap (evaporasi/transpirasi), mengembun menjadi awan (kondensasi), turun sebagai hujan (presipitasi), lalu mengalir melalui sungai kembali ke laut.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Kosakata - Makna Kata & Sinonim',
    elemen: 'Kosakata dan Kebahasaan',
    difficulty: 'Mudah',
    text: 'Bacalah kalimat berikut!\n\n"Para siswa kelas VI membuat karya kerajinan yang sangat inovatif dengan memanfaatkan limbah botol plastik menjadi pot gantung otomatis."\n\nMakna kata "inovatif" pada kalimat tersebut adalah...',
    options: [
      { id: 'A', text: 'Bersifat memperkenalkan sesuatu yang baru atau kreasi baru.' },
      { id: 'B', text: 'Bersifat meniru hasil karya orang lain tanpa perubahan.' },
      { id: 'C', text: 'Memerlukan biaya produksi yang sangat mahal dan rumit.' },
      { id: 'D', text: 'Hanya dapat dibuat oleh tenaga ahli yang berpengalaman.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Menurut KBBI dan konteks kalimat (memanfaatkan limbah menjadi pot gantung otomatis), kata "inovatif" bermakna bersifat memperkenalkan sesuatu yang baru atau penuh daya cipta/pembaruan.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Kebahasaan - Kata Baku & Tidak Baku',
    elemen: 'Kosakata dan Kebahasaan',
    difficulty: 'Sedang',
    text: 'Perhatikan empat kalimat berikut!\n(1) Siswa kelas VI melakukan praktek pembuatan kompos di halaman sekolah.\n(2) Dokter memberikan nasehat agar siswa rajin berolahraga setiap pagi.\n(3) Apotek di dekat sekolah menyediakan obat-obatan yang lengkap dan resmi.\n(4) Aktifitas membaca selama lima belas menit dilakukan sebelum jam pelajaran dimulai.\n\nKalimat yang seluruh kosakatanya menggunakan kata baku sesuai KBBI ditunjukkan oleh nomor...',
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(2)' },
      { id: 'C', text: '(3)' },
      { id: 'D', text: '(4)' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kata baku yang benar adalah "apotek" (kalimat 3). Sedangkan pada kalimat lainnya terdapat kata tidak baku: "praktek" seharusnya "praktik", "nasehat" seharusnya "nasihat", dan "aktifitas" seharusnya "aktivitas".',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Kebahasaan - Kalimat Efektif & Tanda Baca',
    elemen: 'Kosakata dan Kebahasaan',
    difficulty: 'Sedang',
    text: 'Manakah kalimat berikut yang merupakan kalimat efektif serta menggunakan tanda baca yang tepat sesuai kaidah EYD V?',
    options: [
      { id: 'A', text: 'Para siswa-siswa diimbau untuk menjaga kebersihan ruang kelas.' },
      { id: 'B', text: 'Ibu membawa buku tulis, pensil, dan penggaris ke perpustakaan.' },
      { id: 'C', text: 'Demi untuk meraih prestasi kita harus belajar dengan sungguh-sungguh.' },
      { id: 'D', text: 'Walaupun hujan deras, tetapi kegiatan upacara tetap dilaksanakan di aula.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kalimat B efektif dan tanda koma sebelum "dan" dalam perincian tiga unsur sudah tepat. Kalimat A boros kata ("para siswa-siswa"), kalimat C boros kata ("demi untuk"), dan kalimat D tidak efektif karena memakai dua konjungsi sekaligus ("walaupun ... tetapi").',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Literasi Membaca - Inferensi Bacaan',
    elemen: 'Literasi Membaca',
    difficulty: 'Sukar',
    text: 'Bacalah teks informasi berikut!\n\nBanyak pelajar masa kini terbiasa membaca berita singkat melalui layar gawai sambil berpindah-pindah aplikasi. Akibatnya, daya tahan konsentrasi saat menghadapi bacaan panjang sering menurun. Sebaliknya, siswa yang membiasakan diri membaca buku cetak secara utuh selama 20 menit setiap hari tanpa gangguan gawai terbukti lebih mampu memahami alur gagasan secara menyeluruh dan mengingat rincian informasi lebih lama.\n\nInferensi (simpulan logis) yang paling tepat berdasarkan teks tersebut adalah...',
    options: [
      { id: 'A', text: 'Membaca melalui gawai sebaiknya dilarang sepenuhnya bagi siswa sekolah dasar.' },
      { id: 'B', text: 'Kebiasaan membaca bacaan utuh tanpa gangguan membantu melatih fokus dan daya ingat siswa.' },
      { id: 'C', text: 'Buku cetak selalu memiliki informasi yang lebih lengkap daripada seluruh berita di internet.' },
      { id: 'D', text: 'Siswa hanya boleh membaca buku selama tepat dua puluh menit setiap hari.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Teks membandingkan membaca sambil berpindah aplikasi (fokus menurun) dengan membaca buku secara utuh tanpa gangguan gawai (pemahaman menyeluruh dan ingatan lebih lama). Maka inferensi yang logis adalah kebiasaan membaca utuh tanpa gangguan melatih fokus dan daya ingat.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Literasi Membaca - Membandingkan Dua Teks',
    elemen: 'Literasi Membaca',
    difficulty: 'Sukar',
    text: 'Bacalah kedua kutipan teks berikut!\n\nTeks 1:\nSekolah SD N 3 Dangintukadaya mengadakan program "Sabtu Hijau" setiap akhir pekan. Seluruh warga sekolah membawa bibit tanaman obat keluarga dari rumah untuk ditanam di kebun sekolah.\n\nTeks 2:\nSiswa di Desa Melati mengikuti lomba kreasi daur ulang sampah plastik setiap bulan sekali. Hasil karya terbaik seperti tas dan tempat pensil dipamerkan pada acara perpisahan kelas VI.\n\nPersamaan tema utama dari kedua teks tersebut adalah...',
    options: [
      { id: 'A', text: 'Keduanya membahas kegiatan perlombaan seni antardesa setiap bulan.' },
      { id: 'B', text: 'Keduanya membahas kepedulian pelajar terhadap pelestarian lingkungan.' },
      { id: 'C', text: 'Keduanya menjelaskan cara menanam tanaman obat keluarga di rumah.' },
      { id: 'D', text: 'Keduanya menceritakan pameran hasil karya plastik pada acara perpisahan.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Teks 1 berfokus pada penanaman tanaman obat keluarga (penghijauan), sedangkan Teks 2 berfokus pada daur ulang sampah plastik. Persamaan gagasan utamanya adalah kegiatan positif pelajar yang peduli pada pelestarian lingkungan.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Literasi Membaca - Memberikan Tanggapan',
    elemen: 'Literasi Membaca',
    difficulty: 'Sedang',
    text: 'Bacalah informasi singkat berikut!\n\nUntuk mengurangi sampah plastik, koperasi sekolah mulai menghentikan penjualan minuman kemasan sekali pakai dan menyediakan galon air minum gratis bagi siswa yang membawa botol minum (tumbler) sendiri dari rumah.\n\nTanggapan yang paling logis dan mendukung kebijakan tersebut adalah...',
    options: [
      { id: 'A', text: 'Kebijakan itu sangat merepotkan karena siswa harus membawa tas yang lebih berat.' },
      { id: 'B', text: 'Program ini sangat baik karena selain mengurangi sampah plastik, siswa juga lebih hemat.' },
      { id: 'C', text: 'Koperasi sebaiknya tetap menjual minuman plastik asalkan harganya dinaikkan dua kali lipat.' },
      { id: 'D', text: 'Penyediaan air gratis tidak ada hubungannya dengan kebersihan lingkungan sekolah.' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tanggapan yang baik harus logis, santun, dan relevan dengan tujuan program. Opsi B mendukung tujuan pengurangan sampah plastik sekaligus menyoroti manfaat ekonomi bagi siswa.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Literasi Visual - Membaca Tabel Data',
    elemen: 'Literasi Visual',
    difficulty: 'Sedang',
    text: 'Perhatikan tabel jumlah peminjaman buku di Perpustakaan SD N 3 Dangintukadaya Semester 1 berikut!\n\nBulan | Buku Cerita | Buku Pengetahuan | Buku Keterampilan\nAgustus | 45 | 30 | 15\nSeptember | 52 | 38 | 20\nOktober | 48 | 42 | 25\nNovember | 60 | 45 | 30\n\nPernyataan yang paling tepat berdasarkan tabel tersebut adalah...',
    options: [
      { id: 'A', text: 'Peminjaman buku cerita selalu meningkat setiap bulan tanpa pernah menurun.' },
      { id: 'B', text: 'Buku keterampilan merupakan jenis buku yang paling diminati siswa setiap bulan.' },
      { id: 'C', text: 'Peminjaman buku pengetahuan dan buku keterampilan terus meningkat dari Agustus hingga November.' },
      { id: 'D', text: 'Total peminjaman seluruh jenis buku paling tinggi terjadi pada bulan September.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jika dicermati: Buku Pengetahuan naik (30 -> 38 -> 42 -> 45) dan Buku Keterampilan juga terus naik (15 -> 20 -> 25 -> 30). Sementara buku cerita sempat turun di Oktober (52 ke 48), dan total tertinggi terjadi pada November (135 buku).',
  },

  // ============================================================================
  // PILIHAN GANDA KOMPLEKS (3 SOAL: NO. 19 - 21, MASING-MASING 3 PILIHAN)
  // Kemungkinan lebih dari 1 pilihan jawaban benar
  // ============================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Teks Deskripsi - Informasi & Gagasan',
    elemen: 'Teks Deskripsi',
    difficulty: 'Sedang',
    text: 'Bacalah teks deskripsi berikut!\n\nDesa Wisata Penglipuran di Kabupaten Bangli terkenal sebagai salah satu desa terbersih di dunia. Di sepanjang jalan utama desa yang tertata rapi dari batu alam, tidak ada kendaraan bermotor yang diperbolehkan melintas. Rumah-rumah penduduk memiliki pintu gerbang tradisional (angkul-angkul) yang seragam bentuknya dan dihiasi taman bunga warna-warni. Udara di desa ini terasa sangat sejuk karena dikelilingi hutan bambu yang rimbun.\n\nPilihlah SEMUA pernyataan yang benar sesuai isi teks di atas! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Jalan utama Desa Penglipuran bebas dari lalu lintas kendaraan bermotor.' },
      { id: 'B', text: 'Suasana sejuk di desa tersebut didukung oleh keberadaan hutan bambu di sekitarnya.' },
      { id: 'C', text: 'Setiap rumah penduduk memiliki desain pintu gerbang modern yang berbeda-beda.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A benar (tidak ada kendaraan bermotor yang diperbolehkan melintas di jalan utama). Pernyataan B benar (udara sejuk karena dikelilingi hutan bambu rimbun). Pernyataan C salah karena gerbang tradisionalnya (angkul-angkul) justru seragam bentuknya.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Literasi Visual - Poster Hemat Air',
    elemen: 'Literasi Visual',
    difficulty: 'Sedang',
    imageUrl: imgPosterHematAir,
    imageAlt: 'Poster edukasi Ayo Hemat Air dengan tiga langkah penghematan air',
    imageCaption: 'Gambar 4. Poster kampanye hemat air untuk siswa sekolah dasar',
    text: 'Perhatikan poster "AYO HEMAT AIR!" pada gambar dengan cermat!\n\nPilihlah SEMUA pernyataan yang sesuai dengan isi dan pesan poster tersebut! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Poster mengajak pembaca untuk segera mematikan keran air yang masih menetes.' },
      { id: 'B', text: 'Poster menyarankan penggunaan selang bertekanan tinggi setiap saat untuk menyiram bunga.' },
      { id: 'C', text: 'Air hujan dapat ditampung terlebih dahulu untuk dimanfaatkan menyiram tanaman.' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Panel (1) poster bertuliskan "Matikan kran yang menetes" (A benar). Panel (2) menunjukkan penampungan air hujan untuk tanaman (C benar). Panel (3) menyarankan penggunaan alat penyiram tanaman (gembor) dengan benar, bukan selang bertekanan tinggi (B salah).',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Kebahasaan - Kalimat Efektif, Kata Baku & EYD',
    elemen: 'Kosakata dan Kebahasaan',
    difficulty: 'Sukar',
    text: 'Perhatikan tiga kalimat berikut!\n\nPilihlah SEMUA kalimat yang sudah memenuhi kaidah kebahasaan Bahasa Indonesia yang baku dan efektif! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Siswa kelas VI wajib mematuhi jadwal piket kebersihan setiap hari.' },
      { id: 'B', text: 'Seluruh para peserta lomba diharap segera masuk ke dalam ruang aula.' },
      { id: 'C', text: '"Jangan lupa mengembalikan buku sebelum pulang," pesan petugas perpustakaan.' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Kalimat A efektif dan baku. Kalimat C menggunakan tanda petik langsung, tanda koma sebelum petik penutup, dan huruf kapital yang tepat sesuai EYD V. Kalimat B tidak efektif karena pemborosan kata ("Seluruh para peserta" dan "masuk ke dalam").',
  },

  // ============================================================================
  // PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL: NO. 22 - 30, 3 PERNYATAAN B/S)
  // ============================================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Teks Narasi - Unsur Intrinsik & Amanat',
    elemen: 'Teks Narasi dan Cerita',
    difficulty: 'Sedang',
    text: 'Bacalah kutipan cerita berikut!\n\nDua hari menjelang pameran karya siswa, hiasan dinding kelompok Lani terlepas karena lem yang digunakan kurang kuat. Lani hampir putus asa melihat karyanya berantakan. Melihat hal itu, Budi dan Sari segera datang membantu. Budi membawa tali rami yang lebih kuat, sementara Sari menata kembali hiasan bunga kertas agar tampak lebih rapi. Berkat kerja sama mereka, karya tersebut tampil memukau pada hari pameran.\n\nTentukan apakah pernyataan-pernyataan berikut BENAR atau SALAH berdasarkan teks narasi tersebut!',
    statements: [
      {
        id: 's1',
        text: 'Konflik dalam cerita disebabkan oleh terlepasnya hiasan dinding kelompok Lani menjelang pameran.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Tokoh Budi dan Sari memiliki watak tidak peduli dan suka menyalahkan teman.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Amanat cerita tersebut adalah kerja sama dan saling membantu dapat mengatasi kesulitan.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Masalah utama muncul saat hiasan dinding terlepas dua hari sebelum pameran.\n2. SALAH: Budi dan Sari justru sigap membantu dan bekerja sama dengan Lani.\n3. BENAR: Kerja sama tim berhasil menyelesaikan masalah sehingga karya tampil memukau.',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Teks Prosedur - Struktur & Kesimpulan',
    elemen: 'Teks Prosedur',
    difficulty: 'Mudah',
    text: 'Bacalah teks prosedur berikut!\n\nPetunjuk Mematikan Komputer Laboratorium dengan Benar:\n1. Simpan seluruh dokumen pekerjaan Anda terlebih dahulu dan tutup semua aplikasi.\n2. Klik menu "Start" pada layar, lalu pilih ikon "Power" dan klik "Shut Down".\n3. Tunggu hingga layar monitor benar-benar padam dan lampu indikator CPU mati.\n4. Cabut kabel daya dari stopkontak dengan tangan yang kering demi keamanan.\n\nTentukan kebenaran (BENAR / SALAH) dari setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Tujuan teks prosedur di atas adalah memandu pengguna mematikan komputer dengan aman dan tertib.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kabel daya boleh langsung dicabut dari stopkontak sebelum aplikasi ditutup dan layar padam.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Memastikan tangan dalam keadaan kering saat mencabut kabel bertujuan menjaga keselamatan pengguna.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Teks bertujuan membimbing cara mematikan komputer secara aman.\n2. SALAH: Mencabut kabel sebelum Shut Down dan layar padam melanggar urutan langkah dan dapat merusak perangkat.\n3. BENAR: Langkah 4 secara jelas menyatakan tangan harus kering demi keamanan.',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Teks Narasi & Literasi Visual - Kerja Bakti',
    elemen: 'Literasi Visual',
    difficulty: 'Sedang',
    imageUrl: imgKerjaBakti,
    imageAlt: 'Ilustrasi siswa SD berseragam merah putih melakukan kerja bakti di halaman sekolah',
    imageCaption: 'Gambar 5. Kegiatan kerja bakti membersihkan taman dan memilah sampah di sekolah',
    text: 'Perhatikan gambar ilustrasi kegiatan kerja bakti di sekolah serta bacaan singkat berikut!\n\nPagi itu siswa-siswi kelas VI melaksanakan kerja bakti membersihkan taman sekolah. Mereka membagi tugas secara adil: ada yang menyapu daun kering, menyiram bunga di pot, dan mengumpulkan guguran daun ke keranjang. Di sudut taman tersedia dua tempat sampah terpisah berwarna hijau (sampah organik daun) dan kuning (sampah anorganik plastik & kertas).\n\nTentukan apakah pernyataan berikut BENAR atau SALAH berdasarkan gambar dan teks!',
    statements: [
      {
        id: 's1',
        text: 'Sampah daun kering dari keranjang seharusnya dimasukkan ke tempat sampah berwarna hijau.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam gambar, seluruh siswa hanya melakukan satu jenis pekerjaan yang sama yaitu menyapu halaman.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pemisahan tempat sampah hijau dan kuning memudahkan pengelolaan sampah organik dan anorganik.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Pada gambar tampak tempat sampah hijau bertuliskan "SAMPAH ORGANIK - DAUN".\n2. SALAH: Siswa berbagi tugas—ada yang menyapu, menyiram tanaman, dan mengangkut keranjang daun.\n3. BENAR: Pemilahan organik dan anorganik memudahkan proses daur ulang dan pembuatan kompos.',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Teks Eksplanasi - Fakta dan Opini',
    elemen: 'Teks Eksplanasi dan Informasi',
    difficulty: 'Sedang',
    text: 'Bacalah teks informasi berikut!\n\nPembangkit Listrik Tenaga Surya (PLTS) mengubah energi cahaya matahari menjadi energi listrik menggunakan panel surya. Di Indonesia yang beriklim tropis, matahari bersinar rata-rata 10 hingga 12 jam setiap hari sepanjang tahun. Beberapa warga berpendapat bahwa pemasangan panel surya di atap rumah terlihat jauh lebih modern dibandingkan genteng biasa.\n\nTentukan apakah pernyataan berikut BENAR atau SALAH sesuai analisis fakta dan opini dalam teks!',
    statements: [
      {
        id: 's1',
        text: 'Kalimat yang menyatakan bahwa PLTS mengubah cahaya matahari menjadi listrik menggunakan panel surya adalah fakta.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pernyataan bahwa panel surya terlihat jauh lebih modern daripada genteng biasa termasuk kalimat fakta.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Lama penyinaran matahari di wilayah beriklim tropis seperti Indonesia mendukung pemanfaatan energi surya.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Cara kerja panel surya adalah fakta ilmiah yang dapat diverifikasi.\n2. SALAH: Penilaian "terlihat jauh lebih modern" merupakan pendapat/opini subjektif.\n3. BENAR: Penyinaran 10–12 jam per hari sepanjang tahun sangat mendukung pemanfaatan PLTS.',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Teks Eksplanasi - Sebab-Akibat & Simpulan',
    elemen: 'Teks Eksplanasi dan Informasi',
    difficulty: 'Sukar',
    text: 'Bacalah teks eksplanasi berikut!\n\nKemacetan lalu lintas di jalan raya depan sekolah pada jam berangkat kerja sering terjadi akibat banyaknya kendaraan pribadi yang berhenti mendadak di bahu jalan. Kondisi tersebut diperparah ketika pengendara kurang sabar dan saling mendahului di persimpangan. Sebagai solusi, pihak sekolah bersama komite mengatur zona turun siswa (drop zone) dan mengimbau siswa yang rumahnya dekat agar berjalan kaki atau bersepeda.\n\nTentukan kebenaran (BENAR / SALAH) pernyataan-pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Salah satu penyebab kemacetan di depan sekolah adalah kendaraan yang berhenti mendadak di bahu jalan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pengaturan zona turun siswa dilakukan untuk mempercepat kendaraan saling mendahului di persimpangan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Berjalan kaki atau bersepeda bagi siswa yang rumahnya dekat dapat membantu mengurangi kepadatan kendaraan.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Teks menyebutkan kendaraan berhenti mendadak di bahu jalan memicu kemacetan.\n2. SALAH: Zona turun siswa dibuat untuk menertibkan arus lalu lintas dan mengatasi kemacetan, bukan untuk saling mendahului.\n3. BENAR: Mengurangi pemakaian kendaraan pribadi jarak dekat membantu kelancaran lalu lintas.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Kosakata - Sinonim, Antonim & Kata Baku',
    elemen: 'Kosakata dan Kebahasaan',
    difficulty: 'Sedang',
    text: 'Bacalah paragraf berikut!\n\nSekolah dasar di Kecamatan Jembrana berupaya melakukan transformasi ruang kelas menjadi lingkungan belajar yang nyaman. Penataan ulang rak buku dan pojok baca bertujuan agar minat baca siswa meningkat secara signifikan. Selain itu, halaman sekolah yang dahulu gersang kini mulai ditanami berbagai pohon peneduh.\n\nTentukan kebenaran (BENAR / SALAH) dari analisis kosakata berikut!',
    statements: [
      {
        id: 's1',
        text: 'Sinonim kata "transformasi" dalam kalimat pertama adalah perubahan bentuk atau pembaruan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Antonim (lawan kata) dari kata "gersang" pada kalimat terakhir adalah kering dan tandus.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kata "signifikan" memiliki makna penting atau berarti (meningkat secara nyata).',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Transformasi berarti perubahan rupa, bentuk, atau sifat (pembaruan).\n2. SALAH: Kering dan tandus adalah sinonim dari gersang; antonimnya adalah subur atau rimbun.\n3. BENAR: Signifikan dalam KBBI berarti penting atau berarti (peningkatan yang nyata).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Kebahasaan - Tanda Baca & Kalimat Efektif',
    elemen: 'Kosakata dan Kebahasaan',
    difficulty: 'Sukar',
    text: 'Cermatilah penggunaan tanda baca, huruf kapital, dan keefektifan pada kalimat berikut!\n\nKalimat 1: Pada hari Senin, siswa kelas VI mengunjungi Museum Bali di Denpasar.\nKalimat 2: Kakak bertanya: "Apakah kamu sudah mengerjakan tugas Bahasa Indonesia"?\nKalimat 3: Agar supaya cepat selesai, pekerjaan ini harus dikerjakan bersama-sama.\n\nTentukan apakah pernyataan-pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Penulisan huruf kapital dan tanda koma pada Kalimat 1 sudah sesuai dengan kaidah EYD V.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Penempatan tanda tanya di luar tanda petik penutup pada Kalimat 2 sudah tepat.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kalimat 3 tidak efektif karena menggunakan dua kata penghubung yang bermakna sama ("agar" dan "supaya").',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Nama hari (Senin), nama tempat/lembaga (Museum Bali, Denpasar), dan tanda koma setelah keterangan waktu sudah tepat.\n2. SALAH: Tanda tanya dalam kalimat tanya langsung harus diletakkan di dalam tanda petik penutup ("...Bahasa Indonesia?") dan sebelum petikan langsung memakai tanda koma, bukan titik dua.\n3. BENAR: Penggunaan "agar supaya" merupakan pleonasme/pemborosan kata.',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Literasi Membaca - Membandingkan & Mengevaluasi Teks',
    elemen: 'Literasi Membaca',
    difficulty: 'Sukar',
    text: 'Bacalah dua teks ulasan singkat berikut!\n\nTeks A (Perpustakaan Keliling):\nMobil perpustakaan keliling datang ke balai desa setiap hari Rabu pukul 15.00 WITA. Anak-anak dapat meminjam maksimal dua buku cerita bergambar secara gratis selama satu minggu.\n\nTeks B (Aplikasi Baca Digital):\nAplikasi BacaNusantara dapat diakses kapan saja melalui telepon genggam atau tablet. Tersedia ratusan buku elektronik, namun pengguna memerlukan koneksi internet yang stabil untuk mengunduh bacaan.\n\nTentukan apakah pernyataan evaluasi berikut BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Perpustakaan keliling memiliki kelebihan berupa layanan tatap muka gratis, meskipun jadwal waktunya terbatas.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Aplikasi BacaNusantara dapat digunakan dengan lancar di daerah tanpa sinyal internet sama sekali untuk mengunduh buku.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kedua sumber layanan bacaan tersebut sama-sama bertujuan memperluas akses membaca bagi anak-anak.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. BENAR: Layanan gratis dengan jadwal tetap tiap Rabu pukul 15.00 WITA.\n2. SALAH: Teks B menyatakan aplikasi memerlukan koneksi internet yang stabil untuk mengunduh bacaan.\n3. BENAR: Baik mobil perpustakaan keliling maupun aplikasi digital mempermudah akses bahan bacaan.',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Literasi Visual - Infografis Gerakan Literasi',
    elemen: 'Literasi Visual',
    difficulty: 'Sedang',
    text: 'Perhatikan data infografis program "Gerakan Literasi Sekolah" SD N 3 Dangintukadaya berikut!\n\n- Target Bacaan Siswa Kelas VI: Minimal 1 buku nonpelajaran per bulan.\n- Kegiatan Harian: Membaca senyap 15 menit sebelum pelajaran pertama (07.15 - 07.30 WITA).\n- Hasil Pemantauan Semester 1 (30 siswa): 24 siswa telah menyelesaikan 5 buku atau lebih; 6 siswa menyelesaikan 3–4 buku.\n\nTentukan kebenaran (BENAR / SALAH) dari interpretasi data visual tersebut!',
    statements: [
      {
        id: 's1',
        text: 'Sebanyak 80% siswa kelas VI telah membaca 5 buku atau lebih selama Semester 1.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kegiatan membaca senyap dilaksanakan selama setengah jam setiap hari setelah bel pulang sekolah.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Seluruh 30 siswa kelas VI masih belum ada yang memenuhi target minimal 1 buku per bulan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. BENAR: 24 dari 30 siswa = (24/30) × 100% = 80%.\n2. SALAH: Kegiatan membaca senyap dilakukan 15 menit sebelum pelajaran pertama (07.15 - 07.30 WITA).\n3. SALAH: Dalam 5 bulan semester 1 (target 5 buku), 24 siswa sudah mencapai 5 buku atau lebih sehingga mayoritas sudah memenuhi target.',
  },
];
