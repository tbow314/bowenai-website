import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AdStudio from "@/components/AdStudio";
import FloatingAgent from "@/components/FloatingAgent";

export const metadata = {
    title: "Cinematic AI Ads | Bowen AI Strategy Group",
    description: "Hyper-realistic photo and video ads for luxury cars, watches, and brands.",
};

export default function AdsPage() {
    return (
        <>
            <Nav />
            <main className="pt-20">
                <section className="px-6 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="section-label justify-center">Creative</p>
                        <h1 className="text-6xl font-black text-white mb-6">Photo & Video Ads</h1>
                        <p className="text-xl text-zinc-400">Cinematic AI-generated visuals for multi-channel placement. Delivered in 24 hours.</p>
                    </div>
                </section>
                <AdStudio />
            </main>
            <Footer />
            <FloatingAgent />
        </>
    );
}
