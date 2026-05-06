import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
};

export function Container({
  children,
  className,
  size = "default",
  ...rest
}: ContainerProps) {
  const sizeClass =
    size === "narrow"
      ? "max-w-4xl"
      : size === "wide"
        ? "max-w-[88rem]"
        : "max-w-7xl";
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        sizeClass,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
