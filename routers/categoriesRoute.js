const express = require('express');
const router = express.Router();

router.get(`/`, (req, res) => {
   res.send(`categories get`)
})
router.get(`/:category_id`, (req, res) => {
   res.send(`categories get`)
})
router.get(`/:category_id/posts`, (req, res) => {
   res.send(`categories get`)
})
router.post(`/`, (req, res) => {
   res.send(`categories post`)
})
router.patch(`/:category_id`, (req, res) => {
   res.send(`categories patch`)
})
router.delete(`/:category_id`, (req, res) => {
   res.send(`categories delete`)
})

module.exports = router;