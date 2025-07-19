// Store the install prompt globally
let deferredPrompt;

// Only run this on the destination page
if (window.location.href.includes('funatrace-v3.html')) {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Create install prompt UI (only if not previously dismissed)
    if (!localStorage.getItem('pwaPromptDismissed')) {
      showInstallPrompt();
    }
  });

  // Service Worker Registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://ahmedsharyph.github.io/funatrace/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      });
  }
}

function showInstallPrompt() {
  const box = document.createElement('div');
  box.innerHTML = `
    <div style="position:fixed;bottom:20px;left:20px;right:20px;background:#fff;padding:14px;border-radius:12px;box-shadow:0 0 12px rgba(0,0,0,0.3);z-index:9999;text-align:center;">
      <p>📲 Add FunaTrace to your Home Screen</p>
      <div style="display:flex;justify-content:center;gap:10px;">
        <button style="padding:10px 18px;background:#00bcd4;color:#fff;border:none;border-radius:6px;font-size:16px;" id="installBtn">Install</button>
        <button style="padding:10px 18px;background:#f0f0f0;border:none;border-radius:6px;font-size:16px;" id="dismissBtn">Later</button>
      </div>
    </div>`;
  document.body.appendChild(box);

  document.getElementById('installBtn').addEventListener('click', () => {
    box.remove();
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        localStorage.setItem('pwaInstalled', 'true');
      }
      deferredPrompt = null;
    });
  });

  document.getElementById('dismissBtn').addEventListener('click', () => {
    box.remove();
    localStorage.setItem('pwaPromptDismissed', 'true');
  });
}
