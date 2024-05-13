import { useState } from 'react'
import { LIKED_EVENTS_STORAGE_KEY } from '../utils/ticketmasterpirate/constants'
// const LIKED_EVENTS_STORAGE_KEY = "likedEvents";

//*********************/ useLikeEvents *********************/
//*********************  Check if event is liked  *********************/

interface LikedEvent {
	eventId: string 
	id: string
}

const checkIsEventLiked = (eventId: string):boolean => {
	const likedEvents: LikedEvent[] = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY) || '[]');
	// console.log(likedEvents);
	return likedEvents.some(event => event.eventId === eventId);
}

const useLikeEvents = (eventId:string) => {
	const [isEventLiked, setIsEventLiked] = useState<boolean>(checkIsEventLiked(eventId))

	const toggleEventLike = () => {
		// const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || []
	const likedEvents: LikedEvent[] = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY) || '[]');
		
		const eventIndex = likedEvents.findIndex(event => event.eventId === eventId);

		if (eventIndex !== -1) {
			likedEvents.splice(eventIndex, 1)
			setIsEventLiked(false)
		} else {
			likedEvents.push({eventId, id: eventId})
			setIsEventLiked(true)
		}
		localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents))
	}
	return {
		isEventLiked,
		toggleEventLike,
	}
}

export default useLikeEvents
