const { Component } = require("react");

class Counter extends Component{
    state={
        count:0,       
    };
    incrementHandler = () => {
        this.setState(
        {
            count: this.state.count + 1,
        },
        () => {}
    );
    };
    decrementHandler = () => {
        this.setState(
            {
                count: this.state.count - 1,
            },
            () => {}
        );
    };
    resetHandler = () => {
        this.setState(
            {
                count: 0,
            });
    };
    
    render(){
        return(
          <>
          <center>
          <h1>My Counter</h1>
          <h1>{this.state.count}</h1>
          <button onClick={this.incrementHandler}style={{backgroundColor:"orange", width:"200px", height:"100px", color:"brown", margin:"20px", borderRadius:"20px"}}>Increment</button><br></br>
          <button onClick={this.decrementHandler}style={{backgroundColor:"orange", width:"200px", height:"100px", color:"brown", margin:"20px", borderRadius:"20px"}}>Decrement</button><br></br>
          <button onClick={this.resetHandler}style={{backgroundColor:"orange", width:"200px", height:"100px", color:"brown", margin:"20px", borderRadius:"20px"}}>Reset</button>
          </center>
          </>  
        )
    }
}
export default Counter;