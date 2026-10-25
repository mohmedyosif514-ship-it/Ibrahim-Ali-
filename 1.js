// Mengambil elemen DOM
const budgetForm = document.getElementById('budget-form');
const incomeInput = document.getElementById('income');
const daysInput = document.getElementById('days');
const expenseInput = document.getElementById('expense');

const dailyLimitEl = document.getElementById('daily-limit');
const remainingBalanceEl = document.getElementById('remaining-balance');
const statusBadgeEl = document.getElementById('status-badge');
const adviceMessageEl = document.getElementById('advice-message');

// Event Listener saat form di-submit
budgetForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai input dan konversi ke angka
    const income = parseFloat(incomeInput.value) || 0;
    const days = parseInt(daysInput.value) || 1;
    const expense = parseFloat(expenseInput.value) || 0;

    // Perhitungan
    const remainingBalance = income - expense;
    const dailyLimit = remainingBalance > 0 ? remainingBalance / days : 0;

    // Format mata uang Rupiah
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
        }).format(number);
    };

    // Tampilkan hasil ke DOM
    dailyLimitEl.textContent = formatRupiah(dailyLimit);
    remainingBalanceEl.textContent = formatRupiah(remainingBalance);

    // Evaluasi Status Keuangan
    if (remainingBalance <= 0) {
        statusBadgeEl.textContent = "Defisit / Habis";
        statusBadgeEl.className = "badge warning";
        adviceMessageEl.textContent = "⚠️ Perhatian: Uang saku Anda sudah habis atau kurang dari total pengeluaran!";
    } else if (dailyLimit < 20000) {
        statusBadgeEl.textContent = "Waspada";
        statusBadgeEl.className = "badge warning";
        adviceMessageEl.textContent = "💡 Tips: Batas harian Anda lumayan ketat. Coba hemat pengeluaran yang tidak mendesak.";
    } else {
        statusBadgeEl.textContent = "Aman";
        statusBadgeEl.className = "badge safe";
        adviceMessageEl.textContent = "✅ Hasil Bagus: Anggaran harian Anda cukup aman. Pertimbangkan untuk menyisihkan sebagian uang ke tabungan!";
    }
});