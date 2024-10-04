import React from 'react'
import { IconProps } from './types'

const IconSweepRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-240q-17 0-28.5-11.5T400-280q0-17 11.5-28.5T440-320h160q17 0 28.5 11.5T640-280q0 17-11.5 28.5T600-240H440ZM242-354l338.86-339q12.03-12 28.07-12T637-693q12 12 12 28.5T637-636L270.13-268q-12.03 12-28.06 12-16.04 0-28.07-12L42-439.75q-12-12.05-11.5-28.63Q31-484.95 43-497q12-12 28.5-12t28.5 12l142 143Zm358-46q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480h160q17 0 28.5 11.5T800-440q0 17-11.5 28.5T760-400H600Zm160-160q-17 0-28.5-11.5T720-600q0-17 11.5-28.5T760-640h160q17 0 28.5 11.5T960-600q0 17-11.5 28.5T920-560H760Z" />
  </svg>
)

export { IconSweepRoundedFilled as default }
