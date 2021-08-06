import React from 'react';
import {NewAccordion} from './NewAccordion';
import {NewAccordion2} from './NewAccordion2';

export const  Body = (props)=>{
    let bodyStyle = {
        textAlign: 'center',
    margin: '5vh 5% 0px',
    fontFamily: 'Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif'
    }
    let bodyDiv = {
        margin: '3% 20vw',
    }
    let pStyle = {
        textAlign: 'left',
    marginTop: '2vh'
    }
    return (
        <>
        <div style={bodyStyle}>
            <div style={bodyDiv}>
                <h1>About Us</h1>
                <div>
                    <div style={pStyle}>ETark is an automated complaint resolution platform for smartphone complaints. We help in resolving both technical and non-technical smartphone problems via. our service offerings. ETark was conceptualized after identifying the plight of hapless smartphone customers and the inefficiency of the service centers.
                    <br /><br />
                    How ETark helps customers?
                    </div>
                    <h3>Resolving technical problems :</h3>
                    <div style={pStyle}>Having a technical problem with your smartphone can be disastrous because unlike any other gadget, a smartphone lets you stay connected with the world and manage all your electronic records. The current approaches that a user usually takes :</div>
                    <br />
                    <NewAccordion/>
                    <br />
                    
                    <h3>Resolving non-technical problems :</h3>
                    <div style={pStyle}>
                    Problems like missing, damaged or duplicate items during purchase or Payment related issues like improper bill, wrongful deductions etc are some of the examples of non- technical problems that customers face.
                    <br /><br />
                    The ideal way to solve this is to reach out to the seller (e-commerce firm/ offline retailer) or the device manufacturer (e.g. Samsung, Apple etc.). However a customer’s voice can go unheard in a discussion with the other party. So to lend a strength to the customer’s voice, we do an instant analysis of his/ her complaint and share certain reports with him/ her which can help identify the merit of the complaint/ grievance.
                    <br /><br />
                    <NewAccordion2 />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


