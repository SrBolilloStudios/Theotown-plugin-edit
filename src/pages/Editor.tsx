import ManifestEditor from '../components/Editor/ManifestEditor.tsx';
import JsonView from '../components/Editor/JsonView.tsx';
import JsonEditor from '../components/Editor/JsonEditor.tsx';
import { useState } from 'react';

export default function Editor() {
    const [manifest, setManifest] = useState<any>(null);
    const handleManifestChange = (data: any) => {
        setManifest(data);
    };
    const JsonText = JSON.stringify(manifest, null, 2);

    return (
        <div className="min-h-screen bg-background p-4">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-10">
                    <ManifestEditor onChange={handleManifestChange} />
                </div>
                <div className="col-span-2">
                    <JsonView jsonText={JsonText} />
                </div>
            </div>
            <div className="mt-4">
                <JsonEditor />
            </div>
        </div>
    );
}
