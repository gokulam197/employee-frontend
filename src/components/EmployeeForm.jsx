import { Box, Grid, Grid2, TextField } from '@mui/material';
import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted Successfully!');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
      <Box sx={{ flexGrow: 1 }} style={{margintop:25,paddingleft:3,padding:195}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 38 }}>
        <Grid size={6}>
            
          
          <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" /><br /><br />

        </Grid><br /><br /><br />
        

        <Grid size={6}>
            
          
          <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" /><br /><br />

        </Grid><br /><br /><br />
        <Grid size={6}>
            
          
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" /><br /><br />
  
          </Grid>
          <Grid size={6}>
            
          
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" /><br /><br />
  
          </Grid><br /><br /><br />
          </Grid>
        <button type="submit">Submit</button>
        </Box>
      </form>
    </div>
  );
};

export default EmployeeForm;
