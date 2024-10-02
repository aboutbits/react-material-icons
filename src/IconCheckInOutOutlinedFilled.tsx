import React from 'react'
import { IconProps } from './types'

export const IconCheckInOutOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M261-200q-51 0-85-34t-34-85q0-51 34-85.5t85-34.5q51 0 85 34t34 85q0 51-34 85.5T261-200ZM153-521v-239h51v239h-51Zm108 275q31 0 51-21t20-53q0-32-19.5-52.5T261-393q-31 0-51 20.5T190-320q0 32 20 53t51 21Zm-11-275v-239h56l90 152-2-38v-114h50v239h-51l-96-161 3 38v123h-50Zm262 321q-42 0-67-27t-25-72v-140h49v143q0 21 12.5 35t30.5 14q18 0 30-14t12-35v-143h49v140q0 45-25 72t-66 27Zm194 0v-192h-64v-47h176v47h-63v192h-49Z" />
  </svg>
)
