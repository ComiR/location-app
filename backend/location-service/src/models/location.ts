import { Schema, model, Document } from 'mongoose';

interface ILocation extends Document {
  name: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

const locationSchema = new Schema<ILocation>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

const Location = model<ILocation>('Location', locationSchema);

export default Location;
