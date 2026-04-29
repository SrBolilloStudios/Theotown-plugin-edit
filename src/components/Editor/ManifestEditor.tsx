import { useState, useEffect } from 'react';
import {
    Button, ButtonGroup,
    Card, CardHeader, CardTitle, CardContent,
    InputGroup, InputGroupInput, InputGroupPrefix,
    TooltipRoot, TooltipContent,
} from '@heroui/react';
import { v4 as IDGenerate } from 'uuid';
import { Smartphone, Apple, Monitor, HelpCircle, Fingerprint, AlignLeft, User, Tag, Hash } from 'lucide-react';

type Plataform = 'android' | 'ios' | 'desktop';

interface ManifestData {
    id: string;
    version: number;
    title: string;
    description: string;
    author: string;
    platforms: Plataform[];
}

interface ManifestEditorProps {
    onChange: (data: ManifestData) => void;
}

export default function ManifestEditor({ onChange }: ManifestEditorProps) {
    const [ID_Manifest, setID_Manifest] = useState('');
    const [numberVersion, setNumberVersion] = useState(1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [plataforms, setPlataforms] = useState<Plataform[]>(['android']);

    const togglePlatforms = (platform: Plataform) => {
        setPlataforms(prev =>
            prev.includes(platform) ?
                prev.filter(p => p !== platform) :
                [...prev, platform]
        );
    };

    const isActivePlataforms = (platform: Plataform) => plataforms.includes(platform);

    const handleGenerateID = () => setID_Manifest(IDGenerate());

    const manifest: ManifestData = {
        id: ID_Manifest,
        version: numberVersion,
        title,
        description,
        author,
        platforms: plataforms,
    };

    useEffect(() => {
        onChange(manifest);
    }, [ID_Manifest, numberVersion, title, description, author, plataforms, onChange]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Manifest Editor</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">ID Manifest</span>
                    <div className="flex gap-2">
                        <InputGroup className="flex-1">
                            <InputGroupPrefix><Tag size={16} className="text-foreground/50" /></InputGroupPrefix>
                            <InputGroupInput
                                type="text"
                                value={ID_Manifest}
                                onChange={(e) => setID_Manifest(e.target.value)}
                                placeholder="My ID Manifest is.."
                            />
                        </InputGroup>
                        <Button variant="primary" onPress={handleGenerateID}>Auto Generate</Button>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Numeric version code</span>
                    <InputGroup>
                        <InputGroupPrefix><Fingerprint size={16} className="text-foreground/50" /></InputGroupPrefix>
                        <InputGroupInput
                            type="number"
                            value={String(numberVersion)}
                            onChange={(e) => { if (Number(e.target.value) > 0) setNumberVersion(Number(e.target.value)) }}
                        />
                    </InputGroup>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Title</span>
                    <InputGroup>
                        <InputGroupPrefix><Hash size={16} className="text-foreground/50" /></InputGroupPrefix>
                        <InputGroupInput
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="My plugin..."
                        />
                    </InputGroup>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Description</span>
                    <InputGroup>
                        <InputGroupPrefix><AlignLeft size={16} className="text-foreground/50" /></InputGroupPrefix>
                        <InputGroupInput
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="My plugin..."
                        />
                    </InputGroup>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Author</span>
                    <InputGroup>
                        <InputGroupPrefix><User size={16} className="text-foreground/50" /></InputGroupPrefix>
                        <InputGroupInput
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="My nickname is..."
                        />
                    </InputGroup>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">Supported platforms</span>
                        <TooltipRoot>
                            <button type="button" className="cursor-help text-primary">
                                <HelpCircle size={16} />
                            </button>
                            <TooltipContent>You can add more than 1</TooltipContent>
                        </TooltipRoot>
                    </div>
                    <ButtonGroup>
                        <Button
                            variant={isActivePlataforms('android') ? 'primary' : 'outline'}
                            onPress={() => togglePlatforms('android')}
                        >
                            <Smartphone size={16} />
                            Android
                        </Button>
                        <Button
                            variant={isActivePlataforms('ios') ? 'primary' : 'outline'}
                            onPress={() => togglePlatforms('ios')}
                        >
                            <Apple size={16} />
                            iOS
                        </Button>
                        <Button
                            variant={isActivePlataforms('desktop') ? 'primary' : 'outline'}
                            onPress={() => togglePlatforms('desktop')}
                        >
                            <Monitor size={16} />
                            Desktop
                        </Button>
                    </ButtonGroup>
                    <span className="text-xs text-foreground/50">{plataforms.join(', ')}</span>
                </div>
            </CardContent>
        </Card>
    );
}
