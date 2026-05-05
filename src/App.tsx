import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { ManifestEditor } from "./pages/Editors";
function App() {
  return (
    <div className="flex flex-col h-full w-full ">
      <Navbar />
      <div className="flex flex-row gap-3 m-3">
        <ManifestEditor />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
