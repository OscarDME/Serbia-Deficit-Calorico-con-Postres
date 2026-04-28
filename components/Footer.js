import { copy } from "@/lib/copy";

export default function Footer() {
  const { footer } = copy;

  return (
    <footer className="bg-[#2A1A1F] px-5 py-10 text-[#FFF7F1] md:px-8 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <div className="bg-gradient-to-br from-[#F5728A] via-[#FFB199] to-[#E0A458] bg-clip-text font-serif text-2xl font-bold italic text-transparent md:text-3xl">
            {footer.brand}
          </div>
          <p className="mt-2 max-w-xs text-sm text-[#FFF7F1]/55">{footer.tagline}</p>
        </div>

        <ul className="flex flex-col items-center gap-2 text-sm md:items-end">
          {footer.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#FFF7F1]/70 transition-colors hover:text-[#FFB199]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-[#FFF7F1]/8 pt-6 text-center text-[11px] text-[#FFF7F1]/40 md:text-xs">
        {footer.copyright}
      </div>
    </footer>
  );
}
