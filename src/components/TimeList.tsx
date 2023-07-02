import { useStore } from "../RootStore";
import TimeItem from "./TimeItem";

const TimeList = () => {
  const { times } = useStore();

  return (
    <div className="timeList">
      {times.map((time) => (
        <TimeItem {...time} key={time.decimal} />
      ))}
    </div>
  );
};

export default TimeList;
