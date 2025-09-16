const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    shortDescription: { type: String }, // For card view
    description: { type: String, required: true }, // Long description
    cardImageUrl: { type: String }, // Thumbnail/demo image for card

    // ✅ Multiple images support
    imageUrls: { type: [String], default: [] },

    // ✅ Single image fallback
    imageUrl: { type: String },

    techStack: { type: [String] },
    demoLink: { type: String },
    repoLink: { type: String },
    features: { type: [String] },

    // ✅ Manual order for custom sorting
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
