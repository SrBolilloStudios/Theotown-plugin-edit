import { Card } from "@heroui/react";
import { FileCode } from "lucide-react";

function formatJson(raw: string): string {
  try {
    return JSON.stringify(JSON.parse(raw), null, 2);
  } catch {
    return raw;
  }
}

function JsonView({ icon = null, title, json, className }: { icon: React.ReactNode; title: string; json: string; className?: string }) {
  return (
    <div className={className}>
      <Card>
        <Card.Header>
          <div className="flex flex-row gap-3">
            {icon || <FileCode size={20} />}
            <p className="text-md">{title}</p>
          </div>
        </Card.Header>
        <Card.Content>
          <pre className="font-google-sans-code text-sm whitespace-pre-wrap break-words">
            {formatJson(json)}
          </pre>
        </Card.Content>
      </Card>
    </div>
  );
}

export { JsonView };
