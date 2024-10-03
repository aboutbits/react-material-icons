import React from 'react'
import { IconProps } from './types.js'

export const IconElderlyWomanSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m320-40-64-48 84-112H240q0-35 19.5-120.5T313-495q34-90 80.5-157.5T494-720q37 0 51.5 23t41.5 69q32 54 58 81t56 41q11-8 19-11t19-3q25 0 43 18t18 42v420h-40v-420q0-8-6-14t-14-6q-8 0-14 6t-6 14v50h-40v-19q-38-21-78-54.5T543-557l-23 117 80 239v161h-80v-160h-80L320-40Zm220-700q-33 0-56.5-23.5T460-820q0-8 4-24-11-5-17.5-14.5T440-880q0-17 11.5-28.5T480-920q12 0 21.5 6.5T516-896q6-2 12-3t12-1q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z" />
  </svg>
)
