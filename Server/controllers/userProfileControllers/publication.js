import { User } from "../../models/User.js";
import Publication from "../../models/userModels/Publications.js";

export const postData = async (req, res) => {
  try {
    const data = req.body;
    const userID = req.user; // it is set from middleware
    var progress = 0;
    const checkForProgress = await Publication.find({ user: userID });
    if (checkForProgress.length === 0) {
      const user = await User.findById(userID);
      user.profileCompletion += 10;
      progress = 10;
      await user.save();
    }

    if (
      !data.publicationTitle ||
      !data.publishedBy ||
      !data.publicationURL ||
      !data.publishedDate ||
      !data.description
    ) {
      res.status(400).json({ error: "data in body is not complete" });
      return;
    }

    data.user = userID;
    const publicationObj = new Publication(data);
    const publication = await publicationObj.save();

    return res.status(201).json({
      progress: progress,
      message: "Publication Added Successfully",
    });
  } catch (error) {
    console.error("Error creating Publication:", error);
    return res.status(400).json({
      error: "An error occurred while creating Publication",
    });
  }
};

export const getData = async (req, res) => {
  try {
    const userID = req.user; // it is set from middleware
    const publications = await Publication.find({ user: userID });

    return res.status(201).json({
      publications,
    });
  } catch (error) {
    console.error("Error getting Publication:", error);
    return res.status(400).json({
      error: "An error occurred while getting Publications",
    });
  }
};
