export function Footer() {
  return (
    <footer className="py-10 px-6 md:px-14 border-t border-border">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="font-display text-sm tracking-[0.2em] uppercase font-semibold"
          style={{ color: "var(--gold)" }}
        >
          Empressions Studio
        </p>
        <p className="text-xs text-muted-foreground tracking-wide text-center md:text-right">
          © {new Date().getFullYear()} Empressions Studio · Memphis, TN ·{" "}
          <a
            href="sms:+16159270235"
            className="hover:text-foreground transition-colors duration-300"
          >
            (615) 927-0235
          </a>
        </p>
      </div>
    </footer>
  );
}
