import React from 'react'
import { IconProps } from './types.js'

export const IconRelaxOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-18 0-34.5-6.5T416-146L148-415q-14-14-25.5-30.5T103-480h372q17 0 28.5 11.5T515-440q0 17-11.5 28.5T475-400q-14 0-25-7.5T436-429l-77 21q11 39 43 63.5t73 24.5q50 0 85-35t35-85q0-11-2-20.5t-5-19.5h47q50 0 85-35t35-85q0-50-35-85t-85-35q-41 0-73 24.5T519-632l77 21q3-14 14-21.5t25-7.5q17 0 28.5 11.5T675-600q0 17-11.5 28.5T635-560H82q-1-8-1.5-14.5T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L543-146q-13 13-29 19.5t-34 6.5Z" />
  </svg>
)