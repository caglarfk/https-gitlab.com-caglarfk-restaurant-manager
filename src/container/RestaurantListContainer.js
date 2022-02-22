import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {DataGrid} from '@mui/x-data-grid';
import { del } from '../features/restaurantSlice';
import { Button } from '@mui/material';



function RestaurantListContainer() {
    const restaurants = useSelector((state) => state.restaurant.data);
    const dispatch=useDispatch();

    const handleClick = (event, cellValues) => {
      console.log(cellValues.row);
      dispatch(del(cellValues.row))
    };
  

    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Restaruant name',
          width: 150,
          editable: true,
        },
        {
          field: 'type',
          headerName: 'Restaruant type',
          width: 150,
          editable: true,
        },
        {
          field: 'city',
          headerName: 'City',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'district',
          headerName: 'District',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        
        },{
          field: "Delete",
          renderCell: (cellValues) => {
            return (
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => {
                  handleClick(event, cellValues);
                }}
              >
                delete
              </Button>
            );
          }}
      ];
     
    return (
        <div>
     
         <div  style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={restaurants}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        
        
      
      />
     
    </div>
      
     </div>
    )
}

export default RestaurantListContainer