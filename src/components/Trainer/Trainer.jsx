import {Link, useLocation } from "react-router-dom";

function Trainer () {

    const location = useLocation();
    const duration = location.state.duration;
    const minRange = location.state.minRange;
    const maxRange = location.state.maxRange;

    return (
        <>
            <p>This is trainer</p>
            <Link to="/">Go Home</Link>
            <p>Duration is: {duration}</p>
            <p>Min Range is: {minRange}</p>
            <p>Max Range is: {maxRange}</p>
        </>
    )
}

export default Trainer;