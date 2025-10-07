import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ResultsCard = ({ results }) => {
  if (!results) return null;

  return (
    <Card className="max-w-md mx-auto mt-6 shadow-lg">
      <CardContent>
        <Typography variant="h6" className="font-bold mb-2">
          Simulation Results
        </Typography>
        <Typography>
          Estimated ROI: <span className="font-semibold">${results.roi}</span>
        </Typography>
        <Typography>
          Savings: <span className="font-semibold">${results.savings}</span>
        </Typography>
        <Typography>
          Time Reduction: <span className="font-semibold">{results.timeSaved} days</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResultsCard;
