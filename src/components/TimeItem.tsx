import { useMemo } from "react";
import moment from "moment/moment";

interface Props {
  time: number;
}

const TimeItem = ({ time }: Props) => {
  const formattedTime = useMemo(() => {
    const hours = Math.floor(time);
    const minutes = Math.round((time - hours) * 60);
    return moment({ hours, minutes }).format("H:mm");
  }, [time]);

  return <button className="timeItem">{formattedTime}</button>;
};

export default TimeItem;
