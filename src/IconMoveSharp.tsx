import React from 'react'
import { IconProps } from './types'

export const IconMoveSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-280q-7 0-12-4t-7-10q-14-42-34-70t-40-54q-20-26-33.5-54T300-540q0-58 41-99t99-41q58 0 99 41t41 99q0 40-13.5 68T533-418q-20 26-40 54t-34 70q-2 6-7 10t-12 4Zm0-112q9-14 18-26t17-23q23-30 34-50t11-49q0-33-23.5-56.5T440-620q-33 0-56.5 23.5T360-540q0 29 11 49t34 50q8 11 17 23t18 26Zm0-98q21 0 35.5-14.5T490-540q0-21-14.5-35.5T440-590q-21 0-35.5 14.5T390-540q0 21 14.5 35.5T440-490Zm0 370q-150 0-255-105T80-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T440-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T800-480v8l53-54 57 56-150 150-150-150 57-56 53 53v-7q0-116-82-198t-198-82q-116 0-198 82t-82 198q1 116 82.5 198T440-200q57 0 107-21.5t88-58.5l57 57q-49 48-113.5 75.5T440-120Zm0-420Z" />
  </svg>
)
