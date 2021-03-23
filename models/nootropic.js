const mongoose = require("mongoose");

const NootropicSchema = new mongoose.Schema({
  name: String,
	category: String,
});

module.exports = mongoose.model("Nootropic", NootropicSchema);

