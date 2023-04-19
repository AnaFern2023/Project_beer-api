import { useEffect, useState } from "react";
import FooterBar from "./FooterBar";
import { Link } from "react-router-dom";

import arrow from "../pics/Back (1).png"

const BeerDetailsRandom = () => {

    const [beers, setBeers] = useState("")

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(res => res.json())
            .then(json => {
                setBeers(json)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(beers);
    return (
        <article>
            <section className="detailsRandom_section">
                <div className="random_div">
                    <img src={beers.image_url} alt="" />
                </div>
                <h2>{beers.name}</h2>
                <h4>{beers.tagline}</h4>
                <article>
                    <div className="random_text">
                        <p>First brewed:</p>
                        <p>Attenuation level:</p>
                    </div>
                    <div className="random_num">
                        <p>{beers.first_brewed}</p>
                        <p>{beers.attenuation_level}</p>
                    </div>
                </article>
                <p className="random_description">{beers.description}</p>
                <Link to={'/'}><img src={arrow} alt="" className="random_link" /></Link>
            </section >
            <FooterBar />
        </article>
    );
}

export default BeerDetailsRandom;