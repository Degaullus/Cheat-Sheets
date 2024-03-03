

////////////////////////////////////////////////////////////////////////////////////////
//INSTALL 

npm install react-router-dom



//WRAP <App/> in MAIN. 
<React.StricMode>
 	<BrowserRouter>
    		<App />
 	</BrowserRouter>
</React.StricMode>



// IMPORT in App.js
import{Routes, Route} from "react-router-dom"; 
//REMBER WHERE & WHAT
function App() {
	<div>
		<NavBarComponent/> {/* persist */}
		<Routes>
			<Route path="/" element={LandingPage}/> 
			<Route path="/ContentXy" element={ContentXyComponent}/> 
			<Route path="*" element={ErrorPage}/> 
		</Routes>
	</div>
}


////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONNAL NAVBAR 
//import NAVLINK beacause navlink has an ActiveStyle 
import {NavLink} from "react-router-dom"
//you component
function NavBarComponent(){
	return(
		 <div>
			<nav>
				<NavLink to="/" >Landing page</NavLink>
				<NavLink to="/ContentXy" >ContentXy</NavLink>
			</nav>
		 </div>
	)
}


////////////////////////////////////////////////////////////////////////////////////////
//DYNAMIC ROUTING 
<Routes>
    <Route path="" element={<LandingPage/>}
    <Route path="/AllStudents" element={<AllStudents/>} />         
    <Route path="*" element={<ErrorPage/>}
</Routes>
//Purpose : display a div for every array you get Student API
export default function AllStudents(){
    return(
        <div>

            <div>
                <h1> All Students </h1>
            </div>
            {data && data.students.map( soloStudent => (       
                <div key={soloStudent.id}>                     
                    <h1>{soloStudent.name}</h1>                 
                    <h1>{soloStudent.age}</h1>                 
                </div>                                     
            ))}
        </div>
    );
}
//will show every of them. 
//CREATE A DYNAMIC DIV NOW. Need : dynamic component (with changing conten/path) + option to access it. 
//1) Wrap te solo student (who ist created in a link)
{data && data.students.map( soloStudent => (       
	<div key={soloStudent.id}>
		<Link to="/AllStudents/{soloStudent.id}">  {/* HERE YOU ARE. It give the ID to the Parent all student. SO THE LINK DSTINATION CHANGES EVERYTIME */}                    
			<h1>{soloStudent.name}</h1>                 
			<h1>{soloStudent.age}</h1>
		</Link>                 
	</div>                                     
))}
//AFTER PATH ":ID"
<Routes>
    <Route path="" element={<LandingPage/>}
    <Route path="/AllStudents" element={<AllStudents/>} />
    <Route path="/AllStudents/:id" element={<SoloStudent />} /> {/* HERE YOU ARE */}       
    <Route path="*" element={<ErrorPage/>}
</Routes>
//USE PARAMS. WE STILL NEED to change the content of solo students, based on the entered path.
import {UseParams} from "react-router-dom"; 
//UseParams lets get access to the URL. Acces the placeholder(=param) in the current URL. Allow to extract the dynamic part of the URL. 
export default function SoloStudent(){
	const{id} = useParams(); 
	
	return(
		<div>
			<h1>{id}</h1>
		</div>
	)
}
//the function get access to ID in the URL. Now use it. 
export default function SoloStudent(){

    const {id} = useParams(); //Using Use params to fin ID 

   const selectedStudent = data.students.find( //Using find to find student object ind "data" BASED on ID. parseINt to convert. 
        singleStudent => singleStudent.id === parseInt(id, 10))
    return(
        <div>

            <div>
                <h1>Our student {singleStudent.name} is {singleStudent.age} years old </h1>
            </div>
            
        </div>
    );
}


////////////////////////////////////////////////////////////////////////////////////////
//SWITCH
import {Switch} from "react-router-dom"; 

export default function App() {
	return (
	  <Router>
		<Navbar />
		<Switch>
		  <Route exact path="/" component={Home} />
		  <Route path="/about" component={About} />
		</Switch>
	  </Router>
	);
  }

//GO DEEPER ? 
https://gist.github.com/Webster312/e530ffcb061a2793722e4d9ef4fc81a5
https://www.freecodecamp.org/news/react-router-cheatsheet/


//REACT TAB
//create component Tab
import React from "react";

export default function Tab() {
	const Tabs = () => {

	return (
	<div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li>Tab 1</li>
        <li>Tab 2</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
      </div>
    </div>
  );
};
//import in app.jsx
//USE STATE For dynamic. In tab.jsx
import {UseState} from "react";

const Tabs = () => {
	const[activeTab, setActiveTab] = useState("tab1"); 
}
//Now check if active and add active class. Or remove this. in return. 
<ul className="nav">
<li className={activeTab === "tab1" ? "active" : ""}>Tab 1</li>
<li className={activeTab === "tab2" ? "active" : ""}>Tab 2</li>
<li>Tab 2</li>
</ul>}
//Need to import FirstTab and SecondTab aswell. and put then in OUtlet div BUT WITH CONDITIONNAL.
		<div className="outlet">
			{activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
		</div>





