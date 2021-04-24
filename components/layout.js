import Nav from 'react-bootstrap/Nav'
import styles from './layout.module.css'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useRouter } from 'next/router'

function NavBar(){
    const router = useRouter()
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">NextJS Tutorial</Navbar.Brand>
            <Nav className="mr-auto">
                {/* <Nav.Link onClick = {() => router.push("/about")}>About</Nav.Link> */}
                <NavDropdown title="Examples" id="basic-nav-dropdown"> 
                    <NavDropdown.Item onClick = {() => router.push("/examples/useRouterInClass")}>useRouter</NavDropdown.Item>
                    <NavDropdown.Item onClick = {() => router.push("/redux-toolkit")}>Redux Toolkit</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">TBD 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Tbd 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Tbd 4</NavDropdown.Item>
                </NavDropdown>                
            </Nav>

        </Navbar>   
        </>
    )
}

export default function Layout({ children }) {
    return (
            <>
            <NavBar></NavBar>
            <div className={styles.container}>
                {children}
            </div>
            </>
        )
}