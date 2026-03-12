import { readTasks } from "./read-tasks";
import { writeTasks } from "./write-tasks";

export async function newCommand(task: string): Promise<void> {
    const tasks = await readTasks('./db.txt');
    tasks.push(task);
    await writeTasks(tasks, "./db.txt");

    console.log(`Created new task #${tasks.length}: ${task}`);
};