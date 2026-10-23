# Ray-Ly-Car — Location de Voitures Premium

Site vitrine de location de voitures haut de gamme, développé en HTML, CSS et JavaScript natif.

## Présentation

**Ray-Ly-Car** est une plateforme web permettant aux utilisateurs de consulter une flotte de véhicules, de filtrer par catégorie et de soumettre une demande de réservation en ligne. Le site propose une interface moderne et responsive, avec des animations au scroll et une expérience utilisateur optimisée sur mobile et desktop.

## Fonctionnalités

- **Réservation en ligne** : formulaire de réservation avec sélection du lieu, des dates, de l'heure et de la catégorie de véhicule.
- **Catalogue de véhicules** : affichage d'une flotte de 14 voitures réparties en 5 catégories (Économique, Berline, SUV, Luxe, Utilitaire).
- **Filtres par catégorie** : filtrage dynamique de la flotte par type de véhicule.
- **Véhicules en vedette** : section mettant en avant les voitures les plus populaires.
- **Favoris** : possibilité d'ajouter un véhicule aux favoris (icône cœur).
- **Compteurs animés** : statistiques de l'entreprise animées au scroll.
- **Formulaire de contact** : formulaire de prise de contact avec notifications toast.
- **Navigation responsive** : menu mobile avec toggle, lien actif dynamique, navbar qui change de style au scroll.
- **Bouton WhatsApp flottant** : accès rapide au service client via WhatsApp.
- **Animations au scroll** : apparition progressive des éléments (fade-up).

## Structure du projet

```
location de voiture/
├── index.html          # Page principale
├── css/
│   └── style.css       # Feuille de style
└── js/
    └── main.js         # Logique JavaScript (données véhicules, filtres, formulaires, animations)
```

## Technologies utilisées

- **HTML5** : structure sémantique du site.
- **CSS3** : mise en forme responsive (Flexbox, Grid, transitions, animations).
- **JavaScript (ES6+)** : logique de l'application (génération dynamique des cartes, filtres, formulaires, compteurs).
- **Font Awesome 6.5.1** : icônes.
- **Google Fonts** : Poppins et Playfair Display.

## Installation & Utilisation

Aucune installation n'est nécessaire. Il s'agit d'un site statique.

1. Téléchargez ou clonez le projet.
2. Ouvrez le fichier `index.html` directement dans un navigateur web.

> **Note** : une connexion Internet est requise pour charger les polices Google Fonts, Font Awesome et les images des véhicules (générées dynamiquement).

## Personnalisation

### Modifier la flotte de véhicules

Les données des véhicules se trouvent dans le tableau `cars` du fichier [js/main.js](js/main.js). Chaque véhicule est défini par les propriétés suivantes :

```js
{
    id: 1,
    name: 'Dacia Logan',
    category: 'Économique',          // economique | berline | suv | luxe | utilitaire
    categoryLabel: 'Économique',    
    price: 250,               // prix par jour en DH
    seats: 5,
    transmission: 'Automatique',
    fuel: 'Diesel',
    popular: true,             // affiché dans la section "véhicules populaires"
    badge: 'Populaire',        // badge optionnel
    image: '...'               // URL de l'image
}
```

### Modifier les informations de contact

Les coordonnées (adresse, téléphone, email, horaires) sont à modifier dans [index.html](index.html), dans les sections `Contact` et `Footer`.

## Auteurs

Site développé pour **Ray-Ly-Car** — Location de voitures premium.
