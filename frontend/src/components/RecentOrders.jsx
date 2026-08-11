import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

function RecentOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    API.get("/analytics/recent-orders")
      .then((res) => {

        const rows = res.data.map((order, index) => ({

          id: index + 1,

          orderId: order.orderId,

          customerId: order.customerId,

          restaurantId: order.restaurantId,

          orderValue: order.orderValue,

          deliveryMethod: order.deliveryMethod,

          orderTime: new Date(order.orderTime).toLocaleString()

        }));

        setOrders(rows);

      })

      .catch(console.error);

  }, []);

  const columns = [

    {
      field: "orderId",
      headerName: "Order ID",
      width: 170
    },

    {
      field: "customerId",
      headerName: "Customer",
      width: 180
    },

    {
      field: "restaurantId",
      headerName: "Restaurant",
      width: 130
    },

    {
      field: "orderValue",
      headerName: "Order Value",
      width: 140,
      valueFormatter: (value) =>
        `₹ ${Number(value).toFixed(2)}`
    },

    {
      field: "deliveryMethod",
      headerName: "Method",
      width: 140,

      renderCell: (params) => (

        <Chip

          label={params.value}

          color={
            params.value === "Bike"
              ? "success"
              : params.value === "Car"
              ? "primary"
              : "warning"
          }

          size="small"

        />

      )

    },

    {
      field: "orderTime",
      headerName: "Order Time",
      flex: 1
    }

  ];

  return (

    <Card
      sx={{
        mt:3,
        borderRadius:3
      }}
    >

      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >

          <Typography
            variant="h6"
            fontWeight="bold"
          >

            Recent Orders

          </Typography>

        </Box>

        <DataGrid

          rows={orders}

          columns={columns}

          autoHeight

          disableRowSelectionOnClick

          pageSizeOptions={[10,20,50]}

          initialState={{

            pagination:{

              paginationModel:{

                pageSize:10,

                page:0

              }

            }

          }}

        />

      </CardContent>

    </Card>

  );

}

export default RecentOrders;