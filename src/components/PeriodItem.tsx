interface Props {
  period: string;
}

const PeriodItem = ({ period }: Props) => {
  return <button className="periodItem">{period}</button>;
};

export default PeriodItem;
