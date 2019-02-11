import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {getUser} from "./action";

class loginForm extends React.Component {
    constructor(){
        super();
        this.state = {
            username: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div>
                <input type='text' name='username' name='username' onChange={this.handleChange}/>
                <input type='submit' onClick={this.props.getUser(this.state)}/>




            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return(
        bindActionCreators({
            getUser: getUser
        }, dispatch)
    )
}
export default connect(matchDispatchToProps) (loginForm);