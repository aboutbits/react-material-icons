import React from 'react'
import { IconProps } from './types'

export const IconWifiPasswordSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720 0v-200h40v-40q0-33 23.5-56.5T840-320q33 0 56.5 23.5T920-240v40h40V0H720Zm80-200h80v-40q0-17-11.5-28.5T840-280q-17 0-28.5 11.5T800-240v40ZM254-346l-84-86q62-62 142-95t168-33q88 0 168.5 33.5T790-430l-84 84q-45-45-103.5-69.5T480-440q-64 0-122.5 24.5T254-346ZM84-516 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600l-84 84q-79-79-181.5-121.5T480-680q-112 0-214.5 42.5T84-516Zm396 396L339-262q28-28 64.5-43t76.5-15q40 0 76.5 15t64.5 43L480-120Z" />
  </svg>
)
