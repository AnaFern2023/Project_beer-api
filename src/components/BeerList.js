import { useEffect, useState } from "react";
import BeerItems from "./BeerItems";
import FooterBar from "./FooterBar";

const BeerList = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(res => res.json())
            .then(json => {
                setBeers(json)
            })
        console.log(beers);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <section>
            {/* Bild Name Slogen=tagline Produzent=contributed_By */}
            {beers.map((element, index) => {
                return (
                    <div>
                        <BeerItems
                            key={index}
                            id={element._id}
                            image={element.image_url}
                            name={element.name}
                            tagline={element.tagline}
                            producer={element.contributed_by}
                            allBeers={element}
                        />
                        <hr />
                    </div>
                )
            })}
            <FooterBar />
        </section>
    );
}

export default BeerList;