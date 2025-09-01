import { features } from "@/data";
import Icon from "../Icon";
import { IconName } from "../Icon/Icons";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-8">
      <div className="text-center max-w-2xl mx-auto pb-8">
        <h2 className="text-3xl font-bold text-secondary-foreground">Powerful Features</h2>
        <p className="mt-4 text-xl text-tertiary-foreground max-w-3xl mx-auto">
          Track your coding progress with comprehensive analytics and beautiful visualizations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center bg-card rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border border-primary hover:scale-[1.02]">
            <div className="w-12 h-12 bg-gradient-to-br from-gradient-start to-gradient-end rounded-xl flex items-center justify-center text-white mb-4">
              <Icon name={feature.icon as IconName} className="w-6 h-6" />
            </div>
            <h3 className="text-xl text-center font-semibold text-secondary-foreground">
              {feature.title}
            </h3>
            <p className="mt-2 text-tertiary-foreground text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
