const express = require('express');
const router = express.Router();
const nootropicsCtrl = require('../controllers/nootropics');

router.get('/', nootropicsCtrl.index);
router.get('/new', nootropicsCtrl.new);

router.post('/', nootropicsCtrl.create);
router.delete('/:id', nootropicsCtrl.delete);
router.get('/edit', nootropicsCtrl.edit);
router.put('/:id', nootropicsCtrl.update);




module.exports = router;