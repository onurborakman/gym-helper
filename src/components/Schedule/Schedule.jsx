"use client"
import * as React from 'react';
import { Typography, Checkbox, ListItemText, ListItemIcon, ListItemButton, ListItem, List } from '@mui/material';
import { useContextData } from '@/app/context';
import { CheckBoxRounded } from '@mui/icons-material';

const Schedule = () => {
  const { setSchedule, Workouts, schedule, setStep } = useContextData()
  const [checked, setChecked] = React.useState(schedule || [])

  // Function to select/de-select
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
    setSchedule(newChecked)
  };

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
                }}>Which Workouts Have You Completed in the Last 7 days?</Typography>
      <Typography variant="caption" sx={{
                    fontSize: {
                        lg: '0.75rem',
                        md: '0.75rem',
                        sm: '0.75rem',
                        xs: '0.5rem',
                    },
                    fontFamily: 'Copperplate',
                    mb: 3
                }}>Please check all that apply</Typography>
      <List 
          sx={{ width: '100%', maxWidth: 360 }}
      >
        {Workouts.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    sx={{
                      color: 'white'
                    }}
                    checkedIcon={<CheckBoxRounded sx={{color: 'white'}}/>}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <button onClick={() => setStep(2)}>Get Results</button>
    </div>
  );
}

export default Schedule