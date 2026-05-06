import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { ManifestEditor, TabsEditor } from "./pages/Editors";
function App() {
  return (
    <div className="flex flex-col h-full w-full ">
      <Navbar />
      <div className="flex flex-row gap-3 m-3">
        <ManifestEditor />
        
      </div>
      <div className="w-full">
<TabsEditor />
      </div>
      <Footer />
    </div>
  );
}

export default App;
