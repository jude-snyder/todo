export async function writeTasks
(tasks: string[], 
path: string,
): Promise<void> {
    await Bun.write(path, tasks.join("\n"));
}