import React from 'react'
import { IconProps } from './types.js'

export const IconDeveloperGuideRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-640v245q0 12 10 17.5t20-.5l49-30q10-6 21-6t21 6l49 30q10 6 20 .5t10-17.5v-245H480Z" />
  </svg>
)
