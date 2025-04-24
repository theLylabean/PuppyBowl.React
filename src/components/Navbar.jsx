import { Link } from "react-router-dom";
import '../css/navbar.css';

const Navbar = () => {
    
    return (
        <div className='navbar-container'>
            <h1>Puppybowl</h1>
            <div className='links-container'>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/playerList'>
                    Players
                </Link>
                <Link to='/newPlayerForm'>
                    Create New Player
                </Link>
                <Link>
                    Show Teams!
                </Link>
            </div>
        </div>
    )
}

export default Navbar