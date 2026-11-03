import React from "react";
import { cn } from "@/lib/utils";

export type ContainerSize = "narrow" | "default" | "wide" | "full";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-4xl",
  default: "max-w-7xl",
  wide: "max-w-[1400px]",
  full: "max-w-full",
};

export const Container: React.FC<ContainerProps> = ({
  size = "default",
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
