import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

import {
  Typography,
  Card,
  CardContent,
  Button,
  Stack
} from "@mui/material";

function Reports() {

  const downloadCSV = async (endpoint, filename) => {

    try {

      const response = await API.get(endpoint, {
        responseType: "blob"
      });

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", filename);

      document.body.appendChild(link);

      link.click();

      link.remove();

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <MainLayout>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Reports
      </Typography>

      <Card>

        <CardContent>

          <Stack spacing={2}>

            <Button
              variant="contained"
              onClick={() =>
                downloadCSV("/reports/orders", "orders.csv")
              }
            >
              Download Orders CSV
            </Button>

            <Button
              variant="contained"
              onClick={() =>
                downloadCSV("/reports/customers", "customers.csv")
              }
            >
              Download Customers CSV
            </Button>

            <Button
              variant="contained"
              onClick={() =>
                downloadCSV("/reports/restaurants", "restaurants.csv")
              }
            >
              Download Restaurants CSV
            </Button>

            <Button
              variant="contained"
              onClick={() =>
                downloadCSV("/reports/deliveries", "deliveries.csv")
              }
            >
              Download Deliveries CSV
            </Button>

          </Stack>

        </CardContent>

      </Card>

    </MainLayout>

  );

}

export default Reports;