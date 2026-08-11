import { useEffect, useMemo, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

import { DataGrid } from "@mui/x-data-grid";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
} from "@mui/material";

function Customers() {

  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    API.get("/customers")
      .then((res) => {

        const rows = res.data.map((customer, index) => ({

          id: index + 1,

          customerId: customer.customerId,

          age: customer.age,

          gender: customer.gender,

          location: customer.location,

          rating: customer.customerRating,

          cuisine: customer.preferredCuisine,

          frequency: customer.orderFrequency,

          loyalty: customer.loyaltyProgram,

          history: customer.orderHistory,

        }));

        setCustomers(rows);

      })
      .catch(console.error);

  }, []);

  const filteredRows = useMemo(() => {

    return customers.filter((customer) =>
      customer.customerId.toLowerCase().includes(search.toLowerCase()) ||
      customer.location.toLowerCase().includes(search.toLowerCase()) ||
      customer.cuisine.toLowerCase().includes(search.toLowerCase())
    );

  }, [customers, search]);

  const columns = [

    { field: "customerId", headerName: "Customer ID", width: 180 },

    { field: "age", headerName: "Age", width: 80 },

    { field: "gender", headerName: "Gender", width: 110 },

    { field: "location", headerName: "Location", width: 150 },

    { field: "rating", headerName: "Rating", width: 100 },

    { field: "cuisine", headerName: "Cuisine", width: 160 },

    { field: "frequency", headerName: "Frequency", width: 150 },

    { field: "loyalty", headerName: "Loyalty", width: 120 },

    { field: "history", headerName: "Orders", width: 100 },

  ];

  return (

    <MainLayout>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Customers
      </Typography>

      <Card sx={{ mb: 3 }}>

        <CardContent>

          <Box mb={2}>

            <TextField

              fullWidth

              label="Search Customer"

              value={search}

              onChange={(e) => setSearch(e.target.value)}

            />

          </Box>

          <DataGrid

            rows={filteredRows}

            columns={columns}

            autoHeight

            pageSizeOptions={[10, 20, 50]}

            initialState={{

              pagination: {

                paginationModel: {

                  pageSize: 10,

                  page: 0,

                },

              },

            }}

          />

        </CardContent>

      </Card>

    </MainLayout>

  );

}

export default Customers;