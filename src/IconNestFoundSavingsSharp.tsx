import React from 'react'
import { IconProps } from './types'

const IconNestFoundSavingsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-40 360-160H120v-720h720v720H600L480-40ZM200-240h192l88 88 88-88h192v-560H200v560Zm280-280Zm0 200q86 0 143-60t57-140v-200H480q-81 0-140.5 57T280-520q0 30 8.5 57t23.5 50l-44 44 54 54 41-40q27 17 56 26t61 9Zm0-80q-15 0-29-4t-28-10l136-133-57-56-132 132q-5-11-7.5-23.5T360-520q0-52 36-86t84-34h120v120q0 50-35 85t-85 35Zm-16-109Z" />
  </svg>
)

export { IconNestFoundSavingsSharp as default }
