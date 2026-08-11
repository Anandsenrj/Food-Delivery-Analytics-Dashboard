import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

function TopCustomers() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {

    API.get("/analytics/top-customers")
      .then((res) => {

        const rows = res.data.map((customer, index) => ({

          id: index + 1,

          rank: index + 1,

          customerId: customer.customerId,

          totalSpent: customer.totalSpent

        }));

        setCustomers(rows);

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
      field: "customerId",
      headerName: "Customer",
      flex: 1
    },

    {
      field: "totalSpent",
      headerName: "Total Spent",
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

          Top Customers

        </Typography>

        <DataGrid

          rows={customers}

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

export default TopCustomers;