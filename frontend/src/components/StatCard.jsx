import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

function StatCard({
  title,
  value,
  icon,
  color,
  trend = "+0%",
}) {
  const positive = trend.startsWith("+");

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: "0 12px 28px rgba(0,0,0,.08)",
        transition: "0.3s",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0,0,0,.12)",
        },
      }}
    >
      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          <Box>

            <Typography
              color="text.secondary"
              fontSize={14}
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              mt={1}
            >
              {value}
            </Typography>

            <Box
              mt={1}
              display="flex"
              alignItems="center"
              gap={0.5}
            >
              {positive ? (
                <TrendingUpIcon
                  sx={{
                    color: "#16A34A",
                    fontSize: 18,
                  }}
                />
              ) : (
                <TrendingDownIcon
                  sx={{
                    color: "#DC2626",
                    fontSize: 18,
                  }}
                />
              )}

              <Typography
                color={
                  positive
                    ? "#16A34A"
                    : "#DC2626"
                }
                fontWeight={600}
                fontSize={14}
              >
                {trend}
              </Typography>

            </Box>

          </Box>

          <Avatar
            sx={{
              bgcolor: color,
              width: 65,
              height: 65,
            }}
          >
            {icon}
          </Avatar>

        </Box>

      </CardContent>

    </Card>
  );
}

export default StatCard;