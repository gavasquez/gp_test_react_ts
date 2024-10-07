import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Person } from '../../../../models';
import { addFavorite } from '../../../../redux/states';
import { Checkbox } from '@mui/material';

export type PeopleTableProps = {
	// types...
  people: Person[];
}

const PeopleTable: React.FC<PeopleTableProps>  = ({ people }) => {
  
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  const dispatch = useDispatch();

  const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id);
  const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id);

  
  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople( filteredPeople );
  }

  const pageSize = 5;
  const columns = [
    {
      field: 'actions',
      headerName: '',
      flex: 1,
      width: 50,
      renderCell: (params: GridRenderCellParams) => <>{
        <>
          <Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)}/>
        </>
      }</> 
    },
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
		<DataGrid 
        disableColumnSelector
        disableRowSelectionOnClick
        rows={people}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: pageSize, page: 0 },
          },
        }}
        pageSizeOptions={[pageSize]}
        getRowId={(row: any) => row.id}
      />
	);
};

export default PeopleTable;
