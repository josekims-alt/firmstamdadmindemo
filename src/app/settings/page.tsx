'use client';
import Shell from "@/components/app/shell";
import { Tabs } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

const tabs = [
  { value: "workspace", label: "Workspace" },
  { value: "domains", label: "Domains" },
  { value: "providers", label: "Providers" },
  { value: "billing", label: "Billing" },
  { value: "team", label: "Team" }
];

export default function SettingsPage() {
  const [value, setValue] = React.useState("workspace");
  return (
    <Shell>
      <Tabs tabs={tabs} value={value} onChange={setValue} />
      <div className="mt-6">
        <Card>
          <CardContent className="space-y-4 pt-6">
            {value === "workspace" && (
              <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Label>Workspace name</Label>
                  <Input placeholder="Acme Ltd" />
                </div>
                <div>
                  <Label>Brand color</Label>
                  <Input type="color" defaultValue="#4169e1" />
                </div>
                <div>
                  <Label>Locale</Label>
                  <Select>
                    <option>en-KE</option>
                    <option>en-GB</option>
                    <option>en-US</option>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Button>Save changes</Button>
                </div>
              </form>
            )}
            {value === "domains" && (
              <div className="space-y-3">
                <Label>Primary domain</Label>
                <Input placeholder="example.com" />
                <Button>Verify</Button>
              </div>
            )}
            {value === "providers" && (
              <div className="space-y-3">
                <p>Connect Google Workspace or Microsoft 365</p>
                <div className="flex gap-2">
                  <Button>Connect Google</Button>
                  <Button variant="outline">Connect Microsoft</Button>
                </div>
              </div>
            )}
            {value === "billing" && (
              <div className="space-y-3">
                <Label>Plan</Label>
                <Select>
                  <option>Starter</option>
                  <option>Growth</option>
                  <option>Scale</option>
                </Select>
                <Button>Update plan</Button>
              </div>
            )}
            {value === "team" && (
              <div className="space-y-3">
                <Label>Invite by email</Label>
                <div className="flex gap-2">
                  <Input placeholder="name@company.com" />
                  <Button>Invite</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Shell>
  );
}
