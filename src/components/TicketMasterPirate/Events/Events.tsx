import EventItem from "@components/TicketMasterPirate/Events/components/EventItem/EventItem";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { EventsProps } from "@/types/typesTicketmasterPirata";

//************************* Events view *********************/
//************************* Show all events *********************/

function Events({ searchTerm, events }: EventsProps): JSX.Element {
  const navigate = useNavigate();
  const handleEventItemClick = (id: string) => {
    console.log(`event clicked: ${id}`);
    navigate(`/ticketmasterpirate/detail/${id}`);
  };

  const renderEvents = () => {
    let eventsFiltered = events;
    if (eventsFiltered.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return (
      // let eventsComponent =
      eventsFiltered.map((eventItem) => (
        <EventItem
          key={`event-item ${eventItem.id}`}
          name={eventItem.name}
          info={eventItem.info}
          image={eventItem.images?.[0]?.url}
          onEventClick={handleEventItemClick}
          id={eventItem.id}
        />
      ))
    );
  };

  return (
    <div>
      {renderEvents()}
      {/* {eventsComponent} */}
      {/* <EventItem/> */}
    </div>
  );
}

export default memo(Events);
