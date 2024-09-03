import React from 'react'
import { IconProps } from './types'

const IconScreenLockRotationRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-800h80v-40q0-17-11.5-28.5T720-880q-17 0-28.5 11.5T680-840v40ZM520-42q-99 0-186.5-38T181-183q-65-65-103-152.5T40-522q0-17 11.5-28.5T80-562q17 0 28.5 11.5T120-522q0 72 24.5 137T212-268q43 52 102 88.5T441-129l-77-77q-11-11-11-28t11-28q11-11 28-11t28 11L590-92q12 12 7 28t-22 19q-14 2-27.5 2.5T520-42Zm70-160q-14 0-28.5-5.5T536-224L222-538q-11-11-16.5-25.5T200-592q0-15 5.5-29t16.5-25l182-182q10-10 21.5-14.5T450-847q13 0 24.5 4.5T496-828l1 1q11 11 17 25.5t6 30.5v137q0 48 33 81t81 33h137q15 0 29.5 5.5T826-498q10 9 15 21t5 25q0 12-4.5 23.5T828-408L644-224q-11 11-25 16.5t-29 5.5Zm44-398q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T720-920q33 0 56.5 23.5T800-840v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H634Z" />
  </svg>
)

export { IconScreenLockRotationRoundedFilled as default }
