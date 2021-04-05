import React from 'react'
import { useRouter } from 'next/router'
import Form from 'react-bootstrap/Form'

const AppWithRouter = (props) => {
    const router = useRouter()
    return <App {...props} router={router} />
  }

const Menu = (props) => {
    const router = useRouter()
    
    // console.log("props.placeholder = ", props.placeholder)
    return (
        <Form.Control 
            size="sm" as="select" 
            defaultValue ={props.placeholder}
            onChange={(e) => {
                router.push({
                    pathname: "/examples/useRouterInClass",
                    query: {
                    wp: e.target.value,
                    line: "15L"
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
            <Menu placeholder = {this.state.wp}></Menu>
            <div>
                Hello World! WP = {this.state.wp}, LINE = {this.state.line}
            </div>
            </>
        )
    }
}

export default AppWithRouter