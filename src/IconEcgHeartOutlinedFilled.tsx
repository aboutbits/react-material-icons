import React from 'react'
import { IconProps } from './types'

export const IconEcgHeartOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M645-840q100 0 167.5 74T880-590q0 18-2 35.5t-7 34.5H621l-68-102q-5-8-14-13t-19-5q-13 0-23.5 8T482-612l-54 162-35-52q-5-8-14-13t-19-5H89q-5-17-7-34.5T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19ZM480-120q-18 0-34.5-6.5T416-146L148-415q-6-6-11-12t-10-13h211l68 102q5 8 14 13t19 5q13 0 24-8t15-20l54-162 34 52q6 8 15 13t19 5h232l-10 12-10 12-269 270q-13 13-29 19.5t-34 6.5Z" />
  </svg>
)
