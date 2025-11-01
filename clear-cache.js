// Script pour forcer la mise à jour du service worker et vider le cache
// À exécuter dans la console du navigateur

if ('serviceWorker' in navigator && 'caches' in window) {
  // Désinscrire tous les service workers
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      registration.unregister();
      console.log('Service Worker désinscrit');
    });
  });

  // Vider tous les caches
  caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cacheName => {
        console.log('Suppression du cache:', cacheName);
        return caches.delete(cacheName);
      })
    );
  }).then(() => {
    console.log('Tous les caches ont été vidés');
    // Recharger la page
    window.location.reload();
  });
} else {
  console.log('Service Worker ou Cache API non supporté');
}