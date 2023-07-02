import { makeObservable, observable } from "mobx";
import React from "react";
import { generateTimeSlots, generateUpcomingDays } from "./utils";

class RootStore {
  // I decided to switch to object based days, so that I can easily access the moment object instead of having to parse it again.
  // Moment is heavy. We might not notice this in a such small application,
  // but when it comes we have a lot of days and appointments it might become a problem.
  days: ReturnType<typeof generateUpcomingDays> = [];
  times: number[] = [];
  periods = ["Anytime", "Morning", "Afternoon", "Evening"];

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
    });

    this.days = generateUpcomingDays();
    this.times = generateTimeSlots();
  }

  requestBooking = () => {
    alert("Booking requested!");
  };
}

const rootStore = new RootStore();
const StoreContext = React.createContext(rootStore);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
export const useStore = () => React.useContext(StoreContext);
