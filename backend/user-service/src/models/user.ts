import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  reputation: number;
  points: number;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  reputation: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
});

const User = model<IUser>('User', userSchema);

export default User;
