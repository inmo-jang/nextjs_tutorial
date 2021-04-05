import React from 'react'
import { useRouter } from 'next/router'
import Form from 'react-bootstrap/Form'

const AppWithRouter = (props) => {
    const router = useRouter()
    return <App {...props} router={router} />
  }

const Menu = (props) => {
    const router = useRouter()
    
    // console.log("props.defaultWP = ", props.defaultWP)
    return (
        <>
        <Form.Control 
            size="sm" as="select" 
            defaultValue ={props.defaultWP}
            onChange={(e) => {
                router.push({
                    pathname: "/examples/useRouterInClass2",
                    query: {
                    wp: e.target.value,
                    line: props.defaultLine
                    } 
                })
                console.log("e.target.value = ", e.target.value)

            }}
            >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>

        </Form.Control>  
        
        <Form.Control 
            size="sm" as="select" 
            defaultValue ={props.defaultLine}
            onChange={(e) => {
                router.push({
                    pathname: "/examples/useRouterInClass2",
                    query: {
                    wp: props.defaultWP,
                    line: e.target.value
                    } 
                })
                console.log("e.target.value = ", e.target.value)

            }}
            >
        <option>15L</option>
        <option>16L</option>
        <option>17L</option>
        <option>18L</option>

        </Form.Control>     
        </>   
    )
}
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wp: props.router.query.wp,
            line: props.router.query.line
        };
    }

    render() {
        return(
            <>
            <Menu 
                defaultWP = {this.state.wp}
                defaultLine = {this.state.line}
                ></Menu>
            <div>
                Hello World! WP = {this.state.wp}, LINE = {this.state.line}
            </div>
            </>
        )
    }
}

export default AppWithRouter