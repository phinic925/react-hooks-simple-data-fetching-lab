// create your App component here
import React,{useState,useEffect} from "react";

function App(){
    const[data,setImage] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=> setImage(data))
        setIsLoaded(true);
    

    },[]);
    
    return(
        <>
         {isLoaded ? <img src={data.message} alt="A Random Dog" /> : <p>Loading...</p>}
        </>
    )

}
export default App;
