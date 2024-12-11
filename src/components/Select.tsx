import React, { useState } from 'react'

interface SelectProps {
    options: string[]
    placeholder?: string
    onChange?: (value: string) => void
}

export function Select({ options, placeholder = 'Select an option', onChange }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')

    const handleSelect = (option: string) => {
        setSelectedOption(option)
        setIsOpen(false)
        if (onChange) {
            onChange(option)
        }
    }

    return (
        <div className="relative">
            <button
                className="w-full px-4 py-2 text-left bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption || placeholder}
            </button>
            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 bg-gray-700 rounded shadow-lg">
                    {options.map((option) => (
                        <li
                            key={option}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

