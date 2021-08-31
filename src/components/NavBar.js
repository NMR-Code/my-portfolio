import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

function NavBar() {
	return (
		<header className='bg-black'>
			<div className='container mx-auto flex justify-between'>
				<nav className='flex'>
					<NavLink
						to='/'
						exact
						activeClassName='text-white'
						className='inline-flex items-center py-6 px-3 mr-4 text-blue-600 hover:text-blue-800 text-4xl font-bold cursive tracking-widest'
					>
						Nelson
					</NavLink>
					<NavLink
						to='/post'
						activeClassName='bg-white bg-opacity-10'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-blue-800'
					>
						Blog Posts
					</NavLink>
					<NavLink
						to='/project'
						activeClassName='bg-white bg-opacity-10'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-blue-800'
					>
						Projects
					</NavLink>
					<NavLink
						to='/about'
						activeClassName='bg-white bg-opacity-10'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-blue-800'
					>
						About Me!
					</NavLink>
				</nav>
				<div className='inline-flex py-3 px-3 my-6'>
					<SocialIcon
						url='https://linkedin.com/in/808melo'
						className='mr-4'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url='https://twitter.com/wrongrosado'
						className='mr-4'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url='https://github.com/NMR-Code'
						className='mr-4'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
				</div>
			</div>
		</header>
	)
}
export default NavBar