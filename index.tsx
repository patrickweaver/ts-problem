import React from 'react'

const IconBook = ({color}) => <svg><path>{/* . . . */}</path></svg>
const IconCheck = ({color}) => <svg><path>{/* . . . */}</path></svg>
const IconPrint = ({color}) => <svg><path>{/* . . . */}</path></svg>

export const IconLibrary = Object.freeze({
    IconBook,
    IconCheck,
    IconPrint,
})

export type IconLibraryKey = keyof typeof IconLibrary

export const IconLibraryEnum = Object.fromEntries(
    Object.keys(IconLibrary).map((key) => [key, key])
)

interface IconProps {
    icon: IconLibraryKey
    size: number
    color: string
}

const Icon = ({ icon, size, color }: IconProps) => {
    const IconComponent = IconLibrary[icon]
    return (
        <div data-testid="icon" size={size}>
            <IconComponent color={color} />
        </div>
    )
}

const Library = () => (
    <div>
        <Icon icon={IconLibraryEnum.IconBook as IconLibraryKey} size={50} color={'#000000'} />
        <Icon icon={IconLibraryEnum.IconCheck as IconLibraryKey} size={50} color={'#000000'} />
        <Icon icon={IconLibraryEnum.IconPrint as IconLibraryKey} size={50} color={'#000000'} />
    </div>
)