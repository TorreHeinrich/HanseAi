import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    topic: defaultTopic,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        topic: defaultTopic || prev.topic || 'Erstgespräch',
      }));
      setIsSubmitted(false);
      setErrorMessage(null);
    }
  }, [isOpen, defaultTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '32a172da-dd82-4c25-9e31-577e122a0ba0',
          name: formData.name,
          email: formData.email,
          topic: formData.topic,
          message: formData.message,
          subject: `Neue Kontaktanfrage (${formData.topic}) von ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Es gab einen Fehler bei der Übertragung.');
      }
    } catch {
      setErrorMessage('Netzwerkfehler. Bitte versuche es später noch einmal.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contactModal"
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalHeading"
    >
      <div className="modal-box">
        <button
          id="contactModalCloseBtn"
          className="modal-close"
          onClick={onClose}
          aria-label="Modal schließen"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <div id="formView">
            <h2 id="modalHeading">Lass uns reden</h2>
            <p className="modal-sub">
              Erzähl mir kurz, worum es geht – ich melde mich binnen 24h.
            </p>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-200 text-sm">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} id="contactForm">
              <div className="form-group">
                <label htmlFor="formName">Dein Name</label>
                <input
                  type="text"
                  id="formName"
                  placeholder="Max Mustermann"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="formEmail">Deine E‑Mail</label>
                <input
                  type="email"
                  id="formEmail"
                  placeholder="max@beispiel.de"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="formTopic">Mein Anliegen</label>
                <select
                  id="formTopic"
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  required
                >
                  <option value="">Bitte wählen …</option>
                  <option value="Erstgespräch">☕ Kostenloses Erstgespräch</option>
                  <option value="KI-Strategie">🧭 KI‑Strategie</option>
                  <option value="Workflow">⚙️ Workflow‑Optimierung</option>
                  <option value="Website">🌐 Website & Online‑Auftritt</option>
                  <option value="Digitalisierung">
                    📋 Digitalisierung von Abläufen
                  </option>
                  <option value="Sonstiges">💬 Sonstiges</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="formMessage">Deine Nachricht</label>
                <textarea
                  id="formMessage"
                  placeholder="Erzähl mir mehr von deinem Vorhaben …"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                id="contactSubmitBtn"
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Wird gesendet …' : 'Nachricht senden'}
              </button>
            </form>
          </div>
        ) : (
          <div className="thank-you show" id="thankYouView">
            <div className="text-4xl mb-3">🙌</div>
            <h3>Danke für deine Nachricht!</h3>
            <p className="mb-6">Ich melde mich in Kürze bei dir.</p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                id="thankYouCloseBtn"
                onClick={onClose}
                className="btn btn--primary text-sm px-6 py-2.5"
              >
                Fertig
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
