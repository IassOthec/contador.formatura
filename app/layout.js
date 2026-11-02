import "./globals.css";

export const metadata = {
  title: "Contagem para a Formatura",
  description: "Um contador regressivo para a nossa formatura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}