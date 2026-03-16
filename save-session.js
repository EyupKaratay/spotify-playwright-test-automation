
const { chromium } = require('@playwright/test');
const readline = require('readline');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://accounts.spotify.com/login');

  console.log('===========================================');
  console.log('1. Tarayıcıda email gir');
  console.log('2. Mailine gelen kodu gir');
  console.log('3. Spotify ana sayfasına geçince...');
  console.log('4. Buraya gel ve ENTER a bas');
  console.log('===========================================');

  // Enter'a basılmasını bekle
  await new Promise(resolve => {
    const rl = readline.createInterface({ input: process.stdin });
    rl.on('line', () => {
      rl.close();
      resolve();
    });
  });

  await context.storageState({ path: 'spotify-session.json' });
  console.log('✅ Oturum kaydedildi!');

  
})();
