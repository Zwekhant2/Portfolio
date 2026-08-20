export function InvoicingIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hero balance card */}
      <rect x="4" y="16" width="92" height="88" rx="6" fill="white" />
      <rect x="16" y="30" width="34" height="5" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="16" y="42" width="64" height="14" rx="2" fill="rgba(255,255,255,0.55)" />
      <rect x="16" y="62" width="46" height="4" rx="1" fill="rgba(255,255,255,0.3)" />
      <path d="M16 76 L80 76" stroke="white" strokeWidth="1" strokeOpacity="0.25" />
      <rect x="16" y="84" width="16" height="4" rx="1" fill="rgba(255,255,255,0.35)" />
      <rect x="40" y="84" width="16" height="4" rx="1" fill="rgba(255,255,255,0.35)" />
      <rect x="64" y="84" width="16" height="4" rx="1" fill="rgba(255,255,255,0.35)" />

      {/* Invoice list */}
      <rect x="104" y="16" width="92" height="16" rx="3" fill="white" fillOpacity="0.85" />
      <rect x="112" y="21" width="30" height="4" rx="1" fill="rgba(0,0,0,0.18)" />

      <rect x="104" y="38" width="92" height="20" rx="3" fill="white" />
      <rect x="112" y="45" width="36" height="4" rx="1" fill="rgba(255,255,255,0.45)" />
      <circle cx="184" cy="47" r="3" fill="#34d399" />

      <rect x="104" y="62" width="92" height="20" rx="3" fill="white" />
      <rect x="112" y="69" width="36" height="4" rx="1" fill="rgba(255,255,255,0.45)" />
      <circle cx="184" cy="71" r="3" fill="#f87171" />

      <rect x="104" y="86" width="92" height="20" rx="3" fill="white" />
      <rect x="112" y="93" width="36" height="4" rx="1" fill="rgba(255,255,255,0.45)" />
      <circle cx="184" cy="95" r="3" fill="#60a5fa" />
    </svg>
  )
}
