import React from 'react'
import { IconProps } from './types.js'

export const IconZonePersonUrgentSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-720v-200h200v80H160v120H80Zm200 600H80v-200h80v120h120v80Zm520-600v-120H680v-80h200v200h-80ZM540-620q-33 0-56.5-23.5T460-700q0-33 23.5-56.5T540-780q33 0 56.5 23.5T620-700q0 33-23.5 56.5T540-620ZM352-280l40-204-72 28v136h-80v-188l158-68q35-15 51.5-19.5T480-600q21 0 39 11t29 29l40 64q11 17 24 31.5t30 26.5l-41 71q-17-11-32.5-24.5T540-420l-28 140H352ZM531-80l229-401L989-80H531Zm229-40q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160Z" />
  </svg>
)
