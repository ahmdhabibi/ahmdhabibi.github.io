// Mendapatkan elemen gambar untuk kartu pertama
var projectImage1 = document.getElementById("project-image-antrol");

// Mendapatkan elemen gambar untuk kartu kedua
var projectImage2 = document.getElementById("project-image-lks");

// Mendefinisikan daftar gambar untuk kartu pertama
var imageList1 = ["img/antrol2.PNG", "img/antrol3.PNG", "img/antrol1.PNG"];

// Mendefinisikan daftar gambar untuk kartu kedua
var imageList2 = [
  "img/lks/home2.PNG",
  "img/lks/login.PNG",
  "img/lks/register.PNG",
  "img/lks/home1.PNG",
];

// Inisialisasi indeks gambar untuk kartu pertama
var currentIndex1 = 0;

// Inisialisasi indeks gambar untuk kartu kedua
var currentIndex2 = 0;

// Fungsi untuk mengubah gambar untuk kartu pertama
function changeImage1() {
  projectImage1.src = imageList1[currentIndex1];
  currentIndex1 = (currentIndex1 + 1) % imageList1.length;
}

// Fungsi untuk mengubah gambar untuk kartu kedua
function changeImage2() {
  projectImage2.src = imageList2[currentIndex2];
  currentIndex2 = (currentIndex2 + 1) % imageList2.length;
}

// Panggil fungsi changeImage untuk mengubah gambar setiap beberapa detik
setInterval(changeImage1, 5000); // Ubah gambar pada kartu pertama setiap 3 detik (3000 milidetik)
setInterval(changeImage2, 7000); // Ubah gambar pada kartu kedua setiap 4 detik (4000 milidetik)
