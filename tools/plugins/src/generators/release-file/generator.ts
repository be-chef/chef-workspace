import { Tree, formatFiles } from '@nx/devkit';
import { ReleaseFileOptions } from './schema';
import {generateReleaseFile} from './lib/generate-release-file';
import { isGitClean } from './lib/git-util';

export default async function (tree: Tree, schema: ReleaseFileOptions) {
  if(!isGitClean()){
    console.error("Git working directory is unclean. Please stash or commit your changes first to generate the release-file.json");
    return;
  }
  
  try{
    await generateReleaseFile(tree, schema)
    await formatFiles(tree);
    
    console.log("release-file.json generated successfully. Please raise a pull request for your branch, the appropriate package would be deployed by the Github's CD workflow");
    //const message = "chore: version release";
    //await commit(message);
  }catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}