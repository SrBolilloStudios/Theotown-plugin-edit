import { Card, CardHeader, CardTitle, CardContent } from '@heroui/react';

export default function JsonView({ jsonText }: any) {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>JSON View</CardTitle>
            </CardHeader>
            <CardContent>
                <pre
                    className="text-xs whitespace-pre-wrap break-all"
                    style={{ fontFamily: '"Google Sans Code", monospace' }}
                >
                    {jsonText}
                </pre>
            </CardContent>
        </Card>
    );
}
