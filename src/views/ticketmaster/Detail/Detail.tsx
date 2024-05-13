import style from './Datail.module.css'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
// import eventFetcher from "../../utils/fetchevents";
import eventFetcher from '@utils/ticketmasterpirate/fetchevents'

// console.log("el path es; " + window.location);

//*****************************  Detail view  ****************************/
//* Loading API data when page loads but is necessery EventId parameter *//

const pathname = window.location.pathname
// console.log(pathname);
const resource = eventFetcher(pathname.substring(8, pathname.length))
console.log('resource: ' + resource);

interface EventData {
	name: string
	images?: { url: string }[]
	info: string
	dates?: { start: { dateTime: string } }
	seatmap?: { staticUrl: string }
	pleaseNote: string
	priceRanges?: { min: number; max: number; currency: string }[]
	url: string
}

const Detail: React.FC = () => {
	const eventData = resource.eventDetail.read() as unknown as EventData
	console.log('la data en Detail es: ' + eventData)
	console.log('la url es: ' + eventData.url)

	// const [eventData, setEventData] = useState({});
	return (
		<div className={style.container}>
			{/* <h2>Detalle del evento</h2> */}
			<h2 className={style.eventName}>{eventData.name}</h2>
			<div className={style.container}>
				<div className={style.mainInfoContainer}>
					{/* {eventData.images[0].url === undefined ? <Loading/> : <img src={eventData.images[0].url} /> } */}
					<img
						src={eventData.images?.[0].url}
						alt={eventData.name}
						className={style.eventImage}
					/>
					<div className={style.mainInfoContainer}>
						{/* <h4 className={style.eventName}>{eventData.name}</h4> */}
						<div className={style.seatDetail}>
							<p className={style.infoParagraph}> {eventData.info}</p>
							{eventData.dates?.start.dateTime ? (
								<p className={style.dateParagraph}>
									Fecha: {format(new Date(eventData.dates?.start.dateTime), 'dd/MM/yyyy H:mm', { locale: es })} hrs
								</p>
							) : null}
						</div>
					</div>
				</div>
			</div>

			<div className={style.container}>
				<h2 className={style.seatMapTitle}> Mapa del evento</h2>
				<div className={style.seatInfoContainer}>
					<img
						className={style.seatImage}
						src={eventData.seatmap?.staticUrl}
						alt='Seatmap event'
					/>
					<div className={style.seatDetail}>
						<p className={style.pleaseNoteLegend}>{eventData.pleaseNote}</p>
						<p className={style.priceRangeLegend}>
							Rango de precios: {eventData.priceRanges?.[0].min} ~ {eventData.priceRanges?.[0].max}{' '}
							{eventData.priceRanges?.[0].currency}
						</p>
					</div>
				</div>
			</div>
			<button className={style.button}>
				{' '}
				<span>
					<a
						href={eventData.url}
						className={style.seeMoreBtn}>
						ir por tus boletos
					</a>
				</span>
			</button>
		</div>
	)
}

export default Detail
