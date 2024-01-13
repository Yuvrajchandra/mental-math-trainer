import { useLocation, Link } from "react-router-dom";

function Trainer () {
    // const location = useLocation();
    // const duration = location.state.duration;

    const location = useLocation();
    const { duration, minRange } = location.state || {};
    // let stateData = location.state;
    // var duration = stateData["duration"]
    // console.log("Duration is", duration);
    // console.log("Min Range is", minRange);

    return (
        <>
            <p>This is trainer</p>
            <Link to="/">Go Home</Link>
            <p>Duration is: {duration}</p>
            <p>Min Range is: {minRange}</p>
        </>
    )
}

export default Trainer;