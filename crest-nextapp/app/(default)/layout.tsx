import Header from "../component/header";
import Footer from "../component/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // return (
  //   <html lang="en">
  //     <body>
  //       <Header />
  //       <div className="container mx-auto">{children}</div>
  //       <Footer />
  //     </body>
  //   </html>
  // );
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
