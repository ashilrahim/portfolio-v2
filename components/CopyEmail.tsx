"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const EMAIL = "ashilrahimck1@gmail.com";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — fail silently
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="group flex w-full items-center justify-between rounded-xl border border-border bg-surface-2 px-4 py-3 text-left transition-colors hover:border-accent/40"
    >
      <span className="font-mono text-sm text-ink">{EMAIL}</span>
      <span className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors group-hover:text-accent">
        {copied ? (
          <>
            <Check size={14} strokeWidth={2.5} />
            Copied
          </>
        ) : (
          <>
            <Copy size={14} strokeWidth={2.5} />
            Copy
          </>
        )}
      </span>
    </button>
  );
}
