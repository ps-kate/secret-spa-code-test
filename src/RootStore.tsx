import { action, makeObservable, observable } from "mobx";
import React from "react";
import { generateTimeSlots, generateUpcomingDays } from "./utils";
import { Moment } from "moment";

const periods = ["Anytime", "Morning", "Afternoon", "Evening"] as const;
const days = generateUpcomingDays();

export type Period = (typeof periods)[number];

class RootStore {
  // I decided to switch to object based days, so that I can easily access the moment object instead of having to parse it again.
  // Moment is heavy. We might not notice this in a such small application,
  // but when it comes we have a lot of days and appointments it might become a problem.
  days: ReturnType<typeof generateUpcomingDays> = [];
  times: number[] = [];
  periods = periods;
  selectedDay: Moment = days[0].moment;
  selectedTime: number | null = null;
  selectedPeriod: Period = periods[0];

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
    });

    this.days = days;
    this.times = generateTimeSlots();
  }

  requestBooking = () => {
    alert("Booking requested!");
  };

  setSelectedDay = (day: Moment) => {
    this.selectedDay = day;
  };

  setSelectedTime = (time: number) => {
    this.selectedTime = time;
  };

  setSelectedPeriod = (period: Period) => {
    this.selectedPeriod = period;
  };
}

const rootStore = new RootStore();
const StoreContext = React.createContext(rootStore);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
export const useStore = () => React.useContext(StoreContext);
