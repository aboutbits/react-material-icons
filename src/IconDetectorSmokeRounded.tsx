import React from 'react'
import { IconProps } from './types.js'

export const IconDetectorSmokeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M482-80q-16-5-23.5-19.5T456-130q9-29 8.5-54T448-236q-30-46-33-86.5t13-91.5q5-16 19.5-23.5T478-440q16 5 23.5 19.5T504-390q-9 29-9.5 53.5T512-284q28 45 31.5 86.5T532-106q-5 16-19.5 23.5T482-80Zm-176 0q-16-5-23.5-19.5T280-130q8-28 8.5-54T272-236q-30-44-32.5-86.5T252-414q5-16 19.5-23.5T302-440q16 5 23.5 19.5T328-390q-8 28-9 54t17 52q29 44 32 87t-12 91q-5 16-19.5 23.5T306-80Zm348 0q-16-5-23.5-19.5T628-130q8-28 8.5-54T620-236q-30-44-32.5-86.5T600-414q5-16 19.5-23.5T650-440q16 5 23.5 19.5T676-390q-9 29-9.5 54t17.5 52q28 44 31.5 87T704-106q-5 16-19.5 23.5T654-80ZM200-760v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm12 120q-26 0-47-15.5T260-576l-20-64h-40q-33 0-56.5-23.5T120-720v-40q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v40q0 33-23.5 56.5T760-640h-40l-26 68q-9 23-29 37.5T620-520H336ZM200-760v40-40Z" />
  </svg>
)
