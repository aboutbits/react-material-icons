import React from 'react'
import { IconProps } from './types'

const IconBackgroundGridSmallSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120h120v-120H120v120Zm200 0h120v-120H320v120Zm200 0h120v-120H520v120Zm200 0h120v-120H720v120ZM120-720h120v-120H120v120Zm0 200h120v-120H120v120Zm0 200h120v-120H120v120Zm200-400h120v-120H320v120Zm0 200h120v-120H320v120Zm0 200h120v-120H320v120Zm200-400h120v-120H520v120Zm0 200h120v-120H520v120Zm0 200h120v-120H520v120Zm200-400h120v-120H720v120Zm0 200h120v-120H720v120Zm0 200h120v-120H720v120Z" />
  </svg>
)

export { IconBackgroundGridSmallSharpFilled as default }
