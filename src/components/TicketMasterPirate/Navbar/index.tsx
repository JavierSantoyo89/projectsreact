import { useState, forwardRef, useImperativeHandle, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom';
import style from './navbar.module.css'

//*********************  Navbar  *********************/
//*********************/  Navbar component  *********************/

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
	onSearch: (search: string) => void;
  }

  interface NavbarRef {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
  }

// eslint-disable-next-line react/prop-types
const Navbar = forwardRef<NavbarRef, NavbarProps>(({ onSearch, ...rest }, ref) => {
	const [search, setSearch] = useState('');
	//  let handleClickClear = () => {
	//     setSearch();
	//   };

	const handleInputChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
		setSearch(evt.target.value)
	}

	const handleInputKeyDown = (evt:React.KeyboardEvent<HTMLInputElement>) => {
		if (evt.key === 'Enter') {
			onSearch(search)
			console.log(search)
		}
	}

	useImperativeHandle(ref, () => ({
		search,
		setSearch,
	}))
	// console.log(search);
	return (
		<div
			{...rest}
			// style={{
			//   marginBottom: 14,
			//   width: "100%",
			//   display: "flex",
			//   justifyContent: "center",
			//   backgroundColor: "grey",
			// }}
			// className='bg-blue border-gray-200 dark:bg-gray-900'>
			  className={style.container}>
			
			<div className={style.titleContainer}>
				<p className={style.pTitle}>Ticketmaster pirata...</p>
			</div>
			<div className={style.inputcontainer}>
				<input
					type='text'
					placeholder='Busca tu evento favorito'
					onChange={handleInputChange}
					onKeyDown={handleInputKeyDown}
					value={search}
				/>
				<Link
					to='/ticketmasterpirate/profile/my-info'
					className={style.perfilLink}>
					Mi perfil{' '}
				</Link>
			</div>
		</div>
	)
})

Navbar.displayName = 'Navbar'
export default Navbar
