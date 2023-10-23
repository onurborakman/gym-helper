'use client'
import React from 'react'
import { useContextData } from '@/app/context'
import { Typography } from '@mui/material'

const BodyParts = {
    Core: 'stomach',
    Shoulders: 'shoulder',
    Chest: 'chest',
    Arms: 'arm',
    Legs: 'leg',
    Back: 'stomach'
}

const Workout = () => {
    const {
        soreness, 
        schedule,
        Workouts
    } = useContextData()
    const whatToWorkout = Workouts.filter(workout => !schedule?.includes(workout))
    const soreBodyParts = Object.keys(soreness || {})
        ?.filter((bodyPart) => soreness[bodyPart].selected)
    const soreWorkouts = Object.values(BodyParts)
        .filter(bodyPart => soreBodyParts.some(soreBodyPart => soreBodyPart.toLowerCase().includes(bodyPart)))
    const soreWorkoutNames = Object.keys(BodyParts)
        .filter(bodyPart => soreWorkouts.some(workout => workout.includes(BodyParts[bodyPart])))
    const whatCanBeWorkedOut = Object.keys(BodyParts).filter(bodyPart => !soreWorkoutNames.includes(bodyPart))

    if(whatToWorkout.length === 0 || whatCanBeWorkedOut.length === 0){
        return (<>
            Take a rest day, champion.
        </>)
    }
    const allWorkouts = [...whatToWorkout, ...whatCanBeWorkedOut]
    const todaysWorkout = allWorkouts.filter((item, index) => allWorkouts.indexOf(item) !== index)
    return (
        <div>
            <Typography>It is suggested that today you should workout these muscles:</Typography>
            <ul>
                {todaysWorkout.map(bodyPart => <li>{bodyPart}</li>)}
            </ul>
        </div>
    )
}

export default Workout