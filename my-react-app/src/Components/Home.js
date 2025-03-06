import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
 const Home = () => {
    return (
        <>
            <div className="continer">
                <div className="row">
                    <div className="col">
                        <p>Welcome to Home Component</p>
                    </div>
                </div>
                <nav>
      <NavLink to="/" activeclassname="active">Home</NavLink>
      <NavLink to="/about" activeclassname="active">About</NavLink>
      <NavLink to="/contact" activeclassname="active">Contact</NavLink>
    </nav>
            </div>
        </>
    );
};
export default Home;