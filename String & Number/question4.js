const hari = 485
cosnt bulan = 30
const tahun = 360

const tahunX = Math.round (hari /tahun) 
const bulanX = Math.round(( hari - ( tahunX * tahun)) / bulan)
cosnt hariX =hari -( tahunX * tahun) - (bulanX * bulan)

console.log ('jumlah tahun' + tahunX)
console.log ('jumlah bulan' + bulanX)
console.log ('jumlah hari' +hariX)

