import React,{useEffect} from"react"
import './home.css'
import video from '../../Assets/ocean2.mp4'
import {GrLocation} from "react-icons/gr"
import {HiFilter} from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {SiTripadvisor} from "react-icons/si"
import {BsListTask} from "react-icons/bs"
import {TbApps} from "react-icons/tb"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () =>{

useEffect(()=>{
              Aos.init({duration:2000})
},[])

    return(
        <section className="home">
          <div className="overlay"></div>
          <video src={video}  type="video/mp4" loop autoPlay muted></video>
          
          <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up"  className="smallText">
              Our Packages
            </span>
            <h1 data-aos="fade-up" className="homeTitle">Search Your Holiday</h1>
          </div>
          <div data-aos="fade-up" className="cardDiv grid">     
            <div className="designationInput">
              <label htmlFor="city">Search Your Destination:</label>
              <div className="input flex">
                <input type="text" placeholder="Enter the place..." style={{color:"var(--greyColor)"}} className="place"></input>
                <GrLocation className="icon"/>
              </div>
             </div> 
          

          <div className="dateInput">
              <label htmlFor="date">Select your date:</label>
              <div className="input flex">
                <input type="date" style={{color:"var(--greyColor)"}}></input>
    
              </div>
             
          </div>

          <div className="priceInput">
           <div className="label_total flex">
            <label htmlFor="price">Max price : 
            </label>
            <h3 className="total">$5000</h3>
           </div>
         
              <div className="input flex">
                 <input type="range" max="5000" min="1000"></input>
              </div>
              
              </div>
          
          <div className="searchOptions flex">
             <HiFilter className="icons"/>
             <span className="spanh">MORE FILTER</span>
             </div>
              </div>
             <div  data-aos="fade-up" className="homeFooterIcons">
              <div className="rightIcons">
          <a href="https://www.facebook.com/"><FiFacebook className="iconf"/></a> 
          <a href="https://www.instagram.com/"> <AiOutlineInstagram className="icong" /></a> 
          <a href="https://www.tripadvisor.in/"><SiTripadvisor className="icongr"/></a> 
              </div>
              </div>
          </div>
        </section>
    )
}
export default Home

