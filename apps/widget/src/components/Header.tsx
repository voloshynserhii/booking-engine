
export const Header = () => {
  const navItems = ['Availability', 'About', 'Contact', 'Policies'];

  return (
    <header className="w-full bg-[#b8aca0] text-[#2d2d2d] text-sm py-2 px-4 border-b border-black/10">
      <div className="mx-auto flex items-center justify-between">
        
        {/* Ліва частина: Назва готелю та Зірки */}
        <div className="flex items-center gap-4 pr-6 border-r border-black/20">
          <h1 className="font-medium tracking-tight">The Pines Hotel</h1>
          <div className="flex text-[10px] gap-0.5">
            {[...Array(4)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>

        {/* Центральна частина: Навігація */}
        <nav className="flex-1 px-8">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className={`hover:opacity-70 transition-opacity ${
                    item === 'Availability' ? 'border-b border-[#2d2d2d] pb-0.5' : ''
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Права частина: Валюта та Мова */}
        <div className="flex items-center gap-2 divide-x divide-black/20">
          <button className="hover:opacity-70">EUR</button>
          <button className="pl-2 hover:opacity-70">English</button>
        </div>

      </div>
    </header>
  );
};