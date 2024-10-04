import React from 'react'
import { IconProps } from './types'

const IconAv1Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M180-360h60v-60h60v60h60v-240H180v240Zm60-120v-60h60v60h-60Zm230 120h60l70-240h-60l-40 137-40-137h-60l70 240Zm250 0h60v-240H660v60h60v180ZM40-160v-640h880v640H40Zm80-80h720v-480H120v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconAv1Sharp as default }
