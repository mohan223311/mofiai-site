// Authentic brand icons with original colors.
import type { SVGProps } from "react";

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#FF0000"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z"
      />
      <path fill="#fff" d="M9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="12" fill="#229ED9" />
      <path
        fill="#fff"
        d="M5.5 11.6l12.3-4.7c.6-.2 1.1.1.9.9l-2.1 9.8c-.1.6-.5.8-1 .5l-2.8-2.1-1.4 1.3c-.1.2-.3.3-.6.3l.2-3 5.5-4.9c.2-.2 0-.3-.3-.1l-6.7 4.2-2.9-.9c-.6-.2-.6-.6.1-.9z"
      />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-grad)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#fff"
        d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1c-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9s0-.4.1-.5l.4-.4.3-.5c.1-.2.1-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3s-.9.9-.9 2.1.9 2.5 1 2.7c.1.2 1.8 2.7 4.3 3.7.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.2s.2-1.1.1-1.2c-.1-.1-.2-.2-.5-.3z"
      />
    </svg>
  );
}

export function GmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" fill="#fff" />
      <path d="M2 7l10 7 10-7" stroke="#EA4335" strokeWidth="2" fill="none" />
      <path d="M2 7v12h4V10z" fill="#4285F4" />
      <path d="M22 7v12h-4V10z" fill="#34A853" />
      <path d="M2 7l10 7L22 7" fill="none" stroke="#EA4335" strokeWidth="0" />
    </svg>
  );
}
