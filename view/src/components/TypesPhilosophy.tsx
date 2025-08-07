import { useState, useEffect } from "react";
import { ChevronDown, BookOpen, Code, Brain, Cpu, Lightbulb, GitBranch, Layers, Sparkles, Menu, X } from "lucide-react";

function TypesPhilosophy() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = [
        "introduction", "historical", "programming", "cognitive",
        "static-dynamic", "complexity", "philosophy", "conclusion"
      ];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setTocOpen(false); // Close TOC on mobile after clicking
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* AI Disclaimer Banner */}
      <div className="bg-risd-blue text-white py-2 px-4 text-center">
        <p className="text-sm font-medium">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            This dossier was created by AI using models o3-pro and Claude 4.1 for code generation
            <Sparkles className="w-4 h-4" />
          </span>
        </p>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-200 dark:bg-black-700 z-50">
        <div 
          className="h-full bg-pacific-cyan transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
            The Philosophy of <span className="text-risd-blue">Types</span>
          </h1>
          <p className="text-lg md:text-xl text-black-700 dark:text-gray-300 mb-8 leading-relaxed">
            A Journey from <span className="text-cordovan font-semibold">Mathematical Foundations</span> to <span className="text-pacific-cyan font-semibold">Modern Programming</span>
          </p>
          <p className="text-base text-black-600 dark:text-gray-400 mb-12">
            Exploring how Church, Curry, and others shaped our understanding of types in mathematics, programming, and human cognition
          </p>
          
          <button 
            onClick={() => scrollToSection("introduction")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-risd-blue hover:bg-risd-blue-600 text-white font-medium rounded-full transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#004fff', color: 'white' }}
          >
            <BookOpen className="w-5 h-5" />
            Begin Exploration
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Compact Table of Contents */}
      <nav className="fixed top-12 right-4 z-40">
        {/* Toggle Button */}
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="bg-white/90 dark:bg-black-900/90 backdrop-blur rounded-full shadow-lg border border-gray-200 dark:border-black-700 p-3 hover:shadow-xl transition-all"
          aria-label="Toggle Table of Contents"
        >
          {tocOpen ? (
            <X className="w-5 h-5 text-black-700 dark:text-gray-300" />
          ) : (
            <Menu className="w-5 h-5 text-black-700 dark:text-gray-300" />
          )}
        </button>

        {/* TOC Dropdown */}
        <div className={`absolute top-14 right-0 transition-all duration-300 ${
          tocOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          <div className="bg-white/95 dark:bg-black-900/95 backdrop-blur rounded-2xl shadow-xl border border-gray-200 dark:border-black-700 p-4 min-w-[280px]">
            <h3 className="text-sm font-bold text-black dark:text-white mb-4">Table of Contents</h3>
            <div className="space-y-2">
              {[
                { id: "introduction", title: "Introduction", icon: BookOpen },
                { id: "historical", title: "Historical Foundations", icon: GitBranch },
                { id: "programming", title: "From Logic to Programming", icon: Code },
                { id: "cognitive", title: "The Cognitive Act of Typing", icon: Brain },
                { id: "static-dynamic", title: "Static vs Dynamic", icon: Layers },
                { id: "complexity", title: "Managing Complexity", icon: Cpu },
                { id: "philosophy", title: "Truth and Creativity", icon: Sparkles },
                { id: "conclusion", title: "Conclusion", icon: Lightbulb },
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-pacific-cyan-100 dark:bg-pacific-cyan-900/30 text-pacific-cyan-700 dark:text-pacific-cyan-300'
                      : 'text-black-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-black-800'
                  }`}
                >
                  <section.icon className={`w-4 h-4 flex-shrink-0 ${
                    activeSection === section.id ? 'text-pacific-cyan' : 'text-gray-400'
                  }`} />
                  <span className="text-sm font-medium">{section.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-0 max-w-3xl pb-16">
        {/* Introduction */}
        <section id="introduction" className="mb-16">
          <div className="bg-white dark:bg-black-900 rounded-2xl shadow-sm border border-gray-200 dark:border-black-800 p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">Introduction</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200 mb-4">
                <span className="text-risd-blue font-semibold">Types</span> are everywhere in our intellectual landscape. In <span className="text-cordovan font-semibold">mathematics and logic</span>, type theory emerged as a way to avoid paradoxes and provide a foundation for rigorous reasoning. In <span className="text-pacific-cyan font-semibold">modern programming</span>, type systems help catch errors and structure our code. Even in our everyday thinking, we intuitively <span className="text-rose-custom font-semibold">classify and categorize</span> – essentially typing the world around us into concepts and kinds.
              </p>
              <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200">
                This reflection explores the rich interplay between these realms: from the historical origins of type theory with figures like <span className="text-risd-blue font-semibold">Alonzo Church</span> and <span className="text-risd-blue font-semibold">Haskell Curry</span> to the practical type systems in languages like <span className="text-pacific-cyan font-semibold">TypeScript</span>, and the deep cognitive impulse to impose types when modeling reality in software.
              </p>
            </div>
          </div>
        </section>

        {/* Historical Foundations */}
        <section id="historical" className="mb-16">
          <HistoricalFoundations />
        </section>

        {/* From Mathematical Logic to Programming */}
        <section id="programming" className="mb-16">
          <ProgrammingLanguages />
        </section>

        {/* The Cognitive Act of Typing */}
        <section id="cognitive" className="mb-16">
          <CognitiveTyping />
        </section>

        {/* Static vs Dynamic Typing */}
        <section id="static-dynamic" className="mb-16">
          <StaticVsDynamic />
        </section>

        {/* Types as Tools for Managing Complexity */}
        <section id="complexity" className="mb-16">
          <ManagingComplexity />
        </section>

        {/* Types, Truth, and Creativity */}
        <section id="philosophy" className="mb-16">
          <TruthAndCreativity />
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-16">
          <Conclusion />
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-gray-200 dark:border-black-700">
          <p className="text-black-600 dark:text-gray-400">
            An interactive exploration of type theory and its philosophical implications
          </p>
          <p className="text-sm text-black-500 dark:text-gray-500 mt-2">
            From mathematical foundations to modern programming
          </p>
        </footer>
      </main>
    </div>
  );
}

