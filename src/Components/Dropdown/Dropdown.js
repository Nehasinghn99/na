import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Dropdown(props) {
    const [v, setV] = React.useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //   setAge(event.target.value as string);
    // };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl variant="standard" style={{"width":"80%","marginLeft":"14px"}} >
          <InputLabel id="demo-simple-select-label">Value</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={v}
            label="Value"
            // onChange={handleChange}
          >
            <MenuItem value={10}>{props.DashboardDropdown.Select1}</MenuItem>
            <MenuItem value={20}>{props.DashboardDropdown.Select2}</MenuItem>
            <MenuItem value={30}>{props.DashboardDropdown.Select3}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

export default Dropdown;