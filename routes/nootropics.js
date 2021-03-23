const express = require('express');
const router = express.Router();
const nootropicsCtrl = require('../controllers/nootropics');

router.get('/', nootropicsCtrl.index);
router.get('/new', nootropicsCtrl.new);
// router.get('/:id', nootropicsCtrl.show);
router.post('/', nootropicsCtrl.create);
router.delete('/:id', nootropicsCtrl.delete);
// router.post('/', nootropicsCtrl.create);
router.post('/', nootropicsCtrl.update);




module.exports = router;