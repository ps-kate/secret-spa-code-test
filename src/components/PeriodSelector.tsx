import { useStore } from "../RootStore";
import PeriodItem from "./PeriodItem";

const PeriodSelector = () => {
  const { periods } = useStore();

  return (
    <div className="periodSelector">
      {periods.map((p) => (
        <PeriodItem period={p} key={p} />
      ))}
    </div>
  );
};

export default PeriodSelector;
