
import Crew from "../components/Crew/Crew";
import Events from "../components/Events/events";
import Footer from "../components/footer/Footer";

import WhatWeDo from "../components/Whatwedo/WhatWeDo";
import Hello from "../components/hello/Hello";
import Banner from "../components/Banner/Banner";
import NewNav from "../components/newNav/NewNav";
import Carousel from "../components/carousel/Carousel";
import Team from "../components/Team/Team";


const Home = () =>{
    return(
        <div>
        <NewNav/>
    <Carousel/>
    <WhatWeDo/>
            <Events/>
            <Crew/>
         
            <Hello/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default Home;