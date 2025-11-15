import { useState } from "react";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Header from "../components/Header";
import { Gents,Ladies } from "../data";
import { use } from "react";
import WomenCollection from "../components/WomenCollection";
import Footer from "../components/Footer";

function Mainpage() {
    const [gentsFashion,setgentsFashion]=useState(Gents)
    const [ladiesFashion ,setladiesFashion]=useState(Ladies)
    return ( <div>

        <Header/>
        <Banner/>
        <Collections   gentsFashion={gentsFashion} />
        <WomenCollection ladiesFashion={ladiesFashion}/>
        <Footer/>
        

    </div> );
}

export default Mainpage;