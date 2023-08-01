import { constants } from 'fs';
import { stat, readdir, copyFile, access, mkdir } from 'fs/promises';
import { dirname, join, resolve } from 'path';
import { Plugin, ResolvedConfig } from 'vite';

export const copy404 = () => {
  let config: ResolvedConfig;

  return {
    name: "copy404",
    apply: 'build',
    enforce: 'post',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async closeBundle() {
      const indexHtmlPath = resolve(__dirname, config.build.outDir, "index.html")
      const notFoundHtmlPath = resolve(__dirname, config.build.outDir, "404.html")

      await doCopy(indexHtmlPath, notFoundHtmlPath); 

      console.log("copy index.html to 404.html");
    }
  } as Plugin
}

async function doCopy(from: string, to: string) {
  const toDir = dirname(to);

  await prepare_dir(toDir);

  const fromStat = await stat(from).catch(err => {
      if (err.code == 'ENOENT') {
        console.log(`[fromFile] is not exist. => ${from} `);
      }
  });

  if (!fromStat) return;

  if (fromStat.isDirectory()) {
    for (const file of await readdir(from)) {
      const srcPath = join(from, file);
      doCopy(srcPath, to);
    }
  } else {
    await copyFile(from, to).catch(err => {
      console.log(`The file "${from}" could not be copied`);
    });
  }
}

async function prepare_dir(dir: string) {
  const parents = dirname(dir);
  
  await access(parents, constants.F_OK).catch(async (err) => {
      if (err.code == 'ENOENT') await prepare_dir(parents);
  });

  await access(dir, constants.F_OK).catch(async (err) => {
      if (err.code == 'ENOENT') await mkdir(dir).catch(err => {
          if (err.code !== 'EEXIST') console.log(err);
      });
  });
}