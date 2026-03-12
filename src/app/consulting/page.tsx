import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FloatingAgent from "@/components/FloatingAgent";

export const metadata = {
    title: "Book a Strategy Call | Bowen AI Strategy Group",
    description: "90-minute private 1-1 consulting. Walk away with an AI automation roadmap.",
};

export default function ConsultingPage() {
    return (
        <>
            <Nav />
            <main className="pt-20">
                <section className="px-6 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="section-label justify-center">Strategy</p>
                        <h1 className="text-6xl font-black text-white mb-6">1-1 Strategy Consulting</h1>
                        <p className="text-xl text-zinc-400">Direct access to custom AI automation roadmaps and business scaling strategies.</p>
                    </div>
                </section>
                <LeadCaptureForm />
            </main>
            <Footer />
            <FloatingAgent />
        </>
    );
}
