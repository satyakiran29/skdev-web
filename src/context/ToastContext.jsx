import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X, Sparkles } from 'lucide-react';

const ToastContext = createContext(null);

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
        return <AlertCircle size={20} color="#ef4444" />;
      case 'info':
        return <Info size={20} color="var(--accent-primary)" />;
      case 'sparkle':
        return <Sparkles size={20} color="#ec4899" />;
      case 'success':
      default:
        return <CheckCircle2 size={20} color="#22c55e" />;
    }
  };

  const getBorderGlow = (type) => {
    switch (type) {
      case 'error':
        return 'rgba(239, 68, 68, 0.4)';
      case 'info':
        return 'rgba(56, 189, 248, 0.4)';
      case 'sparkle':
        return 'rgba(236, 72, 153, 0.4)';
      case 'success':
      default:
        return 'rgba(34, 197, 94, 0.4)';
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
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${getBorderGlow(t.type)}`,
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 16px rgba(56, 189, 248, 0.15)',
              borderRadius: '1rem',
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

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
