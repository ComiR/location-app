import { Router } from 'express';
import { createLocation, updateLocation, getLocation, getLocations } from '../controllers/locationController';

const router = Router();

router.post('/', createLocation);
router.put('/:id', updateLocation);
router.get('/:id', getLocation);
router.get('/', getLocations);

export default router;
