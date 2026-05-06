import { useState } from "react";
import Manifest from "../components/editor/Manifest";
import { JsonView } from "../components/editor/JsonView";
import { Code, X } from "lucide-react";
import { jsonSave } from "../lib/jsonFunction";
import { Tabs, Button } from "@heroui/react";

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

function TabsEditor() {
  const [tabs, setTabs] = useState([{ id: "0", label: "Plugin 1" }]);
  const [counter, setCounter] = useState(1);
  const [selectedKey, setSelectedKey] = useState("0");

  const addTab = () => {
    const id = String(counter);
    setTabs((prev) => [...prev, { id, label: `Plugin ${prev.length + 1}` }]);
    setCounter((c) => c + 1);
    setSelectedKey(id);
  };

  const removeTab = (id: string) => {
    setTabs((prev) => {
      const index = prev.findIndex((t) => t.id === id);
      const next = prev.filter((t) => t.id !== id);
      if (selectedKey === id && next.length > 0)
        setSelectedKey(next[Math.max(0, index - 1)].id);
      return next;
    });
  };

  return (
    <div className="flex flex-col items-start gap-3 m-3 w-full">
      <Button onClick={addTab}>Add Tab</Button>
      <Tabs
        variant="secondary"
        orientation="vertical"
        className="w-full"
        selectedKey={selectedKey}
        onSelectionChange={(key) => setSelectedKey(String(key))}
      >
        <Tabs.ListContainer>
          <Tabs.List aria-label="Plugins">
            {tabs.map((tab, index) => (
              <Tabs.Tab key={tab.id} id={tab.id}>
                {tab.label}
                {index !== 0 && (
                  <button
                    className="ml-1 rounded hover:bg-default-200 p-0.5"
                    onClick={(e) => { e.stopPropagation(); removeTab(tab.id); }}
                  >
                    <X size={12} />
                  </button>
                )}
                <Tabs.Indicator />
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs.ListContainer>
        {tabs.map((tab) => (
          <Tabs.Panel key={tab.id} id={tab.id}>
            <ManifestEditor />
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  );
}

export { ManifestEditor, TabsEditor };
