import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

const SimulationForm = ({ onSimulate }) => {
  const [formData, setFormData] = useState({
    invoiceAmount: "",
    processingTime: "",
    automationLevel: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSimulate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">ROI Simulator</h2>
      <TextField
        label="Invoice Amount ($)"
        type="number"
        name="invoiceAmount"
        value={formData.invoiceAmount}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Processing Time (days)"
        type="number"
        name="processingTime"
        value={formData.processingTime}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        select
        label="Automation Level"
        name="automationLevel"
        value={formData.automationLevel}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      >
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </TextField>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="mt-4 w-full"
      >
        Simulate ROI
      </Button>
    </form>
  );
};

export default SimulationForm;
