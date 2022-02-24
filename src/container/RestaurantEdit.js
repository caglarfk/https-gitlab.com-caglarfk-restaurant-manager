import { Container } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import RestaurantForm from '../components/RestaurantForm'
import { add } from '../features/restaurantSlice';


function RestaurantEdit() {
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);
  const handleSaveClick = () => {

    let data = {
      name,
      type,
      city,
      district
    }
    console.log("merhaba handle save click data:::", data);
    dispatch(add(data))
  }


  return (
    <Container>
      <RestaurantForm
        setName={setName}
        setType={setType}
        setCity={setCity}
        setDistrict={setDistrict}
        handleSaveClick={handleSaveClick}
      />
     
    </Container>
  )
}

export default RestaurantEdit;