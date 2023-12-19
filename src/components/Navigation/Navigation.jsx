'use client'
import React from 'react'
import styles from './Navigation.module.scss'
import { useContextData } from '@/app/context'
import { Typography } from '@mui/material'

const Navigation = () => {
    const { setStep } = useContextData()
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Typography variant='h1' sx={{
                    fontSize: {
                        lg: 150,
                        md: 120,
                        sm: 80,
                        xs: 50
                    },
                    fontFamily: 'Copperplate'
                }}>Gym Helpert</Typography></div>
            <div className={styles['button-container']}>
                <button onClick={() => setStep(0)}>Suggest a Muscle Group to Work Out</button>
                <button onClick={() => setStep(3)}>Revise My Workout</button>
            </div>
        </nav>
    )
}

export default Navigation