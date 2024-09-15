Heyo, dies ist das Portal der Fachschaft, erreichbar auf [mathphys.info/portal](https://mathphys.info/portal)

## Ich möchte was verändern

Alles klar! Die Seite wurde mit NextJS, bzw. hier NextTS, geschrieben mit Unterstützung von Tailwindcss 
und der opensource Library shadcn.

### Die Seite lokal starten
Dafür einfach das Repo downloaden und dann im Repo
- `npm install`
- `npm run dev`

ausführen, nun kann man die Seite unter [localhost:3000](http://localhost:3000) finden

### Ändern der Apps
In `/lib/data/appData.ts` einfach die Appdaten so wie vorgegeben verändern und dann unten im Array ändern. fertig!

### Wir müssen Styling etc ändern
Dazu einfach die richtigen files finden und dort die stylings mit tailwind verändern, eine gute Ressource dafür ist
dieses [Cheatsheet](https://www.creative-tim.com/twcomponents/cheatsheet/).

## Deployment
Die Seite zu deployen ist relativ einfach:
1. `next build`
2. In `/out/index.html` müssen alle Resource-Ordner References verändert werden von `/_next` zu `./_next` ändern (auch für logos, blah blah)
3. `index.html` zu `portal.html` ändern (wird noch angepasst)
4. Einfach in den Webroot-Ordner werfen! 
