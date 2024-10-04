import React from 'react'
import { IconProps } from './types.js'

export const IconBedroomParentOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280h60v-60h440v60h60v-154q0-21-8-39.5T730-506v-94q0-33-23.5-56.5T650-680H520q-11 0-21 3t-19 9q-9-6-19-9t-21-3H310q-33 0-56.5 23.5T230-600v94q-14 14-22 32.5t-8 39.5v154Zm60-120v-40q0-17 11.5-28.5T300-480h360q17 0 28.5 11.5T700-440v40H260Zm30-140v-80h160v80H290Zm220 0v-80h160v80H510ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Z" />
  </svg>
)