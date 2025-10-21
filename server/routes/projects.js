const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects sorted by order, then newest
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST new project
router.post('/', async (req, res) => {
  const {
    title,
    shortDescription,
    description,
    cardImageUrl,
    imageUrls,
    imageUrl,
    techStack,
    demoLink,
    repoLink,
    features,
    order
  } = req.body;

  if (!title || !description)
    return res.status(400).json({ error: 'Title and description are required' });

  try {
    const project = new Project({
      title,
      shortDescription,
      description,
      cardImageUrl,
      imageUrls: imageUrls || [],
      imageUrl: imageUrl || '',
      techStack,
      demoLink,
      repoLink,
      features,
      order: order || 0
    });

    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
