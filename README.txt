FunaTrace - Add to Home Screen (PWA) Support
=================================================

FILES INCLUDED:
---------------
1. manifest.json           - Web app manifest file.
2. service-worker.js       - Minimal service worker.
3. install.js              - JavaScript that prompts "Add to Home Screen".
4. funatrace-logo.png      - Your app icon.
5. README.txt              - This instruction guide.

INSTRUCTIONS:
-------------
1. Upload all files to a public GitHub repository (e.g. github.com/your-username/funatrace-pwa).

2. Replace "your-username" and "your-repo" in:
   - manifest.json → src URL
   - install.js → serviceWorker registration URL

3. On your Blogger page:
   a. Add this inside <head>:
      <link rel="manifest" href="https://your-username.github.io/your-repo/manifest.json">
      <link rel="apple-touch-icon" href="https://your-username.github.io/your-repo/funatrace-logo.png">
      <meta name="theme-color" content="#00bcd4">

   b. Add this before </body>:
      <script src="https://your-username.github.io/your-repo/install.js" defer></script>

4. Visit your Blogger site on a mobile browser.
   A prompt should appear offering to install it as a web app.

Enjoy!
