import React from 'react'

function NavComponent() {
  return (
	<header className='bg-cyan-300 flex justify-between'>
		<div className='text-3xl font-extrabold italic'>BrandName</div>
		<nav className='flex justify-between w-[450px] text-2xl'>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>
	</header>
  )
}

export default NavComponent