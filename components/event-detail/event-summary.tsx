import classes from "./event-summary.module.css";

interface EventSummaryProps {
  title: string
}

const EventSummary = (props: EventSummaryProps): JSX.Element => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
