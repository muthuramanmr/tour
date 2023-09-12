import React,{useEffect} from "react"
import './footer.css'
import beachs from '../../Assets/beachs.jpg'
import {FiSend} from "react-icons/fi"
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {FaTripadvisor} from "react-icons/fa"
import {FiChevronRight} from"react-icons/fi"
import Aos from 'aos'
import 'aos/dist/aos.css'
   
const Footer = () =>{

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

    return(
<section className="footer">
  <div className="videoDiv">
  <img src={beachs}></img> 
  </div>
    <div className="secContent container">
      <div className="contactDiv flex">
        <div data-aos="fade-up" className="text">
           <small>KEEP IN TOUCH</small>
           <h2 style={{color:"white"}}>Travel with us</h2>
        </div>

        <div className="inputDiv flex">
          <input type="text"data-aos="fade-up"  placeholder="Enter Email Address"></input>
          <button data-aos="fade-up" className="btn flex" type="submit" style={{color:"white"}}>
           SEND<FiSend className="icon"></FiSend>
          </button>
        </div>
      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className="logo flex"  style={{color:"white"}}> 
              <MdOutlineTravelExplore className="icon"/><h3 style={{color:"black"}}>My Tour</h3>
            </a>
          </div>
          <div  data-aos="fade-up" className="footerParagraph">
          You can tour around the world at any age and still enjoy to the fullest. However in my opinion, before you settle down is a great time because you are able to explore and learn the different opportunities that the world has to offer. I would say anywhere between 18 and 90
          </div>
          <div  data-aos="fade-up" className="footerSocials flex">
          <AiOutlineTwitter  className="icon"/>
          <AiFillYoutube className="icon"/>
          <AiFillInstagram className="icon"/>
          <FaTripadvisor className="icon"/>
        
          </div>
        </div>

  
        <div  data-aos="fade-up" data-aos-duration="4000" className="footerLinks grid">
          <div className="linkGroup">
           <span className="groupTitle">OUR AGENCY</span>
            <li className="footerList flex">
             <FiChevronRight className="icon"/>
             Services
            </li>

            <li className="footerList flex">
             <FiChevronRight className="icon"/>
              Insurance
            </li>

            <li className="footerList flex">
             <FiChevronRight className="icon"/>
              Agency
            </li>

            <li className="footerList flex">
             <FiChevronRight className="icon"/>
             Tourism
            </li>

            <li className="footerList flex">
             <FiChevronRight className="icon"/>
             Payment
            </li>

          </div>
  
        </div>

        <div className="footerDiv grid">
        <p className="para">&copy; COPYRIGHTS RESERVED FROM MR 2022 </p>
         
          </div>
        
      </div>
      </div>  

</section>
        )
}
export default Footer






