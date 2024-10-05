import React from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '../../data';
export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps>  = ({}) => {
  const pageSize = 5;
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</> 
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</> 
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</> 
    }
  ];
	return (
		<>
      <DataGrid 
        disableColumnSelector
        disableRowSelectionOnClick
        rows={People}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: pageSize, page: 0 },
          },
        }}
        pageSizeOptions={[pageSize]}
        getRowId={(row: any) => row.id}
      />
    </>
	);
};


export default Home;
