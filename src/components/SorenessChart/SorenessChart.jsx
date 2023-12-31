"use client"
import React, { useCallback, useState } from "react"
import styles from "./SorenessChart.module.scss"
import { Typography } from "@mui/material"
import { useContextData } from "@/app/context"
import Model from 'react-body-highlighter'

const SorenessChart = () => {
    const { soreness, setSoreness, setStep } = useContextData()
    const [data, setData] = useState([{ name: 'Training', muscles: soreness ?? [] }])
    const handleClick = useCallback((prop) => {
        const {muscle: newMuscle, data: { frequency }} = prop
        const muscles = soreness || []
        if (frequency === 0) { // Click to select
            setData({ name: 'Training', muscles: [...muscles, newMuscle] })
            setSoreness([...muscles, newMuscle])
        } else { // Click to de-select
            const removed = muscles.filter(muscle => muscle !== newMuscle)
            setData({ name: 'Training', muscles: [...removed] })
            setSoreness([...removed])
        }
    }, [data, setSoreness, soreness])
    return (
        <div className={styles['soreness-chart']}>
            <Typography sx={{
                    fontSize: {
                        lg: '1rem',
                        md: '1rem',
                        sm: '1rem',
                        xs: '0.8rem',
                    },
                    fontFamily: 'Copperplate'
                }}>Muscle Soreness Map</Typography>
            <Typography variant="caption" sx={{
                    fontSize: {
                        lg: '0.75rem',
                        md: '0.75rem',
                        sm: '0.75rem',
                        xs: '0.5rem',
                    },
                    fontFamily: 'Copperplate',
                    mb: 3
                }}>Please choose the sore body parts below</Typography>
            <div className={styles.models}>
                <Model type="anterior" onClick={handleClick} data={data}/>
                <Model type="posterior" onClick={handleClick} data={data}/>
            </div>
            <button onClick={() => setStep(1)}>Next</button>
        </div>
    )
}

export default SorenessChart