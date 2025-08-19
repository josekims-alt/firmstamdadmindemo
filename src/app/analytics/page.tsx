import Shell from "@/components/app/shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <Shell>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Opens</CardTitle>
            <CardDescription>Signature impressions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 rounded-xl bg-muted" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Banner clicks</CardTitle>
            <CardDescription>Call-to-action CTR</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 rounded-xl bg-muted" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top performers</CardTitle>
            <CardDescription>Teams & campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 rounded-xl bg-muted" />
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
}
