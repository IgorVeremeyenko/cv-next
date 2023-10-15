import Image from 'next/image'
import Main from './components/mainPage/main'
import Navigation from './components/navigation'
import About from './about/page'
import Portfolio from './portfolio/page'
import Contact from './contact/page'
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../config/theme'

export default function Home() {
  return (
    <ChakraProvider>
      <div className='text-white'>
        <section id="section1" className="h-screen bg-myColour">
          <Main />
        </section>
        <section id="section2" className="h-fit bg-myColour">
          <About />
        </section>
        <section id="section3" className="h-full bg-myColour">
          <Portfolio />
        </section>
        <section id="section4" className="xl:h-full 2xl:h-full bg-myColour md:h-full lg:h-full">
          <Contact />
        </section>
      </div>
    </ChakraProvider>

  )
}
