'use client';
import * as React from "react";
import { cn } from "@/lib/utils";

type Tab = { value: string; label: string; };
interface TabsProps {
  tabs: Tab[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Tabs({ tabs, value: controlled, onChange, className }: TabsProps) {
  const [value, setValue] = React.useState(controlled ?? tabs[0]?.value);
  React.useEffect(() => {
    if (controlled) setValue(controlled);
  }, [controlled]);
  return (
    <div className={cn("flex items-center gap-2 rounded-lg border p-1", className)} role="tablist">
      {tabs.map((t) => (
        <button
          key={t.value}
          role="tab"
          aria-selected={value === t.value}
          className={cn("h-9 rounded-md px-3 text-sm transition", value === t.value ? "bg-primary text-primary-foreground" : "hover:bg-muted")}
          onClick={() => { setValue(t.value); onChange?.(t.value); }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
