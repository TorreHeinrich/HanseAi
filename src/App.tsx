/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ContactModal } from './components/ContactModal.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { ModalViewType } from './types.ts';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string>('Erstgespräch');
  const [legalModalType, setLegalModalType] = useState<ModalViewType>(null);

  const openContactWithTopic = (topic: string) => {
    setActiveTopic(topic);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#181310] text-[#e3dcd0] antialiased selection:bg-[#c47a5a] selection:text-[#faf3e8]">
      {/* ===== 1. HERO SECTION ===== */}
      <section className="story-section hero" id="hero">
        <div className="section-inner">
          <div className="text-col">
            <p className="brand">HanseAI‑Bremen</p>
            <p className="byline">
              by <strong>tedigital</strong>
            </p>
            <h1 className="xl" style={{ marginTop: '0.6rem', marginBottom: '0.3em' }}>
              Moin.
            </h1>
            <p style={{ maxWidth: '540px', fontSize: '1.05rem' }}>
              KI und digitale Transformation klingen oft nach großem Konzern – wir machen sie nutzbar für deinen Betrieb hier in Bremen und Umgebung. Ganz pragmatisch, verständlich und auf Augenhöhe.
            </p>
            <div className="btn-group">
              <button
                id="heroContactBtn"
                onClick={() => openContactWithTopic('Erstgespräch')}
                className="btn btn--primary"
              >
                Jetzt anfragen
              </button>
            </div>
          </div>
          <div className="img-col">
            <img
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/jkojvbyb22of5cv/generated-images/ZL4RsoxNGAmHKOURfbzFG.jpg"
              alt="HanseAI Bremen Hero Impression"
              referrerPolicy="no-referrer"
              className="art-img"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ===== 2. ZEITFRESSER ===== */}
      <section className="story-section" id="zeitfresser">
        <div className="section-inner">
          <div className="text-col">
            <h1 className="lg">Schluss mit den täglichen Zeitfressern</h1>
            <h1 className="xl" style={{ marginBottom: '1rem' }}>
              Weniger Chaos, mehr Ergebnis.
            </h1>
            <p style={{ maxWidth: '540px' }}>
              Digitales Arbeiten ist längst kein nettes Extra mehr – wer Abläufe nicht anpasst, verliert unnötig Zeit, Nerven und Energie. Wir schauen uns deine täglichen Workflows an und spüren die echten Engpässe auf.
            </p>
          </div>
          <div className="img-col">
            <img
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/jkojvbyb22of5cv/generated-images/8wq9-Pm0TT9b8PNOqk-r4.jpg"
              alt="Effiziente Workflows statt Zeitfresser"
              referrerPolicy="no-referrer"
              className="art-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== 3. MENSCH ===== */}
      <section className="story-section" id="mensch">
        <div className="section-inner">
          <div className="text-col">
            <h1 className="lg">Smarte Abläufe statt Technik‑Frust</h1>
            <h1 className="xl" style={{ marginBottom: '1rem' }}>
              Der Mensch an erster Stelle.
            </h1>
            <p style={{ maxWidth: '540px' }}>
              Technologie soll dir den Rücken freimachen, nicht überfordern. Wir schaffen Arbeitsumgebungen, in denen digitale Helfer den größten Hebel haben – dein Know‑how bleibt das Herzstück.
            </p>
          </div>
          <div className="img-col">
            <img
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/jkojvbyb22of5cv/generated-images/S8uKsuyGw53ji0UIJMPjh.jpg"
              alt="Der Mensch im Mittelpunkt smarter Technologien"
              referrerPolicy="no-referrer"
              className="art-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== 4. KI-STRATEGIE ===== */}
      <section className="story-section" id="strategie">
        <div className="section-inner">
          <div className="text-col">
            <span className="label">KI‑Strategie</span>
            <h1 className="lg">Dein Fahrplan: Von der Idee bis zum Produkt</h1>
            <h1 className="xl" style={{ marginBottom: '1rem' }}>
              Schritt für Schritt zum Ziel.
            </h1>
            <p style={{ maxWidth: '540px' }}>
              Eine gute KI‑Strategie ist dein praktischer Wegweiser – wir gehen den Weg gemeinsam und machen deine digitale Vision zur Realität.
            </p>
            <div className="btn-group">
              <button
                id="strategieContactBtn"
                onClick={() => openContactWithTopic('KI-Strategie')}
                className="btn btn--primary"
              >
                Fahrplan starten
              </button>
            </div>
          </div>
          <div className="img-col">
            <img
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/jkojvbyb22of5cv/generated-images/rYypop3G0NorqTUANFR1P.jpg"
              alt="KI-Strategie und Fahrplan Entwicklung"
              referrerPolicy="no-referrer"
              className="art-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== 5. VERSPRECHEN ===== */}
      <section className="story-section" id="versprechen">
        <div className="section-inner">
          <div className="text-col">
            <h1 className="lg">Mein Versprechen: Saubere Sache statt leerer Versprechungen</h1>
            <h1 className="xl" style={{ marginBottom: '1rem' }}>
              Echtes Teamwork. Volle Transparenz.
            </h1>
            <p style={{ maxWidth: '540px' }}>
              Ich bin dein Partner an deiner Seite: Ich erkläre jede Entscheidung, nehme dein Team an die Hand und mache euch fit für eure digitalen Prozesse – ohne Fachchinesisch, ohne Umwege.
            </p>
            <div className="promise-list" style={{ maxWidth: '500px' }}>
              <div className="promise-item">
                Wächst einfach mit: Flexible Systeme, die sich an deinen Betrieb anpassen
              </div>
              <div className="promise-item">
                Verlässlicher Zeitplan: Klare Absprachen, pünktliche Umsetzung
              </div>
              <div className="promise-item">
                Volle Transparenz: Klare Kosten, ehrliche Worte, offene Lösungen
              </div>
            </div>
            <div className="btn-group">
              <button
                id="versprechenContactBtn"
                onClick={() => openContactWithTopic('Workflow')}
                className="btn btn--primary"
              >
                Jetzt zusammenarbeiten
              </button>
            </div>
          </div>
          <div className="img-col">
            <img
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/jkojvbyb22of5cv/generated-images/ZKYZe_tsfpj6jVTKcb5_v.jpg"
              alt="Echtes Teamwork und transparente Zusammenarbeit"
              referrerPolicy="no-referrer"
              className="art-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== 6. KONTAKT ===== */}
      <section className="story-section" id="kontakt">
        <div className="section-inner">
          <div className="text-col">
            <h1 className="lg">Lass uns sprechen – Bereit für den nächsten Schritt?</h1>
            <h1 className="xl" style={{ marginBottom: '1rem' }}>
              Dein Partner in Bremen – Peterswerder
            </h1>
            <p style={{ maxWidth: '540px' }}>
              Persönlich vor Ort und digital bestens vernetzt. Lass uns gemeinsam anpacken und die digitale Zukunft deines Betriebs gestalten.
            </p>
            <div className="contact-grid">
              <div className="contact-item">
                <h4>E‑Mail</h4>
                <a href="mailto:torre@tedigital.de" id="contactMailLink">
                  torre@tedigital.de
                </a>
              </div>
              <div className="contact-item">
                <h4>Standort</h4>
                <p>Bremen‑Peterswerder</p>
              </div>
              <div className="contact-item">
                <h4>Erstgespräch</h4>
                <p>Kostenlos, unverbindlich – bei einem Kaffee oder digital</p>
              </div>
            </div>
            <div className="btn-group">
              <button
                id="footerContactBtn"
                onClick={() => openContactWithTopic('Erstgespräch')}
                className="btn btn--primary"
              >
                Jetzt Anfrage senden
              </button>
            </div>
          </div>
          <div className="img-col">
            <img
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/jkojvbyb22of5cv/generated-images/5DSsQ0PrNH_5Ua5xIQOhH.jpg"
              alt="HanseAI Bremen Kontakt und Beratung vor Ort"
              referrerPolicy="no-referrer"
              className="art-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="appFooter">
        <p className="brand-line">
          <strong>tedigital</strong> – HanseAI Bremen
        </p>
        <div className="legal-links">
          <button
            type="button"
            id="impressumLink"
            onClick={() => setLegalModalType('impressum')}
          >
            Impressum
          </button>
          <button
            type="button"
            id="datenschutzLink"
            onClick={() => setLegalModalType('datenschutz')}
          >
            Datenschutz
          </button>
        </div>
      </footer>

      {/* ===== CONTACT MODAL ===== */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultTopic={activeTopic}
      />

      {/* ===== LEGAL MODAL ===== */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

