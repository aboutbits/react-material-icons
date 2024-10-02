import React from 'react'
import { IconProps } from './types'

export const IconVolunteerActivismSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m560-60-280-78v58H40v-440h318l322 120v80h200v160L560-60ZM120-160h80v-280h-80v280Zm438 16 238-74v-22H513l-125-42 24-76 117 38h71v-26l-256-94h-64v220l278 76Zm82-296L474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107Zm0-154Z" />
  </svg>
)
