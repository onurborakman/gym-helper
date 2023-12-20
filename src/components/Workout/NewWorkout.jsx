'use client'
import { useContextData } from '@/app/context'
import { Typography } from '@mui/material'
import React from 'react'

const calculateOneRepMax = (weight, rep) => weight * (36 / (37 - rep))
const getReps = (oneRepMax, isStrength) => {
    if (isStrength) {
        return Math.round(oneRepMax * 0.9)
    }
    return Math.round(oneRepMax * 0.8)
}

const NewWorkout = () => {
    const { log, isStrength } = useContextData()
    
    const currentExercises = log
    const newExercises = currentExercises?.map(({name, sets}, index) => {
        if(!name || !sets[0].weight || !sets[0].reps || sets[0].reps > 36){
            return null
        }
        const weight = +sets[0].weight
        const rep = +sets[0].reps
        const oneRepMax = calculateOneRepMax(weight, rep)
        const newWeight = getReps(oneRepMax, isStrength)
        return <li key={index}>{sets.length} set(s) of {name.charAt(0).toUpperCase() + name.slice(1)} {isStrength ? '4-6' : '8-12'} repetitions x {newWeight} KG/LBS</li>
    }).filter(exercise => exercise !== null)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{
                    fontSize: {
                        lg: '1rem',
                        md: '1rem',
                        sm: '1rem',
                        xs: '0.8rem',
                    },
                    fontFamily: 'Copperplate'
                }}>Revised Workout</Typography>
                <Typography variant="caption" sx={{
                    fontSize: {
                        lg: '0.75rem',
                        md: '0.75rem',
                        sm: '0.75rem',
                        xs: '0.5rem',
                    },
                    fontFamily: 'Copperplate',
                    mb: 3
                }}>This revision is designed to make the workout challenging yet achievable</Typography>
                <Typography variant="caption" sx={{
                    fontSize: {
                        lg: '0.75rem',
                        md: '0.75rem',
                        sm: '0.75rem',
                        xs: '0.5rem',
                    },
                    fontFamily: 'Copperplate',
                    mb: 3
                }}>Note: If you see a performance drop after the first set it is normal. Keep pushing.</Typography>
            <ul style={{ textAlign: 'left', listStyle: 'square' }}>
                {newExercises.length ? newExercises : 'Please enter the required data'}
            </ul>
        </div>
    )
}

export default NewWorkout