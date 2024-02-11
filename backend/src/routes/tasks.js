import { Router } from "express";
import {
  deleteTask,
  getTask,
  getTaskCount,
  getTasks,
  saveTask,
  updateTask,
} from "../controllers/tasks";

const router = Router();
/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */


/**
 * @swagger
 * /task:
 *  get:
 *    summary: Get all tasks
 *    tags: [Tasks]
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get total tasks count
 *    tags: [Tasks]
 */
router.get("/tasks/count", getTaskCount);

/**
 * @swagger
 * /task:
 *  get:
 *    summary: Get a task by id
 *    tags: [Tasks]
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /task:
 *  post:
 *    summary: Save a new task
 *    tags: [Tasks]
 */
router.post("/tasks", saveTask);

/**
 * @swagger
 * /task:
 *  delete:
 *    summary: Delete a task by id
 *    tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /task:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 */
router.put("/tasks/:id", updateTask);

export default router;
