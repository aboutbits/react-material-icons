import React from 'react'
import { IconProps } from './types'

const IconCirclesRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-920q100 0 170 70t70 170q0 100-70 170t-170 70q-100 0-170-70t-70-170q0-100 70-170t170-70ZM185-185q-51-51-78-117T80-440q0-106 56-193t152-132q29-12 54 5t20 45q-8 73 17 141.5T456-453q51 51 119 75.5T715-361q28-3 45 19t7 49q-44 97-132 155T440-80q-72 0-138-27t-117-78Z" />
  </svg>
)

export { IconCirclesRoundedFilled as default }
