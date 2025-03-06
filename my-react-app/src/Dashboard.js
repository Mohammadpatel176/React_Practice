import React, { useState, useEffect } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper, TablePagination, Button } from "@mui/material";
import { Pie, Line } from "react-chartjs-2";
import { FaDownload } from "react-icons/fa";
import * as XLSX from "xlsx";
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend, PointElement, LineElement);

const DashboardMain = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const statuses = ["New", "Open", "Confirm", "In Process", "Pending", "Close"];

  useEffect(() => {
    fetchData(statuses[selectedTab]);
  }, [selectedTab, page, rowsPerPage]);

  const fetchData = (status) => {
    setData([
      { id: 1, name: "Patient A", status, date: "2025-02-24" },
      { id: 2, name: "Patient B", status, date: "2025-02-23" },
      { id: 3, name: "Patient C", status, date: "2025-02-22" },
    ]);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    XLSX.writeFile(wb, "table_data.xlsx");
  };

  const chartData = {
    labels: statuses,
    datasets: [
      {
        label: "Cases",
        data: [12, 19, 7, 10, 5, 15],
        backgroundColor: ["#3498db", "#2ecc71", "#f1c40f", "#e67e22", "#e74c3c", "#9b59b6"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-xl shadow-lg overflow-hidden h-[80vh]">
      {/* Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-700">Status Distribution</h3>
          <Pie data={chartData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-700">Status Trend</h3>
          <Line data={chartData} />
        </div>
      </div>

      {/* Export Button */}
      <Button
        variant="contained"
        color="secondary"
        className="mt-6 text-white font-semibold bg-gradient-to-r from-teal-500 to-blue-700 hover:from-teal-600 hover:to-blue-800 px-4 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out"
        onClick={exportToCSV}
      >
        <FaDownload className="mr-2" /> Export to Excel
      </Button>

      {/* Data Table Section */}
      <TableContainer component={Paper} className="mt-8 bg-white rounded-xl shadow-xl border border-gray-300">
        <Table>
          <TableHead className="bg-gradient-to-r from-teal-500 to-blue-700 text-white">
            <TableRow>
              <TableCell className="text-white text-lg font-semibold">ID</TableCell>
              <TableCell className="text-white text-lg font-semibold">Name</TableCell>
              <TableCell className="text-white text-lg font-semibold">Status</TableCell>
              <TableCell className="text-white text-lg font-semibold">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id} className="hover:bg-gray-50">
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="bg-white"
        />
      </TableContainer>
    </div>
  );
};

export default DashboardMain;
