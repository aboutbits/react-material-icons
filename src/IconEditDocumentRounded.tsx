import React from 'react'
import { IconProps } from './types'

const IconEditDocumentRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-120v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L695-92q-6 6-13.5 9T666-80h-66q-17 0-28.5-11.5T560-120Zm300-223-37-37 37 37ZM620-140h38l121-122-37-37-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v57q0 17-11.5 28.5T760-510q-17 0-28.5-11.5T720-550v-50H560q-17 0-28.5-11.5T520-640v-160H240v640h200q17 0 28.5 11.5T480-120q0 17-11.5 28.5T440-80H240Zm0-80v-640 640Zm521-121-19-18 37 37-18-19Z" />
  </svg>
)

export { IconEditDocumentRounded as default }