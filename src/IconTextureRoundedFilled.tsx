import React from 'react'
import { IconProps } from './types'

const IconTextureRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M439-132q-11-11-12.5-26.5T439-188l333-333q14-14 29.5-12.5T828-521q13 13 12 29t-13 28L495-132q-12 12-28 12t-28-12Zm289 12q-14 0-19-12t5-22l92-92q10-10 22-5t12 19v72q0 17-11.5 28.5T800-120h-72Zm-597-11q-11-11-12-27t13-30l641-641q15-15 31-13t27 13q11 11 12 27t-14 30L187-131q-14 14-29.5 12.5T131-131Zm0-308q-11-11-12-27t13-30l332-332q14-14 29.5-12.5T520-828q11 11 12.5 26.5T520-772L187-439q-14 14-29.5 12.5T131-439Zm-11-289v-72q0-17 11.5-28.5T160-840h72q14 0 19 12t-5 22l-92 92q-10 10-22 5t-12-19Z" />
  </svg>
)

export { IconTextureRoundedFilled as default }
