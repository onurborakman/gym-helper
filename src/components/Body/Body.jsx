'use client'
import React from 'react'
import styles from './Body.module.scss'
import SorenessChart from '@/components/SorenessChart/SorenessChart'
import Schedule from '@/components/Schedule/Schedule'
import Workout from '@/components/Workout/Workout'
import Log from '@/components/Log/Log'
import Stepper from '@/components/Stepper/Stepper'
import { useContextData } from '@/app/context'
import NewWorkout from '../Workout/NewWorkout'

const Body = () => {
    const { step } = useContextData()
    return (
        <div className={styles.body}>
            <div><Stepper/></div>
            {step === 0 && <SorenessChart/>}
            {step === 1 && <Schedule/>}
            {step === 2 && <Workout/>}
            {step === 3 && <Log/>}
            {step === 4 && <NewWorkout/>}
        </div>
    )
}

export default Body