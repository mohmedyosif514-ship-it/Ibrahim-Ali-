#  Pengelola Anggaran Harian (Daily Budget Tracker)

Aplikasi web sederhana untuk menghitung batas pengeluaran harian dan mengontrol keuangan (HTML5, CSS3, JavaScript ES6).

---

###  Penjelasan Kode Program

* **`index.html`**: Menyusun form input (uang saku, jumlah hari, pengeluaran) dan kontainer hasil kalkulasi.
* **`style.css`**: Mengatur tampilan *Modern Dark Theme* dan *layout responsive* (Flexbox & Grid).
* **`script.js`**: 
  - Memproses form tanpa *reload* (`e.preventDefault()`).
  - Menghitung sisa saldo dan batas harian ($\text{Batas} = \frac{\text{Sisa Saldo}}{\text{Hari}}$).
  - Mengubah angka ke format Rupiah (`Intl.NumberFormat`) dan menampilkan saran keuangan dinamis secara otomatis.

---

###  Struktur File
`index.html` | `style.css` | `script.js` | `README.md`
