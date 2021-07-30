const express = require('express');
const router = express.Router();

router.get(`/:comment_id`, (req, res) => {
   res.send(`comments get`)
})
router.get(`/:comment_id/like`, (req, res) => {
   res.send(`comments get`)
})
router.post(`/:comment_id/like`, (req, res) => {
   res.send(`comments post`)
})
router.patch(`/:comment_id`, (req, res) => {
   res.send(`comments patch`)
})
router.delete(`/:comment_id`, (req, res) => {
   res.send(`comments delete`)
})
router.delete(`/:comment_id/like`, (req, res) => {
   res.send(`comments delete`)
})

module.exports = router;