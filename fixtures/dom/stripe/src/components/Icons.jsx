import React from 'react';

export function WarningIcon({ width = 64, height = 64 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.115 1.308l5.635 11.269A2.365 2.365 0 0 1 13.634 16H2.365A2.365 2.365 0 0 1 .25 12.577L5.884 1.308a2.365 2.365 0 0 1 4.231 0zM8 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM8 9c.552 0 1-.32 1-.714V4.714C9 4.32 8.552 4 8 4s-1 .32-1 .714v3.572C7 8.68 7.448 9 8 9z" fillRule="evenodd" />
    </svg>
  );
}

export function ArrowRightIcon({ width = 12, height = 12 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.583 7L7.992 2.409A1 1 0 1 1 9.407.993l6.3 6.3a1 1 0 0 1 0 1.414l-6.3 6.3a1 1 0 0 1-1.415-1.416L12.583 9H1a1 1 0 1 1 0-2z" fillRule="evenodd" />
    </svg>
  );
}

export function ChevronRightIcon({ width = 8, height = 8 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.505.505a.7.7 0 0 1 .99 0l3 3a.7.7 0 0 1 0 .99l-3 3a.7.7 0 1 1-.99-.99L5.01 4 2.505 1.495a.7.7 0 0 1 0-.99Z" />
    </svg>
  );
}

export function MoreDotsIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4.5 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-9 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
    </svg>
  );
}

export function LightbulbIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 13.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm1 1.25h4v.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-.5Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.05 8.014c.594-.691.95-1.583.95-2.56C12 3.283 10.22 1.5 8 1.5c-2.22 0-4 1.782-4 3.955 0 .976.356 1.868.95 2.56.522.605 1.067 1.452 1.213 2.485h3.674c.146-1.033.691-1.88 1.212-2.486Zm1.136.978c-.498.58-.886 1.277-.886 2.04a.967.967 0 0 1-.967.968H5.667a.967.967 0 0 1-.967-.967c0-.764-.388-1.461-.886-2.04A5.407 5.407 0 0 1 2.5 5.454C2.5 2.442 4.962 0 8 0s5.5 2.442 5.5 5.455c0 1.35-.495 2.585-1.314 3.537Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.125 4.25c-.76 0-1.375.616-1.375 1.375a.625.625 0 1 1-1.25 0A2.625 2.625 0 0 1 8.125 3a.625.625 0 1 1 0 1.25Z" />
    </svg>
  );
}

export function CloseIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.249 1.249a.85.85 0 0 1 1.202 0L6 4.798l3.549-3.549a.85.85 0 1 1 1.202 1.202L7.202 6l3.549 3.549a.85.85 0 1 1-1.202 1.202L6 7.202l-3.549 3.549a.85.85 0 1 1-1.202-1.202L4.798 6l-3.55-3.549a.85.85 0 0 1 0-1.202Z" />
    </svg>
  );
}

export function EditIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M.975 7.875a1 1 0 0 1 .29-.64L7.44 1.06a1.5 1.5 0 0 1 2.122 0l1.378 1.378a1.5 1.5 0 0 1 0 2.122l-6.173 6.173a1 1 0 0 1-.64.291l-3.09.206a.25.25 0 0 1-.267-.266l.206-3.09Zm1.386 1.764.098-1.477L6.53 4.091 7.91 5.47 3.838 9.54l-1.477.1ZM8.97 4.41l.909-.909L8.5 2.121l-.909.91L8.97 4.408Z" />
    </svg>
  );
}

export function CopyIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 6.375c0-.345.28-.625.625-.625h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 6.375Zm0 2.25C4 8.28 4.28 8 4.625 8h2.75a.625.625 0 1 1 0 1.25h-2.75A.625.625 0 0 1 4 8.625Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.437 1.5A2 2 0 0 0 6.5 0h-1a2 2 0 0 0-1.937 1.5H3a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-.563ZM4.9 3.1h2.2V2a.6.6 0 0 0-.6-.6h-1a.6.6 0 0 0-.6.6v1.1ZM8 4.5H4a.5.5 0 0 1-.5-.5V2.9H3a.6.6 0 0 0-.6.6V10a.6.6 0 0 0 .6.6h6a.6.6 0 0 0 .6-.6V3.5a.6.6 0 0 0-.6-.6h-.5V4a.5.5 0 0 1-.5.5Z" />
    </svg>
  );
}

