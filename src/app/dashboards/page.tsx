import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DashboardDemo from "@/components/DashboardDemo";
import PDFtoVideo from "@/components/PDFtoVideo";
import FloatingAgent from "@/components/FloatingAgent";

export const metadata = {
    title: "AI Dashboards & PDF Tech | Bowen AI Strategy Group",
    description: "Live revenue intelligence and automated document-to-video narration.",
};

export default function DashboardsPage() {
    return (
        <>
            <Nav />
            <main className="pt-20">
                <section className="px-6 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="section-label justify-center">Analytics</p>
                        <h1 className="text-6xl font-black text-white mb-6">Dashboards & PDF Automation</h1>
                        <p className="text-xl text-zinc-400">Live revenue intelligence and instant document-to-video narration in 25+ languages.</p>
                    </div>
                </section>
                <DashboardDemo />
                <PDFtoVideo />
            </main>
            <Footer />
            <FloatingAgent />
        </>
    );
}
