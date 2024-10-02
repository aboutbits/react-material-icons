import React from 'react'
import { IconProps } from './types'

export const IconBedroomParentSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280h60v-60h440v60h60v-260h-30v-140H230v140h-30v260Zm310-260v-80h160v80H510Zm-220 0v-80h160v80H290Zm-30 140v-80h440v80H260ZM80-80v-800h800v800H80Z" />
  </svg>
)
