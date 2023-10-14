import Image from 'next/image'
import Main from './components/mainPage/main'
import Navigation from './components/navigation'
import About from './about/page'
import Portfolio from './portfolio/page'
import Contact from './contact/page'

export default function Home() { 
  return (
    <div>
      <section id="section1" className="h-screen bg-gray-100">
        <Main/>
      </section>
      <section id="section2" className="h-fit bg-blue-100">
        <About/>
      </section>
      <section id="section3" className="h-full bg-green-100">
        <Portfolio/>
      </section>
      <section id="section4" className="h-screen bg-green-100 md:h-full lg:h-screen">
        <Contact/>
      </section>
    </div>
  )
}
