 import React from "react";
import "./App.css";
import DayList from "./components/DayList";
import TimeList from "./components/TimeList";
import Footer from "./components/Footer";
import PeriodSelector from "./components/PeriodSelector";
import RootStore from "./RootStore";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

const rootStore = new RootStore();
const StoreContext = React.createContext(rootStore);
export const useStore = () => React.useContext(StoreContext);

const App = () => {
  return (
    <StoreContext.Provider value={rootStore}>
      <div className="app">
        <DayList />
        <PeriodSelector />
        <TimeList />
        <Footer />
      </div>
    </StoreContext.Provider>
  );
};
export default App;
