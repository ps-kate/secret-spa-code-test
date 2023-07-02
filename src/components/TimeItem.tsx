import { useMemo } from "react";
import moment from "moment";
import { observer } from "mobx-react-lite";
import { useStore } from "../RootStore";

// TODO: this should be created once and updated every minute
// derived should depend on this
const currentTime = moment();

interface Props {
  time: number;
}

const TimeItem = ({ time }: Props) => {
  const { setSelectedTime, selectedTime } = useStore();

  const timeMoment = useMemo(() => {
    const hour = Math.floor(time);
    const minute = Math.round((time - hour) * 60);
    return moment().hour(hour).minute(minute);
  }, [time]);

  const formattedTime = useMemo(() => {
    return timeMoment.format("H:mm");
  }, [timeMoment]);

  const classNames = ["dayItem", selectedTime === time ? "selected" : ""].join(" ");

  const isDisabled = useMemo(() => {
    return timeMoment.diff(currentTime, "hours") < 2;
  }, [timeMoment]);

  return (
    <button className={classNames} onClick={() => setSelectedTime(time)} disabled={isDisabled}>
      {formattedTime}
    </button>
  );
};

export default observer(TimeItem);
