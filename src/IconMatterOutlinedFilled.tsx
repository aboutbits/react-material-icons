import React from 'react'
import { IconProps } from './types'

export const IconMatterOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-540q-66 0-123-24.5T256-632l72-43q24 20 52 33t60 18v-212l40-24 40 24v212q32-5 60-18t52-33l72 43q-44 43-101 67.5T480-540Zm-49 375-74-39q2-9 2.5-18t.5-18q0-23-4-45.5T344-328L161-218l-41-22v-47l182-109q-20-23-46-41t-56-29v-84q104 27 172 112.5T440-240q0 20-2 38.5t-7 36.5Zm98 0q-5-18-7-36.5t-2-38.5q0-112 68-197.5T760-550v84q-30 11-56 29t-46 41l182 109v47l-41 22-183-110q-8 20-12 42.5t-4 45.5q0 9 .5 18t2.5 18l-74 39Z" />
  </svg>
)
