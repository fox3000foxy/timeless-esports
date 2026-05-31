#!/usr/bin/env python3
"""Optimise les images du projet en préservant la qualité."""

import os
import shutil
from pathlib import Path
from PIL import Image

ORIGINALS_DIR = Path("originals_backup")
QUALITY = 85  # Haute qualité pour préserver les détails

def backup_original(src: Path):
    """Sauvegarde l'original dans originals_backup/"""
    src_abs = src.resolve()
    cwd = Path.cwd().resolve()
    rel_path = src_abs.relative_to(cwd)
    backup_path = ORIGINALS_DIR / rel_path
    backup_path.parent.mkdir(parents=True, exist_ok=True)
    if not backup_path.exists():
        shutil.copy2(src, backup_path)
        print(f"  💾 Backup: {backup_path}")

def optimize_image(src: Path, target_format: str = "AVIF"):
    """Optimise une image en préservant la qualité."""
    try:
        with Image.open(src) as img:
            # Convertir en RGB si nécessaire (pour AVIF/WebP)
            if img.mode in ("RGBA", "P"):
                if target_format == "AVIF":
                    # AVIF supporte la transparence, garder RGBA
                    pass
                else:
                    img = img.convert("RGB")
            
            # Déterminer le nouveau chemin
            new_ext = ".avif" if target_format == "AVIF" else ".webp"
            new_path = src.with_suffix(new_ext)
            
            # Sauvegarder l'original
            backup_original(src)
            
            # Sauvegarder avec optimisation
            img.save(
                new_path,
                target_format,
                quality=QUALITY,
                method=6,  # Compression maximale (plus lent mais meilleur ratio)
            )
            
            # Comparer les tailles
            old_size = src.stat().st_size
            new_size = new_path.stat().st_size
            savings = (1 - new_size / old_size) * 100
            
            print(f"  ✅ {src.name}: {old_size/1024:.0f}kB → {new_size/1024:.0f}kB ({savings:.1f}% réduit)")
            
            # Supprimer l'original si différent du nouveau
            if src != new_path:
                src.unlink()
                
    except Exception as e:
        print(f"  ❌ Erreur sur {src}: {e}")

def main():
    print("🚀 Optimisation des images...\n")
    
    # 1. motif.png → AVIF
    print("📦 Conversion motif.png → AVIF")
    motif = Path("public/assets/motif.png")
    if motif.exists():
        optimize_image(motif, "AVIF")
    
    # 2. Photos joueurs
    print("\n📸 Compression photos joueurs")
    players_dir = Path("public/assets/players")
    if players_dir.exists():
        for img in players_dir.glob("*.avif"):
            # Re-compresser les AVIF existants avec meilleure qualité
            optimize_image(img, "AVIF")
    
    # 3. Autres images volumineuses
    print("\n🖼️  Autres images")
    for pattern in ["public/assets/*.avif", "public/assets/sponsors/*.png"]:
        for img in Path.cwd().glob(pattern):
            if img.name == "motif.png":  # Déjà traité
                continue
            if img.suffix == ".png":
                optimize_image(img, "AVIF")
    
    print("\n✨ Optimisation terminée!")
    print(f"📁 Originaux sauvegardés dans: {ORIGINALS_DIR}/")

if __name__ == "__main__":
    main()
