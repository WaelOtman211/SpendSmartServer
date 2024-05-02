import mongoose from "mongoose";
const { Schema } = mongoose;

const expensesSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        tracked: {
            type: String,
            trim: true,
            required: false, // Allow null or undefined values
        },
        budget: {
            type: String,
            required: false,
            min: 6,
            max: 64,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Expenses", expensesSchema);
