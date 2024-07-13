// // import ProgressBar from "react-bootstrap/ProgressBar";
import ProgressBar from "react-bootstrap/ProgressBar";

function CustomProgressBar(prop) {
    const { scale } = prop;
    console.log(scale)

    return (
        <div style={{backgroundColor:"green", width:"100px", height:"50px"}} >
      
      <ProgressBar now={scale} />
      </div>);
}

export default CustomProgressBar; 

