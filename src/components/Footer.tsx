export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Nicole Stoyanova. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Made with care
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
        </p>
      </div>
    </footer>
  );
}
