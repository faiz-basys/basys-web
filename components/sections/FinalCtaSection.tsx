import { Button } from "../ui/Button";

export function FinalCtaSection() {
  return (
    <section className="px-8 py-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-primary p-12 text-center text-on-primary md:p-20">
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl leading-tight font-bold">
            Ready to automate your clinical workflows?
          </h2>
          <p className="mx-auto max-w-xl text-lg opacity-80">
            Join the leading health plans using basys.ai to reduce administrative burden
            and improve care delivery speed.
          </p>
          <Button variant="light" size="lg" className="px-12 py-5">
            Request a Demo
          </Button>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
