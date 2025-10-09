import React from 'react';
import { FaHouse, FaBook, FaMobileRetro, FaUser } from "react-icons/fa6";
import { Link, NavLink, useLocation } from 'react-router-dom'; // ✅ Fixed import

function NavBar() {
	const [show, setShow] = React.useState(true);
	const location = useLocation();
	console.log(location.pathname);

	return (
		<header className='bg-orange-400 flex justify-between p-4'>
			<Link to='/'><h1 className='text-3xl font-bold text-orange-700'>Swiggy</h1></Link>
			<nav>
				<NavLink className='nav-item' to="/"><FaHouse className='inline pb-2' /> Home</NavLink>
				<NavLink className='nav-item' to="/about"><FaBook className='inline pb-2' /> About</NavLink>

				<NavLink
					className='nav-item'
					to="/contact"
					onClick={(e) => {
						e.preventDefault();
						setShow(!show);
					}}
				>
					<FaMobileRetro className='inline pb-2' /> Contact
				</NavLink>

				{show && <Link className='flex flex-col' to="/contact">Contact us at 123-456-7890</Link>}
				<NavLink className='nav-item' to="/add"><FaMobileRetro className='inline pb-2' /> Add Recipe</NavLink>
				<NavLink className='nav-item' to="/recipes"><FaMobileRetro className='inline pb-2' /> Recipes</NavLink>
				<NavLink className='nav-item' to="/login"><FaUser className='inline pb-2' /> Login</NavLink>
			</nav>
		</header>
	);
}

export default NavBar;