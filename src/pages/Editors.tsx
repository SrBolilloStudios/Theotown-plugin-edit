import { useState } from "react";
import Manifest from "../components/editor/Manifest";
import { JsonView } from "../components/editor/JsonView";
import { Code } from "lucide-react";
import { jsonSave } from "../lib/jsonFunction";

function ManifestEditor() {
  const [manifestData, setManifestData] = useState("");
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-row gap-3 w-full items-stretch">
        <Manifest onUpdate={setManifestData} className="basis-2/3 h-full" />
        <JsonView
          icon={<Code size={20} />}
          title="JSON View"
          json={manifestData}
          className="basis-1/3 h-full"
        />
      </div>
      <button onClick={() => jsonSave(manifestData, "manifest.json")}>
        Save JSON
      </button>
    </div>
  );
}
/**
 * function PluginEditor() {
  const [pluginData, setPluginData] = useState("");
  return (
    <div>
      <JsonView json={pluginData} title="Plugin"/>
    </div>
  );
}
 */


export { ManifestEditor };
