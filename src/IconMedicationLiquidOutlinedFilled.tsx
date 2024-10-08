import React from 'react'
import { IconProps } from './types'

const IconMedicationLiquidOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-760v-80h480v80H120Zm180 500h120v-100h100v-120H420v-100H300v100H200v120h100v100ZM160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h400q33 0 56.5 23.5T640-640v440q0 33-23.5 56.5T560-120H160Zm600-290q-35-17-57.5-56.5T680-560q0-68 34.5-114t85.5-46q51 0 85.5 46T920-560q0 54-22.5 93.5T840-410v250q0 17-11.5 28.5T800-120q-17 0-28.5-11.5T760-160v-250Z" />
  </svg>
)

export { IconMedicationLiquidOutlinedFilled as default }
