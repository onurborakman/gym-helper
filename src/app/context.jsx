'use client'
import React, { createContext, useContext, useState } from "react";

const ContextData = createContext(null);

const Workouts = [
    "Chest",
    "Back",
    "Shoulders",
    "Arms",
    "Core",
    "Legs"
]

export function ContextDataProvider({ children }) {
    const [soreness, setSoreness] = useState()
    const [schedule, setSchedule] = useState()
    const [log, setLog] = useState()
    const [step, setStep] = useState(0)
    
    const values = {
        soreness,
        setSoreness,
        schedule,
        setSchedule,
        log,
        setLog,
        Workouts,
        step,
        setStep
    }
  
    return (
      <ContextData.Provider value={values}>
        {children}
      </ContextData.Provider>
    );
  }

export const useContextData = () => useContext(ContextData)