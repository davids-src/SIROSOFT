"use client";

import { Toaster } from "sonner";

export const SonnerToaster = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      style: {
        background: "#111116",
        border: "1px solid #2A2A35",
        color: "#F0F0F5",
      },
    }}
  />
);
