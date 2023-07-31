import { setup, commander, http } from "substreams-sink";
import pkg from "./package.json" assert { type: "json" };

export async function action(options: commander.RunOptions) {
    const { emitter } = await setup(options, pkg);
    emitter.on("anyMessage", message => {
        // Do something with the message
        console.log(message);
    });
    emitter.start();
    http.listen(options);
}