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

function Deliveries() {

  const [deliveries, setDeliveries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    API.get("/deliveries")
      .then((res) => {

        const rows = res.data.map((delivery, index) => ({

          id: index + 1,

          deliveryId: delivery.deliveryId,

          orderId: delivery.orderId,

          deliveryDistance: delivery.deliveryDistance,

          deliveryTimeActual: delivery.deliveryTimeActual,

          deliveryDelay: delivery.deliveryDelay,

          trafficCondition: delivery.trafficCondition,

          weatherCondition: delivery.weatherCondition,

          predictedDeliveryMode: delivery.predictedDeliveryMode,

        }));

        setDeliveries(rows);

      })
      .catch(console.error);

  }, []);

  const filteredRows = useMemo(() => {

    return deliveries.filter((delivery) =>

      delivery.orderId.toLowerCase().includes(search.toLowerCase())

    );

  }, [deliveries, search]);

  const columns = [

    { field: "deliveryId", headerName: "Delivery ID", width: 120 },

    { field: "orderId", headerName: "Order ID", width: 180 },

    { field: "deliveryDistance", headerName: "Distance (km)", width: 140 },

    { field: "deliveryTimeActual", headerName: "Time (min)", width: 130 },

    { field: "deliveryDelay", headerName: "Delay (min)", width: 130 },

    { field: "trafficCondition", headerName: "Traffic", width: 150 },

    { field: "weatherCondition", headerName: "Weather", width: 150 },

    { field: "predictedDeliveryMode", headerName: "Mode", width: 160 },

  ];

  return (

    <MainLayout>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Deliveries
      </Typography>

      <Card sx={{ mb: 3 }}>

        <CardContent>

          <Box mb={2}>

            <TextField

              fullWidth

              label="Search Order ID"

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

    </MainLayout>

  );

}

export default Deliveries;