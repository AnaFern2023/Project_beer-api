import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import arrow from "../pics/Back (1).png"
import FooterBar from "./FooterBar";

const BeerDetails = () => {

    const location = useLocation()
    console.log(location);
    return (
        <article>
            <section className="detailsRandom_section">
                <div className="random_div">
                    <img src={location.state.image_url} alt="" />
                </div>
                <h2>{location.state.name}</h2>
                <h4>{location.state.tagline}</h4>
                <article>
                    <div className="random_text">
                        <p>First brewed:</p>
                        <p>Attenuation level:</p>
                    </div>
                    <div className="random_num">
                        <p>{location.state.first_brewed}</p>
                        <p>{location.state.attenuation_level}</p>
                    </div>
                </article>
                <p className="random_description">{location.state.description}</p>
                <Link to={'/beerlist'}><img src={arrow} alt="" className="random_link" /></Link>
            </section>
            <FooterBar />
        </article>
    );
}

export default BeerDetails;