// Component sections
function HistoricalFoundations() {
  return (
    <div className="bg-pacific-cyan-50 dark:bg-black-900 rounded-2xl shadow-sm border border-gray-200 dark:border-black-800 p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">Historical Foundations of Type Theory</h2>
      
      {/* Timeline SVG */}
      <div className="mb-8 overflow-x-auto bg-white dark:bg-black-900 rounded-xl p-4">
        <svg viewBox="0 0 800 300" className="w-full min-w-[600px] h-auto">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#31afd4" />
            </marker>
          </defs>
          
          {/* Timeline Line */}
          <line x1="50" y1="150" x2="750" y2="150" stroke="#31afd4" strokeWidth="3" markerEnd="url(#arrowhead)" />
          
          {/* Events */}
          <g className="text-sm">
            {/* Russell */}
            <circle cx="150" cy="150" r="10" fill="#902d41" />
            <line x1="150" y1="150" x2="150" y2="100" stroke="#902d41" strokeWidth="2" />
            <rect x="80" y="60" width="140" height="40" rx="8" fill="white" stroke="#902d41" strokeWidth="2" />
            <text x="150" y="80" textAnchor="middle" className="fill-black-700 font-semibold">1900s - Russell</text>
            <text x="150" y="95" textAnchor="middle" className="fill-black-600 text-xs">Theory of Types</text>
            
            {/* Church */}
            <circle cx="350" cy="150" r="10" fill="#004fff" />
            <line x1="350" y1="150" x2="350" y2="200" stroke="#004fff" strokeWidth="2" />
            <rect x="280" y="210" width="140" height="40" rx="8" fill="white" stroke="#004fff" strokeWidth="2" />
            <text x="350" y="230" textAnchor="middle" className="fill-black-700 font-semibold">1940 - Church</text>
            <text x="350" y="245" textAnchor="middle" className="fill-black-600 text-xs">λ-calculus & Simple Types</text>
            
            {/* Curry */}
            <circle cx="500" cy="150" r="10" fill="#ff007f" />
            <line x1="500" y1="150" x2="500" y2="100" stroke="#ff007f" strokeWidth="2" />
            <rect x="430" y="60" width="140" height="40" rx="8" fill="white" stroke="#ff007f" strokeWidth="2" />
            <text x="500" y="80" textAnchor="middle" className="fill-black-700 font-semibold">1958 - Curry</text>
            <text x="500" y="95" textAnchor="middle" className="fill-black-600 text-xs">Logic ↔ Computation</text>
            
            {/* Howard */}
            <circle cx="650" cy="150" r="10" fill="#31afd4" />
            <line x1="650" y1="150" x2="650" y2="200" stroke="#31afd4" strokeWidth="2" />
            <rect x="570" y="210" width="160" height="40" rx="8" fill="white" stroke="#31afd4" strokeWidth="2" />
            <text x="650" y="230" textAnchor="middle" className="fill-black-700 font-semibold">1969 - Howard</text>
            <text x="650" y="245" textAnchor="middle" className="fill-black-600 text-xs">Curry-Howard Correspondence</text>
          </g>
        </svg>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200 mb-6">
          The notion of <span className="text-cordovan font-semibold">types as a formal idea</span> dates back over a century. In the early 1900s, logicians such as <span className="text-cordovan-600 font-semibold">Bertrand Russell</span> introduced a "theory of types" to resolve logical paradoxes in set theory. Russell's ramified type theory stratified mathematical objects into hierarchical types to avoid self-referential sets.
        </p>
        
        <div className="bg-white dark:bg-black-800 rounded-xl p-6 my-6 border-l-4 border-risd-blue">
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">Church's Lambda Calculus (1940)</h3>
          <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200 mb-4">
            <span className="text-risd-blue font-semibold">Alonzo Church</span> built on these ideas, publishing "A Formulation of the Simple Theory of Types" in 1940. His system, based on the <span className="text-risd-blue-600 font-semibold">λ-calculus</span>, provided a rigorous way to avoid paradoxes by assigning every term a type and forbidding ill-formed expressions.
          </p>
          <div className="bg-gray-100 dark:bg-black-900 rounded-lg p-4 font-mono text-sm">
            <span className="text-risd-blue">λx:</span><span className="text-rose-custom">Type</span>. <span className="text-black-600 dark:text-gray-400">expression</span>
          </div>
        </div>

        <div className="bg-white dark:bg-black-800 rounded-xl p-6 my-6 border-l-4 border-rose-custom">
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">The Curry-Howard Correspondence</h3>
          <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200 mb-4">
            In 1958, <span className="text-rose-custom font-semibold">Haskell Curry</span> observed an intriguing parallel: proving a logical theorem and running a computer program were analogous activities. <span className="text-pacific-cyan font-semibold">William Howard</span> formalized this in 1969, establishing that:
          </p>
          <ul className="space-y-2 text-lg text-black-800 dark:text-gray-200 list-disc pl-8">
            <li>A <span className="text-risd-blue font-semibold">type</span> can be viewed as a <span className="text-cordovan font-semibold">proposition</span></li>
            <li>A <span className="text-pacific-cyan font-semibold">program</span> of that type is a <span className="text-rose-custom font-semibold">proof</span> of that proposition</li>
            <li><span className="text-risd-blue-600 font-semibold">Type checking</span> is <span className="text-cordovan-600 font-semibold">proof verification</span></li>
          </ul>
        </div>

        <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200">
          By the 1980s, this idea had firmly taken root, revealing "a deep structural connection between <span className="text-risd-blue font-semibold">languages and logics</span>, between <span className="text-pacific-cyan font-semibold">programming and proving</span>."
        </p>
      </div>
    </div>
  );
}

