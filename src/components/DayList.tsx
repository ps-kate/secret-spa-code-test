import { useStore } from "../RootStore";
import DayItem from "./DayItem";
import { useMemo } from "react";

const DayList = () => {
  const rootStore = useStore();

  // it's better to have this memoized, so that it doesn't recompute on every render. Moment is a bit heavy.
  const days = useMemo(
    () => rootStore.days.map(({ moment }) => moment.format("MMM Do YYYY")),
    [rootStore.days],
  );

  return (
    <div className="dayList">
      {days.map((d) => (
        <DayItem day={d} key={d} />
      ))}
    </div>
  );
};

export default DayList;
