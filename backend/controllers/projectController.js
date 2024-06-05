const Project = require("../models/projectModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getProject = catchAsync(async (req, res, next) => {
  const { id: projectId } = req.params;

  const project = await Project.findById(projectId);

  if (!project)
    return next(new AppError("No project found with that ID!", 404));

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.getProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find();

  res.status(200).json({
    status: "success",
    length: projects.length,
    data: {
      projects,
    },
  });
});

exports.createProject = catchAsync(async (req, res, next) => {
  const newProject = await Project.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      newProject,
    },
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const { id: projectId } = req.params;

  const updatedProject = await Project.findByIdAndUpdate(projectId, req.body, {
    new: true,
  });

  if (!updatedProject)
    return next(new AppError("No project found with that ID!", 404));

  res.status(200).json({
    status: "success",
    data: {
      updatedProject,
    },
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const { id: projectId } = req.params;

  const deletedProject = await Project.findByIdAndDelete(projectId);

  if (!deletedProject)
    return next(new AppError("No project found with that ID!", 404));

  res.status(204).json({
    status: "success",
    data: null,
  });
});
