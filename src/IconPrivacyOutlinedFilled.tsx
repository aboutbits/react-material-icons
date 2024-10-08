import React from 'react'
import { IconProps } from './types'

const IconPrivacyOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M822-26 26-822l56-56L878-82l-56 56Zm58-234L720-420v67L480-593v-7q0-33-23.5-56.5T400-680q-2 0-3 .5t-3 .5L273-800h367q33 0 56.5 23.5T720-720v180l160-160v440ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l560 560q0 33-23.5 56.5T640-160H428v-122q37-5 69-22.5t56-46.5l-41-41q-20 26-49.5 40.5T400-337q-60 0-101.5-41.5T257-480h-57q0 75 48.5 131T372-282v122H160Zm160-368v48q0 33 23.5 56.5T400-400q10 0 19-3t18-8L320-528Z" />
  </svg>
)

export { IconPrivacyOutlinedFilled as default }
