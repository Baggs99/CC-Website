import { useState, type FormEvent, type ReactNode } from "react";
import { Lock } from "lucide-react";
import {
  isFtRecruitingUnlocked,
  unlockFtRecruiting,
} from "@/lib/ftRecruitingGate";
import { Container } from "@/components/ui/Container";

type FtRecruitingGateProps = {
  children: ReactNode;
};

export function FtRecruitingGate({ children }: FtRecruitingGateProps) {
  const [unlocked, setUnlocked] = useState(isFtRecruitingUnlocked);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) return <>{children}</>;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (unlockFtRecruiting(password)) {
      setUnlocked(true);
      setError(false);
      return;
    }
    setError(true);
  }

  return (
    <Container className="relative z-10 flex min-h-[calc(100vh-12rem)] items-center justify-center py-16 sm:py-24">
      <div className="w-full max-w-md rounded-2xl border border-navy-900/[0.08] bg-white p-8 shadow-soft sm:p-10">
        <div className="flex flex-col items-center text-center">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-ivory-50">
            <Lock size={22} strokeWidth={1.6} aria-hidden />
          </span>
          <h1 className="mt-5 font-serif text-2xl font-medium text-navy-900">
            Full-Time Recruiting Hub
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-navy-700/85 text-pretty">
            This section is in development. Enter the preview password shared
            with the executive committee to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="ft-recruiting-password"
              className="sr-only"
            >
              Preview password
            </label>
            <input
              id="ft-recruiting-password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Preview password"
              autoComplete="current-password"
              className="w-full rounded-xl border border-navy-900/15 bg-ivory-50/50 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-600/50 focus:border-navy-900/30 focus:outline-none focus:ring-2 focus:ring-navy-900/10"
            />
            {error ? (
              <p className="mt-2 text-sm text-red-700" role="alert">
                Incorrect password. Try again.
              </p>
            ) : null}
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            Continue
          </button>
        </form>
      </div>
    </Container>
  );
}
