const Task = require("../schemas/tasks");

exports.createTask = (req, res) => {
  const task = new Task({
    ...req.body,
  });
  task
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json(error));
};

exports.getAllTask = (req, res) => {
  Task.find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json(error));
};

exports.getTaskById = (req, res) => {
  Task.findOne({ _id: req.params.id })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json(error));
};

exports.updateTask = (req, res) => {
    Task.updateOne(
      {
        _id: req.params.id,
      },
      {
        _id: req.params.id,
        ...req.body,
      }
    )
      .then((data) =>
        res.status(200).json({ message: "tâche modifiée avec succès" })
      )
      .catch((error) => res.status(400).json(error));
};

exports.deleteTask = (req, res) => {
  Task.deleteOne({ _id: req.params.id })
    .then((data) =>
      res.status(200).json({ message: "tâche supprimée avec succès" })
    )
    .catch((error) => res.json(error));
};

exports.getTotalNumberTasks  = (req, res) => {
  Task.countDocuments()
    .then((count) => res.status(200).json({ totalTasks: count }))
    .catch((error) => res.json(error));
}

exports.getTaskCompletedNumber = (req, res) => {
  Task.countDocuments({ status: "completed" })
    .then((count) => res.status(200).json({ completedTasks: count }))
    .catch((error) => res.json(error));
}

exports.getTaskNotendNumber = (req, res) => {
  Task.countDocuments({ status: "notEnd" })
    .then((count) => res.status(200).json({ notEndTasks: count }))
    .catch((error) => res.json(error));
}
