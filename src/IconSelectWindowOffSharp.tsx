import React from 'react'
import { IconProps } from './types'

const IconSelectWindowOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 407-440H160v280h480v-161l80 80v161H80v-520h160v-7L27-820l57-57L876-85l-57 57Zm-99-327-80-80-165-165h245v160h80v-280H355L246-829v-51h634v520H720v5Z" />
  </svg>
)

export { IconSelectWindowOffSharp as default }