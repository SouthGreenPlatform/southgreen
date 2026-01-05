import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

interface Publication {
  authors: string;
  year: number;
  title: string;
  journal: string;
  doi: string;
}

const toolsPublications: Publication[] = [
  { authors: "Summo, M., Droc, G., Rouard, M., and Sarah, G.", year: 2025, title: "SynFlow: an interactive online genome structural variants viewer", journal: "HAL hal-05399031", doi: "" },
  { authors: "Pierre, L., Bertrand, P., Ndomassi, T., Yann, P., Bill Gates, H. H., Valentin, G., et al.", year: 2025, title: "AgroLD: a knowledge graph for the plant sciences", journal: "BMC Genom Data 26, 73", doi: "10.1186/s12863-025-01359-6" },
  { authors: "Christine, T.-D., Clothilde, C., Mathieu, B., Laurence, A., Valentin, K., Cédric, M., et al.", year: 2023, title: "FrangiPANe, a tool for creating a panreference using left behind reads", journal: "NAR Genom Bioinform 5, lqad013", doi: "10.1093/nargab/lqad013" },
  { authors: "Mohamed, M., Sabot, F., Varoqui, M., Mugat, B., Audouin, K., Pélisson, A., et al.", year: 2023, title: "TrEMOLO: accurate transposable element allele frequency estimation using long-read sequencing data combining assembly and mapping-based approaches", journal: "Genome Biol 24, 63", doi: "10.1186/s13059-023-02911-2" },
  { authors: "Dereeper, A., Summo, M., and Meyer, D. F.", year: 2022, title: "PanExplorer: a web-based tool for exploratory analysis and visualization of bacterial pan-genomes", journal: "Bioinformatics 38, 4412–4414", doi: "10.1093/bioinformatics/btac504" },
  { authors: "Droc, G., Martin, G., Guignon, V., Summo, M., Sempéré, G., Durant, E., et al.", year: 2022, title: "The banana genome hub: a community database for genomics in the Musaceae", journal: "Horticulture Research 9, uhac221", doi: "10.1093/hr/uhac221" },
  
  { authors: "Orjuela, J., Comte, A., Ravel, S., Charriat, F., Vi, T., Sabot, F., et al.", year: 2022, title: "CulebrONT: a streamlined long reads multi-assembler pipeline for prokaryotic and eukaryotic genomes", journal: "Peer Community Journal 2", doi: "10.24072/pcjournal.153" },
  { authors: "Sempéré, G., Larmande, P., and Rouard, M.", year: 2022, title: "Managing High-Density Genotyping Data with Gigwa", journal: "Plant Bioinformatics: Methods and Protocols, 415–427", doi: "10.1007/978-1-0716-2067-0_21" },
  { authors: "Summo, M., Comte, A., Martin, G., Perelle, P., Weitz, E. M., Droc, G., et al.", year: 2022, title: "GeMo: a web-based platform for the visualization and curation of genome ancestry mosaics", journal: "Database 2022, baac057", doi: "10.1093/database/baac057" },
  { authors: "Dufayard, J.-F., Bocs, S., Guignon, V., Larivière, D., Louis, A., Oubda, N., et al.", year: 2021, title: "RapGreen, an interactive software and web package to explore and analyze phylogenetic trees", journal: "NAR Genomics and Bioinformatics 3", doi: "10.1093/nargab/lqab088" },
  { authors: "Durant, É., Sabot, F., Conte, M., and Rouard, M.", year: 2021, title: "Panache: a web browser-based viewer for linearized pangenomes", journal: "Bioinformatics 37, 4556–4558", doi: "10.1093/bioinformatics/btab688" },
  { authors: "Guignon, V., Toure, A., Droc, G., Dufayard, J. F., Conte, M., and Rouard, M.", year: 2021, title: "GreenPhylDB v5: a comparative pangenomic database for plant genomes", journal: "Nucleic Acids Research 49, D1464–D1471", doi: "10.1093/nar/gkaa1068" },
  { authors: "Sempéré, G., Pétel, A., Rouard, M., Frouin, J., Hueber, Y., De Bellis, F., et al.", year: 2019, title: "Gigwa v2—Extended and improved genotype investigator", journal: "Gigascience 8", doi: "10.1093/gigascience/giz051" },
  { authors: "Tranchant-Dubreuil, C., Ravel, S., Monat, C., Sarah, G., Diallo, A., Helou, L., et al.", year: 2018, title: "TOGGLe, a flexible framework for easily building complex workflows and performing robust large-scale NGS analyses", journal: "bioRxiv, 245480", doi: "10.1101/245480" },
  { authors: "Guignon, V., Hueber, Y., Rouard, M., Bocs, S., Couvin, D., De Lamotte, F., et al.", year: 2016, title: "The South Green portal: A comprehensive resource for tropical and Mediterranean crop genomics", journal: "Current Plant Biology 7, 6–9", doi: "" },
  { authors: "Dereeper, A., Homa, F., Andres, G., Sempere, G., Sarah, G., Hueber, Y., et al.", year: 2015, title: "SNiPlay3: a web-based application for exploration and large scale analyses of genomic variations", journal: "Nucleic Acids Res. 43, W295-300", doi: "10.1093/nar/gkv351" },
  { authors: "Dereeper, A., Bocs, S., Rouard, M., Guignon, V., Ravel, S., Tranchant-Dubreuil, C., et al.", year: 2015, title: "The coffee genome hub: a resource for coffee genomes", journal: "Nucleic Acids Research 43, D1028–D1035", doi: "10.1093/nar/gku1108" },
  { authors: "Droc, G., Lariviere, D., Guignon, V., Yahiaoui, N., This, D., Garsmeur, O., et al.", year: 2013, title: "The Banana Genome Hub", journal: "Database 2013, bat035–bat035", doi: "10.1093/database/bat035" },
  { authors: "Peralta, M., Combes, M.-C., Cenci, A., Lashermes, P., and Dereeper, A.", year: 2013, title: "SNiPloid: A Utility to Exploit High-Throughput SNP Data Derived from RNA-Seq in Allopolyploid Species", journal: "International Journal of Plant Genomics 2013", doi: "10.1155/2013/890123" },
  { authors: "Guignon, V., Droc, G., Alaux, M., Baurens, F.-C., Garsmeur, O., Poiron, C., et al.", year: 2012, title: "Chado Controller: advanced annotation management with a community annotation system", journal: "Bioinformatics", doi: "10.1093/bioinformatics/bts046" },
  { authors: "Dereeper, A., Nicolas, S., Le Cunff, L., Bacilieri, R., Doligez, A., Peros, J.-P., et al.", year: 2011, title: "SNiPlay: a web-based tool for detection, management and analysis of SNPs. Application to grapevine diversity projects", journal: "BMC Bioinformatics 12, 134", doi: "10.1186/1471-2105-12-134" },
  { authors: "Rouard, M., Guignon, V., Aluome, C., Laporte, M.-A., Droc, G., Walde, C., et al.", year: 2011, title: "GreenPhylDB v2.0: comparative and functional genomics in plants", journal: "Nucleic Acids Res. 39, D1095-1102", doi: "10.1093/nar/gkq811" },
  { authors: "Conte, M. G., Gaillard, S., Lanau, N., Rouard, M., and Périn, C.", year: 2008, title: "GreenPhylDB: a database for plant comparative genomics", journal: "Nucleic Acids Res 36, D991–D998", doi: "10.1093/nar/gkm934" },
  { authors: "Dereeper, A., Argout, X., Billot, C., Rami, J.-F., and Ruiz, M.", year: 2007, title: "SAT, a flexible and optimized Web application for SSR marker development", journal: "BMC Bioinformatics 8, 465", doi: "10.1186/1471-2105-8-465" },
  { authors: "Ruiz, M., Rouard, M., Raboin, L. M., Lartaud, M., Lagoda, P., and Courtois, B.", year: 2004, title: "TropGENE-DB, a multi-tropical crop information system", journal: "Nucleic Acids Res. 32, D364-367", doi: "10.1093/nar/gkh105" },
];

