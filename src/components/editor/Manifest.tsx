import { Card, Input, TextArea, Button } from "@heroui/react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { Bolt } from "lucide-react";
import type { ManifestType } from "../../lib/type";

function Manifest({
  onUpdate,
  className,
}: {
  onUpdate: (data: string) => void;
  className?: string;
}) {
  const [uuidManifest, setUuidManifest] = useState("");
  const handleGenerateUUID = () => {
    const uuid = uuidv4();
    setUuidManifest(uuid);
  };
  const [version, setVersion] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const manifestData: ManifestType = {
      uuid: uuidManifest,
      name,
      version,
      description,
      author,
    };
    onUpdate(JSON.stringify(manifestData, null, 2));
  }, [uuidManifest, name, version, description, author]);
  return (
    <div className={className}>
      <Card>
        <Card.Header>
          <div className="flex flex-row gap-3">
            <Bolt size={20} />
            <p className="text-md">Manifest</p>
          </div>
        </Card.Header>
        <Card.Content>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row gap-3">
              <Input
                value={uuidManifest}
                onChange={(e) => setUuidManifest(e.target.value)}
                variant="primary"
                placeholder="UUID"
                className="w-full"
              />
              <Button onClick={handleGenerateUUID}>Generate UUID</Button>
            </div>
            <div className="flex flex-row gap-3 w-full">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full"
              />
              <Input
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                placeholder="Version"
                className="w-full"
              />

              <Input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                className="w-full"
              />
            </div>
            <div className="flex flex-row gap-3 flex-1">
              <TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full"
              />
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Manifest;
