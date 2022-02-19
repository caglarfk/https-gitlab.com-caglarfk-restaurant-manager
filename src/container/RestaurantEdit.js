import { Container } from '@mui/material'
import React ,{useState}from 'react'
import RestaurantForm from '../components/RestaurantForm'

function RestaurantEdit() {
const[restaurantName,setRestaurantName]=useState(null);
const[restaurantType,setRestaurantType]=useState(null);
const[restaurantProvince,setRestaurantProvince]=useState(null);
const[restaurantDistrict,setRestaurantDistrict]=useState(null);
const[restaurantEstablishmentTime,setRestaurantEstablishmentTime]=useState(null);
let data={
    restaurantName,
    restaurantType,
    restaurantProvince,
    restaurantDistrict,
    restaurantEstablishmentTime
}
  return (
    <Container>
        <RestaurantForm
        setRestaurantName={setRestaurantName}
        setRestaurantType={setRestaurantType}
        setRestaurantProvince={setRestaurantProvince}
        setRestaurantDistrict={setRestaurantDistrict}
        setRestaurantEstablishmentTime={setRestaurantEstablishmentTime}
        />
    </Container>
  )
}

export default RestaurantEdit;