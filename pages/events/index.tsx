import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/event-search";
import { getAllEvents } from "@/helpers/api-utils";
import { Event } from "@/types/event";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

interface AllEventsPageProps {
  events: Event[];
}

const AllEventsPage = (props: AllEventsPageProps): JSX.Element => {
  const { events } = props;
  const router = useRouter();

  const findEventsHandler = (year: string, month: string): void => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to envolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events: events
    },
    revalidate: 60
  };
};

export default AllEventsPage;
