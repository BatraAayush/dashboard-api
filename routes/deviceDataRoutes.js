import express from 'express';
import prisma from '../DB/db.config.js';
import { convertUnixToIST } from '../utils/dateUtils.js'; 
const router = express.Router();

router.get('/device-data', async (req, res) => {
  try {
    const deviceData = await prisma.deviceData.findMany();

    const updatedDeviceData = deviceData.map(data => ({
      ...data,
      start_time: convertUnixToIST(data.start_time), 
    }));

    res.json(updatedDeviceData);
  } catch (error) {
    console.error('Error fetching device data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
