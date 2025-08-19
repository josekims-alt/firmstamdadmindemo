'use client';
import * as React from "react";
import { cn } from "@/lib/utils";

export interface Step { id: number; title: string; description?: string; }
interface StepListProps {
  steps: Step[];
  current: number; // 1-based
  onStepClick?: (id: number) => void;
}

export function StepList({ steps, current, onStepClick }: StepListProps) {
  return (
    <ol className="space-y-2">
      {steps.map((s) => {
        const active = s.id === current;
        const complete = s.id < current;
        return (
          <li key={s.id}>
            <button
              onClick={() => onStepClick?.(s.id)}
              className={cn("flex w-full items-start gap-3 rounded-xl border p-3 text-left transition",
                active ? "border-primary bg-primary/5" : complete ? "border-green-500 bg-green-500/5" : "hover:bg-muted")}
            >
              <div className={cn("mt-0.5 h-6 w-6 rounded-full text-xs font-semibold flex items-center justify-center",
                active ? "bg-primary text-primary-foreground" :
                complete ? "bg-green-500 text-white" : "bg-muted-foreground/10")}>
                {complete ? "✓" : s.id}
              </div>
              <div>
                <div className="font-medium">{s.title}</div>
                {s.description ? <div className="text-sm text-muted-foreground">{s.description}</div> : null}
              </div>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
