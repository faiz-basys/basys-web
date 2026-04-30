import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function CareerApplyNotFound() {
    return (
        <main className="mx-auto max-w-2xl px-8 pt-32 pb-24 text-center">
            <h1 className="text-3xl font-bold text-primary">Role not found</h1>
            <p className="mt-3 text-on-surface-variant">
                This job may have been filled or the link is incorrect.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/career#jobs">View open positions</Button>
                <Button href="/career" variant="outline">
                    Back to careers
                </Button>
            </div>
            <p className="mt-10 text-sm text-on-surface-variant">
                Or apply without a specific role:{" "}
                <Link
                    href="/career/apply/general"
                    className="font-semibold text-primary underline"
                >
                    General application
                </Link>
                .
            </p>
        </main>
    );
}
