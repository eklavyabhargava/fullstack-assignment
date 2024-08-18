import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	const checkScreenWidth = () => {
		if (window.innerWidth <= 767) {
			setIsSmallScreen(true);
		} else {
			setIsSmallScreen(false);
		}
	};

	useEffect(() => {
		checkScreenWidth();
		window.addEventListener('resize', checkScreenWidth);

		return () => {
			window.removeEventListener('resize', checkScreenWidth);
		};
	}, []);

	return (
		<div className='w-full bg-black h-16 flex flex-row justify-between max-sm:px-3 md:px-14 text-white'>
			<div className='flex w-full flex-row items-center my-4 gap-x-1 md:gap-x-2 text-base md:text-xl'>
				<div className='flex flex-row items-center gap-x-[2px] md:gap-x-2 border-r-[1px] border-white max-sm:pr-[2px] pr-2 '>
					<img src={logo} alt='' width={isSmallScreen ? 20 : 26} />
					<p className='font-medium'>Abstract</p>
				</div>
				<p>Help Center</p>
			</div>
			<div className='w-full flex max-sm:justify-end pr-3 justify-center'>
				<div className='items-center flex'>
					<button className='border-[1px] border-[#8d8d8d] rounded-md px-3 py-1 '>
						Submit a request
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;

