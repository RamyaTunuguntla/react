import CustomList from "./components/custom-list";
// import Footer from "./components/footer";
import Heading1 from "./components/headings";
import { Heading2 } from "./components/headings";
import { Heading3 } from "./components/headings";
import { Heading4 } from "./components/headings";
import { Heading5 } from "./components/headings";

    const fruits =["apple","banana","grapes","avacado"];
    const students = ["ram", "shiv","druv","gosh"];
    const vegetables = ["potato","brinjal","ladiesfinger"];
    const scientist = ["abdul kalam","Albert","marie curie","issac newton"];
    const teams = ["rcb","csk","rch","kkr"]; 
    const App =() =>{
      return(
        <div>
    
    <Heading1 title ={"fruits"}/>
    <CustomList list={fruits}/>
    <Heading2 title = {"Students"}></Heading2>
    <CustomList list={students}/>
    <Heading3 title ={"Vegetables"}></Heading3>
    <CustomList list={vegetables}/>
    <Heading4 title ={"Scientists"}></Heading4>    
    <CustomList list={scientist}/>
    <Heading5 title ={"Iplteams"}></Heading5>
    <CustomList list={teams}/>


    {/* <Footer></Footer> */}

      </div>
      )
    }

    export default App;

    
  