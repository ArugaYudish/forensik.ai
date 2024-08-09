import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { imageBase64 } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ message: 'Image data is required' });
  }

  try {
    // Dummy response for testing
    const isAiGenerated = Math.random() > 0.5; // Simulate a 50% chance of being AI-generated

    res.status(200).json({ isAiGenerated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing image' });
  }
}
