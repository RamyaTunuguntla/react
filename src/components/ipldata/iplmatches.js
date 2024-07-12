import Ipldata from "./ipldata";
import "./iplmatch.css"
const IplItem=()=>{
    const {title,source,Trophy}=Ipldata
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
                    <img src={eachIpldata.source}  width={200} height={200}/>
                   
                    <h3>Trophies: {eachIpldata.Trophy}</h3>
                
            </div>
            
    
        ))}
            </div>

        </>
    )
}
export default IplItem;