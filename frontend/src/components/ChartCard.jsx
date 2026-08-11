import { Card, CardContent, Typography, Box } from "@mui/material";

function ChartCard({ title, subtitle, children }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Box mb={3}>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>

          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>

        {children}
      </CardContent>
    </Card>
  );
}

export default ChartCard;