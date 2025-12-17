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
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Use
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground/80">
            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the South Green Bioinformatics Platform and its associated services, 
                databases, and tools, you agree to be bound by these Terms of Use. If you do not agree 
                to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                2. Description of Services
              </h2>
              <p>
                South Green provides access to bioinformatics resources including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Genome Hubs for tropical and Mediterranean crops</li>
                <li>Analysis tools and software for genomic research</li>
                <li>Training materials and educational resources</li>
                <li>High-Performance Computing infrastructure</li>
                <li>Scientific databases and data repositories</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                3. Use of Resources
              </h2>
              <p>
                Users are granted a non-exclusive, non-transferable right to access and use South Green 
                resources for academic, research, and educational purposes. Commercial use may require 
                additional agreements with the founding institutions.
              </p>
              <p className="mt-4">
                Users agree to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Use resources responsibly and in accordance with applicable laws</li>
                <li>Properly cite South Green resources in publications and presentations</li>
                <li>Not attempt to circumvent access controls or security measures</li>
                <li>Not redistribute data or tools without appropriate authorization</li>
                <li>Report any security vulnerabilities or issues discovered</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                4. Data and Publications
              </h2>
              <p>
                When using data or tools from South Green in your research, we request that you:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Acknowledge South Green and the relevant Genome Hub in your publications</li>
                <li>Cite the appropriate tool or database publication when available</li>
                <li>Respect any data embargo periods or usage restrictions specified for specific datasets</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                5. Intellectual Property
              </h2>
              <p>
                South Green and its associated logos, tools, and databases are the property of the 
                founding institutions (Alliance Bioversity & CIAT, IRD, CIRAD, INRAE) and contributing 
                research units. Software tools developed by South Green may be released under open-source 
                licenses as specified in their respective repositories.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                6. Disclaimer of Warranties
              </h2>
              <p>
                South Green resources are provided "as is" without warranty of any kind, express or implied. 
                While we strive to maintain accuracy and availability, we cannot guarantee that services 
                will be uninterrupted, error-free, or that data is complete or current.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                South Green and its founding institutions shall not be liable for any direct, indirect, 
                incidental, or consequential damages arising from the use or inability to use our services, 
                including but not limited to damages for loss of data or research results.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                8. Modifications to Terms
              </h2>
              <p>
                South Green reserves the right to modify these Terms of Use at any time. Users are 
                encouraged to review these terms periodically. Continued use of our services after 
                changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                9. Contact Information
              </h2>
              <p>
                For questions regarding these Terms of Use or our services, please contact us at:
              </p>
              <p className="mt-4">
                <a 
                  href="mailto:contact@southgreen.fr" 
                  className="text-primary hover:underline"
                >
                  contact@southgreen.fr
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
