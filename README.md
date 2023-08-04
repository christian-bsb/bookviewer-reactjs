# bookviewer-reactjs
Bookviewer mit ReactJS, generiert mit Google Bard

## Environment
sudo cp -r node-v18.17.0-linux-x64/{bin,include,lib,share} /usr/
npm install --save react react-dom react-scripts
npm install bootstrap

## Tools
create-react-app bookviewer-reactjs

## Web Sources
  - https://react-bootstrap.netlify.app/docs/components/navbar
  - https://iiif.io/api/image/2.0/

## IIIF
### manifest
https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb11251816/manifest
http://iiif.io/api/image/2/context.json
https://api.digitale-sammlungen.de/iiif/image/v2/bsb11251816_00126/info.json

### Image
https://api.digitale-sammlungen.de/iiif/image/v2/bsb11251816_00126/full/306,/0/default.jpg
  - IIIF Endpunkt https://api.digitale-sammlungen.de/iiif/image/v2
  - Buch Objekt bsb11251816
  - Seite 126
  - full : ganze Seite
  - 306, : Auflösung 306 Pixel
  - 0 : keine Rotation
