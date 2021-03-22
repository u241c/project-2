const express = require('express');
const router = express.Router();
const nootropicsCtrl = require('../controllers/nootropics');

router.get('/', nootropicsCtrl.index);
router.get('/new', nootropicsCtrl.new);
// router.get('/:id', nootropicsCtrl.show);
router.delete('/:id', nootropicsCtrl.delete);
router.post('/', nootropicsCtrl.update);
router.post('/', nootropicsCtrl.create);




module.exports = router;