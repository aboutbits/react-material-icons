import React from 'react'
import { IconProps } from './types'

const IconNestCamFloodlightSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-200h80v120h-80v-120Zm180-76 84 84-56 56-84-84 56-56ZM0-960h80q33 0 56.5 23.5T160-880v68q32-50 85-79t116-29h279v251l-63-62q-42-42-98-65.5T363-820q-57 0-110.5 22T160-741v92q27-45 83-78t120-33q48 0 93 19t79 53l198 198-344 343-198-198q-9-9-16.5-18T160-383v63q0 33-23.5 56.5T80-240H0v-720Zm680 560h120v80H680v-80Z" />
  </svg>
)

export { IconNestCamFloodlightSharpFilled as default }
