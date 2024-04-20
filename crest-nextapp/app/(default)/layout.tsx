import Header from "../component/header";
import Footer from "../component/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow" 
      
      style={{ backgroundImage:'url("")' }}
      >
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