function ProgrammingLanguages() {
  return (
    <div className="bg-risd-blue-50 dark:bg-black-900 rounded-2xl shadow-sm border border-gray-200 dark:border-black-800 p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">From Mathematical Logic to Programming Languages</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200 mb-6">
          In the latter half of the 20th century, the insights of <span className="text-risd-blue font-semibold">mathematical type theory</span> began to permeate programming. Researchers realized that the same discipline which prevented <span className="text-rose-custom font-semibold">logical contradictions</span> could prevent certain <span className="text-cordovan font-semibold">software bugs</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-risd-blue-100 dark:bg-risd-blue-900/30 rounded-xl p-6 border border-risd-blue-200 dark:border-risd-blue-800">
            <h3 className="text-lg font-bold text-black dark:text-white mb-3">Proof Assistants</h3>
            <p className="text-base text-black-700 dark:text-gray-300 mb-3">
              Languages like <span className="text-risd-blue font-semibold">Coq</span>, <span className="text-risd-blue-600 font-semibold">Agda</span>, and <span className="text-risd-blue-700 font-semibold">Idris</span> allow programmers to write code and proofs interchangeably.
            </p>
            <code className="text-sm bg-white dark:bg-black-800 px-3 py-1 rounded-lg font-mono inline-block">
              <span className="text-pacific-cyan">Program</span> = <span className="text-rose-custom">Proof</span>
            </code>
          </div>

          <div className="bg-pacific-cyan-100 dark:bg-pacific-cyan-900/30 rounded-xl p-6 border border-pacific-cyan-200 dark:border-pacific-cyan-800">
            <h3 className="text-lg font-bold text-black dark:text-white mb-3">TypeScript's Rise</h3>
            <p className="text-base text-black-700 dark:text-gray-300 mb-3">
              Adding <span className="text-pacific-cyan font-semibold">optional types</span> to JavaScript while maintaining full compatibility with <span className="text-cordovan font-semibold">dynamic code</span>.
            </p>
            <code className="text-sm bg-white dark:bg-black-800 px-3 py-1 rounded-lg font-mono inline-block">
              <span className="text-cordovan">Dynamic</span> + <span className="text-pacific-cyan">Static</span>
            </code>
          </div>
        </div>

        <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200">
          The rapid rise of <span className="text-pacific-cyan font-semibold">TypeScript</span> exemplifies how the lessons of type theory – that adding type annotations can <span className="text-pacific-cyan-600 font-semibold">prevent bugs</span> – have been embraced in practice.
        </p>
      </div>
    </div>
  );
}

