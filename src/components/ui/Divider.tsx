import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  label?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  label,
  className,
  ...props
}) => {
  if (orientation === "vertical") {
    return (
      <div
        className={cn("w-px bg-[#1E2638] self-stretch shrink-0", className)}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        className={cn("relative flex items-center w-full my-8", className)}
        role="separator"
        {...props}
      >
        <div className="grow border-t border-[#1E2638]" />
        <span className="shrink mx-4 text-xs font-mono uppercase tracking-widest text-[#71717A]">
          {label}
        </span>
        <div className="grow border-t border-[#1E2638]" />
      </div>
    );
  }

  return (
    <div
      className={cn("w-full h-px bg-[#1E2638] my-6 shrink-0", className)}
      role="separator"
      {...props}
    />
  );
};

export default Divider;
