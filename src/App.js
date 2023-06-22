import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faPhone} from "@fortawesome/free-solid-svg-icons"

export default function App (){

  return(
     <>
     <div class="container Hole_Div" >
     <div className="Cotent_div">
         <div className="Headder">
          <div className='Headder_child'>
              <div className="Lhs">
               <p className="Lhs_para1">  <b>360 DEGREE </b> </p> 
               {/* <img src="./Images/logo.jpg" alt='' height={"50px"}/>    */}
               <p className="Lhs_para2"> 
               <b>HOUSE ITERIOR <br/>DESIGNS</b>
                </p> 
               </div>
               <div class="row Rhs">
                <p> <a href="#"> SERVICES </a></p>
                <p> <a href="#"> ABOUT </a></p>
                <p> <a href="#"> CONTACT </a></p>
                <p> <a href="#"> INFO </a></p> 
                <p> <a href="#"> PRODUCTS </a></p>
               </div>
          </div>
         </div>
         <div class="row Hole_imgdiv">
                <div class="col-4" >
                <a href="#">
                  <img src="./Images/1.jpg" alt="" height={"350px"} width={"100%"} />
                  <p>AUSTRALIAN MINIMALIST GROUND UP</p>
                  </a>
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/2.jpg" alt="" height={"350px"} width={"100%"}/>
                <p>SARATOGA WHIMSY HOUSE</p>
                </a>
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/3.jpg" alt="" height={"350px"} width={"100%"}/>
                <p>SAN FRANCISCO EDWARDIAN</p>
                </a>
                </div>
               <div class="w-100">
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/4.jpg" alt="" height={"350px"}width={"100%"}/>
                <p>TONAL SINGLE FAMILY HOME</p>
                </a>
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/5.jpg" alt="" height={"350px"}width={"100%"}/>
                <p>SAGE EICHLER</p>
                </a>
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/6.jpg" alt="" height={"350px"}width={"100%"}/>
                <p>EARTHY MACKAY HOUSE</p>
                </a>
                </div>
                <div class="w-100">
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/7.jpg" alt="" height={"350px"}width={"100%"}/>
                <p>MIDCENTURY CARIBBEAN HOME</p>
                </a>
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/8.jpg" alt="" height={"350px"}width={"100%"} />
                <p>POTRERO HILL HOUSE & STUDIO</p>
                </a>
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/9.jpg" alt="" height={"350px"}width={"100%"}/>
                <p>BELMONT GLASS HOUSE</p>
                </a>
                </div>
                <div class="w-100">
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/10.jpg" alt="" height={"350px"}width={"100%"}/>
                <p>HIDE & SEEK HOUSE</p>
                </a>
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/11.jpg" alt="" height={"350px"}width={"100%"}/>
                <p>LOS ALTOS BOYS’ BEDROOM</p>
                </a>
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/12.jpg" alt="" height={"350px"}width={"100%"}/>
                <p>PACIFIC NORTHWEST PRIMARY BEDROOM & NURSERY</p>
                </a>
                </div> 
                <div class="w-100">
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/13.jpg" alt="" height={"350px"}width={"100%"}/>
                <p>PALO ALTO MULTI-GENERATIONAL HOME</p>
                </a>
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/14.jpg" alt="" height={"350px"}width={"100%"}/>
                <p>CAMPBELL MODERN HOME</p>
                </a>
                </div>
                <div class="col-4">
                <a href="#">
                <img src="./Images/15.jpg" alt="" height={"350px"}width={"100%"} />
                <p>EICHLER BEDROOM RENOVATION</p>
                </a>
                </div>   
        </div>
        <div className="Footer">
                        <div class="row Footer_holediv">
                          <div className="Footer_logodiv">
                          <img src="./Images/logo.jpg" alt='' height={"40px"} />
                          </div>
                          <div className="Footer_addresdiv">
                          <FontAwesomeIcon icon={faLocationDot} style={{color: "#1985c8"}} />
                          <p>
                          <b>360 DEGREE-INFO PVT Ltd <br/> 82,ARCOT ROAD,KODAMBAKKAM, <br/>ANNA VALAGAM , CHENNAI-24,<br/> TAMILNADU. </b>
                          </p>
                          </div>
                          <div className="Footer_contactdiv">
                            <div>
                            <FontAwesomeIcon icon={faPhone} style={{color: "#1985c8"}} />
                            <p>
                              - +1(415)555-0132 <br/> - +91   9876543210
                            </p>
                            </div>
                          </div>
                    </div>
              </div> 
     </div>
     </div>
     </>

  )

} 