function CognitiveTyping() {
  return (
    <div className="bg-rose-custom-50 dark:bg-black-900 rounded-2xl shadow-sm border border-gray-200 dark:border-black-800 p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">The Cognitive Act of Typing: Human Intuition and Modeling</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200 mb-6">
          Why do we humans assign <span className="text-rose-custom font-semibold">types</span> in the first place when building software? On a fundamental level, typing is an act of <span className="text-risd-blue font-semibold">classification</span>, and classification is something our minds do <span className="text-cordovan font-semibold">naturally</span>. Philosophers since <span className="text-risd-blue-600 font-semibold">Aristotle</span> have noted our tendency to categorize the world into kinds.
        </p>

        <div className="bg-white dark:bg-black-800 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold text-black dark:text-white mb-4">Aristotle's Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Substance", color: "violet" },
              { name: "Quantity", color: "amber" },
              { name: "Quality", color: "emerald" },
              { name: "Relation", color: "rose" }
            ].map((category) => (
              <div key={category.name} className={`bg-gradient-to-br from-${category.color}-100 to-${category.color}-200 dark:from-${category.color}-900/30 dark:to-${category.color}-800/30 rounded-lg p-3 text-center border border-${category.color}-300 dark:border-${category.color}-700`}>
                <span className={`text-sm font-semibold text-${category.color}-700 dark:text-${category.color}-300`}>{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200 mb-6">
          In software design, this cognitive process manifests when we map <span className="text-pacific-cyan font-semibold">real-world domains</span> into code. A classic teaching in object-oriented design is to "model real-world objects" as <span className="text-risd-blue font-semibold">classes or types</span> in our program.
        </p>

        <blockquote className="border-l-4 border-rose-custom text-xl italic pl-6 my-6 bg-white dark:bg-black-800 rounded-r-xl py-4">
          <p className="text-black-800 dark:text-gray-200">
            "<span className="text-rose-custom">Types just are</span>, because <span className="text-cordovan">bicycles just are</span>" – when beginners first use types, they often take them for granted as direct representations of real things.
          </p>
        </blockquote>

        <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200 mt-6">
          This act of typing serves several human purposes: it <span className="text-risd-blue font-semibold">clarifies our thinking</span>, <span className="text-pacific-cyan font-semibold">aids communication</span>, and helps us answer the fundamental question: "<span className="text-rose-custom font-semibold">What is this thing?</span>"
        </p>
      </div>
    </div>
  );
}

function StaticVsDynamic() {
  return (
    <div className="bg-white dark:bg-black-900 rounded-2xl shadow-sm border border-gray-200 dark:border-black-800 p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">Static vs Dynamic Typing: Different Philosophies of Design</h2>
      
      {/* Comparison Visualization */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Static Typing */}
        <div className="bg-risd-blue-50 dark:bg-risd-blue-900/20 rounded-xl p-6 border-2 border-risd-blue-300 dark:border-risd-blue-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-risd-blue rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">Static Typing</h3>
          </div>
          
          <ul className="space-y-2 text-base text-black-700 dark:text-gray-300 mb-4">
            <li>• <span className="text-risd-blue font-semibold">Compile-time</span> checking</li>
            <li>• <span className="text-risd-blue-600 font-semibold">Early</span> error detection</li>
            <li>• <span className="text-risd-blue-700 font-semibold">Better</span> IDE support</li>
            <li>• <span className="text-risd-blue-800 font-semibold">Self-documenting</span> code</li>
          </ul>

          <div className="bg-white dark:bg-black-800 rounded-lg p-3">
            <code className="text-sm font-mono">
              <span className="text-risd-blue">function</span> <span className="text-risd-blue-600">add</span>(<span className="text-rose-custom">a: number</span>, <span className="text-rose-custom">b: number</span>): <span className="text-pacific-cyan">number</span>
            </code>
          </div>

          <p className="text-sm text-black-600 dark:text-gray-400 mt-4 italic">
            "Let's impose a <span className="text-risd-blue font-semibold">clear structure</span> beforehand"
          </p>
        </div>

        {/* Dynamic Typing */}
        <div className="bg-cordovan-50 dark:bg-cordovan-900/20 rounded-xl p-6 border-2 border-cordovan-300 dark:border-cordovan-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-cordovan rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">Dynamic Typing</h3>
          </div>
          
          <ul className="space-y-2 text-base text-black-700 dark:text-gray-300 mb-4">
            <li>• <span className="text-cordovan font-semibold">Rapid</span> prototyping</li>
            <li>• <span className="text-cordovan-600 font-semibold">Maximum</span> flexibility</li>
            <li>• <span className="text-cordovan-700 font-semibold">Less</span> boilerplate</li>
            <li>• <span className="text-cordovan-800 font-semibold">Duck</span> typing</li>
          </ul>

          <div className="bg-white dark:bg-black-800 rounded-lg p-3">
            <code className="text-sm font-mono">
              <span className="text-cordovan">def</span> <span className="text-cordovan-600">add</span>(a, b): <span className="text-pacific-cyan">return</span> a + b
            </code>
          </div>

          <p className="text-sm text-black-600 dark:text-gray-400 mt-4 italic">
            "Let's allow <span className="text-cordovan font-semibold">maximum flexibility</span> and sort things out"
          </p>
        </div>
      </div>

      {/* The Middle Path */}
      <div className="bg-pacific-cyan-50 dark:bg-pacific-cyan-900/20 rounded-xl p-6 mt-8">
        <h3 className="text-xl font-bold text-black dark:text-white mb-4 text-center">The Middle Path: Gradual Typing</h3>
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-pacific-cyan rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
              <span className="text-white font-bold text-xl">TS</span>
            </div>
            <span className="text-sm text-black-600 dark:text-gray-400 font-semibold">TypeScript</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cordovan rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
              <span className="text-white font-bold text-xl">Py</span>
            </div>
            <span className="text-sm text-black-600 dark:text-gray-400 font-semibold">Python + Mypy</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-custom rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
              <span className="text-white font-bold text-xl">Rb</span>
            </div>
            <span className="text-sm text-black-600 dark:text-gray-400 font-semibold">Ruby + Sorbet</span>
          </div>
        </div>
        <p className="text-center text-black-700 dark:text-gray-300 mt-4 font-medium">
          "The smartest choice lies in <span className="text-risd-blue font-bold">combining both</span> approaches"
        </p>
      </div>
    </div>
  );
}

function ManagingComplexity() {
  return (
    <div className="bg-pacific-cyan-50 dark:bg-black-900 rounded-2xl shadow-sm border border-gray-200 dark:border-black-800 p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">Types as Tools for Managing Complexity</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {[
          {
            title: "Clarity and Documentation",
            icon: "📝",
            description: "Types act as compiler-enforced documentation",
            example: "function processOrder(order: Order): Price",
            color: "violet"
          },
          {
            title: "Correctness and Constraint",
            icon: "🛡️",
            description: "Make illegal states unrepresentable",
            example: "type State = 'pending' | 'approved' | 'rejected'",
            color: "emerald"
          },
          {
            title: "Modularity and Abstraction",
            icon: "🧩",
            description: "Hide implementation behind type interfaces",
            example: "interface Graph<T> { addNode(node: T): void }",
            color: "amber"
          },
          {
            title: "Expressiveness and Modeling",
            icon: "🎨",
            description: "Capture nuanced domain relationships",
            example: "type NonEmptyList<T> = [T, ...T[]]",
            color: "rose"
          }
        ].map((item) => (
          <div key={item.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:scale-105 border border-stone-200 dark:border-slate-700">
            <div className="flex items-start gap-4">
              <span className="text-3xl">{item.icon}</span>
              <div className="flex-1">
                <h3 className={`text-lg font-bold text-slate-900 dark:text-white mb-2`}>
                  <span className={`text-${item.color}-600 dark:text-${item.color}-400`}>{item.title.split(' ')[0]}</span> {item.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{item.description}</p>
                <code className={`text-xs bg-stone-100 dark:bg-slate-900 px-2 py-1 rounded-lg font-mono text-${item.color}-600 dark:text-${item.color}-400`}>
                  {item.example}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>

      <blockquote className="border-l-4 border-cyan-500 text-xl italic pl-6 my-6 bg-white dark:bg-slate-800 rounded-r-xl py-4">
        <p className="text-slate-800 dark:text-slate-200">
          "Use your <span className="text-cyan-600 dark:text-cyan-400 font-semibold">type system</span>; write <span className="text-emerald-600 dark:text-emerald-400 font-semibold">less code</span>. By making the machine enforce certain truths, we write fewer tests for trivial conditions."
        </p>
      </blockquote>
    </div>
  );
}

function TruthAndCreativity() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-stone-200 dark:border-slate-800 p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">Types, Truth, and Creativity: Do Types Reflect Reality or Restrict It?</h2>
      
      <div className="prose prose-lg max-w-none">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
              Types as <span className="text-indigo-600 dark:text-indigo-400">Truth-Seeking</span>
            </h3>
            <ul className="space-y-2 text-base text-slate-700 dark:text-slate-300">
              <li>• Types state <span className="text-violet-600 dark:text-violet-400 font-semibold">truths</span> about programs</li>
              <li>• Well-typed programs <span className="text-indigo-600 dark:text-indigo-400 font-semibold">cannot go wrong</span></li>
              <li>• Force <span className="text-purple-600 dark:text-purple-400 font-semibold">articulation</span> of assumptions</li>
              <li>• Illuminate <span className="text-blue-600 dark:text-blue-400 font-semibold">design flaws</span></li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-xl p-6 border border-rose-200 dark:border-rose-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
              Types as <span className="text-rose-600 dark:text-rose-400">Creative Constraints</span>
            </h3>
            <ul className="space-y-2 text-base text-slate-700 dark:text-slate-300">
              <li>• Constraints can <span className="text-rose-600 dark:text-rose-400 font-semibold">enhance creativity</span></li>
              <li>• Like sonnets force <span className="text-pink-600 dark:text-pink-400 font-semibold">poetic ingenuity</span></li>
              <li>• Type puzzles lead to <span className="text-red-600 dark:text-red-400 font-semibold">elegant solutions</span></li>
              <li>• Framework enables <span className="text-orange-600 dark:text-orange-400 font-semibold">ambitious engineering</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-violet-50 via-rose-50 to-amber-50 dark:from-violet-900/20 via-rose-900/20 dark:to-amber-900/20 rounded-xl p-6 my-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Philosophical Question</h3>
          <p className="text-lg leading-[180%] text-slate-800 dark:text-slate-200 mb-4">
            Are types <span className="text-violet-600 dark:text-violet-400 font-semibold">discovering</span> the truth of the program, or <span className="text-rose-600 dark:text-rose-400 font-semibold">imposing</span> a truth upon it? This echoes an age-old question in philosophy about whether our categories <span className="text-amber-600 dark:text-amber-400 font-semibold">reflect reality</span> or <span className="text-emerald-600 dark:text-emerald-400 font-semibold">constrain our view</span> of it.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-violet-200 dark:border-violet-700">
              <h4 className="font-bold text-violet-600 dark:text-violet-400 mb-2">Realist View</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Types correspond to <span className="text-indigo-600 dark:text-indigo-400 font-semibold">real distinctions</span> in the problem domain
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-2">Pragmatist View</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Types are our <span className="text-pink-600 dark:text-pink-400 font-semibold">chosen viewpoint</span>, one of many possible models
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg leading-[180%] text-slate-800 dark:text-slate-200">
          Ultimately, typing is not an end in itself but a means to an end – the end being <span className="text-emerald-600 dark:text-emerald-400 font-semibold">reliable</span>, <span className="text-cyan-600 dark:text-cyan-400 font-semibold">understandable</span> software. The philosophy of types sits at an intersection: it is about <span className="text-violet-600 dark:text-violet-400 font-semibold">logic and mathematics</span> on one side, and <span className="text-rose-600 dark:text-rose-400 font-semibold">human cognitive habits</span> and practical trade-offs on the other.
        </p>
      </div>
    </div>
  );
}

function Conclusion() {
  return (
    <div className="bg-gray-50 dark:bg-black-900 rounded-2xl shadow-sm border border-gray-200 dark:border-black-800 p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8">Conclusion</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200 mb-6">
          Type theory began as a quest to bring <span className="text-risd-blue font-semibold">order to the foundations</span> of mathematics; today, its legacy lives on in the type systems that bring order to <span className="text-pacific-cyan font-semibold">large software systems</span>. We have seen how giants like <span className="text-risd-blue-600 font-semibold">Church</span> and <span className="text-rose-custom font-semibold">Curry</span> contributed ideas that bridge logic and programming.
        </p>

        <div className="bg-risd-blue rounded-xl p-8 my-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-pacific-cyan-200">Types as Hypothesis</h4>
              <p className="text-sm opacity-90">
                A type can be thought of as a hypothesis about the nature of things – a hypothesis the compiler will fiercely test.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-rose-custom-200">Types as Tools</h4>
              <p className="text-sm opacity-90">
                They help us carve nature at its joints and manage the immense complexity of modern software.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-cordovan-200">Types as Communication</h4>
              <p className="text-sm opacity-90">
                They act as contracts, documentation, constraints, and enablers.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-pacific-cyan-300">Types as Philosophy</h4>
              <p className="text-sm opacity-90">
                They prompt us to ask: "What am I really assuming here? What are the essential properties?"
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg leading-[180%] text-black-800 dark:text-gray-200 mb-6">
          Used thoughtfully, types become almost <span className="text-risd-blue font-semibold">philosophical instruments</span>. Rather than limit human creativity, they <span className="text-rose-custom font-semibold">channel it</span> into more productive forms, where the brilliant idea in our mind has a <span className="text-pacific-cyan font-semibold">clear and correct</span> realization in code.
        </p>

        <blockquote className="border-l-4 border-pacific-cyan text-xl italic pl-6 my-6 bg-white dark:bg-black-800 rounded-r-xl py-4">
          <p className="text-black-800 dark:text-gray-200">
            "By carefully reasoning about the <span className="text-risd-blue font-semibold">categories of things</span>, we bring our creations a step closer to <span className="text-pacific-cyan font-semibold">soundness and clarity</span>. Whether in the lofty realms of mathematical logic or the pragmatic world of software, that is a pursuit <span className="text-rose-custom font-semibold">well worth the effort</span>."
          </p>
        </blockquote>

        <div className="bg-pacific-cyan-50 dark:bg-pacific-cyan-900/30 rounded-xl p-6 mt-8">
          <p className="text-center text-black-700 dark:text-gray-300 font-medium text-lg">
            The negotiation between <span className="text-risd-blue font-bold">imagination</span> and <span className="text-rose-custom font-bold">discipline</span> continues to evolve as we seek new ways to understand and mold the complex systems around us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TypesPhilosophy