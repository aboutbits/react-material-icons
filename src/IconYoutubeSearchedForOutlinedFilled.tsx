import React from 'react'
import { IconProps } from './types'

export const IconYoutubeSearchedForOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M822-142 592-372q-32 26-71 39t-81 13q-42 0-80-12.5T290-368l58-58q20 12 43 19t49 7q75 0 127.5-52.5T620-580q0-75-52.5-127.5T440-760q-69 0-119.5 46.5T262-598l50-50 56 56-148 148L72-592l56-56 54 52q6-103 80-173.5T440-840q109 0 184.5 75.5T700-580q0 42-13 82t-39 70l230 230-56 56Z" />
  </svg>
)
