// import SignupForm from "../../components/SingupForm";
// import Lista from '../../components/Lista/lista';
// import useEventsData from "../../hooks/useEventsData";
import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Events from '@components/TicketMasterPirate/Events/Events'
import Navbar from '@components/TicketMasterPirate/Navbar/index'
import { Loading } from '@components/TicketMasterPirate/Loading/Loading'
import styles from './Home.module.css'
import useEventsResults from '../../../state/ticketmasterpirate/events-results'
import { Link } from 'react-router-dom'

//*********************/ Home view *********************/
//*********************/ Show this view on main page *********************/
//********************* Show all events on this page *********************/
type NavbarRef = {
	string: string
}
interface Page {
	size: number
	totalElements: number
	totalPages: number
	number: number
}
interface EventData {
	// Definname:                     string;
	data ?: { _embedded: { events: EventData[] } }, 
	isLoading ?: boolean,
	 error	?: string, 
	fetchEvents ?: (params:string) => void

}

function Home(): JSX.Element {
	const { data , isLoading, error, fetchEvents } = useEventsResults()
	const events = useMemo<EventData[]>(() => data?._embedded?.events || [], [data?._embedded?.events])
	const page = useMemo<Page>(() => data?.page || {}, [data?.page])
	const [searchTerm, setSearchTerm] = useState('')
	// const containerRef = useRef<HTMLDivElement>()
	const containerRef = useRef<RefObject<NavbarRef>>(null)

	const fetchMyEventsRef = useRef<() => void>()
	// const [contar, setContar] = useState(0);
	// const {  isLoading, error,    fetchEvents, page   } = useEventsData();
	// const [isToggle, setIsToggle] = useState(false);

	fetchMyEventsRef.current = fetchEvents

	const handleNavbarSearch = (term: string) => {
		setSearchTerm(term)
		fetchEvents(`&keyword=` + term)
		// console.log("El paramatero es: " + term);
	}

	const handlePageClick = useCallback(
		({ selected }: { selected: number }): void => {
			console.log(selected)
			fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
		},
		[searchTerm, fetchEvents],
	)

	// const fetchMyEvents = () => fetchEvents()
	fetchMyEventsRef.current = fetchEvents
	useEffect(() => {
		// fetchEvents();
		fetchMyEventsRef.current?.()
	}, [])

	// setTimeout(() => {
	//   setContar(contar + 1);
	// }, 1000);

	const renderEvents = (): JSX.Element => {
		//   isLoading ? (<Loading />) : ( <Events searchTerm={searchTerm} events={events} />);
		//   {!!error && <div>Ha ocurrido un error</div>;}
if (typeof isLoading === 'boolean'){
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
  }}

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

export default Home
