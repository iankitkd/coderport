import { platforms } from "@/data";
import { IconName } from "../Icon/Icons";
import Icon from "../Icon";

export default function SupportedPlatformSection() {
  return (
    <section className="py-16">
      <div className="text-center pb-8">
        <h2 className="text-3xl font-bold text-secondary-foreground">
          Supported Platforms
        </h2>
        <p className="mt-4 text-xl text-tertiary-foreground max-w-3xl mx-auto">
          We integrate with all major programming platforms
        </p>
      </div>

      <div className="grid grid-cols-2 max-w-2xl mx-auto gap-6">
        {platforms.map((platform, index) => (
          <div key={index} className="bg-card rounded-2xl p-4 flex flex-col items-center transition-all duration-300 hover:shadow-lg">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center`} >
              <Icon name={platform.icon as IconName} className="" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-foreground">
              {platform.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
