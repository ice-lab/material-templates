import { execSync } from 'child_process';
import { join } from 'path';
import * as fse from 'fs-extra';
import * as axios from 'axios';

import checkVersionExist from './checkVersionExist';

// Set by github actions
const branchName = process.env.BRANCH_NAME;
const rootDir = join(__dirname, '../');
const registry = 'https://registry.npmjs.org/';

if (!branchName) {
  throw new Error('Only support publish in GitHub Actions env');
}

(async () => {
  const packageDirs = [
    'template-icestark-module-ts', 'template-rax-api-ts',
    'template-rax-js', 'template-rax-miniapp-plugin-ts',
    'template-rax-ts', 'template-react-js',
    'template-react-ts', 'template-vue',
    'template-pkg-react'
  ];

  for (const pkgDir of packageDirs) {
    // eslint-disable-next-line no-await-in-loop
    await publishPackage(join(rootDir, 'packages', pkgDir));
  }

})().catch(err => {
  console.error(err);
  process.exit(1);
});

async function publishPackage(packageDir) {
  const pkgData = await fse.readJSON(join(packageDir, 'package.json'));
  const { version, name } = pkgData;
  const npmTag = branchName === 'master' ? 'latest' : 'beta';

  const versionExist = await checkVersionExist(name, version, registry);
  if (versionExist) {
    console.log(`${name}@${version} 已存在，无需发布。`);
    return;
  }

  const isProdVersion = /^\d+\.\d+\.\d+$/.test(version);
  if (branchName === 'master' && !isProdVersion) {
    throw new Error(`禁止在 master 分支发布非正式版本 ${version}`);
  }

  if (branchName !== 'master' && isProdVersion) {
    console.log(`非 master 分支 ${branchName}，不发布正式版本 ${version}`);
    return;
  }

  console.log('start publish', version, npmTag);
  execSync(`npm publish --tag ${npmTag} --ignore-scripts`, {
    cwd: packageDir,
    stdio: 'inherit',
  });

  console.log('start notify');
  const response = await axios.default({
    url: process.env.DING_WEBHOOK,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    data: {
      msgtype: 'markdown',
      markdown: {
        title: `${name}@${version} 发布成功`,
        text: `${name}@${version} 发布成功`,
      },
    },
  });
  console.log('notify success', response.data);
}
