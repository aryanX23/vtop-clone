import React from "react";
import './MainPage.css';
import { useNavigate } from "react-router-dom";
export default function MainPage(){
    const navigate = useNavigate();
    function openPage(){
        navigate("/home");
    }
    return(
        <div className="MainPageBody">
            <div className="headerBody">
                <div className="headerComp"> <img className="logo" src={process.env.PUBLIC_URL+"/images/logo.png"} alt="logo" /> </div>
                <div className="headerComp" > <span className="headerTitle">V-Top</span> </div>
            </div>
            <div className="contentBody">
                <div className="contentBox">
                    <div className="boxHeader"> <span className="boxHeaderTitle">V-Top for Employee and Students</span> </div>
                    <div className="boxBody"> <span className="boxBodyTitle">With Responsive and Fresh Look and Feel</span> </div>
                    <div className="buttonBody"><button class="boxButton" onClick={openPage}>Login to V-Top</button></div>
                </div>
                <div className="contentBox">
                    <div className="boxHeader" style={{borderTop: '#5cb85c solid 3px'}} > <span className="boxHeaderTitle">V-Top for Parents</span> </div>
                    <div className="boxBody"> <span className="boxBodyTitle">With more Information about students</span> </div>
                    <div className="buttonBody"><button class="boxButton" onClick={openPage} style={{backgroundColor:'#5cb85c'}} >Parent Login</button></div>
                </div>
                <div className="contentBox">
                    <div className="boxHeader" style={{borderTop: '#5bc0de solid 3px'}} > <span className="boxHeaderTitle">V-Top for Alumni Students</span> </div>
                    <div className="boxBody"> <span className="boxBodyTitle">Introduced with Transcript Services</span> </div>
                    <div className="buttonBody"><button  class="boxButton" onClick={openPage} style={{backgroundColor:'#5bc0de'}}>Alumni Login</button></div>
                </div>
                <div className="contentBox">
                    <div className="boxHeader" style={{ display:'flex',justifyContent:'center',borderTop: '#f39c12 solid 3px'}}> <span>Spotlight</span> </div>
                    <div className="filler"></div>
                </div>
            </div>
            
        </div>
    );
}