import { convertNxGenerator } from "@nx/devkit";
import generator from "./generator";

export const releaseFileGenerator = convertNxGenerator(generator);