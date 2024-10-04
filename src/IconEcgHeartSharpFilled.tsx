import React from 'react'
import { IconProps } from './types'

const IconEcgHeartSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M645-840q100 0 167.5 74T880-590q0 18-2 35.5t-7 34.5H621l-67-102h-72l-54 172-47-70H89q-5-17-7-34.5T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19ZM479-82 148-415q-6-6-11-12t-10-13h211l69 103h71l54-173 46 70h254l-10 12-10 12L479-82Z" />
  </svg>
)

export { IconEcgHeartSharpFilled as default }
