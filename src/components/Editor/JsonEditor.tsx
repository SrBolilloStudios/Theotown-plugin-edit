import {
    Button, ButtonGroup,
    Card, CardHeader, CardTitle, CardContent,
    Input,
    Separator,
} from '@heroui/react';
import { useState } from 'react';
import { v4 as IDGenerate } from 'uuid';
import { Home, Store, Factory, Building, Building2 } from 'lucide-react';

type typeJson = 'residenial' | 'commercial' | 'industrial';
type levelJson = 1 | 2 | 3;

export default function JsonEditor() {
    const [ID_Manifest, setID_Manifest] = useState('');
    const [numberVersion, setNumberVersion] = useState(1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [type, setType] = useState<typeJson>('residenial');
    const [level, setLevel] = useState(2);
    const [power, setPower] = useState(0);
    const [waterm, setWater] = useState(0);

    const toggleType = (t: typeJson) => {
        setType(t);
    };
    const isActiveType = (t: typeJson) => type === t;
    const toggleLevel = (l: levelJson) => {
        setLevel(l);
    };
    const isActiveLevel = (l: levelJson) => level === l;

    const handleIDGenerate = () => (setID_Manifest(IDGenerate()));

    return (
        <Card>
            <CardHeader>
                <CardTitle>JSON Editor</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">ID Manifest</span>
                    <div className="flex gap-2">
                        <Input
                            type="text"
                            value={ID_Manifest}
                            onChange={(e) => setID_Manifest(e.target.value)}
                            placeholder="My ID Manifest is.."
                            className="flex-1"
                        />
                        <Button variant="primary" onPress={handleIDGenerate}>Auto Generate</Button>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Numeric version code</span>
                    <Input
                        type="number"
                        value={String(numberVersion)}
                        onChange={(e) => { if (Number(e.target.value) > 0) setNumberVersion(Number(e.target.value)) }}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Title</span>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="My plugin is..."
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Description</span>
                    <Input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="My plugin is..."
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Author</span>
                    <Input
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="My nickname is..."
                    />
                </div>

                <Separator />

                <div className="flex flex-wrap items-start gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">Type</span>
                        <ButtonGroup>
                            <Button
                                variant={isActiveType('residenial') ? 'primary' : 'outline'}
                                onPress={() => toggleType('residenial')}
                            >
                                <Home size={16} />
                                Residencial
                            </Button>
                            <Button
                                variant={isActiveType('commercial') ? 'primary' : 'outline'}
                                onPress={() => toggleType('commercial')}
                            >
                                <Store size={16} />
                                Commercial
                            </Button>
                            <Button
                                variant={isActiveType('industrial') ? 'primary' : 'outline'}
                                onPress={() => toggleType('industrial')}
                            >
                                <Factory size={16} />
                                Industrial
                            </Button>
                        </ButtonGroup>
                    </div>

                    <Separator orientation="vertical" className="self-stretch" />

                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">Level</span>
                        <ButtonGroup>
                            <Button
                                variant={isActiveLevel(1) ? 'primary' : 'outline'}
                                onPress={() => toggleLevel(1)}
                            >
                                <Home size={16} />
                                1
                            </Button>
                            <Button
                                variant={isActiveLevel(2) ? 'primary' : 'outline'}
                                onPress={() => toggleLevel(2)}
                            >
                                <Building size={16} />
                                2
                            </Button>
                            <Button
                                variant={isActiveLevel(3) ? 'primary' : 'outline'}
                                onPress={() => toggleLevel(3)}
                            >
                                <Building2 size={16} />
                                3
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>

                <div className="flex flex-wrap items-start gap-6">
                    <div className="flex flex-col gap-1 flex-1 min-w-24">
                        <span className="text-sm font-medium">Power</span>
                        <Input
                            type="number"
                            value={String(power)}
                            onChange={(e) => { if (Number(e.target.value) >= 0) setPower(Number(e.target.value)) }}
                        />
                    </div>

                    <Separator orientation="vertical" className="self-stretch" />

                    <div className="flex flex-col gap-1 flex-1 min-w-24">
                        <span className="text-sm font-medium">Water</span>
                        <Input
                            type="number"
                            value={String(waterm)}
                            onChange={(e) => { if (Number(e.target.value) >= 0) setWater(Number(e.target.value)) }}
                        />
                    </div>
                </div>

                <span className="text-xs text-foreground/40">Json Editor 0.1</span>
            </CardContent>
        </Card>
    );
}
