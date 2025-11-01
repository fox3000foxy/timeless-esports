import { registerSW } from "virtual:pwa-register";

export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    registerSW({
      onNeedRefresh() {
        if (
          confirm(
            "Une nouvelle version est disponible. Voulez-vous mettre à jour ?",
          )
        ) {
          window.location.reload();
        }
      },
      onOfflineReady() {
        console.log("L'application est prête pour une utilisation hors ligne");
      },
    });
  }
}
