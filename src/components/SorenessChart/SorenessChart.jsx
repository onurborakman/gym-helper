"use client"
import React, { useState } from "react"
import styles from "./SorenessChart.module.scss"
import { BodyComponent } from "reactjs-human-body"
import { Typography } from "@mui/material"
import { useContextData } from "@/app/context"


const SorenessChart = () => {
    const { soreness, setSoreness } = useContextData()
    const handleChange = (e) => {
        setSoreness(e)
    }
    return (
        <div className={styles['soreness-chart']}>
            <Typography>Muscle Soreness Map</Typography>
            <Typography variant="caption">Please choose the sore body parts below</Typography>
            <BodyComponent
                partsInput={soreness}
                onChange={handleChange}
            />
        </div>
    )
}

export default SorenessChart