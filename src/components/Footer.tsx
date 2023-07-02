import { useStore } from "../RootStore";

const Footer = () => {
  const { requestBooking } = useStore();

  return (
    <div className="footer">
      <div>
        <p>
          <b>Selected Date & Time</b>
        </p>
        <p>0 professionals available</p>
      </div>
      <button className="bookButton" onClick={requestBooking}>
        Book Now
      </button>
    </div>
  );
};

export default Footer;
