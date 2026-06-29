export default function KulinerWaktuMakanSection() {
  const waktuMakan = [
    {
      id: "sarapan",
      title: "Sarapan Pagi",
      desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
    {
      id: "siang",
      title: "Makan Siang",
      desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
    {
      id: "malam",
      title: "Makan Malam",
      desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F9F1E4]" id="koleksi">
      <div className="mx-auto w-full max-w-[var(--container-lg)] flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="font-['League_Spartan'] text-3xl md:text-4xl lg:text-[42px] font-bold text-[#4e0b11] mb-4">
            Jelajahi Berdasarkan Waktu Makan
          </h2>
          <p className="font-['League_Spartan'] text-base md:text-lg text-stone-900 font-medium">
            Temukan hidangan khas Jawa sesuai waktu terbaik untuk menikmatinya
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
          {waktuMakan.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer rounded-xl border border-[#4e0b11] bg-gradient-to-r from-white from-50% to-[#a3a3a3] overflow-hidden shadow-sm relative min-h-[220px]"
            >
              <div className="p-6 h-full flex flex-col justify-center w-[65%] z-10 relative">
                <h3 className="font-['League_Spartan'] text-xl font-bold text-[#4e0b11] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-black leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
