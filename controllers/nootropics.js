const Nootropic = require('..//models/nootropic');


function newNootropic(req, res){
    res.render('nootropics/new');

}
function create(req, res){
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
      }
    // console.log(req.body);
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
       res.render("/nootropics");
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
        res.redirect("/nootropics");  
      }})}
    module.exports = {
        new: newNootropic,
        create,
        index, 
        delete: deleteNootropic,
        update
}
