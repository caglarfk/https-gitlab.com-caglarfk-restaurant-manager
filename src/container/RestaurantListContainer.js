import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { del, update } from '../features/restaurantSlice';
import { Button, Dialog, Slide } from '@mui/material';

import RestaurantFormDialog from '../components/RestaurantFormDialog';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;

});

function RestaurantListContainer() {
  const [dialog, setDialog] = useState({ open: false, item: null });
  const restaurants = useSelector((state) => state.restaurant.data);
  const dispatch = useDispatch();


  const handleClick = (event, cellValues) => {
    event.stopPropagation();
    console.log(cellValues.row);
    dispatch(del(cellValues.row))
  };

  const updateClick = (e, id) => {
    e.stopPropagation();

    setDialog({
      ...dialog,
      open: true,
      item: restaurants.find(x => x.id == id)
    });
  }

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

    }, {
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
      }
    }, {
      field: "güncelle",
      sortable: false,
      width: 200,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              updateClick(event, cellValues.row.id);
            }}
          >
            Update
          </Button>
        );
      }

    }
  ];

  console.log('RestaurantListContainer render dialog :: ', dialog);
  return (
    <div>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={restaurants}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
        />
      </div>
      <Dialog
        open={dialog.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          setDialog({
            open: false,
            item: null,
            ...dialog,
          })
        }}
        aria-describedby="alert-dialog-slide-description"
      >
       {dialog.item && (
         <RestaurantFormDialog {...dialog.item} onSave={(item) => {
           // update item in redux
           dispatch(update(item));
           // close dialog
           setDialog({
             ...dialog,
             open: false,
             item: null
           })
          
         }} onOut={(item)=>{
          setDialog({
            ...dialog,
            open: false,
            item: null
          })
           }} />
       )}
      </Dialog>
    </div>
  )
}

export default RestaurantListContainer;