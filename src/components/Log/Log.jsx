'use client'
import React from 'react'
import styles from './Log.module.scss'
import parseGymLog from 'parse-gym-log'
import { Typography } from '@mui/material'
import { useContextData } from '@/app/context'

const Log = () => {
    const { setLog } = useContextData()
    const handleChange = ({ target: { value } }) => {
        try {
            const log = parseGymLog(value)
            setLog(log)
        } catch (e) {
            console.log('ERROR')
        }
    }

    return (
        <div>
            <Typography>Please enter your latest workout log for the suggested muscle groups below</Typography>
            <textarea 
                className={styles.log}
                onChange={handleChange}
                type="text"
                placeholder={'20.04.2018\n==========\n\n# squat\n\n5 x 100kg\n5 x 100kg\n\n# overhead press\n\n5 x 50kg\n5 x 50kg\n5 x 50kg\n\n# bench press\n\n3 x 5 x 100kg'}
                defaultValue={'20.04.2018\n==========\n\n# squat\n\n5 x 100kg\n5 x 100kg\n\n# overhead press\n\n5 x 50kg\n5 x 50kg\n5 x 50kg\n\n# bench press\n\n3 x 5 x 100kg'}
            />
        </div>
    )
}

export default Log