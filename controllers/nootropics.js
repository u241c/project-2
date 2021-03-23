const Nootropic = require('../models/nootropic');


function newNootropic(req, res){
    res.render('nootropics/new');

}
function create(req, res){
     Nootropic.create(req.body, function(err, nootropic){
        console.log(nootropic);
        res.redirect('/');
    });
}
function index(req, res){
    Nootropic.find({}, function(err, nootropics){
        res.render('nootropics/index',{nootropics});
    });
};
// DELETE
//  router.delete("/:id", (req, res) => {
    // res.send('deleting...')
  function deleteNootropic(req, res){    
    Nootropic.findByIdAndRemove(req.params.id, (err, data) => {
       res.redirect("/nootropics");
     });
    }
   // res.send(req.body)
function update(req, res)  { 
   Nootropic.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updateModel) => {
      if (err) {
      } else {
        // res.send(updateModel);
        res.redirect(`/nootropics/${req.params.id}`);  
      }})}
    module.exports = {
        new: newNootropic,
        create,
        index, 
        delete: deleteNootropic,
        update
}
