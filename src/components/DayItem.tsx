interface Props {
  day: string;
}

const DayItem = ({ day }: Props) => {
  return <button className="dayItem">{day}</button>;
};

export default DayItem;
