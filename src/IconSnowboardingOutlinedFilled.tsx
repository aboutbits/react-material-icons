import React from 'react'
import { IconProps } from './types'

const IconSnowboardingOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M751-60q-9 0-18.5-1T714-64L209-172q-44-9-76.5-35.5T83-272q-2-4-2-18 3-12 13-19t23-5q7 2 12 6.5t8 10.5q12 25 33.5 43t50.5 24l19 4 140-94-32-140q-4-15-1-30.5t11-29.5l100-160h-94l-76 122-68-42 100-160h228q27 0 43.5 15t22.5 28l21 48q20 48 64.5 78.5T800-560v80q-70 0-128-33.5T579-602l-72 115 133 107 40 248 46 9q6 2 12.5 2.5t12.5.5q24 0 43-8t36-22q5-5 26-6 13 2 19.5 13t4.5 22q-1 5-3.5 9t-6.5 8q-25 22-56 33t-63 11Zm-155-90-30-186-114-81 18 133-121 81 247 53Zm44-610q-33 0-56.5-23.5T560-840q0-33 23.5-56.5T640-920q33 0 56.5 23.5T720-840q0 33-23.5 56.5T640-760Z" />
  </svg>
)

export { IconSnowboardingOutlinedFilled as default }
