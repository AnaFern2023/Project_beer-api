import { Link } from "react-router-dom";
import allBeers from '../pics/christin-hume-08tX2fsuSLg-unsplash.png'
import randomBeers from '../pics/proriat-hospitality-flENqflm6xU-unsplash.png'

const BeerOverview = () => {
    return (
        <section className="overview_section">
            <div>
                <Link to={'/beerlist/'}>
                    <img src={allBeers} alt="" />
                    <h3>All Beers</h3>
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quibusdam accusamus beatae laboriosam magnam.</p>
            </div>
            <div>
                <Link to={'/randombeer/'}>
                    <img src={randomBeers} alt="" />
                    <h3>Random Beers</h3>
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quibusdam accusamus beatae laboriosam magnam.</p>
            </div>
        </section>
    );
}

export default BeerOverview;