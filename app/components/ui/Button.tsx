"use client"

import clsx from "clsx"


interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    fullWidth?: boolean
    children?: React.ReactNode
    onClick?: () => void
    secondary?: boolean
    danger?: boolean
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
  return (
    <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(`
            flex
            btn
            btn-secondary
            `,
            disabled && "opacity-50 cursor-not-allowed",
            fullWidth && "w-full",
            secondary ? "text-white" : "text-black",
            danger && "bg-rose-500 hover:bg-rose-600 text-white focus-visible:ring-rose-500",
            !secondary && !danger && "bg-secondary hover:bg-secondary-600 text-white focus-visible:ring-secondary-dark"
        )}
    >
        {children}
    </button>
  )
}

export default Button