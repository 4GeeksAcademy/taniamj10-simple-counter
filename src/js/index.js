//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let segundo= 0;
setInterval( ()=> {
    const seis= Math.floor ( (segundo/100000 )%10); 
    const cinco= Math.floor ( (segundo/10000 )%10); 
    const cuatro= Math.floor ( (segundo/1000 )%10); 
    const tres= Math.floor ( (segundo/100 )%10); 
    const dos= Math.floor ( (segundo/10 )%10); 
const uno= Math.floor ( (segundo/1 )%10);
segundo +=1;

ReactDOM.render(<Home digito1={uno} digito2={dos} digito3={tres} digito4={cuatro} digito5={cinco} digito6={seis}/>, document.querySelector("#app"));
}, 1000);