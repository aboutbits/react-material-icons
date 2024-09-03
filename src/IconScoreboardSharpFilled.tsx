import React from 'react'
import { IconProps } from './types'

const IconScoreboardSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-360h180v-240H580v240Zm60-60v-120h60v120h-60Zm-440 60h180v-60H260v-40h120v-140H200v60h120v40H200v140Zm250-160h60v-60h-60v60Zm0 140h60v-60h-60v60ZM80-160v-640h200v-80h80v80h240v-80h80v80h200v640H80Zm370-500h60v-60h-60v60Zm0 420h60v-60h-60v60Z" />
  </svg>
)

export { IconScoreboardSharpFilled as default }
