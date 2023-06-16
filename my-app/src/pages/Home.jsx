
import Crew from "../components/Crew/Crew";
import Events from "../components/Events/events";
import Footer from "../components/footer/Footer";

import WhatWeDo from "../components/Whatwedo/WhatWeDo";
import Hello from "../components/hello/Hello";
import Banner from "../components/Banner/Banner";

const Home = () =>{
    return(
        <div>
            <Events/>
            <Crew/>
            
            <Hello/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default Home;