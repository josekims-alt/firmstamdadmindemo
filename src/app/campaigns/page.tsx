import Shell from "@/components/app/shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";

export default function CampaignsPage() {
  return (
    <Shell>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle>Email banner campaigns</CardTitle>
            <CardDescription>Run time-bound promotional banners</CardDescription>
          </div>
          <Button>Create campaign</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <THead>
              <TR>
                <TH>Campaign</TH>
                <TH>Status</TH>
                <TH>Start</TH>
                <TH>End</TH>
                <TH></TH>
              </TR>
            </THead>
            <TBody>
              {[
                { name: "August Promo", status: "Scheduled", start: "2025-08-22", end: "2025-09-05" }
              ].map((c) => (
                <TR key={c.name}>
                  <TD>{c.name}</TD>
                  <TD>{c.status}</TD>
                  <TD>{c.start}</TD>
                  <TD>{c.end}</TD>
                  <TD className="text-right"><Button variant="outline">Manage</Button></TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </CardContent>
      </Card>
    </Shell>
  );
}
