import { Component } from "react";

class ClassBasedComponent extends Component{

    //State
    state = {
        showText : false,
        changeColor : false,
        count: 0,
        changeCountStyle: false,
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
            changeColor: !this.state.changeColor,
        });
    }

      handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

    //componentDidUpate
    // componentDidUpdate(prevProps,prevState){
    //     console.log(prevProps,prevState);
    // }
    componentDidUpdate(prevProps,prevState){
        if ( prevState &&prevState.count !== this.state.count &&this.state.count === 10
        ) {
            this.setState({
            ...this.state,
            changeCountStyle: true,
            });
        }
    }


    
    render(){
        const{showText,changeColor, count, changeCountStyle }=this.state
        console.log(changeCountStyle);
        return(
            <div>
                {showText? <h4 style={{color:changeColor? "red": "black"}}>abcdefghijklmnopqrstuvwxyz</h4> : null}
                <button onClick={this.handleClick}>Toggle Text</button>
                <button onClick={this.handleCount}>Increase Count Value</button>
        <h3
          style={{
            color: changeCountStyle ? "blue" : "yellow",
            fontSize: changeCountStyle ? "30px" : "12px",
          }}
        >
          Count is {count}
        </h3>
            </div>
        );
    }
}
export default ClassBasedComponent;