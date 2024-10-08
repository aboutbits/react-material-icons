import React from 'react'
import { IconProps } from './types'

const IconMedicationSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-260h120v-100h100v-120H540v-100H420v100H320v120h100v100ZM200-120v-600h560v600H200Zm40-640v-80h480v80H240Z" />
  </svg>
)

export { IconMedicationSharpFilled as default }
