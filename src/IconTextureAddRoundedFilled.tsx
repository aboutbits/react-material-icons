import React from 'react'
import { IconProps } from './types'

const IconTextureAddRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-200h-80q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h80v-80q0-17 11.5-28.5T720-400q17 0 28.5 11.5T760-360v80h80q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200h-80v80q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-80Zm-549 69q-11-11-12-27t13-30l641-641q15-15 31-13t27 13q11 11 12 27t-14 30L187-131q-14 14-29.5 12.5T131-131Zm0-308q-11-11-12-27t13-30l332-332q14-14 29.5-12.5T520-828q11 11 12.5 26.5T520-772L187-439q-14 14-29.5 12.5T131-439Zm23-275q-10 10-22 5t-12-19v-72q0-17 11.5-28.5T160-840h72q14 0 19 12t-5 22l-92 92Zm646 261q-17 0-28-11.5T761-493q0-17 11-28t28-11q17 0 28.5 11t11.5 28q0 17-11.5 28.5T800-453ZM468-120q-17 0-28-11.5T429-160q0-17 11-28t28-11q17 0 28.5 11t11.5 28q0 17-11.5 28.5T468-120Z" />
  </svg>
)

export { IconTextureAddRoundedFilled as default }
