import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI Semester 1) Mata Pelajaran Bahasa Indonesia
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Kurikulum Merdeka Bahasa Indonesia Kelas VI Semester 1
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Teks Deskripsi',
    tujuanPembelajaran: 'Menentukan gagasan pokok dan gagasan pendukung.',
    indikatorSoal:
      'Disajikan sebuah paragraf teks deskripsi tentang kawasan konservasi alam, peserta didik dapat menentukan gagasan pokok paragraf tersebut dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Teks Deskripsi',
    tujuanPembelajaran: 'Mengidentifikasi informasi penting dalam berbagai jenis teks.',
    indikatorSoal:
      'Disajikan gambar ilustrasi satwa komodo dan paragraf deskripsi ciri fisiknya, peserta didik dapat mengidentifikasi informasi tersurat yang sesuai dengan gambar dan teks.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Teks Deskripsi',
    tujuanPembelajaran: 'Menafsirkan informasi tersurat dan tersirat.',
    indikatorSoal:
      'Disajikan penggalan teks deskripsi suasana pasar tradisional pada pagi hari, peserta didik dapat menafsirkan informasi tersirat dari bacaan tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Teks Narasi dan Cerita',
    tujuanPembelajaran: 'Menganalisis unsur dan pesan dalam teks narasi.',
    indikatorSoal:
      'Disajikan kutipan cerita pendek tentang kejujuran seorang anak, peserta didik dapat menentukan watak tokoh dan latar waktu cerita secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Teks Narasi dan Cerita',
    tujuanPembelajaran: 'Menganalisis unsur dan pesan dalam teks narasi.',
    indikatorSoal:
      'Disajikan kutipan cerita tentang kekeringan dan pembuatan sumur resapan, peserta didik dapat menganalisis hubungan sebab-akibat munculnya konflik dalam cerita.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Teks Narasi dan Cerita',
    tujuanPembelajaran: 'Menganalisis unsur dan pesan dalam teks narasi.',
    indikatorSoal:
      'Disajikan penggalan cerita tentang kebiasaan menabung seorang siswa, peserta didik dapat menentukan amanat yang terkandung dalam cerita.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Teks Prosedur',
    tujuanPembelajaran: 'Memahami struktur dan urutan teks prosedur.',
    indikatorSoal:
      'Disajikan teks prosedur pembuatan jus jambu biji, peserta didik dapat mengidentifikasi ciri kebahasaan kata kerja perintah (imperatif) yang digunakan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Teks Prosedur',
    tujuanPembelajaran: 'Memahami struktur dan urutan teks prosedur.',
    indikatorSoal:
      'Disajikan gambar diagram 4 tahapan mencangkok tanaman dan teks langkah rumpang, peserta didik dapat menentukan kalimat perintah untuk melengkapi urutan langkah ke-2.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Teks Eksplanasi dan Informasi',
    tujuanPembelajaran: 'Membedakan fakta dan opini.',
    indikatorSoal:
      'Disajikan paragraf informasi mengenai manfaat hutan mangrove, peserta didik dapat mengidentifikasi kalimat yang merupakan opini secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Teks Eksplanasi dan Informasi',
    tujuanPembelajaran: 'Mengidentifikasi informasi penting dalam berbagai jenis teks.',
    indikatorSoal:
      'Disajikan teks eksplanasi tentang fenomena tanah longsor, peserta didik dapat menentukan hubungan sebab-akibat yang sesuai dengan isi teks.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Teks Eksplanasi dan Informasi',
    tujuanPembelajaran: 'Menyimpulkan, membandingkan, dan mengevaluasi informasi dari berbagai sumber.',
    indikatorSoal:
      'Disajikan gambar bagan siklus air dan teks eksplanasi terkait, peserta didik dapat menyimpulkan proses terjadinya hujan secara berkesinambungan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Kosakata dan Kebahasaan',
    tujuanPembelajaran: 'Menentukan makna kosakata berdasarkan konteks.',
    indikatorSoal:
      'Disajikan sebuah kalimat berkonteks kerajinan daur ulang siswa, peserta didik dapat menentukan makna kata "inovatif" sesuai konteks kalimat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Kosakata dan Kebahasaan',
    tujuanPembelajaran: 'Menggunakan kaidah kebahasaan Bahasa Indonesia dengan tepat.',
    indikatorSoal:
      'Disajikan empat kalimat dengan variasi penulisan kata, peserta didik dapat memilih kalimat yang seluruh kosakatanya menggunakan kata baku sesuai KBBI.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Kosakata dan Kebahasaan',
    tujuanPembelajaran: 'Menggunakan kaidah kebahasaan Bahasa Indonesia dengan tepat.',
    indikatorSoal:
      'Disajikan empat pilihan kalimat, peserta didik dapat menentukan kalimat efektif dengan penggunaan tanda baca yang tepat sesuai EYD V.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Literasi Membaca',
    tujuanPembelajaran: 'Menafsirkan informasi tersurat dan tersirat.',
    indikatorSoal:
      'Disajikan teks informasi mengenai kebiasaan membaca lewat gawai vs buku cetak, peserta didik dapat membuat inferensi yang logis berdasarkan isi bacaan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Literasi Membaca',
    tujuanPembelajaran: 'Menyimpulkan, membandingkan, dan mengevaluasi informasi dari berbagai sumber.',
    indikatorSoal:
      'Disajikan dua kutipan teks kegiatan lingkungan sekolah dan desa, peserta didik dapat membandingkan dan menentukan persamaan tema utama kedua teks.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Literasi Membaca',
    tujuanPembelajaran: 'Menyimpulkan, membandingkan, dan mengevaluasi informasi dari berbagai sumber.',
    indikatorSoal:
      'Disajikan informasi tentang program pengurangan sampah plastik di koperasi sekolah, peserta didik dapat memilih tanggapan yang logis dan mendukung.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Literasi Visual',
    tujuanPembelajaran: 'Menginterpretasikan informasi dalam bentuk visual.',
    indikatorSoal:
      'Disajikan tabel data jumlah peminjaman buku perpustakaan selama empat bulan, peserta didik dapat menyimpulkan tren data tabel secara akurat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Teks Deskripsi',
    tujuanPembelajaran: 'Menentukan gagasan pokok dan gagasan pendukung.',
    indikatorSoal:
      'Disajikan paragraf deskripsi Desa Wisata Penglipuran, peserta didik dapat memilih lebih dari satu pernyataan yang benar sesuai isi teks (PGK).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Literasi Visual',
    tujuanPembelajaran: 'Menginterpretasikan informasi dalam bentuk visual.',
    indikatorSoal:
      'Disajikan gambar poster kampanye "AYO HEMAT AIR!", peserta didik dapat memilih lebih dari satu pesan atau ajakan yang sesuai dengan isi poster (PGK).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Kosakata dan Kebahasaan',
    tujuanPembelajaran: 'Menggunakan kaidah kebahasaan Bahasa Indonesia dengan tepat.',
    indikatorSoal:
      'Disajikan tiga kalimat bertema kegiatan sekolah, peserta didik dapat mengidentifikasi lebih dari satu kalimat yang efektif dan sesuai EYD V (PGK).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Teks Narasi dan Cerita',
    tujuanPembelajaran: 'Menganalisis unsur dan pesan dalam teks narasi.',
    indikatorSoal:
      'Disajikan kutipan cerita tentang persiapan pameran karya siswa, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan terkait konflik, watak tokoh, dan amanat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Teks Prosedur',
    tujuanPembelajaran: 'Memahami struktur dan urutan teks prosedur.',
    indikatorSoal:
      'Disajikan teks prosedur mematikan komputer laboratorium dengan aman, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan terkait tujuan dan langkah-langkahnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Literasi Visual',
    tujuanPembelajaran: 'Menginterpretasikan informasi dalam bentuk visual.',
    indikatorSoal:
      'Disajikan gambar ilustrasi kegiatan kerja bakti siswa dan narasi singkat, peserta didik dapat mengevaluasi kebenaran (Benar/Salah) 3 pernyataan sesuai gambar dan teks.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Teks Eksplanasi dan Informasi',
    tujuanPembelajaran: 'Membedakan fakta dan opini.',
    indikatorSoal:
      'Disajikan teks informasi mengenai Pembangkit Listrik Tenaga Surya (PLTS), peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan tentang fakta, opini, dan isi bacaan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Teks Eksplanasi dan Informasi',
    tujuanPembelajaran: 'Mengidentifikasi informasi penting dalam berbagai jenis teks.',
    indikatorSoal:
      'Disajikan teks eksplanasi penyebab kemacetan di depan sekolah dan solusinya, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan hubungan sebab-akibat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Kosakata dan Kebahasaan',
    tujuanPembelajaran: 'Menentukan makna kosakata berdasarkan konteks.',
    indikatorSoal:
      'Disajikan paragraf tentang penataan ruang belajar dan pojok baca, peserta didik dapat menilai kebenaran (Benar/Salah) 3 pernyataan terkait sinonim, antonim, dan makna kata.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Kosakata dan Kebahasaan',
    tujuanPembelajaran: 'Menggunakan kaidah kebahasaan Bahasa Indonesia dengan tepat.',
    indikatorSoal:
      'Disajikan tiga kalimat bertema kegiatan belajar siswa, peserta didik dapat mengevaluasi kebenaran (Benar/Salah) penggunaan huruf kapital, tanda baca petik langsung, dan keefektifan kalimat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Literasi Membaca',
    tujuanPembelajaran: 'Menyimpulkan, membandingkan, dan mengevaluasi informasi dari berbagai sumber.',
    indikatorSoal:
      'Disajikan dua teks ulasan layanan bacaan (perpustakaan keliling vs aplikasi baca digital), peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan perbandingan dan evaluasi.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Literasi Visual',
    tujuanPembelajaran: 'Menginterpretasikan informasi dalam bentuk visual.',
    indikatorSoal:
      'Disajikan data infografis capaian program Gerakan Literasi Sekolah, peserta didik dapat menentukan kebenaran (Benar/Salah) 3 pernyataan interpretasi data visual.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan materi ${q.topic} dalam pelajaran Bahasa Indonesia.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus teks atau visual tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('deskripsi')) {
    return 'Teks Deskripsi';
  }
  if (t.includes('narasi') || t.includes('cerita') || t.includes('tokoh') || t.includes('amanat')) {
    return 'Teks Narasi dan Cerita';
  }
  if (t.includes('prosedur') || t.includes('langkah')) {
    return 'Teks Prosedur';
  }
  if (t.includes('eksplanasi') || t.includes('fakta') || t.includes('opini')) {
    return 'Teks Eksplanasi dan Informasi';
  }
  if (
    t.includes('kosakata') ||
    t.includes('kebahasaan') ||
    t.includes('baku') ||
    t.includes('sinonim') ||
    t.includes('tanda baca') ||
    t.includes('kalimat efektif')
  ) {
    return 'Kosakata dan Kebahasaan';
  }
  if (t.includes('visual') || t.includes('poster') || t.includes('tabel') || t.includes('infografis')) {
    return 'Literasi Visual';
  }
  return 'Literasi Membaca';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