export function ClockIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 10.5A4.5 4.5 0 0 0 10.5 6c0-2.487-2.007-4.5-4.5-4.5a4.5 4.5 0 1 0 0 9ZM6 12a6 6 0 0 0 6-6c0-3.314-2.678-6-6-6a6 6 0 1 0 0 12Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5.75 2.75a.75.75 0 0 1 .75.75v2.825l1.51.907a.75.75 0 1 1-.77 1.286L5.363 7.393A.75.75 0 0 1 5 6.75V3.5a.75.75 0 0 1 .75-.75Z" />
    </svg>
  );
}

export function PlusIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.85 1a.85.85 0 1 0-1.7 0v4.15H1a.85.85 0 0 0 0 1.7h4.15V11a.85.85 0 1 0 1.7 0V6.85H11a.85.85 0 1 0 0-1.7H6.85V1Z" />
    </svg>
  );
}

export function WarningTriangleIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8.5a1.001 1.001 0 0 1-2 0 1.001 1.001 0 0 1 2 0Zm-1-5a.867.867 0 0 0-.859.99l.288 2.015a.576.576 0 0 0 1.142 0l.288-2.015A.867.867 0 0 0 6 3.5Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M.317 7.367A3 3 0 0 0 0 8.708V9a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-.292a3 3 0 0 0-.317-1.341L8.83 1.658A3 3 0 0 0 6.146 0h-.292a3 3 0 0 0-2.683 1.658L.317 7.367ZM9 10.6A1.6 1.6 0 0 0 10.6 9v-.292a1.6 1.6 0 0 0-.169-.715L7.577 2.284A1.6 1.6 0 0 0 6.146 1.4h-.292a1.6 1.6 0 0 0-1.431.884L1.569 7.993a1.6 1.6 0 0 0-.169.715V9A1.6 1.6 0 0 0 3 10.6h6Z" />
    </svg>
  );
}

export function HomeIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.707 1.293a1 1 0 0 0-1.414 0l-5.5 5.5A1 1 0 0 0 1.5 7.5V14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7.5a1 1 0 0 0-.293-.707l-5.5-5.5Z" />
    </svg>
  );
}

export function PaymentsIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm14 2H2v6h12V6Z" />
    </svg>
  );
}

export function BalancesIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM0 2.5A2.5 2.5 0 0 1 2.5 0h11A2.5 2.5 0 0 1 16 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 13.5v-11Z" />
      <path d="M4 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9ZM9 5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5Z" />
    </svg>
  );
}

export function CustomersIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 1c-2.824 0-5.329.638-6.975 1.193-.585.197-1.025.71-1.025 1.327V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.48c0-.617-.44-1.13-1.025-1.327C13.329 9.638 10.824 9 8 9Z" />
    </svg>
  );
}

export function ProductsIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3ZM0 11a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-3Zm11-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-3Z" />
    </svg>
  );
}

export function ReportsIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11Zm2 1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-9Zm4-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H7Zm3 .5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4Z" />
    </svg>
  );
}

export function ClimateIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 0a4.5 4.5 0 0 0-4.5 4.5c0 1.519.753 2.862 1.905 3.677l-3.28 5.473A1.5 1.5 0 0 0 3.412 16h9.176a1.5 1.5 0 0 0 1.287-2.35l-3.28-5.473A4.481 4.481 0 0 0 12.5 4.5 4.5 4.5 0 0 0 8 0ZM5.5 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
    </svg>
  );
}

export function SubscriptionsIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2Zm0 2V2H4v12h8V6h-2a2 2 0 0 1-2-2h2Z" />
    </svg>
  );
}

export function SearchIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.82 4.74a6.5 6.5 0 1 1 1.06-1.06l3.04 3.04a.75.75 0 1 1-1.06 1.06l-3.04-3.04Z" />
    </svg>
  );
}

