import Nav from 'react-bootstrap/Nav'
import styles from './layout.module.css'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar(){
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">NextJS Tutorial</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Examples" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">TBD 1</NavDropdown.Item>
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