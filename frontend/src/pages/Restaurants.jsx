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

function Restaurants() {

  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    API.get("/restaurants")
      .then((res) => {

        const rows = res.data.map((restaurant, index) => ({

          id: index + 1,

          restaurantId: restaurant.restaurantId,

          totalOrders: restaurant.totalOrders,

          revenue: restaurant.revenue

        }));

        setRestaurants(rows);

      })
      .catch(console.error);

  }, []);

  const filteredRows = useMemo(() => {

    return restaurants.filter((restaurant) =>

      restaurant.restaurantId
        .toString()
        .includes(search)

    );

  }, [restaurants, search]);

  const columns = [

    {

      field: "restaurantId",

      headerName: "Restaurant ID",

      width: 180

    },

    {

      field: "totalOrders",

      headerName: "Orders",

      width: 150

    },

    {

      field: "revenue",

      headerName: "Revenue",

      width: 180,

      valueFormatter: (value) => `₹ ${Number(value).toFixed(2)}`

    }

  ];

  return (

    <MainLayout>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >

        Restaurants

      </Typography>

      <Card sx={{ mb: 3 }}>

        <CardContent>

          <Box mb={2}>

            <TextField

              fullWidth

              label="Search Restaurant ID"

              value={search}

              onChange={(e) => setSearch(e.target.value)}

            />

          </Box>

          <DataGrid

            rows={filteredRows}

            columns={columns}

            autoHeight

            pageSizeOptions={[10,20,50]}

            initialState={{

              pagination: {

                paginationModel: {

                  pageSize: 10,

                  page: 0

                }

              }

            }}

          />

        </CardContent>

      </Card>

    </MainLayout>

  );

}

export default Restaurants;