import React from 'react'
import { IconProps } from './types'

const IconPodiatryRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m684-389 179-179 29 29q12 12 12 28t-12 28L769-360q-12 12-28.5 11.5T712-361l-28-28ZM40-266q0-24 13.5-44T90-339q21-8 40-19t38-25l58 58q5 7 13.5 6.5T254-325q5-5 5-13.5t-5-15.5l-55-55 15.5-15.5Q222-432 230-441l54 55q5 7 13.5 7t15.5-7q5-5 5-13.5t-5-15.5l-55-54q5-10 10.5-20.5T278-512l65 65q5 7 13.5 7t15.5-7q5-5 5-13t-5-15l-77-77 35-97q3-8 8-16t11-14l146-145q23-23 56.5-22.5T608-823l226 226-390 412q-11 12-26 18.5t-32 6.5H120q-33 0-56.5-23.5T40-240v-26Zm345 26 337-355-337 355Zm-265 0h265l337-355-171-171-146 145-29 81 30 30q23 24 23 57.5T406-396L293-283q-24 24-57 24t-56-24l-8-8q-13 8-26 14t-26 11v26Z" />
  </svg>
)

export { IconPodiatryRounded as default }
