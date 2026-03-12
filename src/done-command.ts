import { readTasks } from "./read-tasks";
import { writeTasks } from "./write-tasks";

export async function doneCommand(id: number): Promise<void> {
    const tasks = await readTasks('./db.txt');
    const index = Number(id) - 1;

    if (index < 0 || index >= tasks.length) {
        console.log("Task not found");
        return;
    }

    const removed = tasks.splice(index, 1);
    await writeTasks(tasks, './db.txt');

    console.log(`Completed: ${removed[0]}`);
}