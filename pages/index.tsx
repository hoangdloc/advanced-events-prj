import Head from "next/head";
import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-utils";
import { Event } from "@/types/event";
import { GetStaticProps } from "next";

interface HomePageProps {
  events: Event[];
}

const HomePage = (props: HomePageProps): JSX.Element => {
  return (
    <div>
      <Head>
        <title>NextEvents</title>
        <meta name="description" content="Find a lot of great events that allow you to envolve..."  />
      </Head>
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  };
};

export default HomePage;
