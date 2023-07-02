import { useMemo } from "react";
import moment from "moment";
import { observer } from "mobx-react-lite";
import { useStore } from "../RootStore";

interface Props {
  time: number;
}

const TimeItem = ({ time }: Props) => {
  const { setSelectedTime, selectedTime } = useStore();

  const formattedTime = useMemo(() => {
    const hours = Math.floor(time);
    const minutes = Math.round((time - hours) * 60);
    return moment({ hours, minutes }).format("H:mm");
  }, [time]);

  const classNames = ["dayItem", selectedTime === time ? "selected" : ""].join(" ");

  return (
    <button className={classNames} onClick={() => setSelectedTime(time)}>
      {formattedTime}
    </button>
  );
};

export default observer(TimeItem);
