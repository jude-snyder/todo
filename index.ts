import { Command } from "commander"
import { newCommand } from "./src/new-command";
import { doneCommand } from "./src/done-command";
import { listCommnand } from "./src/list-command";

const program = new Command();

program
    .command("new")
    .argument("<task>")
    .description("Create a new task")
    .action(newCommand);

program
    .command("done")
    .argument("<id>")
    .description("Mark a task as complete")
    .action(doneCommand);

program.command("list").description("List all tasks").action(listCommnand);

program.parse(process.argv);
