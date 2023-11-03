const express = require('express');
const { createBranch, getAllBranch, getSingleBranch, deleteSingleBranch, updateBranch } = require('../controller/branchController');

const branchRouter = express.Router();

branchRouter.post("/create_branch", createBranch);

branchRouter.get("/branches", getAllBranch);

branchRouter.get("/branch/:id", getSingleBranch);

branchRouter.patch("/branch/:id", updateBranch);

branchRouter.delete("/branch/:id", deleteSingleBranch);

module.exports = branchRouter;