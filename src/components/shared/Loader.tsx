
export default function Loader() {
  const loaderCss = "bg-background rounded-xl animate-pulse";

  return (
    <div className="flex flex-col md:flex-row gap-6 p-3">
      <section className="w-full md:w-1/3 lg:w-1/4">
        <div className={`${loaderCss} min-h-[500px]`} />
      </section>

      <section className="w-full md:w-2/3 lg:w-3/4 space-y-8 flex gap-2">
        <div className="w-full md:w-3/5 space-y-2">
          <div className={`${loaderCss} w-full min-h-[120px]`} />
          <div className={`${loaderCss} w-full min-h-[370px]`} />
        </div>

        <div className="flex-1">
          <div className={`${loaderCss} w-full min-h-[500px]`} />
        </div>
      </section>
    </div>
  );
}
