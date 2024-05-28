import mongoose from "mongoose";

const { Schema } = mongoose;

const planetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  moons: {
    type: Number,
    required: true,
  },
  asteroids: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  surfaceTemperature: {
    type: Schema.Types.Mixed, // Allows for both Number and Object types
    required: true,
  },
  weatherClimate: {
    type: String,
    required: true,
  },
  travelTime: {
    type: String,
    required: true,
  },
  curiosa: [
    {
      type: String,
      required: true,
    },
  ],
});

//The model (based entirely on all entries in the planetSchema)
const PlanetModel = mongoose.model("PlanetModel", planetSchema);

export default PlanetModel;