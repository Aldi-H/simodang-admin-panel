import { Button } from "@/components/ui/button/Button";
import { Input } from "@/components/ui/input/Input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-schemesColors-light-surface p-24">
      <h1 className="text-center text-3xl font-bold text-gray-900">
        Simodang Admin Panel
      </h1>

      <div className="flex flex-row items-center gap-x-4">
        <Button size="small">Button</Button>
        <Button>Button</Button>
        <Button size="large">Button</Button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <Button variant="secondary" size="small">
          Button
        </Button>
        <Button variant="secondary">Button</Button>
        <Button variant="secondary" size="large">
          Button
        </Button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <Button variant="tertiary" size="small">
          Button
        </Button>
        <Button variant="tertiary">Button</Button>
        <Button variant="tertiary" size="large">
          Button
        </Button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <Button variant="danger" size="small">
          Button
        </Button>
        <Button variant="danger">Button</Button>
        <Button variant="danger" size="large">
          Button
        </Button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <Button variant="outline-primary" size="small">
          Button
        </Button>
        <Button variant="outline-primary">Button</Button>
        <Button variant="outline-primary" size="large">
          Button
        </Button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <Button variant="outline-secondary" size="small">
          Button
        </Button>
        <Button variant="outline-secondary">Button</Button>
        <Button variant="outline-secondary" size="large">
          Button
        </Button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <Button variant="outline-tertiary" size="small">
          Button
        </Button>
        <Button variant="outline-tertiary">Button</Button>
        <Button variant="outline-tertiary" size="large">
          Button
        </Button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <Button variant="outline-danger" size="small">
          Button
        </Button>
        <Button variant="outline-danger">Button</Button>
        <Button variant="outline-danger" size="large">
          Button
        </Button>
      </div>
    </main>
  );
}
