import mongoose from "mongoose";

const barcodeSchema = mongoose.Schema({
  barcode: Number,
  itemName: String,
});
