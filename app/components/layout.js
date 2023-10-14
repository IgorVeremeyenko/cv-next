import Sidebar from './menu/sidebar'
import Hamburger from './menu/hamburger'
export default function Layout({ children }) {  
    return (
      <div>
        <Hamburger />
        <main>{children}</main>
      </div>
    )
  }