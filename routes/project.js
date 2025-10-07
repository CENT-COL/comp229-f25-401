import express from 'express';
import {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById
} from '../controllers/project.js';

const router = express.Router();

// REST API
router.get('/', getAllProjects); // READ
router.get('/:id', getProjectById); // READ 
router.post('/', createProject); // CREATE
router.put('/:id', updateProjectById); // UPDATE
router.delete('/:id', deleteProjectById); // DELETE


export default router;