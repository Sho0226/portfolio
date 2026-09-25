import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Works from './components/Works';

function App() {
  return (
    <div className="bg-white text-black dark:bg-neutral-950 dark:text-neutral-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-black focus:px-4 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-black"
      >
        本文へスキップ
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Timeline />
        <Works />
        <Blog />
      </main>
      <Contact />
    </div>
  );
}

export default App;
