/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

// type HeaderProps = {
//     children: React.ReactNode
// }

// done in types file
const Header = ({ children }) => {
	return (
		<div className='header'>
			<Link href={"/"} className='md:flex-1'>
				<Image
					alt='Logo with name'
					src='/assets/icons/logo.svg'
					width={120}
					height={32}
					className='hidden md:block'
				/>
				<Image
					alt='Logo'
					src='/assets/icons/logo-icon.svg'
					width={32}
					height={32}
					className='mr-2 md:hidden'
				/>
			</Link>

			{children}
		</div>
	);
};

export default Header;
