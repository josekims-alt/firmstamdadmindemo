import Shell from "@/components/app/shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const templates = [
  { name: "Minimal Left", thumb: "/assets/template-1.png" },
  { name: "Stacked Center", thumb: "/assets/template-2.png" },
  { name: "Badge Row", thumb: "/assets/template-3.png" }
];

export default function TemplatesPage() {
  return (
    <Shell>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Template Gallery</h2>
        <Button>New template</Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {templates.map((t) => (
          <Card key={t.name}>
            <CardHeader>
              <CardTitle>{t.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[16/10] rounded-xl border bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>
    </Shell>
  );
}
