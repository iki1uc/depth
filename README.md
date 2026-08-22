depth – Modulares Kraft‑, Teilungs‑ und Axiom‑System
Dieses Repository enthält ein vollständig modulares, fraktales Kraft‑ und Teilungssystem.
Alle Dateien sind eigenständige Module, die zusammen ein dynamisches depth‑Framework bilden.

📐 Grundprinzipien des Systems
1. Einleitung
Die Einleitung ist der Startimpuls.
Sie bestimmt:

Startwert

Startachse

Starttiefe

→ definiert in Einleitung.js

2. Losleitung
Die Losleitung überträgt den Startimpuls in die aktive Achse.
Sie entscheidet:

wohin der Impuls geleitet wird

welche Achse aktiviert wird

→ definiert in losletung.js

3. Einteilung
Die Einteilung ist die Meta‑Regel, die alle Achsen steuert.
Sie entscheidet anhand eines Wertes:

unter

über

tief

y.x

x.y

q.t

t.q

→ definiert in Einteilung.js

4. Teilung
Die Teilung ist die konkrete Ausführung der Achsen.
Sie zählt, wie oft jede Achse aktiviert wurde.

→ definiert in teilung.js

🧭 Die 6 Achsen des depth‑Systems
Achse	Datei	Bedeutung
unter	u.t.js	Teilung nach unten
über	t.u.js	Teilung nach oben
tief	UM.x.js	Tiefen‑Teilung
y.x	y.x.js	Quer‑Teilung
x.y	x.y.js	Längs‑Teilung
q.t	q.t.js	Flow‑Teilung
t.q	t,q,js	Zeit‑Flow‑Teilung


⚡ Kraft‑Module
Kraft	Datei	Bedeutung
A‑Kraft	Kräfte.js	Arbeitskraft
T‑Kraft	Kräfte.js	Zeitkraft
NB‑Mann	Kräfte.js	Neutral‑Balance
Impuls	impulse.js	Bewegungsimpuls
Beam	iceTrefferEngine.js	Zugehörigkeitsstrahl
Unnorm	misstreffer.js	Abweichungszustand


📊 System‑Zustände
Zustand	Datei
gesund	gesund.js
wackelig	wackelig.js
ausderbahn	ausderbahn.js


📈 Fraktale Skalen
Das depth‑System skaliert automatisch:

3‑Teilung

9‑Teilung

27‑Teilung

81‑Teilung

162‑Teilung

243‑Teilung

→ gesteuert durch pro.js

📦 Verbrauch & Produktion
Bereich	Datei
Verbrauch	Verbrauch.js
Überproduktion	Ueberproduktion.js
Überbildung	Ueberbildung.js
Differenzwerte	Differenzwerte.js


🧠 Axiom‑System
Axiom3x3.js

tmpAxiomEngine.js

Diese Module bilden das logische Fundament des depth‑Systems.

🖥️ Hardware‑Simulation
Modul	Datei
CPU	cpu.j
GPU	gpu.js
SSE/MMX	sse.js / mmx.js
Mainboard	mainboard.js


🌐 Welt‑Module
Bereich	Datei
eco	eco.js
markt	markt.js
boerse	boerse.js
energie	energie.js
feuer	feuer.js
ZEN	ZEN.js


📚 Dokumentation
README.md → diese Datei

mind.md → interne Logik

uni.md → universelle Regeln

🚀 Startpunkt
Die depth‑Pipeline läuft so:

Einleitung erzeugt Startimpuls

Losleitung leitet Impuls weiter

Einteilung wählt Achse

Teilung führt Achse aus

pro.js skaliert Tiefe

Kraft‑Module reagieren

eco/markt/boerse simulieren Weltverhalten
