'use client'
import React from 'react'
import styles from './Navigation.module.scss'
import { useContextData } from '@/app/context'
import { Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const Navigation = () => {
    const { setStep } = useContextData()
    const router = useRouter()
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
                <button onClick={() => router.push('/about')}>What is Gym Helpert?</button>
                <button onClick={() => setStep(0)}>Suggest a Muscle Group to Work Out</button>
                <button onClick={() => setStep(3)}>Revise My Workout</button>
            </div>
        </nav>
    )
}

export default Navigation