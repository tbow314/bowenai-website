import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import FloatingAgent from "@/components/FloatingAgent";

export const metadata = {
    title: "AI Website Builds | Bowen AI Strategy Group",
    description: "Bespoke Next.js websites engineered for conversion. Shipped in 10 days.",
};

export default function WebsitesPage() {
    return (
        <>
            <Nav />
            <main className="pt-20">
                <section className="px-6 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="section-label justify-center">Services</p>
                        <h1 className="text-6xl font-black text-white mb-6">Custom AI Websites</h1>
                        <p className="text-xl text-zinc-400">Next.js sites engineered to convert — shipped in under 10 days. SEO-ready from day one.</p>
                    </div>
                </section>
                <PortfolioShowcase />
            </main>
            <Footer />
            <FloatingAgent />
        </>
    );
}
