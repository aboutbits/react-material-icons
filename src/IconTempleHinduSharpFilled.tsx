import React from 'react'
import { IconProps } from './types.js'

export const IconTempleHinduSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m312-680 47-155v-85h80v80h81v-80h80v80l48 160H312ZM80-80v-440h80v80h640v-80h80v440H520v-200h-80v200H80Zm184-440 24-80h384l24 80H264Z" />
  </svg>
)
