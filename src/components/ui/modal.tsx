'use client';
import * as React from "react";
import { cn } from "@/lib/utils";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className={cn("relative z-10 w-full max-w-lg rounded-2xl border bg-background p-6 shadow-xl", className)}>
        {title ? <h3 className="mb-4 text-lg font-semibold">{title}</h3> : null}
        {children}
      </div>
    </div>
  );
}