const contributionsPublications: Publication[] = [
  { authors: "Bocs, S., Carrette, C., Confais, J., Dubois, S., Duvaux, L., Klopp, C., et al.", year: 2025, title: "A roadmap for the adoption of pangenomics in agronomy", journal: "HAL INRAE", doi: "" },
  { authors: "Durant, E., Rouard, M., Ganko, E. W., Muller, C., Cleary, A. M., Farmer, A. D., et al.", year: 2022, title: "Ten simple rules for developing visualization tools in genomics", journal: "PLoS Comput Biol 18, e1010622", doi: "10.1371/journal.pcbi.1010622" },
  { authors: "Rouard, M., Scholz, A. H., and Halewood, M.", year: 2025, title: "Genetic databases in the era of 'DSI' benefit-sharing", journal: "Trends in Genetics 41, 451–455", doi: "10.1016/j.tig.2025.03.004" },
  { authors: "Sardos, J., Cenci, A., Martin, G., Breton, C., Guignon, V., Van den Houwe, I., et al.", year: 2025, title: "Painting the diversity of a world's favorite fruit: A next generation catalog of cultivated bananas", journal: "PLANTS, PEOPLE, PLANET 7, 263–283", doi: "10.1002/ppp3.10581" },
  { authors: "Tibiri, E. B., Boua, P. R., Soulama, I., Dubreuil-Tranchant, C., Tando, N., Tollenaere, C., et al.", year: 2025, title: "Challenges and opportunities of developing bioinformatics platforms in Africa: the case of BurkinaBioinfo at Joseph Ki-Zerbo University, Burkina Faso", journal: "Brief Bioinform 26, bbaf040", doi: "10.1093/bib/bbaf040" },
  { authors: "Selby, P., Abbeloos, R., Adam-Blondon, A.-F., Agosto-Pérez, F. J., Alaux, M., Alic, I., et al.", year: 2025, title: "BrAPI v2: real-world applications for data integration and collaboration in the breeding and genetics community", journal: "Database (Oxford) 2025, baaf048", doi: "10.1093/database/baaf048" },
  { authors: "Dong, Y., Duan, S., Xia, Q., Liang, Z., Dong, X., Margaryan, K., et al.", year: 2023, title: "Dual domestications and origin of traits in grapevine evolution", journal: "Science 379, 892–901", doi: "10.1126/science.add8655" },
  { authors: "Gaignard, A., Rosnet, T., De Lamotte, F., Lefort, V., and Devignes, M.-D.", year: 2023, title: "FAIR-Checker: supporting digital resource findability and reuse with Knowledge Graphs and Semantic Web standards", journal: "J Biomed Semant 14, 7", doi: "10.1186/s13326-023-00289-5" },
  { authors: "Nguyen, N. T. T., Vincens, P., Dufayard, J. F., Roest Crollius, H., and Louis, A.", year: 2022, title: "Genomicus in 2022: comparative tools for thousands of genomes and reconstructed ancestors", journal: "Nucleic Acids Res 50, D1025–D1031", doi: "10.1093/nar/gkab1091" },
  { authors: "Piet, Q., Droc, G., Marande, W., Sarah, G., Bocs, S., Klopp, C., et al.", year: 2022, title: "A chromosome-level, haplotype-phased Vanilla planifolia genome highlights the challenge of partial endoreplication for accurate whole-genome assembly", journal: "Plant Communications 3, 100330", doi: "10.1016/j.xplc.2022.100330" },
  { authors: "Gottin, C., Dievart, A., Summo, M., Droc, G., Périn, C., Ranwez, V., et al.", year: 2021, title: "A new comprehensive annotation of leucine-rich repeat-containing receptors in rice", journal: "The Plant Journal 108, 492–508", doi: "10.1111/tpj.15456" },
  { authors: "Do, Q., Bich Hai, H., and Larmande, P.", year: 2021, title: "PyRice: a Python package for querying Oryza sativa databases", journal: "Bioinformatics 37, 1037–1038", doi: "10.1093/bioinformatics/btaa694" },
  { authors: "Selby, P., Abbeloos, R., Backlund, J. E., Basterrechea Salido, M., Bauchet, G., Benites-Alfaro, O. E., et al.", year: 2019, title: "BrAPI—an application programming interface for plant breeding applications", journal: "Bioinformatics 35, 4147–4155", doi: "10.1093/bioinformatics/btz190" },
  { authors: "Nti-Addae, Y., Matthews, D., Ulat, V. J., Syed, R., Sempéré, G., Pétel, A., et al.", year: 2019, title: "Benchmarking database systems for Genomic Selection implementation", journal: "Database (Oxford) 2019", doi: "10.1093/database/baz096" },
  { authors: "Cubry, P., Tranchant-Dubreuil, C., Thuillet, A.-C., Monat, C., Ndjiondjop, M.-N., Labadie, K., et al.", year: 2018, title: "The Rise and Fall of African Rice Cultivation Revealed by Analysis of 246 New Genomes", journal: "Current Biology 28, 2274-2282.e6", doi: "10.1016/j.cub.2018.05.066" },
  { authors: "Garsmeur, O., Droc, G., Antonise, R., Grimwood, J., Potier, B., Aitken, K., et al.", year: 2018, title: "A mosaic monoploid reference sequence for the highly complex genome of sugarcane", journal: "Nat Commun 9, 2638", doi: "10.1038/s41467-018-05051-5" },
  { authors: "Jonquet, C., Toulet, A., Arnaud, E., Aubin, S., Dzalé Yeumo, E., Emonet, V., et al.", year: 2018, title: "AgroPortal: A vocabulary and ontology repository for agronomy", journal: "Computers and Electronics in Agriculture 144, 126–143", doi: "10.1016/j.compag.2017.10.012" },
  { authors: "Argout, X., Martin, G., Droc, G., Fouet, O., Labadie, K., Rivals, E., et al.", year: 2017, title: "The cacao Criollo genome v2.0: an improved version of the genome for genetic and functional genomic studies", journal: "BMC Genomics 18, 730", doi: "10.1186/s12864-017-4120-9" },
  { authors: "Cohen-Boulakia, S., Belhajjame, K., Collin, O., Chopard, J., Froidevaux, C., Gaignard, A., et al.", year: 2017, title: "Scientific workflows for computational reproducibility in the life sciences: Status, challenges and opportunities", journal: "Future Generation Computer Systems 75, 284–298", doi: "10.1016/j.future.2017.01.012" },
  { authors: "Sarah, G., Homa, F., Pointet, S., Contreras, S., Sabot, F., Nabholz, B., et al.", year: 2017, title: "A large set of 26 new reference transcriptomes dedicated to comparative population genomics in crops and wild relatives", journal: "Molecular Ecology Resources 17, 565–580", doi: "10.1111/1755-0998.12587" },
  { authors: "Denoeud, F., Carretero-Paulet, L., Dereeper, A., Droc, G., Guyot, R., Pietrella, M., et al.", year: 2014, title: "The coffee genome provides insight into the convergent evolution of caffeine biosynthesis", journal: "Science 345, 1181–1184", doi: "10.1126/science.1255274" },
  { authors: "D'Hont, A., Denoeud, F., Aury, J.-M., Baurens, F.-C., Carreel, F., Garsmeur, O., et al.", year: 2012, title: "The banana (Musa acuminata) genome and the evolution of monocotyledonous plants", journal: "Nature 488, 213", doi: "" },
  { authors: "Argout, X., Salse, J., Aury, J.-M., Guiltinan, M. J., Droc, G., Gouzy, J., et al.", year: 2011, title: "The genome of Theobroma cacao", journal: "Nat Genet 43, 101–108", doi: "10.1038/ng.736" },
];

