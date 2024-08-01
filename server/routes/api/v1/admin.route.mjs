import express from "express";
import {
  getAllComplaints,
  getComplaintById,
  updateComplaintStatus,
  createPackage,
  updatePackageById,
  deletePackageById,
  getComplaintsByParam,
} from "../../../controllers/admin.controller.mjs";
import { validateComplaintStatus } from "../../../middlewares/complaintStatus.validation.mjs";
import authenticateAdmin from "../../../middlewares/authenticateAdmin.middleware.mjs";
import { validatePackageData } from "../../../middlewares/packageData.validation.mjs";

const router = express.Router();

router.get("/complaints", getComplaintsByParam);
router.get("/complaint/:complaintId", getComplaintById);
router.put(
  "/complaint/:complaintId/status",
  [validateComplaintStatus],
  updateComplaintStatus
);

router.post(
  "/package",
  [authenticateAdmin, validatePackageData],
  createPackage
);

router.put(
  "/:packageId",
  [authenticateAdmin, validatePackageData],
  updatePackageById
);

router.delete("/:packageId", [authenticateAdmin], deletePackageById);

export default router;
