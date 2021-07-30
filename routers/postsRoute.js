const express = require('express');
const router = express.Router();

router.get(`/`, (req, res) => {
   res.send(`posts get`)
})
router.get(`/:post_id`, (req, res) => {
   res.send(`posts get`)
})
router.get(`/:post_id/comments`, (req, res) => {
   res.send(`posts get`)
})
router.post(`/:post_id/comments`, (req, res) => {
   res.send(`posts post`)
})
router.get(`/:post_id/categories`, (req, res) => {
   res.send(`posts get`)
})
router.get(`/:post_id/like`, (req, res) => {
   res.send(`posts get`)
})
router.post(`/`, (req, res) => {
   res.send(`posts post`)
})
router.post(`/:post_id/like`, (req, res) => {
   res.send(`posts post`)
})
router.patch(`/:post_id`, (req, res) => {
   res.send(`posts patch`)
})
router.delete(`/:post_id`, (req, res) => {
   res.send(`posts delete`)
})
router.delete(`/:post_id/like`, (req, res) => {
   res.send(`posts delete`)
})

module.exports = router;