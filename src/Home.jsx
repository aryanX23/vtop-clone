import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
export default function Home(){
    const navigate = useNavigate();
    function handleSignOut() {
        console.log("hello");
        navigate("/");
    }
    const [dataVisi, setDataVisi] = React.useState("false");
    function handleClick(){
        if(dataVisi==="false")
            setDataVisi(prev=>"true");
        else
            setDataVisi(prev=>"false");
    }
    return(
        <div className='homeBody'>
            <div className='homeNav'>
                <div className='leftNav'>
                    <div className='navBtn'><img className='navLogo' src={process.env.PUBLIC_URL+"/images/left-ham.png"} alt="logo" /></div>
                    <div className='navTitle'>VIT-AP</div>
                </div>
                <div data-visibility={dataVisi} className='rightNav'>
                    <img className='rightNavLogo' onClick={handleClick} src={process.env.PUBLIC_URL + "/images/right-ham.png"} alt="logo" />
                </div>
                
            </div>
            <div data-visibility={dataVisi} className='navPane' >
                    <div className='navPaneImg'><img className='navPaneImgi' src={process.env.PUBLIC_URL+"/images/aryan.jpeg"} alt="aryan" /></div>
                    <div className='navPaneDetails'>21BCE8114 (STUDENT)</div>
                    <button className='navPaneBtn' onClick={handleSignOut} >Sign out</button>
            </div>
            <div className='homeContent'>
                <img className='contentImg' src={process.env.PUBLIC_URL+"/images/receipt.png"} alt="receipt" />
            </div>
        </div>
    );
}