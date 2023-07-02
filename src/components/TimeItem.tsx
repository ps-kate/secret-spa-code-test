interface Props {
  time: number;
}

const TimeItem = ({ time }: Props) => {
  return <button className="timeItem">{time}</button>;
};

export default TimeItem;
