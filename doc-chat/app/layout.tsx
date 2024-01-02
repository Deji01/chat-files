import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "AI Chat App",
  description: "The fastest way to chat with your documents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={new QueryClient}>
      <html lang="en" className={GeistSans.className}>
        <body className="bg-background text-foreground">
          <main className="min-h-screen flex flex-col items-center">
            {children}
          </main>
        </body>
      </html>
    </QueryClientProvider>
  );
}
