'use client'
import React from 'react'
import { Box, Stepper, Step, StepButton, Typography } from '@mui/material';
import { useContextData } from '@/app/context';

const steps = ['Muscle Soreness Information', 'Past 7 Days of Workout', 'Suggested Muscle Groups', 'Workout Log', "Today's Workout"];

const StepperComponent = () => {
  const { setStep } = useContextData() 
  const [activeStep, setActiveStep] = React.useState(0)

  const handleStep = (step) => () => {
    setActiveStep(step)
    setStep(step)
  }

  return (
    <Box sx={{ width: '100%', color: 'white' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={activeStep > index}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              <Typography color="white" variant='caption'>{label}</Typography>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default StepperComponent