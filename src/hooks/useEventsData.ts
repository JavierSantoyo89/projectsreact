// import useEventsResults from "../state/events-results";
// import eventsJSON from "../data/events.json";
import { useState } from 'react'

//*********************  Events data store  *********************/
//*********************/  Necessary for global fetch  *********************/

// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Welcome {
    _embedded: WelcomeEmbedded;
    page:      Page;
}

export interface WelcomeEmbedded {
    events: Event[];
}

export interface Event {
    name:             string;
    type:             EventType;
    id:               string;
    test:             boolean;
    url:              string;
    images:           Image[];
    outlets?:         Outlet[];
    _embedded:        EventEmbedded;
    priceRanges?:     PriceRange[];
    ticketLimit?:     TicketLimit;
    pleaseNote?:      string;
    info?:            string;
}

export interface EventEmbedded {
    venues:      Venue[];
}



export interface Facebook {
    url: string;
}

export interface Musicbrainz {
    id: string;
}

export interface Image {
    url:          string;
    width:        number;
    height:       number;
    fallback:     boolean;
}

export interface Venue {
    name:                     string;
    id:                       string;
    test:                     boolean;
    postalCode:               string;
    address:                  Address;
    location:                 Location;
    url?:                     string;
    aliases?:                 string[];
    images?:                  Image[];
    parkingDetail?:           string;
    accessibleSeatingDetail?: string;
    ada?:                     Ada;
}

export interface Ada {
    adaPhones:     string;
    adaCustomCopy: string;
    adaHours:      string;
}

export interface Address {
    line1:  string;
    line2?: string;
}


export interface Status {
    code: Code;
}

export enum Code {
    Onsale = "onsale",
    Rescheduled = "rescheduled",
}

export interface Outlet {
    url:  string;
    type: string;
}

export interface PriceRange {
    type:     PriceRangeType;
    currency: Currency;
    min:      number;
    max:      number;
}

export enum Currency {
    Usd = "USD",
}

export enum PriceRangeType {
    Standard = "standard",
}

export interface TicketLimit {
    info: string;
    id?:  TicketLimitID;
}

export enum TicketLimitID {
    TicketLimit = "ticketLimit",
}

export enum EventType {
    Event = "event",
}

export interface Page {
    size:          number;
    totalElements: number;
    totalPages:    number;
    number:        number;
}

const useEventsData = () => {
	const [data, setData] = useState<Welcome | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<Error | undefined>(undefined);

	const fetchEvents = async (params?:string) => {
		try {
			const response = await fetch(
				`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
					import.meta.env.VITE_TICKETMASTER_API_KEY
				}&countryCode=MX${params?.length ? params : ''}`,
			)
			const data: Welcome = await response.json()

			setData(data)
			setIsLoading(false)
		} catch (error) {
			setError(error as Error)
		}
	}

	// const {data, isLoading,error, fetchEvents} = useEventsResults
	return {
		events: data?._embedded?.events || [],
		page: data?.page || {},
		isLoading,
		error,
		fetchEvents,
	}
}
export default useEventsData
