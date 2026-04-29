import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fixabot Test App',
  description: 'A tiny app used to validate the Fixabot end-to-end pipeline.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // The Fixabot widget API key is injected via NEXT_PUBLIC_FIXABOT_KEY at build time.
  const fixabotKey = process.env.NEXT_PUBLIC_FIXABOT_KEY ?? '';
  const fixabotUrl = process.env.NEXT_PUBLIC_FIXABOT_URL ?? 'https://api.fixabot.app';

  return (
    <html lang="en">
      <body>
        {children}
        {fixabotKey && (
          <Script
            src={`${fixabotUrl}/widget/widget.js`}
            data-project-key={fixabotKey}
            data-app-version="0.1.0"
            data-position="bottom-right"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
