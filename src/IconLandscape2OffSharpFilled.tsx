import React from 'react'
import { IconProps } from './types'

const IconLandscape2OffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M820-26 27-819l57-57L877-83l-57 57ZM240-560q-50 0-85-35.5T120-680q0-32 16-59t42-43l164 164q-16 26-43 42t-59 16Zm674 396L450-626l8-28q14-48 53.5-77t89.5-29q49 0 87.5 28.5T742-657l172 493Zm-868 4 138-276q10-20 28.5-32t41.5-12q24 0 44 12.5t29 35.5l27 66q2 6 9 5.5t9-6.5l51-170 377 377H46Z" />
  </svg>
)

export { IconLandscape2OffSharpFilled as default }
