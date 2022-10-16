import React, { createContext } from "react";
export const Data = createContext();
export const DataProvider = ({ children }) => {
  const state = {
    data: [
      {
        id: 0,
        newTask: "Do HomeWork",
        description: "Must to do tonight",
        due_date: "2022-05-09",
        piority: "normal",
        checked: false,
      },
      {
        id: 1,
        newTask: "Learn Something",
        description: "Do in free time",
        due_date: "2022-10-10",
        piority: "low",
        checked: false,
      },
    ],
  };

  return <Data.Provider value={state}>{children}</Data.Provider>;
};
