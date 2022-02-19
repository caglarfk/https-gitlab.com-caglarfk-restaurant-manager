import React from 'react';
import { Grid, Box, FormControl, InputLabel, OutlinedInput, Button } from '@mui/material';
/* 
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
 */

function RestaurantForm({setRestaurantName,setRestaurantType,setRestaurantProvince,setRestaurantDistrict,setRestaurantEstablishmentTime}) {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }}  onChange={(e)=>setRestaurantName(e.target.value)} >
                        <InputLabel htmlFor="outlined-adornment-amount" 
                       >
                            Restoran Adı
                            </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Restoran-Adı"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e)=>setRestaurantType(e.target.value)}>
                        <InputLabel htmlFor="outlined-adornment-amount"
                         >
                         Restoran Türü
                         </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Restoran-Türü"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e)=>setRestaurantProvince(e.target.value)}>
                        <InputLabel htmlFor="outlined-adornment-amount" >
                        
                            Restoran İl
                            </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Restoran-İl"
                        />
                    </FormControl>
             
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e)=>setRestaurantDistrict(e.target.value)} >
                        <InputLabel htmlFor="outlined-adornment-amount"
                       >
                            Restoran İlçe
                            </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Restoran-İlçe"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e)=>setRestaurantEstablishmentTime(e.target.value)} >
                        <InputLabel htmlFor="outlined-adornment-amount"
                        >
                            Restoran Kuruluş Zamanı
                            </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Restoran-Kuruluş-Zamanı"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary"  >
                         Save
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )

}
export default RestaurantForm;