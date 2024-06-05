

// // src/components/Static/Grid/Myapp.js
// import React, { useState, useEffect } from 'react';
// import DataGrid from './DataGrid';

// const Myapp = () => {
//     const [rowData, setRowData] = useState([]);

//     useEffect(() => {
//         // Fetch data from API or define static data
//         setRowData([
//             { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com" },
//             { id: 2, name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
//             { id: 3, name: "Steve Brown", age: 40, email: "steve.brown@example.com" },
//             { id: 4, name: "Lisa White", age: 35, email: "lisa.white@example.com" },
//             // Add more rows as needed
//         ]);
//     }, []);

//     return (
//         <div className="Myapp">
//             <DataGrid rowData={rowData} />
//         </div>
//     );
// };

// export default Myapp;


// // src/components/Static/Grid/Myapp.jsx
// import React, { useState, useEffect } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import { Button, Input } from 'antd'; // Import Button and Input from antd
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';

// const { Search } = Input; // Destructure Search component from Input

// const Myapp = () => {
//     const [rowData, setRowData] = useState([]);
//     const [gridApi, setGridApi] = useState(null);
//     const [searchText, setSearchText] = useState('');

//     useEffect(() => {
//         // Fetch data from API or define static data
//         setRowData([
//             { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com" },
//             { id: 2, name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
//             { id: 3, name: "Steve Brown", age: 40, email: "steve.brown@example.com" },
//             { id: 4, name: "Lisa White", age: 35, email: "lisa.white@example.com" },
//             // Add more rows as needed
//         ]);
//     }, []);

//     const onGridReady = (params) => {
//         setGridApi(params.api);
//     };

//     const onExportClick = () => {
//         const params = {
//             fileName: 'export',
//             sheetName: 'Sheet1',
//         };

//         // Get grid data
//         const gridData = gridApi.getDataAsCsv();
        
//         // Convert data to Excel format
//         const excelData = new Blob([gridData], { type: 'text/csv;charset=utf-8' });
        
//         // Save file
//         saveAs(excelData, 'grid_data.csv');
//     };

//     const onFilterTextChange = (value) => {
//         setSearchText(value);
//         gridApi.setQuickFilter(value);
//     };

//     const defaultColDef = {
//         sortable: true,
//         filter: true,
//         resizable: true,
//     };

//     return (
//         <div className="Myapp">
//             <h1>Data Grid Example</h1>
//             <div>
//                 <div style={{ marginBottom: '10px' }}>
//                     <Search
//                         placeholder="Search"
//                         enterButton="Search"
//                         size="small"
//                         value={searchText}
//                         onChange={(e) => onFilterTextChange(e.target.value)}
//                         style={{ marginRight: '10px' }}
//                     />
//                     <Button onClick={onExportClick} type="primary">
//                         Export to Excel
//                     </Button>
//                 </div>
//                 <div
//                     className="ag-theme-alpine"
//                     style={{
//                         height: '500px',
//                         width: '100%',
//                     }}
//                 >
//                     <AgGridReact
//                         rowData={rowData}
//                         columnDefs={[
//                             { headerName: 'ID', field: 'id' },
//                             { headerName: 'Name', field: 'name' },
//                             { headerName: 'Age', field: 'age' },
//                             { headerName: 'Email', field: 'email' },
//                         ]}
//                         defaultColDef={defaultColDef}
//                         pagination={true}
//                         paginationPageSize={10}
//                         onGridReady={onGridReady}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Myapp;


import React, { useState, useEffect } from 'react';
import DataGrid from './DataGrid';

const Myapp = () => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        // Fetch data from API or define static data
        setRowData([
            { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com", actions:"Response" },
            { id: 2, name: "Jane Smith", age: 30, email: "jane.smith@example.com", actions:"Response" },
            { id: 3, name: "Steve Brown", age: 40, email: "steve.brown@example.com", actions:"Response" },
            { id: 4, name: "Lisa White", age: 35, email: "lisa.white@example.com", actions:"Response" },
            // Add more rows as needed
        ]);
    }, []);

    return (
        <div className="Myapp">
            <DataGrid rowData={rowData} />
        </div>
    );
};

export default Myapp;


