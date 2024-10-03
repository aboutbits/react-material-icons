import React from 'react'
import { IconProps } from './types.js'

export const IconLandscape2SharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m46-160 138-276q10-20 28.5-32t41.5-12q24 0 44 12.5t29 35.5l27 66q2 6 9 5.5t9-6.5l86-287q14-48 53.5-77t89.5-29q49 0 87.5 28.5T742-657l173 497H46Zm194-400q-50 0-85-35.5T120-680q0-50 35-85t85-35q50 0 85 35t35 85q0 49-35 84.5T240-560Z" />
  </svg>
)
