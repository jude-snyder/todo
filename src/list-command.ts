import { readTasks } from "./read-tasks";

export async function listCommand(): Promise<void> {
    const tasks = await readTasks("./db.txt");

    if (tasks.length === 0) {
        console.log('No tasks!');
        return;
    }

    tasks.forEach((task, i) => {
        console.log(`${i + 1}. ${task}`);
    });
}