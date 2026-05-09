export default function Featured() {
  const features = [
    { icon: "🏙️", title: "Живой город", desc: "Экономика, бизнес, недвижимость — всё работает по-настоящему" },
    { icon: "👮", title: "Фракции и кланы", desc: "Полиция, мафия, байкеры — выбери свою сторону" },
    { icon: "🎭", title: "Глубокий отыгрыш", desc: "Уникальные персонажи, диалоги и сюжетные линии" },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-neutral-950">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Evolve RP gameplay"
          className="w-full h-full object-cover"
          style={{filter: 'hue-rotate(240deg) saturate(0.7) brightness(0.85)'}}
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-purple-400">Почему Evolve RP</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-white leading-tight">
          Не просто сервер — целый живой мир, где каждый игрок пишет свою историю с нуля.
        </p>
        <div className="flex flex-col gap-6 mb-10">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <div className="text-white font-semibold text-sm uppercase tracking-wide mb-1">{f.title}</div>
                <div className="text-neutral-400 text-sm">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-purple-600 text-white border border-purple-600 px-6 py-3 text-sm transition-all duration-300 hover:bg-transparent hover:text-purple-400 cursor-pointer w-fit uppercase tracking-wide">
          Узнать больше
        </button>
      </div>
    </div>
  );
}