import React from 'react'
import { IconProps } from './types'

const IconPhonelinkRingOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-28 28-820l56-56L876-84l-56 56ZM200-703l80 80v383h384l96 96v24q0 33-23.5 56.5T680-40H280q-33 0-56.5-23.5T200-120v-583Zm153-17L206-868q10-23 29.5-37.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H353Zm381 354-58-58q12-11 18.5-25.5T701-480q0-16-6.5-30.5T676-536l58-58q23 23 35 52.5t12 61.5q0 32-12 61.5T734-366Zm98 98-56-56q31-31 48-71t17-85q0-45-17-85t-48-71l56-56q43 42 66 97t23 115q0 60-23 115t-66 97Z" />
  </svg>
)

export { IconPhonelinkRingOffOutlinedFilled as default }
