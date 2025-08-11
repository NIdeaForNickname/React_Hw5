import { useContext } from "react";
import { PlanContext } from "./MyContext.jsx";
import "./PlanCard.css"

export function PlanCard({ name }) {
    const { color, benefits, price } = useContext(PlanContext);

    return (
        <div className="PlanCard">
            <div className="PlanCardHeader">
                <div style={{backgroundColor: color}} className="PlanCardTitle">
                <a className="PlanName">
                    {name}
                </a>
                    <div className="PlanPriceDiv">
                        <a className="PlanPrice">
                            {price}
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <ul>
                    {benefits.map((item,) => (
                        <li className={item[1] ? "PositiveMark" : "NegativeMark"}>
                            {item[0]}
                        </li>
                    ))}
                </ul>
            </div>

            <button className="SelectButton" style={{backgroundColor: color}}>
                Select Package
            </button>
        </div>
    );
}