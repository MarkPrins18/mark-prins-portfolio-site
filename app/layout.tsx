import "./globals.css";

export const metadata = {
  title: "Mark Prins | Junior Software Developer & WordPress Specialist",
  description:
    "Junior Software Developer uit Etten-Leur. Gespecialiseerd in het bouwen van WordPress websites, technische SEO en PHP, met een groeiende focus op React en Next.js.",
  metadataBase: new URL("https://mark-prins.nl"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink">
        <div className="max-w-[85%] mx-auto border-x border-faint min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
