import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { CursorGlow } from "../../components/ui/cursor-glow";

export const Body = (): JSX.Element => {
  return (
    <div className="bg-[#fafafa] flex flex-col items-center w-full min-h-screen">
      <CursorGlow />
      <div className="w-full max-w-[1440px]">
        <HeaderSection />
        <MainContentSection />
        <FooterSection />
      </div>
    </div>
  );
};