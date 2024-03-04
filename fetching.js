
function App() {

    const [data, setData] = useState(null)
    const api = "https://.blabalabla/user"; 


   const fetchData = () => {
   
    fetch(api) //is a promise. 
        .then((data) => res.json()) //FETCH the APi and then : (persel)
        .then((data) => console.log(data)) // the cshow me the text. Console log everything.INstead of consoel log we can use state. (defined l4 )SetDATA(data) TRIGGER A FLAG so has to be : 
        .then((data =>stateData))
        .catch() //if not successful. //NB if something is wrong somewhere, it goes to the catch auto. 
};

fetchData(); //if you do so it will infinite loop (read like a computer)
//so put this in a use effect. Whenever i'm calling a fucntion who call a setter function ---- put it insiede use effect. SO FECTH DATA ALONE IS A MISTAKE. Do it like this : 

//2ND METHOD
//lets recreate a fetch data function. YOU HAVE TO LEARN THIS ONE. HAs to be a CARD. 
const fetchData2 = async () => { //gonna be async. Attention ASYNCHRONISE ONLY WORKS with Promises. ONly promises need the "await"
    try {
        const res = await fetch(pokeApi); //here you deckare a variable. It will be you want tp wait. "try this "
        const data = await res.json(); //here will be wait until you get a respons. 
        setPokemon(data); // you set it as a data. After this, you can map over data and do something with it. 
        //input field have always 2. VALUE and ONCHANGE

    } catch (err) {
        console.log(err); 
    }
}; 


useEffect(() => { /* use effect is a hook who runs only one time. */
    fetchData(); 
    console.log(data); 
}, []); // no you could display something in return. You can display every informations from a huge list data. You can pass everything you want. 


return (
    <div>
        <h1>React + Fetch</h1>
        {data.map((user) => ( /* map over array data and creating a div xwith the information above for every user. */
        <div key={user.id} style={}>
            <h1>name : {user.name}</h1>
            <p>phone : {user.phone}</p>
            <p>emai : {user.email}</p> {/* now have fun*/}
        </div>
    </div>
)
}

export default App; 


create const [userInput, setuserInput]




//then in retrun make an input field. 
<input type: "texte" value={userInput} onChange= {(e)}> </input>

create a const fetecht data for hackinf? 