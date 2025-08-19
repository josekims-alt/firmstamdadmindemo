import Shell from "@/components/app/shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <Shell>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Signature rollouts</CardTitle>
            <CardDescription>Company-wide deployment status at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Total Staff", value: "214" },
                { label: "Assigned", value: "206" },
                { label: "Pending", value: "8" },
                { label: "Last Sync", value: "2h ago" }
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl border p-4">
                  <div className="text-2xl font-semibold">{kpi.value}</div>
                  <div className="text-sm text-muted-foreground">{kpi.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Workspace</CardTitle>
            <CardDescription>Google Workspace connected</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-500 text-white">Healthy</Badge>
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
}
