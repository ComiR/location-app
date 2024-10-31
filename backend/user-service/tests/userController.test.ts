import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import { createUser, updateUser, getUser, getUsers } from '../src/controllers/userController';
import User from '../src/models/user';

const app = express();
app.use(express.json());
app.post('/api/users', createUser);
app.put('/api/users/:id', updateUser);
app.get('/api/users/:id', getUser);
app.get('/api/users', getUsers);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  await User.deleteMany({});
});

describe('User Controller', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ username: 'testuser' });

    expect(response.status).toBe(201);
    expect(response.body.username).toBe('testuser');
    expect(response.body.reputation).toBe(0);
    expect(response.body.points).toBe(0);
  });

  it('should update an existing user', async () => {
    const user = new User({ username: 'testuser' });
    await user.save();

    const response = await request(app)
      .put(`/api/users/${user._id}`)
      .send({ reputation: 10, points: 20 });

    expect(response.status).toBe(200);
    expect(response.body.reputation).toBe(10);
    expect(response.body.points).toBe(20);
  });

  it('should retrieve an existing user', async () => {
    const user = new User({ username: 'testuser' });
    await user.save();

    const response = await request(app).get(`/api/users/${user._id}`);

    expect(response.status).toBe(200);
    expect(response.body.username).toBe('testuser');
  });

  it('should retrieve all users', async () => {
    const user1 = new User({ username: 'testuser1' });
    const user2 = new User({ username: 'testuser2' });
    await user1.save();
    await user2.save();

    const response = await request(app).get('/api/users');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });
});
