const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users" },
    taskName: { type: String, required: true },
    priority: { type: String, enum: ["high", "medium", "low"], required: true },
    status: { type: String, enum: ["pending", "in-progress", "completed", "notEnd"], default: "pending" },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
});

module.exports = mongoose.model("tasks", taskSchema);
