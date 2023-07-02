import { Period, useStore } from "../RootStore";
import { observer } from "mobx-react-lite";

interface Props {
  period: Period;
}

const PeriodItem = ({ period }: Props) => {
  const { setSelectedPeriod, selectedPeriod } = useStore();
  const classNames = ["periodItem", selectedPeriod === period ? "selected" : ""].join(" ");

  return (
    <button className={classNames} onClick={() => setSelectedPeriod(period)}>
      {period}
    </button>
  );
};

export default observer(PeriodItem);
