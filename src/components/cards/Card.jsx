import { useState } from "react";
import "./Card.css"

const Card = ({ name, temp, description, icon }) => {

    const renk = {
        backgroundColor : "#252627",
        borderRadius: "10px",
        border: "1px solid black",
    }

    return (
        <div className="card Ccard">
            <div className="card-body" style={renk}>
                <h5 style={{backgroundColor : "#252627",}}>{name}</h5>
                <p style={{backgroundColor : "#252627",}}>{temp}°C</p>
                <div className="text-center"style={{backgroundColor : "#252627",}}>
                    <img
                        style={{
                            backgroundColor : "#252627",
                        }}
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="weather icon"
                    />
                </div>
                <br></br>
                <p style={{
                    backgroundColor : "#252627",
                    float : "right" ,
                    fontSize : "20px"
                }}>{description}</p>
                
            </div>
        </div>


    )
}
export default Card;