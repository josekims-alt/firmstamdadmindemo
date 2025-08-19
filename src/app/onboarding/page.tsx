'use client';
import Shell from "@/components/app/shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { StepList } from "@/components/ui/steplist";
import * as React from "react";

const steps = [
  { id: 1, title: "Company profile", description: "Brand basics & contact" },
  { id: 2, title: "Domain verification", description: "Verify TXT record" },
  { id: 3, title: "Email platform sync", description: "Google/Microsoft" },
  { id: 4, title: "Billing setup", description: "Plan & payment" },
  { id: 5, title: "Signature template", description: "Create your default" },
  { id: 6, title: "Assign to users", description: "Rollout controls" }
];

export default function OnboardingPage() {
  const [current, setCurrent] = React.useState(1);
  return (
    <Shell>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[320px_1fr]">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Getting started</CardTitle>
              <CardDescription>Finish setup in under 5 minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <StepList steps={steps} current={current} onStepClick={setCurrent} />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Step {current}: {steps.find(s => s.id === current)?.title}</CardTitle>
              <CardDescription>{steps.find(s => s.id === current)?.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {current === 1 && (
                <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <Label htmlFor="company">Company name</Label>
                    <Input id="company" placeholder="Acme Ltd" />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="https://example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Support phone</Label>
                    <Input id="phone" placeholder="+254 7xx xxx xxx" />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="button" onClick={() => setCurrent(2)}>Continue</Button>
                  </div>
                </form>
              )}
              {current === 2 && (
                <div className="space-y-4">
                  <p>Add this TXT record to your DNS, then click verify.</p>
                  <div className="rounded-xl border bg-muted p-4 font-mono text-sm">
                    host: <b>firmstamp-verify</b><br/>
                    value: <b>fs=34a8e6c2</b>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => setCurrent(3)}>Verify</Button>
                    <Button variant="outline" onClick={() => setCurrent(1)}>Back</Button>
                  </div>
                </div>
              )}
              {current === 3 && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <Label>Choose provider</Label>
                    <Select defaultValue="google">
                      <option value="google">Google Workspace</option>
                      <option value="microsoft">Microsoft 365</option>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Button onClick={() => setCurrent(4)}>Connect</Button>
                  </div>
                </div>
              )}
              {current === 4 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Label>Plan</Label>
                      <Select>
                        <option>Starter</option>
                        <option>Growth</option>
                        <option>Scale</option>
                      </Select>
                    </div>
                    <div>
                      <Label>Seats</Label>
                      <Input type="number" min={1} defaultValue={25} />
                    </div>
                  </div>
                  <Button onClick={() => setCurrent(5)}>Proceed to payment</Button>
                </div>
              )}
              {current === 5 && (
                <div className="space-y-4">
                  <p>Create your default signature template (logo, brand colors, fields).</p>
                  <Button onClick={() => setCurrent(6)}>Save template</Button>
                </div>
              )}
              {current === 6 && (
                <div className="space-y-4">
                  <p>Assign the default signature to all users, or choose groups.</p>
                  <div className="flex gap-2">
                    <Button>Assign to all</Button>
                    <Button variant="outline">Choose groups</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Shell>
  );
}
