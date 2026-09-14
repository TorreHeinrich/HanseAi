import React, { useEffect } from 'react';
import { ModalViewType } from '../types.ts';

interface LegalModalProps {
  type: ModalViewType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && type) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!type || (type !== 'impressum' && type !== 'datenschutz')) return null;

  return (
    <div
      id="legalModalOverlay"
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-box" style={{ maxWidth: '640px' }}>
        <button
          id="legalModalCloseBtn"
          className="modal-close"
          onClick={onClose}
          aria-label="Schließen"
        >
          ✕
        </button>

        {type === 'impressum' ? (
          <div>
            <h2 className="text-2xl font-serif text-[#f5ede0] mb-4">Impressum</h2>
            <div className="text-[#d9cfc0] text-sm space-y-4 leading-relaxed">
              <div>
                <h4 className="text-[#bfa88a] font-semibold text-xs uppercase mb-1">
                  Angaben gemäß § 5 TMG
                </h4>
                <p>
                  <strong>tedigital</strong> – HanseAI Bremen
                  <br />
                  Torre Ehlers
                  <br />
                  Bremen-Peterswerder
                  <br />
                  Deutschland
                </p>
              </div>

              <div>
                <h4 className="text-[#bfa88a] font-semibold text-xs uppercase mb-1">
                  Kontakt
                </h4>
                <p>
                  E-Mail:{' '}
                  <a
                    href="mailto:torre@tedigital.de"
                    className="text-[#c47a5a] hover:underline"
                  >
                    torre@tedigital.de
                  </a>
                  <br />
                  Webseite: hanseai-bremen.de
                </p>
              </div>

              <div>
                <h4 className="text-[#bfa88a] font-semibold text-xs uppercase mb-1">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h4>
                <p>
                  Torre Ehlers
                  <br />
                  Bremen-Peterswerder
                </p>
              </div>

              <div>
                <h4 className="text-[#bfa88a] font-semibold text-xs uppercase mb-1">
                  Haftungsausschluss & Urheberrecht
                </h4>
                <p className="text-xs text-[#8a7f6e]">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                  keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                  eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-serif text-[#f5ede0] mb-4">Datenschutzerklärung</h2>
            <div className="text-[#d9cfc0] text-sm space-y-4 leading-relaxed">
              <div>
                <h4 className="text-[#bfa88a] font-semibold text-xs uppercase mb-1">
                  1. Datenschutz auf einen Blick
                </h4>
                <p>
                  Der Schutz deiner persönlichen Daten ist uns ein wichtiges Anliegen. Wir
                  behandeln deine personenbezogenen Daten vertraulich und entsprechend der
                  gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser
                  Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h4 className="text-[#bfa88a] font-semibold text-xs uppercase mb-1">
                  2. Verantwortliche Stelle
                </h4>
                <p>
                  tedigital – Torre Ehlers
                  <br />
                  Bremen-Peterswerder
                  <br />
                  E-Mail: torre@tedigital.de
                </p>
              </div>

              <div>
                <h4 className="text-[#bfa88a] font-semibold text-xs uppercase mb-1">
                  3. Datenerfassung über das Kontaktformular
                </h4>
                <p>
                  Wenn du uns per Kontaktformular oder E-Mail Anfragen zukommen lässt, werden deine
                  Angaben aus dem Anfrageformular inklusive der von dir dort angegebenen
                  Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
                  Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne deine
                  Einwilligung weiter.
                </p>
              </div>

              <div>
                <h4 className="text-[#bfa88a] font-semibold text-xs uppercase mb-1">
                  4. Deine Rechte
                </h4>
                <p className="text-xs text-[#8a7f6e]">
                  Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine
                  gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
                  der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser
                  Daten. Wende dich hierzu einfach an torre@tedigital.de.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
          <button
            id="legalModalDoneBtn"
            onClick={onClose}
            className="btn btn--primary text-sm px-6 py-2"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
