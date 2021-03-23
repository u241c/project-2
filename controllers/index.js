function index(req, res) {
    res. render('index');
};
function deleteNootropic(id) {
    nootropics.splice(id, 1);
   };


module.exports = {
    index,
    deleteNootropic
    
};
