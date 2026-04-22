import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <Card className="p-10 max-w-xl w-full text-center space-y-6">
        <Pill>Phase 1 · Setup Complete</Pill>
        <h1 className="text-4xl font-display font-semibold text-gradient">
          Design system online
        </h1>
        <p className="text-text-secondary">
          Primitives, tokens, and effect slots are wired up. Ready for Phase 2.
        </p>
        <div className="flex gap-3 justify-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Card>
    </main>
  );
}
