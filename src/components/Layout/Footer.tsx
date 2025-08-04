export default function Footer() {
  return (
    <footer className="py-2 text-center bg-background/20 border-t border-border">
      <p className="text-muted-foreground">
        &copy; {new Date().getFullYear()} My Coding Profile. All rights
        reserved.
      </p>
    </footer>
  );
}
