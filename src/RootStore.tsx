import { action, makeObservable, observable } from "mobx";
import React from "react";
import { generateTimeSlots, generateUpcomingDays } from "./utils";
import { Moment } from "moment";
import moment from "moment/moment";

const periods = ["Anytime", "Morning", "Afternoon", "Evening"] as const;

export type Period = (typeof periods)[number];

const timeRanges: Record<Period, { from: number; to: number }> = {
  Anytime: { from: 6, to: 21.75 },
  Morning: { from: 6, to: 11.75 },
  Afternoon: { from: 12, to: 16.75 },
  Evening: { from: 15, to: 21.75 },
};

const days = generateUpcomingDays();

class RootStore {
  // I decided to switch to object based days, so that I can easily access the moment object instead of having to parse it again.
  // Moment is heavy. We might not notice this in a such small application,
  // but when it comes we have a lot of days and appointments it might become a problem.
  days: ReturnType<typeof generateUpcomingDays> = [];
  times: ReturnType<typeof generateTimeSlots> = [];
  periods = periods;
  selectedDay: Moment = days[0].moment;
  selectedTime: number | null = null;
  selectedPeriod: Period = periods[0];
  currentTime: Moment = moment();

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
      selectedDay: observable,
      selectedTime: observable,
      selectedPeriod: observable,
      setSelectedDay: action,
      setSelectedTime: action,
      setSelectedPeriod: action,
      updateCurrentTime: action,
    });

    this.days = days;
    this.times = this.regenerateTimeSlots();

    // Update the current time every minute, so that we can see the time change.
    setInterval(this.updateCurrentTime, 60 * 1000);
  }

  requestBooking = () => {
    if (!this.selectedTime) {
      return;
    }

    const formattedDate = this.selectedDay.format("ddd Do MMMM YY");
    const hours = Math.floor(this.selectedTime);
    const minutes = Math.round((this.selectedTime - hours) * 60);
    const formattedTime = moment({ hours, minutes }).format("HH:mm");

    alert(
      `Your booking has been made for ${formattedTime} on ${formattedDate}. We have sent your request to 5 professionals`,
    );
  };

  setSelectedDay = (day: Moment) => {
    this.selectedDay = day;
    this.selectedTime = null;
  };

  setSelectedTime = (time: number) => {
    this.selectedTime = time;
  };

  setSelectedPeriod = (period: Period) => {
    this.selectedPeriod = period;
    this.times = this.regenerateTimeSlots();
  };

  updateCurrentTime = () => {
    this.currentTime = moment();
    this.times = this.regenerateTimeSlots();
  };

  regenerateTimeSlots = () => {
    return generateTimeSlots(
      this.currentTime,
      timeRanges[this.selectedPeriod].from,
      timeRanges[this.selectedPeriod].to,
    );
  };
}

const rootStore = new RootStore();
const StoreContext = React.createContext(rootStore);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
export const useStore = () => React.useContext(StoreContext);
