import React from 'react'
import { IconProps } from './types.js'

export const IconBedroomChildRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M300-340h360v30q0 13 8.5 21.5T690-280q13 0 21.5-8.5T720-310v-136q0-30-16.5-53.5T660-534v-66q0-33-23.5-56.5T580-680H380q-33 0-56.5 23.5T300-600v66q-27 11-43.5 34.5T240-446v136q0 13 8.5 21.5T270-280q13 0 21.5-8.5T300-310v-30Zm0-60v-46q0-14 10-24t24-10h292q14 0 24 10t10 24v46H300Zm60-140v-80h240v80H360ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Z" />
  </svg>
)
