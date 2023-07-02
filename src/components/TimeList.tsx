import { useStore } from "../App";
import TimeItem from "./TimeItem";

const TimeList = () => {
  const rootStore = useStore();

  return (
    <div className="timeList">
      {rootStore.times.map((t) => (
        <TimeItem time={t} key={t} />
      ))}
    </div>
  );
};

export default TimeList;
