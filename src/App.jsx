import Header from './components/layout/Header'
import Hero from './components/section/Hero'
import About from './components/section/About'
import Announcements from './components/section/Announcements'
import Activities from './components/section/Activities'
import DrinkAndBuy from './components/section/DrinkAndBuy'
import Experience from './components/section/Experience'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
      </main>
      <Announcements />
      <About />
      <Activities />
      <DrinkAndBuy />
      <Experience />
      <Footer />
    </>
  )
}

export default App
