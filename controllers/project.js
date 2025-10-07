import ProjectModel from '../models/project.js'; 

// Create CRUD operations for Project model

// READ all project 
export const getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectModel.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// READ a single project by ID
export const getProjectById = async (req, res) => {
    try {
        const project = await ProjectModel.findById(req.params.id);
        if (!project){
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// CREATE a new project
export const createProject = async (req, res) => {
    try {

        // Check if start Date is before end Date
        if (new Date(req.body.startDate) > new Date(req.body.endDate)){
            return res.status(400).json({ message: "Start date must be before end date" });
        }

        const newProject = new ProjectModel(req.body);
        const savedProject = await newProject.save();
        res.status(200).json(savedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// UPDATE a project by ID
export const updateProjectById = async (req, res) => {
    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedProject){
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// DELETE a project by ID
export const deleteProjectById = async (req, res) => {
    try {
        const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);

        if (!deletedProject){
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(deletedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}