const mongoose = require("mongoose");

const NootropicSchema = new mongoose.Schema({
  name: String,
	category: String,
});
// mongodb exported below
module.exports = mongoose.model("Nootropic", NootropicSchema);

