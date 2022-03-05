import { Command } from "./src";

new Command({ name: "err" }).action((res:any, req:any) => {
    console.log(req.argv(2), req.args(1));
})