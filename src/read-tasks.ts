
/**
 * Read data from db file and return as an array of tasks
 * 
 * @returns {string[]} An array representing all currrent tasks.
 */
export async function readTasks(path: string): Promise<string[]> {
    const file = Bun.file(path);

    if (!(await file.exists())) {
        await Bun.write(path, "");
        return [];
    }

    const text = await file.text();
    if (!text.trim()) return [];

    return text.split("\n");
}
