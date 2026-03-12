import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import ShowcaseRow from "@/components/ShowcaseRow";
import StrategyFooter from "@/components/StrategyFooter";

export const metadata = {
  title: "Bowen AI | Think Bigger with AI Strategy & Web Architecture",
  description: "Custom AI websites, dashboards, ad campaigns, and 1-1 strategy consulting — built for founders who want results in days, not months.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070710]">
      <HeroSection />
      <BentoGrid />
      <ShowcaseRow />
      <StrategyFooter />
    </main>
  );
}
