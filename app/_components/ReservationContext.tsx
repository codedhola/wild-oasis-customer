"use client";

import { createContext, useContext, useState } from "react";

type Range = {
  from: Date | null;
  to: Date | null;
}

type ReservationContextType = {
  range: Range;
  setRange: (range: Range) => void;
  resetRange: () => void;
}

const ReservationContext = createContext<ReservationContextType | null>(null);

const initialState: Range = { from: null, to: null };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === null)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };