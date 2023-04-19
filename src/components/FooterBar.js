import { Link } from "react-router-dom";
import beer from "../pics/Logo.svg"

const FooterBar = () => {
    return (
        <section>
            <div className="footer_nav">
                <Link to={'/'}><img src={beer} alt="" /></Link>
            </div>
        </section>
    );
}

export default FooterBar;