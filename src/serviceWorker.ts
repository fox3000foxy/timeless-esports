import { registerSW } from "virtual:pwa-register";

export function registerServiceWorker() {
	if ("serviceWorker" in navigator) {
		registerSW({
			onNeedRefresh() {
				const toast = document.createElement("div");
				toast.setAttribute("role", "alert");
				toast.style.cssText =
					"position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:#1a1a1a;color:#fff;padding:1rem 1.5rem;border-radius:12px;border:1px solid #dc2626;z-index:9999;display:flex;align-items:center;gap:1rem;font-size:0.9rem;box-shadow:0 4px 12px rgba(0,0,0,0.4);";

				const text = document.createElement("span");
				text.textContent = "Nouvelle version disponible";
				toast.appendChild(text);

				const btn = document.createElement("button");
				btn.type = "button";
				btn.textContent = "Mettre à jour";
				btn.style.cssText =
					"background:#dc2626;color:#fff;border:none;padding:0.5rem 1rem;border-radius:8px;cursor:pointer;font-size:0.85rem;";
				btn.onclick = () => window.location.reload();
				toast.appendChild(btn);

				document.body.appendChild(toast);
			},
			onOfflineReady() {
				console.log("L'application est prête pour une utilisation hors ligne");
			},
		});
	}
}