export function SettingsIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.5 0A1.5 1.5 0 0 0 5 1.5v.134a1 1 0 0 1-.615.923L3.88 2.79a1 1 0 0 1-1.094-.217l-.095-.095a1.5 1.5 0 0 0-2.121 0l-.212.212a1.5 1.5 0 0 0 0 2.121l.095.095a1 1 0 0 1 .217 1.094l-.233.505a1 1 0 0 1-.923.615H1.5A1.5 1.5 0 0 0 0 8.62v.26A1.5 1.5 0 0 0 1.5 10.38h.134a1 1 0 0 1 .923.615l.233.505a1 1 0 0 1-.217 1.094l-.095.095a1.5 1.5 0 0 0 0 2.121l.212.212a1.5 1.5 0 0 0 2.121 0l.095-.095a1 1 0 0 1 1.094-.217l.505.233a1 1 0 0 1 .615.923v.134A1.5 1.5 0 0 0 8.62 16h.26a1.5 1.5 0 0 0 1.5-1.5v-.134a1 1 0 0 1 .615-.923l.505-.233a1 1 0 0 1 1.094.217l.095.095a1.5 1.5 0 0 0 2.121 0l.212-.212a1.5 1.5 0 0 0 0-2.121l-.095-.095a1 1 0 0 1-.217-1.094l.233-.505a1 1 0 0 1 .923-.615h.134A1.5 1.5 0 0 0 16 7.38v-.26a1.5 1.5 0 0 0-1.5-1.5h-.134a1 1 0 0 1-.923-.615l-.233-.505a1 1 0 0 1 .217-1.094l.095-.095a1.5 1.5 0 0 0 0-2.121l-.212-.212a1.5 1.5 0 0 0-2.121 0l-.095.095a1 1 0 0 1-1.094.217l-.505-.233A1 1 0 0 1 8.88 1.634V1.5A1.5 1.5 0 0 0 7.38 0h-.88ZM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
}

export function NotificationsIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 0a5 5 0 0 0-5 5v2.586l-.707.707A1 1 0 0 0 3 10h10a1 1 0 0 0 .707-1.707L13 7.586V5a5 5 0 0 0-5-5Zm0 16a3 3 0 0 1-2.83-2h5.66A3 3 0 0 1 8 16Z" />
    </svg>
  );
}

export function HelpIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.93-9.412-1.68.336A1.999 1.999 0 0 1 9.22 5.21c.477 0 .867.146 1.17.44.304.295.456.653.456 1.073 0 .321-.077.594-.23.82-.102.15-.263.323-.485.517l-.21.185c-.272.24-.45.49-.537.754-.088.266-.132.57-.132.912h1.52c0-.2.024-.374.073-.524.05-.15.166-.309.35-.477l.25-.214c.346-.301.6-.575.764-.822.212-.318.319-.692.319-1.12 0-.672-.24-1.217-.718-1.634-.48-.418-1.11-.627-1.89-.627-.82 0-1.47.227-1.954.68-.484.453-.727 1.05-.727 1.789h1.52c0-.344.086-.616.258-.816.172-.2.398-.3.68-.3.262 0 .474.08.634.237.161.157.242.363.242.617 0 .185-.047.348-.14.49a1.33 1.33 0 0 1-.34.352l-.15.123c-.22.18-.388.33-.505.45Zm-.93 5.425a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
}

export function AppsIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 3.5A2.5 2.5 0 0 1 3.5 1h1A2.5 2.5 0 0 1 7 3.5v1A2.5 2.5 0 0 1 4.5 7h-1A2.5 2.5 0 0 1 1 4.5v-1ZM9 3.5A2.5 2.5 0 0 1 11.5 1h1A2.5 2.5 0 0 1 15 3.5v1A2.5 2.5 0 0 1 12.5 7h-1A2.5 2.5 0 0 1 9 4.5v-1ZM1 11.5A2.5 2.5 0 0 1 3.5 9h1A2.5 2.5 0 0 1 7 11.5v1A2.5 2.5 0 0 1 4.5 15h-1A2.5 2.5 0 0 1 1 12.5v-1ZM9 11.5A2.5 2.5 0 0 1 11.5 9h1A2.5 2.5 0 0 1 15 11.5v1a2.5 2.5 0 0 1-2.5 2.5h-1A2.5 2.5 0 0 1 9 12.5v-1Z" />
    </svg>
  );
}

export function ChevronDownIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.265 4.265a.9.9 0 0 1 1.27 0L6 7.73l3.465-3.465a.9.9 0 0 1 1.27 1.27l-4.1 4.1a.9.9 0 0 1-1.27 0l-4.1-4.1a.9.9 0 0 1 0-1.27Z" />
    </svg>
  );
}

