export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t-2 border-ink flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <p className="font-mono text-[0.6rem] tracking-widest text-mid uppercase">
        Gebouwd met Next.js & Tailwind
      </p>
      <p className="font-mono text-[0.6rem] tracking-widest text-ink font-bold uppercase">
        Open voor werk
      </p>
    </footer>
  );
}
