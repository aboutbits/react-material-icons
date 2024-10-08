import React from 'react'
import { IconProps } from './types'

const IconMedicalInformationSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-240h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm240-140h240v-60H520v60Zm0 120h160v-60H520v60ZM80-80v-600h280v-200h240v200h280v600H80Zm360-520h80v-200h-80v200Z" />
  </svg>
)

export { IconMedicalInformationSharpFilled as default }
