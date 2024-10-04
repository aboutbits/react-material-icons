import React from 'react'
import { IconProps } from './types'

const IconThunderstormRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m520-66 36-41-34-17q-17-9-21-28t9-34l70-80q5-7 13.5-10.5T610-280q26 0 36.5 23t-6.5 43l-36 41 34 17q17 9 21 28t-9 34l-70 80q-5 7-13.5 10.5T550 0q-26 0-36.5-23t6.5-43Zm-240 0 36-41-34-17q-17-9-21-28t9-34l70-80q5-7 13.5-10.5T370-280q26 0 36.5 23t-6.5 43l-36 41 34 17q17 9 21 28t-9 34l-70 80q-5 7-13.5 10.5T310 0q-26 0-36.5-23t6.5-43Zm20-254q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Z" />
  </svg>
)

export { IconThunderstormRoundedFilled as default }
