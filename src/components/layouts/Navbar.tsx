import { useState } from 'react';
import { Link } from 'react-router-dom';
import SalemtakLogo from '../../assets/images/BadiSLogo.png';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<header className='flex items-center justify-between bg-[#ffffff] px-5 py-4 text-salemtak '>
			<div className='flex items-center'>
				<img
					src={SalemtakLogo}
					alt='Logo'
					className='h-8 w-auto sm:mr-2 '
				/>
				<Link
					to={'/'}
					className='font-interR text-2xl font-semibold'>
					Bade Salemtak
				</Link>
			</div>

			<div className='flex items-center'>
				<div className='hidden space-x-4 sm:flex'>
					<Link
						to={'/'}
						className='px-4 font-interR  hover:text-gray-400'>
						Home
					</Link>
					<Link
						to={'/about'}
						className='px-4 font-interR  hover:text-gray-400'>
						About
					</Link>
					<Link
						to={'/privacy'}
						className='px-4 font-interR hover:text-gray-400'>
						Privacy
					</Link>
					<Link
						to={'/contact'}
						className='px-4 font-interR hover:text-gray-400'>
						Contact us
					</Link>
				</div>

				<div className='sm:hidden'>
					<button onClick={handleMenuToggle}>
						<svg
							viewBox='0 0 24 24'
							className='h-6 w-6 fill-current text-salemtak'>
							{isMenuOpen ? (
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 5H4v2h16v-2z'
								/>
							) : (
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z'
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{isMenuOpen && <HamburgerMenu />}
		</header>
	);
};

export default Navbar;
