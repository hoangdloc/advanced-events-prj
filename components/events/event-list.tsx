import { Event } from "@/types/event";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

interface EventListProps {
  items: Event[]
}

const EventList = (props: EventListProps): JSX.Element => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          date={event.date}
          title={event.title}
          image={event.image}
          location={event.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
