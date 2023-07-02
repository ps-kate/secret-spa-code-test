import React from "react";
import "./App.css";
import DayList from "./components/DayList";
import TimeList from "./components/TimeList";
import Footer from "./components/Footer";
import PeriodSelector from "./components/PeriodSelector";
import { StoreProvider } from "./RootStore";

const App = () => {
  return (
    <StoreProvider>
      <div className="app">
        <DayList />
        <PeriodSelector />
        <TimeList />
        <Footer />
      </div>
    </StoreProvider>
  );
};
export default App;
