import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../RootStore";
import { Moment } from "moment/moment";

interface Props {
  moment: Moment;
  decimal: number;
  isDisabled: boolean;
}

const TimeItem = ({ moment, decimal, isDisabled }: Props) => {
  const { setSelectedTime, selectedTime } = useStore();

  const formattedTime = useMemo(() => {
    return moment.format("H:mm");
  }, [moment]);

  const classNames = ["dayItem", selectedTime === decimal ? "selected" : ""].join(" ");

  return (
    <button className={classNames} onClick={() => setSelectedTime(decimal)} disabled={isDisabled}>
      {formattedTime}
    </button>
  );
};

export default observer(TimeItem);
