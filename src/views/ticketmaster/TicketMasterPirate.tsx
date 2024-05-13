import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Navbar from '@components/TicketMasterPirate/Navbar'
import {Loading} from '@components/TicketMasterPirate/Loading/Loading'
import Events from '../../components/TicketMasterPirate/Events/Events'
import styles from './TicketMasterPirate.module.css'
import useEventsResults from '../../state/ticketmasterpirate/events-results'
import { Link } from 'react-router-dom'
export const TicketMasterPirate = () => {
	const { data, isLoading, error, fetchEvents } = useEventsResults()
	const events = useMemo(() => data?._embedded?.events || [], [data?._embedded?.events])
	const page = useMemo(() => data?.page || {}, [data?.page])
	const [searchTerm, setSearchTerm] = useState('')
	const containerRef = useRef()
	const fetchMyEventsRef = useRef()
	// const [contar, setContar] = useState(0);
	// const {  isLoading, error,    fetchEvents, page   } = useEventsData();
	// const [isToggle, setIsToggle] = useState(false);

	fetchMyEventsRef.current = fetchEvents

	const handleNavbarSearch = term => {
		setSearchTerm(term)
		fetchEvents(`&keyword=` + term)
		// console.log("El paramatero es: " + term);
	}

	const handlePageClick = useCallback(
		({ selected }) => {
			console.log(selected)
			fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
		},
		[searchTerm, fetchEvents],
	)

	// const fetchMyEvents = () => fetchEvents()
	fetchMyEventsRef.current = fetchEvents
	useEffect(() => {
		// fetchEvents();
		fetchMyEventsRef.current()
	}, [])

	// setTimeout(() => {
	//   setContar(contar + 1);
	// }, 1000);

	const renderEvents = () => {
		//   isLoading ? (<Loading />) : ( <Events searchTerm={searchTerm} events={events} />);
		//   {!!error && <div>Ha ocurrido un error</div>;}

		if (isLoading) {
			return <Loading />
		} else if (error) {
			return <div>Ha ocurrido un error</div>
		} else {
			return (
				<div>
					{/* <button onClick={() => setIsToggle(!isToggle)}>{isToggle ? "On'" : "Off"}</button> */}
					<Events
						searchTerm={searchTerm}
						events={events}
					/>
					<ReactPaginate
						className={styles.pagination}
						nextClassName={styles.next}
						previousClassName={styles.previous}
						pageClassName={styles.page}
						activeClassName={styles.active}
						disabledClassName={styles.disabledPage}
						breakLabel='...'
						nextLabel='>'
						onPageChange={handlePageClick}
						pageRangeDisplayed={5}
						pageCount={page.totalPages}
						previousLabel='<'
						renderOnZeroPageCount={null}
					/>
				</div>
			)
		}
	}

	return (
		<>
			{/* <p>Contador: {contar}</p> */}
			<Navbar
				onSearch={handleNavbarSearch}
				ref={containerRef}
			/>
			<h1> Cartelera de eventos</h1>
			{/* contar < 10 ? <Lista/> : <Navbar/> */}
			{renderEvents()}
			{/* <Lista /> */}
			{/* <SignupForm/> */}
			<Link to='https://javiersantoyo.dev/'>Portafolio</Link>
		</>
	)
}
