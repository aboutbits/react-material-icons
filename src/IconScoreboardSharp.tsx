import React from 'react'
import { IconProps } from './types.js'

export const IconScoreboardSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-360v-240h180v240H580Zm60-60h60v-120h-60v120Zm-440 60v-140h120v-40H200v-60h180v140H260v40h120v60H200Zm250-160v-60h60v60h-60Zm0 140v-60h60v60h-60ZM80-160v-640h200v-80h80v80h240v-80h80v80h200v640H80Zm80-80h290v-60h60v60h290v-480H510v60h-60v-60H160v480Zm0 0v-480 480Z" />
  </svg>
)
