import { useRef } from 'react';

export const NavBar = () => {
	const navRef = useRef(null);

	return (
		<nav
			ref={navRef}
			className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2 '
		>
			NavBar
		</nav>
	);
};
