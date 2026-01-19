import { build } from 'vite';
import path from 'path';
import fs from 'fs';

function copyFolderSync(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function runBuild() {
  await build({
    configFile: path.resolve(import.meta.dirname, '..', 'vite.config.ts'),
  });

  // Copy attached_assets to dist/public
  const attachedAssetsSource = path.resolve(import.meta.dirname, '..', 'attached_assets');
  const attachedAssetsDest = path.resolve(import.meta.dirname, '..', 'dist', 'public', 'attached_assets');
  copyFolderSync(attachedAssetsSource, attachedAssetsDest);
  console.log('Copied attached_assets to dist/public');
  
  const serverCode = `const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on port ' + PORT);
});
`;
  
  fs.writeFileSync(
    path.resolve(import.meta.dirname, '..', 'dist', 'index.cjs'),
    serverCode
  );
  
  console.log('Build completed successfully!');
}

runBuild();
