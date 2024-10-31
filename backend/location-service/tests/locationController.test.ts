import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import { createLocation, updateLocation, getLocation, getLocations } from '../src/controllers/locationController';
import Location from '../src/models/location';

const app = express();
app.use(express.json());
app.post('/api/locations', createLocation);
app.put('/api/locations/:id', updateLocation);
app.get('/api/locations/:id', getLocation);
app.get('/api/locations', getLocations);

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
  await Location.deleteMany({});
});

describe('Location Controller', () => {
  it('should create a new location', async () => {
    const response = await request(app)
      .post('/api/locations')
      .send({ name: 'Test Location', description: 'A test location', coordinates: { latitude: 10, longitude: 20 } });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test Location');
    expect(response.body.description).toBe('A test location');
    expect(response.body.coordinates.latitude).toBe(10);
    expect(response.body.coordinates.longitude).toBe(20);
  });

  it('should update an existing location', async () => {
    const location = new Location({ name: 'Test Location', description: 'A test location', coordinates: { latitude: 10, longitude: 20 } });
    await location.save();

    const response = await request(app)
      .put(`/api/locations/${location._id}`)
      .send({ name: 'Updated Location', description: 'An updated test location', coordinates: { latitude: 30, longitude: 40 } });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Updated Location');
    expect(response.body.description).toBe('An updated test location');
    expect(response.body.coordinates.latitude).toBe(30);
    expect(response.body.coordinates.longitude).toBe(40);
  });

  it('should retrieve an existing location', async () => {
    const location = new Location({ name: 'Test Location', description: 'A test location', coordinates: { latitude: 10, longitude: 20 } });
    await location.save();

    const response = await request(app).get(`/api/locations/${location._id}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Test Location');
    expect(response.body.description).toBe('A test location');
    expect(response.body.coordinates.latitude).toBe(10);
    expect(response.body.coordinates.longitude).toBe(20);
  });

  it('should retrieve all locations', async () => {
    const location1 = new Location({ name: 'Test Location 1', description: 'A test location 1', coordinates: { latitude: 10, longitude: 20 } });
    const location2 = new Location({ name: 'Test Location 2', description: 'A test location 2', coordinates: { latitude: 30, longitude: 40 } });
    await location1.save();
    await location2.save();

    const response = await request(app).get('/api/locations');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });
});
