import React from 'react'
import { IconProps } from './types'

const IconNightsStayRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-400q48 0 88 26t59 71l10 23h25q42 0 70 29.5t28 70.5q0 42-29 71t-71 29H240q-66 0-113-47T80-240q0-67 47-113.5T240-400Zm321-81q60 60 138.5 90.5T863-366q11-1 19.5 3t14.5 12q6 8 8 17t-1 19q-35 121-140.5 197T533-40q32-26 49.5-62.5T600-180q0-68-42.5-117.5T449-357q-32-57-87.5-90T240-480q-32 0-62.5 8T120-448q2-131 76.5-232T394-822q10-3 19.5-1t17.5 8q8 6 12.5 14.5T447-781q-5 86 24 162.5T561-481Z" />
  </svg>
)

export { IconNightsStayRoundedFilled as default }
