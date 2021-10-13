# Conifere – Website

> Jairus Joer, 2021.04.07

## Verwendete Bibliotheken

- [Eleventy 0.11.1](https://www.11ty.dev/)
- [ESLint 7.21.0](https://eslint.org/)
- [Glide.js 3.4.1](https://glidejs.com/)


## Voraussetzungen

- NodeJS 8+
- NPM 6+
- Google Chrome

## Installation

Führe `npm install` über das Terminal im Stammverzeichnis des Projektes aus. Solltes es zu Konflikten beim Installationsprozess kommen, empfiehlt es sich, die Versionen von *NodeJS* und *NPM* aufeinander abzustimmen.

## Entwicklung

Nach erfolgreicher Installation der benötigten *Dependencies*, kann die Entwicklungsumgebung mit dem Befehl `npm run dev` im Terminal gestartet werden.

Unter *http://localhost:8081/* (Standardkonfiguration) findet sich die aktive Entwicklungsumgebung der Website. Sollte der gewählte Port durch eine andere Applikation blockiert sein, wird über das Terminal eine alternative Adresse angezeigt.

## Produktion

`npm run build` produziert eine optimiertes Datenset für die Veröffentlichung der Website.