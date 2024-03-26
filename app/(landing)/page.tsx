import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center gap-5">
                <Link href="/sign-in">
                    <Button>Login</Button>
                </Link>

                <Link href="/sign-up">
                    <Button>Register</Button>
                </Link>

            </div>
        </div>


    );
}