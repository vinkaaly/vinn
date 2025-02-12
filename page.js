export default function StudentTable() {
  const students = [
    {
      no: 1,
      nim: "22010101",
      name: "Ahmad Yusuf",
      gender: "Laki-laki",
      prodi: "Informatika",
      kelas: "IF-1",
      semester: 4,
      alamat: "Jakarta",
      hobby: "Membaca",
      citacita: "Software Engineer",
    },
    {
      no: 2,
      nim: "22010102",
      name: "Siti Aisyah",
      gender: "Perempuan",
      prodi: "Sistem Informasi",
      kelas: "SI-1",
      semester: 4,
      alamat: "Bandung",
      hobby: "Menulis",
      citacita: "Data Scientist",
    },
    {
      no: 3,
      nim: "232505007",
      name: "Vinka Aleyka Derina",
      gender: "Perempuan",
      prodi: "Sistem Informasi",
      kelas: "SI-B",
      semester: 4,
      alamat: "Bandung",
      hobby: "Membaca",
      citacita: "UI/UX Designer",
    },
    {
      no: 4,
      nim: "22010103",
      name: "Budi Santoso",
      gender: "Laki-laki",
      prodi: "Teknik Komputer",
      kelas: "TK-2",
      semester: 4,
      alamat: "Surabaya",
      hobby: "Bermain Gitar",
      citacita: "Network Engineer",
    },
    {
      no: 5,
      nim: "22010104",
      name: "Dewi Lestari",
      gender: "Perempuan",
      prodi: "Manajemen Informatika",
      kelas: "MI-3",
      semester: 4,
      alamat: "Yogyakarta",
      hobby: "Melukis",
      citacita: "UI/UX Designer",
    }
  ];

  return (
    <div className="container mx-auto p-4 max-w-full lg:max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Data Mahasiswa</h2>
      
      {/* Mobile view */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {students.map((student, index) => (
          <div key={index} className="bg-blue-50 p-4 border border-blue-200 shadow-md rounded-lg">
            <p className="text-sm font-bold text-blue-700">{student.no}. {student.name}</p>
            <p className="text-xs text-gray-700">NIM: {student.nim}</p>
            <p className="text-xs text-gray-700">Gender: {student.gender}</p>
            <p className="text-xs text-gray-700">Prodi: {student.prodi}</p>
            <p className="text-xs text-gray-700">Kelas: {student.kelas}</p>
            <p className="text-xs text-gray-700">Semester: {student.semester}</p>
            <p className="text-xs text-gray-700">Alamat: {student.alamat}</p>
            <p className="text-xs text-gray-700">Hobby: {student.hobby}</p>
            <p className="text-xs text-gray-700">Cita-cita: {student.citacita}</p>
          </div>
        ))}
      </div>

      {/* Table view for larger screens */}
      <div className="overflow-x-auto hidden sm:block">
        <table className="w-full bg-white border border-gray-300 shadow-md rounded-lg text-sm">
          <thead>
            <tr className="bg-blue-100 text-blue-700 uppercase text-xs">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">NIM</th>
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Gender</th>
              <th className="py-3 px-4">Prodi</th>
              <th className="py-3 px-4">Kelas</th>
              <th className="py-3 px-4">Semester</th>
              <th className="py-3 px-4">Alamat</th>
              <th className="py-3 px-4">Hobby</th>
              <th className="py-3 px-4">Cita-cita</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs">
            {students.map((student, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4 text-center">{student.no}</td>
                <td className="py-2 px-4">{student.nim}</td>
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.gender}</td>
                <td className="py-2 px-4">{student.prodi}</td>
                <td className="py-2 px-4">{student.kelas}</td>
                <td className="py-2 px-4">{student.semester}</td>
                <td className="py-2 px-4">{student.alamat}</td>
                <td className="py-2 px-4">{student.hobby}</td>
                <td className="py-2 px-4">{student.citacita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
