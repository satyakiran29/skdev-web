import React, { useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X, Sparkles } from 'lucide-react';
import { ToastContext } from './toastContextBase';

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message, type = 'success', duration = 3000) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    const newToast = { id, message, type, duration };

    setToasts((prev) => [...prev.slice(-2), newToast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, [removeToast]);

  const toast = {
    show: showToast,
    success: (msg, duration) => showToast(msg, 'success', duration),
    info: (msg, duration) => showToast(msg, 'info', duration),
    error: (msg, duration) => showToast(msg, 'error', duration),
    sparkle: (msg, duration) => showToast(msg, 'sparkle', duration),
  };

  const getIcon = (type) => {
    switch (type) {
      case 'error':
        return <AlertCircle size={20} color="var(--accent-primary)" />;
      case 'info':
        return <Info size={20} color="var(--accent-primary)" />;
      case 'sparkle':
        return <Sparkles size={20} color="var(--accent-primary)" />;
      case 'success':
      default:
        return <CheckCircle2 size={20} color="var(--accent-secondary)" />;
    }
  };

  const getBorderGlow = (type) => {
    switch (type) {
      case 'error':
        return 'rgba(239, 68, 68, 0.4)';
      case 'info':
        return 'rgba(var(--accent-rgb), 0.4)';
      case 'sparkle':
        return 'rgba(var(--accent-rgb), 0.4)';
      case 'success':
      default:
        return 'rgba(var(--secondary-rgb), 0.4)';
    }
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {/* Toast Notification Container */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          pointerEvents: 'none',
          width: '90%',
          maxWidth: '420px',
        }}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="animate-fade-in"
            style={{
              pointerEvents: 'auto',
              width: '100%',
              background: 'var(--bg-secondary)',
              border: `1px solid ${getBorderGlow(t.type)}`,
              boxShadow: '0 8px 24px rgba(36, 35, 31, 0.12)',
              borderRadius: '5px',
              padding: '0.875rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.875rem',
              color: 'var(--text-primary)',
              animation: 'toastSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, minWidth: 0 }}>
              <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                {getIcon(t.type)}
              </div>
              <span style={{ fontSize: '0.925rem', fontWeight: 500, lineHeight: 1.4, wordBreak: 'break-word' }}>
                {t.message}
              </span>
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="btn-icon"
              style={{
                padding: '0.25rem',
                color: 'var(--text-secondary)',
                opacity: 0.8,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              title="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