export function DevelopersIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.78 3.22a.75.75 0 0 1 0 1.06L2.56 6.5l2.22 2.22a.75.75 0 0 1-1.06 1.06l-2.75-2.75a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 0 1 1.06 0Zm6.44 0a.75.75 0 0 1 1.06 0l2.75 2.75a.75.75 0 0 1 0 1.06l-2.75 2.75a.75.75 0 1 1-1.06-1.06L13.44 6.5l-2.22-2.22a.75.75 0 0 1 0-1.06ZM8.665 2.042a.75.75 0 0 1 .543.912l-2.25 8.5a.75.75 0 0 1-1.456-.386l2.25-8.5a.75.75 0 0 1 .913-.526Z" />
    </svg>
  );
}

export function StarIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0a.75.75 0 0 1 .673.418l1.404 2.844 3.14.456a.75.75 0 0 1 .415 1.28l-2.272 2.213.536 3.128a.75.75 0 0 1-1.088.79L6 9.548l-2.808 1.476a.75.75 0 0 1-1.088-.79l.536-3.128L.368 4.893a.75.75 0 0 1 .416-1.28l3.14-.456 1.403-2.844A.75.75 0 0 1 6 0Z" />
    </svg>
  );
}

export function TerminalIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3Zm4.22.72a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06L6.19 6.75 4.22 4.78a.75.75 0 0 1 0-1.06ZM8 10.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
    </svg>
  );
}

export function MinimizeIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1 6a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 1 6Z" />
    </svg>
  );
}

export function MaximizeIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3A1.5 1.5 0 0 1 3 1.5h6A1.5 1.5 0 0 1 10.5 3v6A1.5 1.5 0 0 1 9 10.5H3A1.5 1.5 0 0 1 1.5 9V3ZM3 3h6v6H3V3Z" />
    </svg>
  );
}

export function LinkIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.5 1A.75.75 0 0 1 7.25.25h3.5a1 1 0 0 1 1 1v3.5a.75.75 0 0 1-1.5 0V2.81L5.28 7.78a.75.75 0 0 1-1.06-1.06l4.97-4.97H7.25A.75.75 0 0 1 6.5 1ZM1.25 4A.75.75 0 0 1 2 3.25h2a.75.75 0 0 1 0 1.5H2.5v5h5V8a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75h-6A.75.75 0 0 1 1.25 10V4Z" />
    </svg>
  );
}

export function RefreshIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.023 5.25h1.352a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V3.375a.75.75 0 0 1 1.5 0v.88a5.25 5.25 0 1 1 .73 5.995.75.75 0 0 1 1.06-1.06 3.75 3.75 0 1 0-.267-4.94Z" />
    </svg>
  );
}

export function FilterIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1 2.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 1 2.25ZM3 6a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 3 6Zm2 3.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" />
    </svg>
  );
}

export function InspectIcon({ width = 16, height = 16 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.286 0A7.286 7.286 0 1 0 12.1 12.1l3.193 3.193a1 1 0 0 0 1.414-1.414L13.514 10.686A7.286 7.286 0 0 0 7.286 0ZM2 7.286a5.286 5.286 0 1 1 10.571 0 5.286 5.286 0 0 1-10.571 0Z" />
    </svg>
  );
}

export function DownloadIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 0a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V.75A.75.75 0 0 1 6 0ZM.75 9a.75.75 0 0 1 .75.75v.75h9v-.75a.75.75 0 0 1 1.5 0V11a.75.75 0 0 1-.75.75H.75A.75.75 0 0 1 0 11V9.75A.75.75 0 0 1 .75 9Z" />
    </svg>
  );
}

export function SendIcon({ width = 12, height = 12 }) {
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.894 5.224 1.9.727A.75.75 0 0 0 .808 1.61l1.263 3.79 4.179.6-4.18.6L.809 10.39a.75.75 0 0 0 1.09.884l9-4.5a.75.75 0 0 0-.005-1.35Z" />
    </svg>
  );
}

export function StripeLogoIcon({ width = 24, height = 24 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305Z" />
    </svg>
  );
}

export function ProgressCircle({ label = "Not Started" }) {
  return (
    <div role="progressbar" aria-label={label} aria-valuetext={label}>
      <svg height="20" width="20" style={{ display: 'inline', position: 'absolute' }}>
        <circle
          stroke="var(--hyhghw, #ccc)"
          strokeDasharray="3px 4px"
          strokeLinecap="round"
          strokeWidth="2"
          fill="transparent"
          r="9"
          cx="10"
          cy="10"
          style={{ transformOrigin: '50% 50%' }}
        />
      </svg>
    </div>
  );
}
