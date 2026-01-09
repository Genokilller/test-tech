"use client";

import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4 bg-background text-foreground">
      <h1 className="text-4xl font-bold">Hello Hero UI</h1>
      <Button color="primary" variant="shadow">
        Click me
      </Button>
    </main>
  );
}
