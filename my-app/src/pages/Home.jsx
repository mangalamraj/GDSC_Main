


import Footer from "../components/footer/Footer";
import Events from "../components/events/Events";
import WhatWeDo from "../components/Whatwedo/WhatWeDo";
import Hello from "../components/hello/Hello";
import Banner from "../components/Banner/Banner";
import NewNav from "../components/newNav/NewNav";
import Carousel from "../components/carousel/Carousel";
import Team from "../components/Team/Team";
import Blogs from "../components/blogs/Blogs";



const Home = () =>{
    return(
        <div>
        <NewNav/>
    <Carousel/>
    <WhatWeDo/>
     
     <Events/>
         
            <Hello/>
            <Blogs/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default Home