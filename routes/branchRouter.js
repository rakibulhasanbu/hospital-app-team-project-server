const express = require('express');
const { createBranch, getAllBranch, getSingleBranch } = require('../controller/branchController');

const branchRouter = express.Router();

branchRouter.post("/create_branch", createBranch);

branchRouter.get("/branches", getAllBranch);

branchRouter.get("/branch/:id", getSingleBranch);

module.exports = branchRouter;