const PublicationCard = ({ pub }: { pub: Publication }) => (
  <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
            {pub.year}
          </Badge>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-2 leading-tight">
            {pub.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {pub.authors}
          </p>
          <p className="text-sm text-muted-foreground/80 italic">
            {pub.journal}
          </p>
          {pub.doi && (
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 mt-2 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              doi: {pub.doi}
            </a>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Publications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Scientific Publications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Publications
            </h1>
            <p className="text-xl text-muted-foreground">
              Peer-reviewed publications describing South Green tools, databases, and selected contributions from platform members.
            </p>
          </div>
        </div>
      </section>

      {/* Tools & Databases Publications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                South Green Tools & Databases
              </h2>
              <p className="text-muted-foreground">
                Publications describing tools and databases developed and maintained by the South Green platform.
              </p>
              <Badge className="mt-4 bg-primary/20 text-primary border-0">
                {toolsPublications.length} publications
              </Badge>
            </div>
            <div className="space-y-4">
              {toolsPublications.map((pub, index) => (
                <PublicationCard key={index} pub={pub} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Contributions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Selected Contributions of Platform Members
              </h2>
              <p className="text-muted-foreground">
                Notable research contributions from South Green platform members in genomics and bioinformatics.
              </p>
              <Badge className="mt-4 bg-primary/20 text-primary border-0">
                {contributionsPublications.length} publications
              </Badge>
            </div>
            <div className="space-y-4">
              {contributionsPublications.map((pub, index) => (
                <PublicationCard key={index} pub={pub} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
