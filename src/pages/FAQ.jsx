import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "How do I purchase apps directly instead of using the Play Store?",
      answer: "We offer direct purchases via UPI (for Indian users) or PayPal (for global users). You can usually find the Telegram contact link inside the specific app's details page to initiate a direct manual purchase at a discounted rate."
    },
    {
      question: "Are my widgets permanently unlocked after I purchase them?",
      answer: "Yes! Once you purchase a premium widget pack like Aniset, you map it directly to your device. Be sure to back up your setup, as we regularly release updates directly through the Play Store."
    },
    {
      question: "Do your apps collect my personal data?",
      answer: "No. SKDev heavily prioritizes privacy. Our customization apps process everything locally on your device. The only data processed is non-identifiable, standard analytics (such as error tracking or generic ad metrics, as outlined in our Privacy Policy)."
    },
    {
      question: "How can I request a new widget or feature?",
      answer: "The best way to submit feature requests or report bugs is via our Community Hub on GitHub, or simply email us at satyakiran296@gmail.com!"
    }
  ];

  const [openIndex, setOpenIndex] = useState(0); // Open first one by default

  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Frequently Asked <span className="text-gradient">Questions</span></h1>
        <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="glass-panel" 
              style={{ 
                padding: '1.5rem', 
                cursor: 'pointer',
                border: isOpen ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)'
              }}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 600 }}>{faq.question}</h3>
                <div style={{ color: isOpen ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              {isOpen && (
                <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, animation: 'fadeIn 0.3s ease-out' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
