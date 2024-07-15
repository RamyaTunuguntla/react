import Ipldata from "./ipldata";
import "./iplmatch.css"
import Footer from "./footer";
import CustomProgressBar from "./progressbar";

const IplItem=()=>{
    const {title,source,Trophy}=Ipldata

     const calculatePercentage=(input)=>{
        const base = 17
        let percentage=(input/base)*100
        return percentage
     }
    return(

        <>
        <div className="navbar">
           <h2>Home</h2>
           <h2>About</h2>
           <h2>Info</h2>
        </div>
        <div className="grid">
            
        {Ipldata.map((eachIpldata)=>(
            
            <div className="card">
                    <h3>{eachIpldata.title}</h3>
                    <img src={eachIpldata.source} alt="image" width={200} height={200}/>
                   
                    <h3>Trophies: {eachIpldata.Trophy}</h3>
                    {/* <p className ="card-price">Price: ${Product.price}</p> */}
              <CustomProgressBar scale={calculatePercentage()}></CustomProgressBar>                
            </div>
            
    
        ))}
            </div>

        </>
    )
}
export default IplItem;