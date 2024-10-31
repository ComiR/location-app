import { Request, Response } from 'express';
import Location from '../models/location';

export const createLocation = async (req: Request, res: Response) => {
  try {
    const { name, description, coordinates } = req.body;
    const location = new Location({ name, description, coordinates });
    await location.save();
    res.status(201).json(location);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create location' });
  }
};

export const updateLocation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, coordinates } = req.body;
    const location = await Location.findByIdAndUpdate(
      id,
      { name, description, coordinates },
      { new: true }
    );
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update location' });
  }
};

export const getLocation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve location' });
  }
};

export const getLocations = async (req: Request, res: Response) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve locations' });
  }
};
