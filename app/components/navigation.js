'use client'
import { Link as ScrollLink } from 'react-scroll';
import Main from './mainPage/main';
import Page from '../about/page'
import Portfolio from '../portfolio/page'
import Contact from '../contact/page';

const Navigation = () => {
  return (
    <div className="fixed top-0 right-0 p-4 w-full h-fit">
      <ScrollLink to="section1" spy={true} smooth={true} duration={500}>
        <Main/>
      </ScrollLink>
      <ScrollLink to="section2" spy={true} smooth={true} duration={500}>
        <Page/>
      </ScrollLink>
      <ScrollLink to="section3" spy={true} smooth={true} duration={500}>
        <Portfolio/>
      </ScrollLink>
      <ScrollLink to="section4" spy={true} smooth={true} duration={500}>
        <Contact/>
      </ScrollLink>
    </div>
  );
};

export default Navigation;