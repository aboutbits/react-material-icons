import React from 'react'
import { IconProps } from './types'

const IconHowToVoteRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80q-33 0-56.5-23.5T120-160v-152q0-14 5-28t15-25l62-70q11-13 28.5-13.5T260-437q11 11 12 27t-10 28l-55 62h546l-53-60q-11-12-10-28t12-27q12-12 29.5-11.5T760-433l60 68q10 11 15 25t5 28v152q0 33-23.5 56.5T760-80H200Zm224-304L285-525q-23-23-23-57t23-57l196-196q23-23 57-23t57 23l141 139q23 23 23.5 56.5T737-583L537-383q-23 23-56.5 22.5T424-384Zm256-256L538-780 340-582l142 140 198-198Z" />
  </svg>
)

export { IconHowToVoteRoundedFilled as default }
