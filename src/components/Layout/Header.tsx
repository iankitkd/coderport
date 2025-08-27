const APP_NAME = "CoderPort"

export default function Header() {
  return (
    <header className="p-2 px-8">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
        {APP_NAME}
      </h1>
    </header>
  );
}
