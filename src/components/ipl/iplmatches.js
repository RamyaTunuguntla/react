import Data from "./ipldata";
import "./iplmatch.css"
import Footer from "./footer";
import CustomProgressBar from "./progressbar.js";

const IplItem=()=>{
    // const {title,source,Trophy}=Data

     const calculatePercentage=(input)=>{
        const base = 17;
        let percentage = (input / base) * 100
        return percentage;
     }
    return(

        <>
        <div className="navbar">
           <h2>Home</h2>
           <h2>About</h2>
           <h2>Info</h2>
        </div>
        <div className="grid">
            
        {Data.map((eachTeam)=>(
            
            <div className="card">
                    <h3>{eachTeam.title}</h3>
                  <img src={eachTeam.source} alt={eachTeam.title} width={200} height={200} />
                   
                    <h3>Trophies: {eachTeam.Trophy}</h3>
              <CustomProgressBar scale={calculatePercentage(eachTeam.Trophy)}></CustomProgressBar>   
                      
            </div>
            
    
        ))}
            </div>

        </>
    )
}
export default IplItem;