import React, { useEffect } from "react";
import './main.css'
import {HiOutlineLocationMarker} from "react-icons/hi"
import {BsClipboardCheck} from "react-icons/bs"
import barrendesert from '../../Assets/barrendesert.jpg'
import disneyworld from '../../Assets/disneyworld.jpg'
import trainsnowswitzerland from '../../Assets/trainsnowswitzerland.jpg'
import gardensbythebay from '../../Assets/gardensbythebay.jpg'
import glacier from '../../Assets/glacier.jpg'
import greatwallofchina from '../../Assets/greatwallofchina.jpg'
import mahabalipuram from '../../Assets/mahabalipuram.jpg'
import burjkhalifa from '../../Assets/burjkhalifa.jpg'
import eiffeltower from '../../Assets/eiffeltower.jpg'
import maldivesbeach from '../../Assets/maldivesbeach.jpg'
import palacebhutan from '../../Assets/palacebhutan.jpg'
import tajmahal from '../../Assets/tajmahal.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Data =[{
               id:1,
               imgsrc: barrendesert,
               destTitle:'Barren Desert',
               location:'Las Vegas',
               grade:'Adventure',
               fees:'$500',
               description:"Located in the north of Switzerland, it's extremely close to the German border, making a trip to neighboring country Liechtenstein and its capital Vaduz an easily accessible adventure the drive or train trip clocks in at just 1 hour and 20 minutes."
            },
            {
               id:2,
               imgsrc: eiffeltower,
               destTitle:'Eiffel Tower',
               location:'France',
               grade:'Clear View',
               fees:'$400',
               description:"For 130 years, the Eiffel Tower has been a powerful and distinctive symbol of the city of Paris, and by extension, of France. At first, when it was built for the 1889 World's Fair, it impressed the entire world by its stature and daring design, and symbolized."
            },
            {
               id:3,
               imgsrc:maldivesbeach,
               destTitle:'Maldives Beach',
               location:'Indian Ocean',
               grade:'Cutural Relax',
               fees:'$700',
               description:"The Islands in the Maldives have white and fine quality sand that embraces the tropical vegetation. Eye-pleasing natural beauty of these Islands attract tourists from around the world."
            },
            {
                id:4,
                imgsrc:disneyworld,
                destTitle:'Disney World',
                location:'United States',
                grade:'ENTERTAINMENT',
                fees:'$189',
                description:"1-day tickets range from $109 - $189. Price varies based on park and date selected. At this time, the lowest price for a 1-day ticket can be found in August and September 2023 and 2024."
             },
             {
                id:5,
                imgsrc: trainsnowswitzerland,
                destTitle:'Train Snowswitzerland',
                location:'Switzerland',
                grade:'Enterainment',
                fees:'$300',
                description:"As part of the national strike action, train traffic will be severely disrupted from Monday 27 March 2023 on all lines operated by TGV Lyria."
             },
             ,
             {
                id:6,
                imgsrc: gardensbythebay,
                destTitle:'Gardens By The Bay ',
                location:'Singapore',
                grade:'CULTURAL RELAX',
                fees:'$200',
                description:"Wonder blooms at Gardens by the Bay. Invigorate your senses with our towering Supertrees, spectacular indoor waterfall, and iconic cooled conservatories"
             },
             {
                id:7,
                imgsrc: glacier,
                destTitle:'Glacier',
                location:'Antarctica',
                grade:'Clear View',
                fees:'$150',
                description:"Antarctica is the world's largest ice sheet, covering ~14,000,000 km2. Much of the Antarctic ice sheet surface lies above 3000 m above sea level "
             },
             {
                id:8,
                imgsrc: greatwallofchina,
                destTitle:'Great Wall Of China',
                location:'China',
                grade:'Clear View',
                fees:'$500',
                description:"The Great Wall is reputed as one of the seven construction wonders in the world not only for its long history, but its massive construction size, and its unique architectural style as well."
             },
             {
                id:9,
                imgsrc: mahabalipuram,
                destTitle:'Mahabalipuram',
                location:'Tamil Nadu',
                grade:'Visiting Spot',
                fees:'$100',
                description:"Mahabalipuram is a place that is famous for its temples and monuments, especially the very famous Shore Temple, Another famous temple is the Pancha Rathas."
             },
             ,
             {
                id:10,
                imgsrc: palacebhutan,
                destTitle:'Palace Bhutan',
                location:'Japan',
                grade:'View Spot',
                fees:'$450',
                description:"The Wangduechhoeling Palace is the birthplace of Bhutan's monarchy and one of the most important historical monuments in the country."
             },
             {
                id:11,
                imgsrc: tajmahal,
                destTitle:'Taj Mahal',
                location:'India',
                grade:'View Spot',
                fees:'$200',
                description:"It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632."
             },
             {
               id:12,
               imgsrc:burjkhalifa ,
               destTitle:'Burj Khalifa',
               location:'Dubai',
               grade:'Cultural Relax',
               fees:'$800',
               description:"The Burj Khalifa (known as the Burj Dubai prior to its inauguration in 2010) is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest"
           }
        ]
const Main = () =>{
   
   useEffect(()=>{
                    Aos.init({duration:2000})
   },[])


    return(
       <section className="main container section">
         <div className="sectionTitle">  
           <h3 data-aos="fade-right" className="title">Most Visited Designation</h3>
         </div>

         <div className="secContent grid">
                              {Data.map(({id,imgsrc,destTitle,location,grade,fees,description})=>{
             return(
              <div key={id}   data-aos="fade-up"  className="singleDestination">
                 <div className="imageDiv">
                      <img src={imgsrc} alt={destTitle}></img>
                 </div>

                 <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex"><HiOutlineLocationMarker className="iconm"/>
                    {location}</span>
                    
                    <div className="fees flex">
                        <div className="grade">
                            <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                            <h5>{fees}</h5>
                        </div>
                        </div>
                        <div className="desc">
                             <p>{description}</p>
                        </div>
                       
                       <button className="btn flex">
                         DETAILS <BsClipboardCheck className="icon"/>
                       </button>
                 </div>
            </div>
          )
    })
}
         </div>
       </section>
    )
}
export default Main
