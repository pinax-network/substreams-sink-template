import { setup, commander, http } from "substreams-sink";

import { type ActionOptions } from "./bin/cli.js";

import pkg from "./package.json" assert { type: "json" };

export async function action(options: ActionOptions) {
    const { emitter } = await setup(options, pkg);
    emitter.on("anyMessage", message => {
        // Do something with the message
        console.log(message);
    });
    emitter.start();
    http.listen(options);
}