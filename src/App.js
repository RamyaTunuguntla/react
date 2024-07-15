import CustomList from "./components/custom-list";
// import Footer from "./components/footer";
import Heading1 from "./components/headings";
import { Heading2 } from "./components/headings";
import { Heading3 } from "./components/headings";
// import { Heading4 } from "./components/headings";
// import { Heading5 } from "./components/headings";


    // const fruits =["apple","banana","grapes","avacado"];
    // const students = ["ram", "shiv","druv","gosh"];
    // const vegetables = ["potato","brinjal","ladiesfinger"];
    // const scientist = ["abdul kalam","Albert","marie curie","issac newton"];
    // const teams = ["rcb","csk","rch","kkr"]; 
    
    const Item =["Paneer Biryani"];
    const Ingredients = ["300g paneer", 
      "cut into 1-inch cubes",
      "1/2 red bell pepper",
      "cut into 1-inch cubes",
      "1/2 small red onion", 
      "cut into 1-inch cubes",
      "2 tsp biryani masala",
      "2 tsp ginger paste",
      "2 tsp garlic paste",
      "2 tsp salt",
      "2 tsp Kashmiri red chili powder",
      "1/3 tsp turmeric powder",
      "1/4 cup fresh mint leaves, chopped",
      "1 tbsp lemon juice",
      "3/4 cup plain yogurt"];
    
    const Instructions = ["Marinate the Paneer: In a large bowl, combine all the ingredients for marinating the paneer. Mix well and let it marinate for 30-60 minutes.",
      "Make Crispy Fried Onions: In a pan, heat 4 tbsp ghee over medium heat. Add the sliced onions and fry until golden brown and crispy. Remove the fried onions and set aside.",
      "Cook the Rice: In a pot, bring 6 cups of water to a boil. Add the whole spices (cumin seeds, bay leaves, star anise, cardamom, and cloves) and 1.5 tbsp salt. Add the soaked basmati rice and cook for 3-4 minutes until partially cooked. Drain the rice and set aside.",
      "Assemble the Biryani: In a large pot or biryani pot, layer half the partially cooked rice. Top it with the marinated paneer mixture. Sprinkle some of the fried onions, chopped cilantro, and a pinch of biryani masala. Repeat the layers with the remaining rice, paneer, fried onions, cilantro, and biryani masala.",
      "Dum Cooking: In a small bowl, mix the saffron and warm milk. Pour this saffron milk over the biryani. Drizzle 2 tsp ghee over the top. Cover the pot tightly with a lid or seal it with dough. Cook the biryani on dum (low heat) for 15-20 minutes until the rice is fully cooked.",
      "Garnish and Serve: Fluff the biryani with a fork. Garnish with the remaining fried onions and chopped cilantro. Serve hot with raita or any Indian curry of your choice."]


   const App =() =>{
      return(
        <div>
    
    <Heading1/>
    {/* <CustomList list={Item}/> */}
    <Heading2/>
    <CustomList list={Ingredients}/>
    <Heading3/>
    <CustomList list={Instructions}/>
    {/* <Heading4/>   
    <CustomList list={scientist}/>
    <Heading5/>
    <CustomList list={teams}/> */}

    {/* <Footer></Footer> */}

      </div>
      )
    }

    export default App;

    
  