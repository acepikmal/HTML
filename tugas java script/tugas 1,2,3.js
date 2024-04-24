// latihan 1
var Nama = "Acep Ikmal"
var Usia = 20
var Kelas = "PTI"
var Nilai = 100
console.log(`
nama : ${Nama}\n
usia : ${Usia}\n
kelas: ${Kelas}\n
nilai: ${Nilai}
`)
console.table([{
    nama: "Acep Ikmal",
    usia: '20',
    kelas: "PTI",
    nilai: '100',
    }])

// latihan 2
let angka1 = 200
let angka2 = 40
console.log(`
penjumlahan : ${angka1 + angka2}\n
pengurangan : ${angka1 - angka2}\n
perkalian : ${angka1 * angka2}\n
pembagian : ${angka1 / angka2}\n
`)
console.table([{
    penjumlahan: '240',
    pengurangan: '160',
    perkalian: '8000',
    pembagian: '5',
}])

// latihan 3
const diskon = 0.2
const harga = 85
const totalHarga = harga - (harga * diskon)
console.log(`Total harga adalah: Rp ${totalHarga}`)