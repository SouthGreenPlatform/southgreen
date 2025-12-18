import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Use</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground/80">
            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the South Green Bioinformatics Platform and its associated services, databases,
                tools, and computing resources (collectively, the “Services”), you agree to be bound by these Terms of
                Use. If you do not agree with these terms, you must not access or use the Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
              <p>South Green provides access to bioinformatics resources, including but not limited to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Genome Hubs for tropical and Mediterranean crops</li>
                <li>Bioinformatics analysis tools and software</li>
                <li>Scientific databases and data repositories</li>
                <li>Training materials and educational resources</li>
                <li>High-Performance Computing (HPC) infrastructure</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">3. Use of Resources</h2>
              <p>
                Users are granted a non-exclusive, non-transferable, revocable right to access and use South Green
                resources for academic, research, and educational purposes. Commercial use may require a specific
                agreement with the relevant founding or hosting institutions.
              </p>
              <p className="mt-4">Users agree to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Use the Services responsibly and in compliance with applicable laws and regulations</li>
                <li>Properly acknowledge and cite South Green resources in publications and presentations</li>
                <li>Not attempt to circumvent access controls, security mechanisms, or usage limits</li>
                <li>Not redistribute data, tools, or access credentials without prior authorization</li>
                <li>Report any security vulnerabilities or misuse identified</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">4. Data and Publications</h2>
              <p>When using data, tools, or infrastructure provided by South Green, users are expected to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Acknowledge South Green and the relevant Genome Hub or resource in publications</li>
                <li>Cite the appropriate software, database, or reference publication when available</li>
                <li>Respect dataset-specific conditions, embargo periods, licenses, or access restrictions</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p>
                South Green content, including its name, logos, interfaces, databases, and platform-specific resources,
                is the property of its founding institutions (Alliance Bioversity &amp; CIAT, IRD, CIRAD, INRAE).
                Software tools developed or distributed by South Green may be released under open-source licenses, as
                specified in their respective repositories or documentation.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                6. Privacy and Data Protection
              </h2>
              <p>
                South Green processes personal data in compliance with the General Data Protection Regulation (GDPR /
                RGPD) and applicable European and French data protection laws.
              </p>
              <p className="mt-4">
                The platform collects only limited technical and usage information for operational monitoring and
                institutional reporting purposes. This may include the number of users, aggregated usage statistics, and
                approximate country of origin inferred from technical metadata at a non-identifying level.
              </p>
              <p className="mt-4">
                No profiling, commercial tracking, or sale of personal data is performed. Collected data is not used to
                identify individual users.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">7. Disclaimer of Warranties</h2>
              <p>
                The Services are provided “as is” and “as available”, without warranties of any kind, express or
                implied. South Green does not guarantee uninterrupted access, error-free operation, or the long-term
                availability of any Service or dataset.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, South Green and its partner institutions shall not be liable for
                any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use,
                the Services, including loss of data or research outcomes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
              <p>
                South Green may suspend or terminate access to the Services at any time, without prior notice, in the
                event of misuse, violation of these Terms, or for operational, security, or legal reasons.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
              <p>
                These Terms of Use are governed by and construed in accordance with French law, unless otherwise
                required by applicable regulations.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
