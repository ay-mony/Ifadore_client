import './table.scss';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { rows } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
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
    field: 'type',
    headerName: 'Type',
    width: 140,
    editable: true,
  },
];


export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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
