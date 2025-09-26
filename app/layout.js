import "./globals.css";

export const metadata = {
  title: "GPT-OSS Chat",
  description: "Chat-style prototype for image processing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100">
        {children}
      </body>
    </html>
  );
}
