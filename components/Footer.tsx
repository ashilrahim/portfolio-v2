export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 pb-14 sm:px-10">
      <div className="flex flex-col items-center gap-2 border-t border-border pt-8 text-center">
        <p className="font-mono text-xs text-muted">
          © {year} Ashil c k — Designed &amp; built with ❣️
        </p>
      </div>
    </footer>
  );
}
