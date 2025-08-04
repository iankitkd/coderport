import Dashboard from "@/components/Dashboard";
// import Header from "@/components/Layout/Header";
// import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto">
        {/* <Header /> */}
        <Dashboard />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
