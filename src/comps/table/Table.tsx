import './table.scss';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';


interface TableProp {
  rows: any[]
}

const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 50 },
  {
    field: 'fullName',
    headerName: 'FullName',
    width: 160,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 100,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 120,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 80,
    editable: true,
    type: 'number'
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 80,
    editable: true,
  },
  {
    field: 'typeOfTax',
    headerName: 'Type',
    width: 140,
    editable: true,
  },
];


const DataTable:FC<TableProp> = ({rows}) =>{
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        getRowId={(r)=> r._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default DataTable