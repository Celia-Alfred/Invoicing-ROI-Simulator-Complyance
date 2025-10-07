import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const ReportModal = ({ open, onClose, report }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto mt-20">
        <Typography variant="h6" className="font-bold mb-4">
          Detailed Report
        </Typography>
        <Typography className="mb-2">Invoice Amount: ${report?.invoiceAmount}</Typography>
        <Typography className="mb-2">Processing Time: {report?.processingTime} days</Typography>
        <Typography className="mb-2">Automation Level: {report?.automationLevel}</Typography>
        <Typography className="mb-2">Estimated ROI: ${report?.roi}</Typography>
        <Button
          variant="contained"
          color="primary"
          className="mt-4"
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ReportModal;
