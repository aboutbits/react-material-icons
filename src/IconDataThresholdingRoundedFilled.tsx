import React from 'react'
import { IconProps } from './types.js'

export const IconDataThresholdingRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm227-400 52 52q12 12 28 12t28-12l147-148q11-11 11-28t-11-28q-12-12-28.5-11.5T626-672L507-553l-52-52q-12-12-28-12t-28 12L278-484q-11 11-11 28t11 28q12 12 28.5 11.5T334-428l93-92ZM269-320l-69 69v51h34l120-120h-85Zm158 0L307-200h85l120-120h-85Zm149 0L456-200h85l120-120h-85Zm150 0L606-200h85l69-69v-51h-34Z" />
  </svg>
)