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
outlets?:         Outlet[];
_embedded:        EventEmbedded;
priceRanges?:     PriceRange[];
pleaseNote?:      string;
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
location:                 Location;
url?:                     string;
aliases?:                 string[];
images?:                  Image[];
parkingDetail?:           string;
accessibleSeatingDetail?: string;
}



export interface Outlet {
url:  string;
type: string;
}

export interface PriceRange {
min:      number;
max:      number;
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

//************************* Events fetch types *********************/
export interface EventsProps {
    searchTerm: string;
    events: Event[];
  }
  
export interface Event {
    id: string;
    name: string;
    info: string;
    images?: { url: string }[];
    image?: string;
  }