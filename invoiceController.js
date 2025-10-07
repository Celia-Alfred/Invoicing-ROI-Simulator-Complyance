import Invoice from "../models/Invoice.js";

// Create invoice
export const createInvoice = async (req, res) => {
  const { clientName, amount } = req.body;
  try {
    const roi = amount * 0.2; // Example ROI calculation
    const invoice = await Invoice.create({ clientName, amount, roi });
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all invoices
export const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
    