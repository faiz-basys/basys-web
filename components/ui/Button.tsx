import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "light";
type ButtonSize = "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary border border-primary hover:opacity-90 active:scale-95",
  outline:
    "bg-transparent text-primary border-2 border-primary hover:bg-surface-container active:scale-95",
  light:
    "bg-white text-primary border border-white hover:bg-white/90 active:scale-95",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-6 py-2.5 text-sm font-semibold",
  lg: "px-10 py-4 text-base font-semibold",
};

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-pill transition-all duration-200 hover:cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
