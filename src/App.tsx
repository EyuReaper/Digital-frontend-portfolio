import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className = "container ">
      <Header />
      <main className="w-full max-w-4xl px-4">
      <Hero />
      <div className='projects' >
      <Projects />
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
