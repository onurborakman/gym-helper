'use client'
import { useContextData } from '@/app/context'
import { Typography } from '@mui/material'
import React from 'react'

const calculateOneRepMax = (weight, rep) => (weight * (36 / (37 - rep)))
const getReps = oneRepMax => (oneRepMax*0.8)

const NewWorkout = () => {
    const { log } = useContextData()
    
    const currentExercises = log && log[0].exercises
    const newExercises = currentExercises?.map(({exercise, sets}) => {
        const weight = sets[0].weight
        const rep = sets[0].reps
        const oneRepMax = calculateOneRepMax(weight, rep)
        const newWeight = getReps(oneRepMax)
        return <li>{sets.length} sets of {exercise.charAt(0).toUpperCase() + exercise.slice(1)} 8-12 repetitions x {newWeight}</li>
    })
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>Today's Workout</Typography>
            <ul>
                {newExercises ? newExercises : 'Please enter the required data on previous steps'}
            </ul>
        </div>
    )
}

export default NewWorkout