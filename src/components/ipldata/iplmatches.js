import Ipldata from "./ipldata";

const IplItem=()=>{
    const {title,source,Trophy}=Ipldata
    return(

        <>

        {Ipldata.map((eachIpldata)=>(
            <center><div style={{border:"2px dashed black", color:"red",padding:"20px" ,margin:"20px 400px",background:"bisque"}}>
                    <h3>{eachIpldata.title}</h3>
                    <img src={eachIpldata.source}  width={200} height={200}/>
                   
                    <h3>Trophies: {eachIpldata.Trophy}</h3>
                
            </div></center>
        ))}
        </>
    )
}
export default IplItem;