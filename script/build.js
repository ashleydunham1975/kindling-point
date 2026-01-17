import { build } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function runBuild() {
  await build({
    configFile: path.resolve(__dirname, '..', 'vite.config.ts'),
  });
  
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
    path.resolve(__dirname, '..', 'dist', 'index.cjs'),
    serverCode
  );
  
  console.log('Build completed successfully!');
}

runBuild();
