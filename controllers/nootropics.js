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
  function deleteNootropic(req, res){    
    Nootropic.findByIdAndDelete(req.params.id, (err, data) => {
       res.redirect("/nootropics");
     });
    }


    function edit(req, res) {
      Nootropic.findById(req.params.id, (err, nootropic) => {
          res.render('nootropics/edit', { nootropic });
      })
  }
  function update(req, res){
    Nootropic.update(req.body, function(err, nootropic){
       console.log(nootropic);
       res.redirect('/');
   });
}
    
  // function update(req, res)  { 
  //   Nootropic.findByIdAndUpdate(
  //   req.params.id,
  //   req.body,
  //   { new: true },
  //   (err, updateModel) => {
  //     if (err) {
  //      } else {
  //       // res.send(updateModel);
  //       res.redirect(`/nootropics/${req.params.id}`);  
      // }})}
    module.exports = {
        new: newNootropic,
        create,
        index, 
        delete: deleteNootropic,
        edit,
        update
}
