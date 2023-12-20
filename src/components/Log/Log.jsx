'use client'
import React, { useEffect, useState } from 'react'
import styles from './Log.module.scss'
import { Switch, Typography } from '@mui/material'
import { useContextData } from '@/app/context'

const insert = (array, index, newItem) => {
    const newArray = array.filter(item => item !== newItem)
    return [...newArray.slice(0, index), newItem, ...newArray.slice(index)]
}

const Log = () => {
    const { setLog, setStep, setIsStrength } = useContextData()
    const [currentLog, setCurrentLog] = useState([])
    
    useEffect(() => {
        setLog(currentLog)
    }, [currentLog, setLog])

    const handleChange = (e, log, logIndex, setIndex) => {
        const key = e.target.name
        const value = e.target.value
        const newSet = {
            ...log.sets[setIndex],
            [key]: value
        }
        log.sets[setIndex] = newSet
        const newCurrentLog = insert(currentLog, logIndex, log)
        setCurrentLog(newCurrentLog)
    }
    return (
        <div className={styles.log}>
            <Typography sx={{
                    fontSize: {
                        lg: '1rem',
                        md: '1rem',
                        sm: '1rem',
                        xs: '0.8rem',
                    },
                    fontFamily: 'Copperplate'
                }}>Please enter your workout below</Typography>
            <Switch sx={{ fill: 'white' }} onChange={(e) => setIsStrength(e.target.checked)}/> 
            <Typography variant="caption" sx={{
                    fontSize: {
                        lg: '0.75rem',
                        md: '0.75rem',
                        sm: '0.75rem',
                        xs: '0.5rem',
                    },
                    fontFamily: 'Copperplate',
                    mb: 3
                }}>{'←'} Turn this on to focus on strength</Typography>
            <div className={styles.list}>
                {currentLog.map((log, logIndex) => (
                    <div key={logIndex} className={styles.exerciseLogWrapper}>
                        <input placeholder='Exercise Name' onChange={(e) => {
                            log.name = e.target.value
                            const newCurrentLog = insert(currentLog, logIndex, log)
                            setCurrentLog(newCurrentLog)
                        }}/>
                        {log.sets.map((_, setIndex) => (
                            <div key={setIndex} className={styles.exerciseLog}>
                                <input name='reps' placeholder='Repetitions MAX: 36' onChange={(e) => handleChange(e, log, logIndex, setIndex)} type='number'/>
                                X<input name='weight' placeholder='Weight' type='number' onChange={(e) => handleChange(e, log, logIndex, setIndex)}/>KG/LBS
                                </div>
                        ))}
                        <button onClick={() => {
                            log.sets.push({
                                reps: 0,
                                weight: 0
                            })
                            const newCurrentLog = insert(currentLog, logIndex, log)
                            setCurrentLog(newCurrentLog)
                        }}>Add Set</button>
                    </div>
                ))}
                <button onClick={() => setCurrentLog([...currentLog, {name: '', sets: [{reps: 0, weight: 0}]}])}>Add Exercise</button>
            </div>
            <button onClick={() => setStep(4)}>Get Revised Workout</button>
        </div>
    )
}

export default Log