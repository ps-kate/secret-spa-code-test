import { useStore } from "../RootStore";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import moment from "moment";

const Footer = () => {
  const { requestBooking, selectedDay, selectedTime } = useStore();

  const selectedTimeSlot = useMemo(() => {
    if (!selectedTime) {
      return;
    }

    const formattedDate = selectedDay.format("ddd Do MMMM YY");
    const hours = Math.floor(selectedTime);
    const minutes = Math.round((selectedTime - hours) * 60);
    const formattedTime = moment({ hours, minutes }).format("HH:mm");

    return `${formattedTime} on ${formattedDate}`;
  }, [selectedDay, selectedTime]);

  return (
    <div className="footer">
      <div>
        <p>
          <b>{selectedTimeSlot || "Please select a time"}</b>
        </p>
        <p>0 professionals available</p>
      </div>
      <button className="bookButton" onClick={requestBooking} disabled={!selectedTime}>
        Book Now
      </button>
    </div>
  );
};

export default observer(Footer);
