import { useStore } from "../RootStore";
import DayItem from "./DayItem";

const DayList = () => {
  const { days } = useStore();

  return (
    <div className="dayList">
      {days.map((day) => (
        <DayItem {...day} key={day.iso} />
      ))}
    </div>
  );
};

export default DayList;
