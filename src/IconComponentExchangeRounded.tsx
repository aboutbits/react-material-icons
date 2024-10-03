import React from 'react'
import { IconProps } from './types.js'

export const IconComponentExchangeRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m196-120-6-51-8-4q-4-2-11-7l-48 20-44-76 41-31v-21l-41-32 44-76 48 20q5-3 9.5-6t9.5-5l6-51h88l6 51 4 2 4 2q2 1 5 3l6 4 48-20 44 76-41 31v22l219-127-45 79 12 9-158 92-31 54-48-20q-5 3-9.5 6t-9.5 5l-6 51h-88Zm44-220q-25 0-42.5 17.5T180-280q0 25 17.5 42.5T240-220q25 0 42.5-17.5T300-280q0-25-17.5-42.5T240-340Zm156-220-6-51q-2-2-5-3t-5-3v220l-15-26-45 19v-204l-40-70 40-31v-21l-41-32 44-76 48 20q5-3 9.5-6t9.5-5l6-51h88l6 51 8 4q4 2 11 7l48-20 44 76-41 31v21l41 32-44 76-48-20q-5 3-9.5 6t-9.5 5l-6 51h-88Zm44-220q-25 0-42.5 17.5T380-720q0 25 17.5 42.5T440-660q25 0 42.5-17.5T500-720q0-25-17.5-42.5T440-780Zm236 660-6-51-8-4q-4-2-11-7l-48 20-44-76 41-31v-21l-41-31 44-77 48 20q3-2 4-2.5l15-7.5-216-152h48l4-36 195 136h63l6 51 4 2 4 2q2 1 5 3l6 4 48-20 44 76-41 31v21l41 32-44 76-48-20q-5 3-9.5 6t-9.5 5l-6 51h-88Zm44-220q-25 0-42.5 17.5T660-280q0 25 17.5 42.5T720-220q25 0 42.5-17.5T780-280q0-25-17.5-42.5T720-340Z" />
  </svg>
)
