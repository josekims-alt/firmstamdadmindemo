'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/signatures", label: "Signatures" },
  { href: "/templates", label: "Templates" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/analytics", label: "Analytics" },
  { href: "/settings", label: "Settings" }
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/dashboard" className="font-semibold">FirmStamp</Link>
        <nav className="flex items-center gap-2">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={cn("rounded-md px-2.5 py-1.5 text-sm hover:bg-muted",
                pathname?.startsWith(i.href) ? "bg-muted font-medium" : "text-muted-foreground")}
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
