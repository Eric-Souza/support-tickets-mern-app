const express = require("express");
const {
  getTickets,
  getTicketById,
  createTicket,
  deleteTicketById,
  updateTicketById,
} = require("../controllers/ticketController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getTickets).post(protect, createTicket);

router
  .route("/:id")
  .get(protect, getTicketById)
  .delete(protect, deleteTicketById)
  .put(protect, updateTicketById);

module.exports = router;
