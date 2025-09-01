import { APP_NAME } from "@/data";

export default function Footer() {
  return (
    <footer className="py-4 text-center border-t border-border">
      <p className="text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} {APP_NAME}. All rights
        reserved.
      </p>
    </footer>
  );
}
