import React from 'react';
import emailIcon from '../contactImg/emailIcon.png';
import phoneIcon from '../contactImg/phoneIcon.png'

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <span className="contact-span"></span>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneIcon}/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={emailIcon}/>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
