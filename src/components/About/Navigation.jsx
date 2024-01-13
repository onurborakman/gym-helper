'use client'
import React from 'react'
import styles from './Navigation.module.scss'
import { Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const Navigation = () => {
    const router = useRouter()
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo} onClick={() => router.push('/')}>
                <Typography variant='h1' sx={{
                    fontSize: {
                        lg: 150,
                        md: 120,
                        sm: 80,
                        xs: 50
                    },
                    fontFamily: 'Copperplate'
                }}>Gym Helpert</Typography></div>
        </nav>
    )
}

export default Navigation