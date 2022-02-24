import React, {useState} from 'react';
import { Grid, Box, FormControl, InputLabel, OutlinedInput, Button } from '@mui/material';


function RestaurantFormDialog(props) {
    console.log('RestaurantFormDialog props :: ',props);
    const [name, setName] = useState(props.name);
    const [type, setType] = useState(props.type);
    const [city, setCity] = useState(props.city);
    const [district, setDistrict] = useState(props.district);

    const handleSaveClick = () => {
        let data = {
            id: props.id,
            name,
            type,
            city,
            district
        }
        console.log("merhaba handle save click data:::", data);
        props.onSave(data);
    }
    const handleClose=()=>{
        props.onOut();
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e) => setName(e.target.value)} >
                        <InputLabel htmlFor="outlined-adornment-amount"
                        >
                            Restoran Adı
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Restoran-Adı"
                            value={name}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e) => setType(e.target.value)}>
                        <InputLabel htmlFor="outlined-adornment-amount"
                        >
                            Restoran Türü
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Restoran-Türü"
                            value={type}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e) => setCity(e.target.value)}>
                        <InputLabel htmlFor="outlined-adornment-amount" >

                            Restoran İl
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Restoran-İl"
                            value={city}
                        />
                    </FormControl>

                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth sx={{ m: 1 }} onChange={(e) => setDistrict(e.target.value)} >
                        <InputLabel htmlFor="outlined-adornment-amount"
                        >
                            Restoran İlçe
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="Restoran-İlçe"
                            value={district}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="secondary" onClick={handleSaveClick} >
                        Save
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleClose} >
                        çık
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )

}
export default RestaurantFormDialog;