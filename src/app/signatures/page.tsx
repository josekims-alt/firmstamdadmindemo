import Shell from "@/components/app/shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function SignaturesPage() {
  return (
    <Shell>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle>Signatures</CardTitle>
            <CardDescription>Manage company-wide signatures</CardDescription>
          </div>
          <Button>Create template</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <THead>
              <TR>
                <TH>Name</TH>
                <TH>Assigned</TH>
                <TH>Status</TH>
                <TH></TH>
              </TR>
            </THead>
            <TBody>
              {[
                { name: "Default Signature", assigned: "All staff", status: "Active" },
                { name: "Sales Signature", assigned: "Sales team", status: "Draft" }
              ].map((row) => (
                <TR key={row.name}>
                  <TD>{row.name}</TD>
                  <TD>{row.assigned}</TD>
                  <TD>{row.status}</TD>
                  <TD className="text-right"><Button variant="outline">Edit</Button></TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </CardContent>
      </Card>
    </Shell>
  );
}
