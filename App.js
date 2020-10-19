
import { DataGrid } from '@material-ui/data-grid';
import React from 'react'
import Header from './components/Header'
 
const columns = [
  { field: 'ProductName', headerName: 'Product Name', width: 130 },
  { field: 'Description', headerName: 'Description', width: 130 },
  { field: 'Price', headerName: 'Price', width: 100 },
  {
    field: 'quantity',
    headerName: 'quantity',
    type: 'number',
    width: 90,
  },
  {
    field:'category',
    headerName: 'Category',
    width: 70
  },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 90
  },
  {
    field: 'delete',
    headerName: 'delete',
    width: 90
  }
];

const rows = [
  { id: 1, Name: 'Kotak Camera', Category: 1, quantity: 35, price: 5000 },
  { id: 2, Name: 'Novel', Category: 2, quantity: 42, price:400 },
  { id: 3, Name: 'Chocolates', Category: 3, quantity: 45, price: 200 },
  { id: 4, Name: 'Dry fruits', Category: 3, quantity: 16, price:500 },
  { id: 5, Name: 'Shirts', Category: 4, quantity: 22, price: 1000 },
  { id: 6, Name: 'Dresses', Category: 4, quantity: 150, price: 2000 },
  { id: 7, Name: 'Mobiles', Category: 2, quantity: 44, price: 10000 },
  { id: 8, Name: 'Laptops', Category: 1, quantity: 36, price: 50000 },
  { id: 9, Name: 'Bottles', Category: 5, quantity: 65, price: 600 },
];

export default function App() {
  return (
    <div>
      <Header />
       <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pquantitySize={10} checkboxSelection />
    </div>
    </div>
   
  );
}
