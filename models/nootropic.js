const mongoose = require("mongoose");

const NootropicSchema = new mongoose.Schema({
  item: {
		type: String,
	},
	category: {
		type: String,
        enum: [ 'cognitive', 'performance', 'stress management']
	},
});

const Nootropic = mongoose.model("Nootropic", NootropicSchema);

module.exports = Nootropic;