import mongoose from "mongoose";
import Note from "../models/Note.js"


export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({createdAt:-1});  //newest first
    res.status(200).json(notes)
  } catch (error) {
    console.error("Error in getAllNotes controller", error)
    res.status(500).json({message: "Internal Server Error"})
  }
}

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Note not found" });
    }

    const noteById = await Note.findById(id);

    if (!noteById) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(noteById);

  } catch (error) {
    console.error("Error fetching note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const {title, content} = req.body;
    const note =new Note({title,content})

    const savedNote = await note.save()
    res.status(201).json(savedNote);



  } catch (error) {
    console.error("Error in createNote controller", error)
    res.status(500).json({message: "Internal Server Error"})
    
  }
}


export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Note not found" });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Note not found" });
    }
    const deletedNote = await Note.findOneAndDelete(id);

    if (!deletedNote) return res.status(404).json({message: "Note not found" })

    res.status(200).json({
  message: "Note deleted successfully",
  note: deletedNote
})
  } catch (error) {
    console.error(error)
    res.status(500).json({message: "Internal Server Error" })
  }
}