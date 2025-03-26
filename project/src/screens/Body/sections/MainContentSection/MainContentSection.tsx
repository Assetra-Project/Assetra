import React from "react";
import { HeroSection } from "../HeroSection/HeroSection";
import { PartnersSection } from "../PartnersSection/PartnersSection";
import { FeaturesSection } from "../FeaturesSection/FeaturesSection";
import { SolutionsSection } from "../SolutionsSection/SolutionsSection";
import { IntegrationsSection } from "../IntegrationsSection/IntegrationsSection";
import { StatsSection } from "../StatsSection/StatsSection";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1440px] mx-auto relative">
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <SolutionsSection />
      <IntegrationsSection />
      <StatsSection />
    </section>
  );
};