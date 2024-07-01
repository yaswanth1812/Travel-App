import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import travel from '../../Assets/travels.jpg';

const About = () => {
    const pageWrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        marginTop: '10vh',
        minHeight: '100vh', 
        maxWidth: '1200px',
        margin: '0 auto'
    };

    const aboutContainerStyle = {
        width: '100%', 
        maxWidth: '100%', 
        textAlign: 'center',
        backgroundColor: 'lightblue',
        padding: '20px'
    };

    const titleStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        margin: '0'
    };

    const locationNameStyle = {
        fontSize: '1.2em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0'
    };

    const iconStyle = {
        marginLeft: '8px'
    };

    const aboutContentStyle = {
        backgroundColor: 'white',
        padding: '20px',
        textAlign: 'left',
        lineHeight: '1.6',
        fontSize: '1em',
        color: 'black'
    };

    const contactDetailsStyle = {
        marginTop: '20px',
        padding: '20px',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center'
    };

    const contactHeadingStyle = {
        fontSize: '1.5em',
        marginBottom: '10px'
    };

    const contactInfoStyle = {
        marginBottom: '5px'
    };

    return (
        <div className='pageWrapperStyle' style={pageWrapperStyle}>
            <section className='aboutContainerStyle' style={aboutContainerStyle}>
                <div className='AboutTitle'>
                    <h3 className='titleStyle' style={titleStyle}>
                        A1 TOURISM & PACKAGES
                    </h3>
                    <h5 className='locationNameStyle' style={locationNameStyle}>
                        Visakhapatnam, Andhra Pradesh <HiOutlineLocationMarker className='icon' style={iconStyle} />
                    </h5>
                </div>

                <div className='AboutContent' style={aboutContentStyle}>
                    <p>
                        Registered in 2012, A1 Tourism has gained immense expertise in offering Tours & Travel Service, Tour Packages, Travel Agency, etc. We are located in Visakhapatnam, Andhra Pradesh, and provide Tours & Travel Service, Tour Packages, and Travel Agency to clients.
                        Tourism is distinguished from exploration in that tourists follow a “beaten path,” benefit from established systems of provision, and are generally insulated from difficulty, danger, and embarrassment. Tourism overlaps with other activities, interests, and processes, including pilgrimage, business tourism, sports tourism, and medical tourism.
                    </p>
                </div>

                <div id="contact" className='ContactDetails' style={contactDetailsStyle}>
                    <h4 className='contactHeadingStyle' style={contactHeadingStyle}>Contact Details</h4>
                    <p className='contactInfoStyle' style={contactInfoStyle}>Phone: +123 456 7890</p>
                    <p className='contactInfoStyle' style={contactInfoStyle}>Email: info@a1tourism.com</p>
                    <p className='contactInfoStyle' style={contactInfoStyle}>Support: support@a1tourism.com</p>
                </div>
            </section>
        </div>
    );
}

export default About;
