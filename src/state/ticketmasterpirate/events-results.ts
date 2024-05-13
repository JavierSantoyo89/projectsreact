//*********************/  Events results store  *********************/
import { create } from 'zustand'

// Store para guardar valores de manera global


// # ConsumerSecret = FJhlMfCAOKGuTfy6
// # https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=0hCU3NVWVOxG0kDeuajvTcJxsL3OvVzP
// # https://app.ticketmaster.com/discovery/v2/events.json?apikey=csVu0RoyXwiLaeA95yQZwJ7UUhuAzr0G


const useEventsResults = create(set => ({
	data: [],
	error: null,
	isLoading: false,
	fetchEvents: async (params?:string) => {
        

        console.log('el apikey es: ' + import.meta.env.VITE_TICKETMASTER_API_KEY);
		try {
			await set(() => ({ isLoading: true }))
            const site = "https://app.ticketmaster.com/discovery/v2/events.json?apikey="

// const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=csVu0RoyXwiLaeA95yQZwJ7UUhuAzr0G&countryCode=MX${params?.length ? params : ''}`);

const response = await fetch(`${site}${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : ''}`);
const data = await response.json()
			console.log('el resultado del fetch en events-results es: ',data);
			
			await set(() => ({ data, isLoading: false }))
		} catch (error) {
			await set(() => ({ error }))
		}
	},
}))

export default useEventsResults
