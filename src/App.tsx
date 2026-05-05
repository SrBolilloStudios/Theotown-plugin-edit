import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { JsonView } from "./components/editor/JsonView";
import { Code } from "lucide-react";
import Manifest from "./components/editor/Manifest";
import { useState } from "react";
import { jsonSave } from "./lib/jsonFunction";
function App() {
  const jsonData = [{
      name: "John Doe",
      age: 30,
      city: "New York",
    },
    {"text": {
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text2: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      textElement: {
        text3: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        text4: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        text5: { "1": 2 }
      }
    }}];
    const [manifestData, setManifestData] = useState();
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <JsonView
        icon={<Code size={20} />}
        title="JSON View"
        json={manifestData}
      />
      <Manifest onUpdate={setManifestData} />
      <button onClick= {() => jsonSave(manifestData, "manifest.json")}>
        Save JSON
      </button>
      <Footer />
    </div>
  );
}

export default App;
