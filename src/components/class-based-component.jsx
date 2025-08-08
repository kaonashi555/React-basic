import { Component } from "react";

class ClassBasedComponent extends Component{

    //State
    state = {
        showText : false,
        changeColor : false,
    };


    handleClick = () =>{
        console.log("button clicked");

        const{showText,changeColor}=this.state
        this.setState({
            showText: !showText,
            changeColor: !changeColor,
        });
    }

    //componentDidMount
    componentDidMount(){
        console.log("This is called first time on page load");

        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.chargeColor,
        });
    }



    render(){
        console.log(this.state);

        const{showText,changeColor}=this.state
        return(
            <div>
                {showText? <h4 style={{color:changeColor? "red": "black"}}>Class Based component:- class based components are now used less in modern React development.</h4> : null}
                <button onClick={this.handleClick}>Toggle Text</button>
            </div>
        );
    }
}
export default ClassBasedComponent;