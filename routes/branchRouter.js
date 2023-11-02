const express = require('express');
const { createBranch } = require('../controller/branchController');

const branchRouter = express.Router();

branchRouter.post("/create_branch", createBranch);

module.exports = branchRouter;