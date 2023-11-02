const express = require('express');
const { createBranch, getAllBranch } = require('../controller/branchController');

const branchRouter = express.Router();

branchRouter.post("/create_branch", createBranch);

branchRouter.get("/branches", getAllBranch);

module.exports = branchRouter;