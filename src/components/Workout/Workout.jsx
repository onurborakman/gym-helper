'use client'
import React from 'react'
import { useContextData } from '@/app/context'
import { Typography } from '@mui/material'

const BodyParts = {
    Core: [
        'obliques',
        'abs'
    ],
    Shoulders: [
        'back-deltoids',
        'front-deltoids',
        'neck'
    ],
    Chest: [
        'chest',
        'front-deltoids',
        'triceps'
    ],
    Arms: [
        'biceps',
        'triceps',
        'forearm'
    ],
    Legs: [
        'abductors',
        'gluteal',
        'adductor',
        'quadriceps',
        'hamstring',
        'knees',
        'calves',
        'left-soleus',
        'right-soleus'
    ],
    Back: [
        'trapezius',
        'upper-back',
        'lower-back',
        'biceps',
        'back-deltoids'
    ]
}

const getNotSoreWorkoutsList = soreness => {
    const soreWorkouts = []
    const bodyParts = Object.keys(BodyParts)
    soreness?.forEach(soreMuscle => {
        bodyParts.forEach(bodyPart => {
            if(BodyParts[bodyPart].includes(soreMuscle)){
                soreWorkouts.push(bodyPart)
            }
        })
    })
    return bodyParts.filter(bodyPart => !soreWorkouts.includes(bodyPart))
}

const Workout = () => {
    const {
        soreness, 
        schedule,
        Workouts
    } = useContextData()
    const whatToWorkout = Workouts.filter(workout => !schedule?.includes(workout))
    const notSoreWorkouts = getNotSoreWorkoutsList(soreness)
    if(whatToWorkout.length === 0 || notSoreWorkouts.length === 0){
        return (<>
            Take a rest day, champion.
        </>)
    }
    const allWorkouts = [...whatToWorkout, ...notSoreWorkouts]
    const todaysWorkout = allWorkouts.filter((item, index) => allWorkouts.indexOf(item) !== index)
    return (
        <div style={{ textAlign: 'center' }}>
            <Typography sx={{
                    fontSize: {
                        lg: '1rem',
                        md: '1rem',
                        sm: '1rem',
                        xs: '0.8rem',
                    },
                    fontFamily: 'Copperplate'
                }}>Results</Typography>
            <Typography variant='caption' sx={{
                    fontSize: {
                        lg: '0.75rem',
                        md: '0.75rem',
                        sm: '0.75rem',
                        xs: '0.5rem',
                    },
                    fontFamily: 'Copperplate',
                    mb: 3
                }}>It is suggested to work out one or more muscle groups below</Typography>
            <ul style={{ textAlign: 'left', listStyle: 'square' }}>
                {todaysWorkout.map((bodyPart, index) => <li key={index}>{bodyPart}</li>)}
            </ul>
        </div>
    )
}

export default Workout