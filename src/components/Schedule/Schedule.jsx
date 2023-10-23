"use client"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListSubheader from '@mui/material/ListSubheader';
import { useContextData } from '@/app/context';

const Schedule = () => {
  const { setSchedule, Workouts, schedule } = useContextData()
  const [checked, setChecked] = React.useState(schedule || [])

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
    <List 
        sx={{ width: '100%', maxWidth: 360, border: '1px solid white' }}
        subheader={
            <ListSubheader
                sx={{
                    bgcolor: 'transparent', 
                    borderBottom: '1px solid white', 
                    color: 'white'
                }}
            >What have you worked out past 7 days?
            </ListSubheader>
        }
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
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Schedule