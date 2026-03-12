import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './GlossaryPage.module.css';

const glossaryTerms = [
  { term: "Amino Acid", definition: "The building blocks of peptides and proteins. There are 20 standard amino acids that combine in various sequences to form different peptides." },
  { term: "Bioavailability", definition: "The proportion of a substance that enters the bloodstream and is able to have an active effect. Different administration routes (oral, injection, nasal) affect bioavailability." },
  { term: "Bioidentical", definition: "A compound that is chemically identical to one produced naturally in the human body. Some therapeutic peptides are bioidentical to endogenous peptides." },
  { term: "BPC (Body Protection Compound)", definition: "A partial sequence of a protein found in human gastric juice. BPC-157 is a synthetic peptide derived from this compound, studied for tissue repair." },
  { term: "Compounding Pharmacy", definition: "A pharmacy that creates customized medications, including peptides, tailored to individual patient needs. Often the source for non-commercially available peptides." },
  { term: "Endogenous", definition: "Originating from within the body. Many therapeutic peptides are synthetic versions of endogenous peptides that the body naturally produces." },
  { term: "FDA (Food & Drug Administration)", definition: "The U.S. federal agency responsible for approving drugs, including peptide-based therapies, ensuring they meet safety and efficacy standards." },
  { term: "GLP-1 (Glucagon-Like Peptide-1)", definition: "A naturally occurring peptide hormone that regulates appetite and blood sugar. Semaglutide and other GLP-1 receptor agonists mimic its effects." },
  { term: "GHRH (Growth Hormone Releasing Hormone)", definition: "A hormone produced in the hypothalamus that stimulates the pituitary gland to release growth hormone. Several peptides like CJC-1295 and Sermorelin are GHRH analogs." },
  { term: "Growth Hormone Secretagogue", definition: "A substance that stimulates the secretion of growth hormone from the pituitary gland. Ipamorelin is a well-known example." },
  { term: "Half-Life", definition: "The time required for the concentration of a peptide in the body to reduce by half. Half-life determines how frequently a peptide needs to be administered." },
  { term: "Homeostasis", definition: "The body's ability to maintain stable internal conditions. Many peptides work by supporting or restoring homeostatic balance." },
  { term: "Hydrolyzed", definition: "Broken down using water into smaller components. Hydrolyzed collagen (collagen peptides) has been broken into smaller, more absorbable fragments." },
  { term: "Immunomodulatory", definition: "Having the ability to modify or regulate the immune system's response. Thymosin Alpha-1 and Selank are examples of immunomodulatory peptides." },
  { term: "In Vitro", definition: "Research performed outside a living organism, typically in test tubes or cell cultures. Many peptide studies begin with in vitro experiments." },
  { term: "In Vivo", definition: "Research performed within a living organism, including animal studies and human clinical trials. In vivo data is generally considered more relevant than in vitro." },
  { term: "Lyophilized", definition: "Freeze-dried. Most injectable peptides are supplied in lyophilized (powder) form and must be reconstituted with bacteriostatic water before use." },
  { term: "Melanocortin", definition: "A family of peptide hormones that regulate skin pigmentation, inflammation, energy balance, and sexual function. PT-141 acts on melanocortin receptors." },
  { term: "Neuropeptide", definition: "A peptide that acts as a neurotransmitter or neuromodulator in the nervous system. They play roles in pain perception, mood, appetite, and cognition." },
  { term: "Nootropic", definition: "A substance that enhances cognitive function, including memory, focus, and mental clarity. Selank is an example of a nootropic peptide." },
  { term: "Peptide Bond", definition: "The chemical bond formed between two amino acids, linking them together in a chain. Peptides are defined by these bonds connecting amino acid sequences." },
  { term: "Pharmacokinetics", definition: "The study of how a drug (including peptides) moves through the body — absorption, distribution, metabolism, and excretion." },
  { term: "Receptor Agonist", definition: "A substance that binds to and activates a specific receptor in the body, triggering a biological response. Semaglutide is a GLP-1 receptor agonist." },
  { term: "Reconstitution", definition: "The process of dissolving a lyophilized (freeze-dried) peptide in bacteriostatic water to prepare it for injection." },
  { term: "Subcutaneous Injection", definition: "An injection administered into the fatty tissue just beneath the skin. This is the most common route of administration for injectable peptides." },
  { term: "Telomerase", definition: "An enzyme that adds DNA to telomeres (protective caps on chromosomes) to maintain their length. Epithalon is studied for its ability to activate telomerase." },
  { term: "Telomere", definition: "Protective caps at the ends of chromosomes that shorten with age. Telomere length is considered a biomarker of biological aging." },
  { term: "Thymus", definition: "A gland located behind the sternum that produces T-cells and certain peptides like Thymosin Alpha-1. It plays a crucial role in immune system development." },
  { term: "Upregulation", definition: "An increase in the number of receptors or the sensitivity of receptors to a particular substance, resulting in an enhanced biological response." },
];

export default function GlossaryPage() {
  const [search, setSearch] = useState('');

  const filtered = glossaryTerms.filter((t) =>
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.definition.toLowerCase().includes(search.toLowerCase())
  );

  const letters = [...new Set(filtered.map((t) => t.term[0].toUpperCase()))].sort();

  return (
    <section className="section page-enter">
      <Helmet>
        <title>Peptide Glossary — Key Terms & Definitions | Peptides101.info</title>
        <meta name="description" content="A comprehensive glossary of peptide-related terms, definitions, and concepts. Understand the science behind peptide therapy in plain English." />
        <meta property="og:title" content="Peptide Glossary — Key Terms & Definitions" />
        <meta property="og:description" content="A comprehensive glossary of peptide-related terms and definitions explained in plain English." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://peptides101.info/glossary" />
      </Helmet>

      <div className="text-center" style={{ marginBottom: 40 }}>
        <h1 className="heading-2">Peptide Glossary</h1>
        <p className="subtitle" style={{ maxWidth: 480, margin: '0 auto' }}>
          Key terms and concepts explained in plain English. No biology degree required.
        </p>
      </div>

      {/* Search */}
      <div className={styles.searchWrap}>
        <input
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Terms */}
      <div className={styles.termsList}>
        {letters.map((letter) => (
          <div key={letter}>
            <div className={styles.letterHeader}>{letter}</div>
            {filtered
              .filter((t) => t.term[0].toUpperCase() === letter)
              .map((t) => (
                <div key={t.term} className={styles.termCard}>
                  <h3 className={styles.termName}>{t.term}</h3>
                  <p className={styles.termDef}>{t.definition}</p>
                </div>
              ))}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className={styles.empty}>No terms match your search.</div>
        )}
      </div>
    </section>
  );
}
