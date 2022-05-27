//import "./Nav.scss";
import Link from 'next/link'

const Nav = () => {
    return (
        <nav 
            style={{
                
            }}
            
        >
        <Link href="/"><a>Home</a></Link>
        <Link href="/appartements"><a>Appartements</a></Link>
        <Link href="/clock"><a>Clock</a></Link>
        <Link href="/fetch"><a>Fetch</a></Link>
        <Link href="/todolist"><a>Todo List</a></Link>
        <Link href="/test"><a>Test</a></Link>
      </nav>)
}

export default Nav;

