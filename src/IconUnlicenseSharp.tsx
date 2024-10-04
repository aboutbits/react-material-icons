import React from 'react'
import { IconProps } from './types.js'

export const IconUnlicenseSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m722-352-56-56q26-32 40-70t14-82q0-100-70-170t-170-70q-44 0-82 14t-70 40l-56-56q42-36 95-57t113-21q133 0 226.5 93.5T800-560q0 60-21 113t-57 95ZM580-494 414-660q14-9 31-14.5t35-5.5q50 0 85 35t35 85q0 18-5.5 35T580-494ZM240-40v-308q-38-44-59-97t-21-115q0-29 4.5-55.5T180-668L56-792l56-56 736 736-56 56-72-70v86l-240-80-240 80Zm240-280q11 0 21-1t21-3L244-602q-2 11-3 21t-1 21q0 100 70 170t170 70ZM320-150l160-54 160 54v-56l-52-54q-26 9-52.5 14.5T480-240q-44 0-84-11t-76-31v132Zm160-66Z" />
  </svg>
)
