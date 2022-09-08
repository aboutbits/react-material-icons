import React from 'react'
import { IconProps } from './types'

const IconArtTrackSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zM12 7v10H2V7h10zm-1.5 8l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z" />
  </svg>
)

export { IconArtTrackSharp as default }
