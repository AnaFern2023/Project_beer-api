import { Link } from "react-router-dom";

const BeerItems = (props) => {
    console.log(props);
    return (
        <section className="beerDetails_section">
            <img src={props.image} alt="" />
            <div>
                <h2>{props.name}</h2>
                <h4>{props.tagline}</h4>
                <p>{props.producer}</p>
                <Link to={`/${props.id}`} state={props.allBeers}>Details</Link>
            </div>
        </section>
    );
}

export default BeerItems;