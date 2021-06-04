import React from 'react';


class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(d){
        this.setState({value: d.target.value});
        console.log(d);
    }
    handleSubmit(event){
        alert('A name  was submitted '+ this.state.value);
        event.preventDefault();
        console.log('sdsds');
    }
    render(){
        return(
            
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Name:
                    <input type = "text" value = {this.state.value} 
                    onChange = {e => this.handleChange(e)}/>

                </label>
                <input type= "submit" value = "Submit"/>
            </form>
        )
    }
    }
export default MyForm;