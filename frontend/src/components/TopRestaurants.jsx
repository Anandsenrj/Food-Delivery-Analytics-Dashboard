import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

function TopRestaurants() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {

    API.get("/analytics/top-restaurants")
      .then((res) => {

        const rows = res.data.map((restaurant, index) => ({

          id: index + 1,

          rank: index + 1,

          restaurantId: restaurant.restaurantId,

          revenue: restaurant.revenue

        }));

        setRestaurants(rows);

      })

      .catch(console.error);

  }, []);

  const columns = [

    {
      field: "rank",
      headerName: "Rank",
      width: 90
    },

    {
      field: "restaurantId",
      headerName: "Restaurant",
      flex: 1
    },

    {
      field: "revenue",
      headerName: "Revenue",
      flex: 1,
      valueFormatter: (value) => `₹ ${Number(value).toFixed(2)}`
    }

  ];

  return (

    <Card
      sx={{
        borderRadius: 3
      }}
    >

      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >

          Top Restaurants

        </Typography>

        <DataGrid

          rows={restaurants}

          columns={columns}

          pageSizeOptions={[5]}

          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
                page: 0
              }
            }
          }}

          disableRowSelectionOnClick

          autoHeight

        />

      </CardContent>

    </Card>

  );

}

export default TopRestaurants;