const express = require('express');
const Skill = require('../models/About/Skill');
const Experience = require('../models/About/Experience');
const Achievement = require('../models/About/Achievement');
const Certification = require('../models/About/Certification');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const [skills, experience, achievements, certifications] = await Promise.all([
      Skill.find().sort({ order: 1 }),
      Experience.find().sort({ order: 1 }),
      Achievement.find().sort({ order: 1 }),
      Certification.find().sort({ order: 1 }),
    ]);

    const currentFocus = [
  "Building full-stack applications with the MERN stack (MongoDB, Express.js, React.js, Node.js)",
  "Exploring Next.js (SSR) and contributing to open-source MERN projects"
];


    res.json({ skills, experience, achievements, certifications, currentFocus });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
