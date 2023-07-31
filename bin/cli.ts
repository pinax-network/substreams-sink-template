#!/usr/bin/env node

import { commander, logger } from "substreams-sink";
import { action } from "../index.js"
import pkg from "../package.json" assert { type: "json" };

const program = commander.program(pkg);
const command = commander.run(program, pkg);

// Add command options here

logger.setName(pkg.name);
command.action(action);
program.parse();
