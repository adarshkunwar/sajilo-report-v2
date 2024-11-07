import { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type TCustomButton = (
  | {
      onClick: () => void;
      variant: "primary" | "outline";
      link?: never;
    }
  | {
      variant: "link";
      link: string;
      onClick?: never;
    }
) &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    size: "sm" | "md" | "lg";
    className?: string;
  };

const CustomButton: React.FC<TCustomButton> = ({
  text,
  size,
  onClick,
  link,
  variant,
  ...buttonProps
}) => {
  const baseStyles = "rounded px-4 py-2 font-semibold focus:outline-none";
  const sizeStyles = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    link: "border hover:bg-blue-500 hover:text-white",
  };

  const customClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`;

  if (link) {
    return (
      <button>
        <Link href={link} className={cn(customClass, buttonProps.className)}>
          {text}
        </Link>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(customClass, buttonProps.className)}
      {...buttonProps}
    >
      {text}
    </button>
  );
};

export default CustomButton;
