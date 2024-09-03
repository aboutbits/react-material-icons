import React from 'react'
import { IconProps } from './types'

const IconSwipeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-680H680v-60h116q-66-58-147-89t-169-31q-88 0-169 31t-147 89h116v60H80v-200h60v81q72-59 159-90t181-31q94 0 181 31t159 90v-81h60v200ZM423-80 184-320l63-65 113 32v-367h80v473l-97-27 114 114h263v-280h80v360H423Zm57-280v-200h80v200h-80Zm120 0v-160h80v160h-80Zm-19 80Z" />
  </svg>
)

export { IconSwipeSharp as default }
