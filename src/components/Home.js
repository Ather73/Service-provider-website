import React from 'react'
import hero1 from "../img/hero1.png"

import Common from "./Common"

const Home = () => {
    return (
        <div>
           <section id="header" className="my-5">
           <div className="container-fluid nav_bg ">
            <div className="row mt-5">
             <Common
             
             title="Lets connect the no.1 service provider company with"
             owener="Ather Shaikh"
             text="we are provide online tools for growing bussiness"
             imgsrc={hero1}
             btn="Get Started"
             
             
             />
            </div>
           </div>

           </section>
        </div>
    )
}

export default Home
