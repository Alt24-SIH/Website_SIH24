import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline'
    children: React.ReactNode
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
    const baseStyles = "px-4 py-2 rounded font-semibold transition-colors"
    const variantStyles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        outline: "bg-transparent border border-gray-300 text-gray-300 hover:bg-gray-700"
    }

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]}`}
            {...props}
        >
            {children}
        </button>
    )
}