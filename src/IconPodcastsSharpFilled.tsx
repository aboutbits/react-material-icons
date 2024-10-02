import React from 'react'
import { IconProps } from './types'

export const IconPodcastsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-80v-331q-18-11-29-28.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 23-11 41t-29 28v331h-80ZM204-190q-57-55-90.5-129.5T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 86-33.5 161T756-190l-56-56q46-44 73-104.5T800-480q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 69 27 129t74 104l-57 57Zm113-113q-35-33-56-78.5T240-480q0-100 70-170t170-70q100 0 170 70t70 170q0 53-21 99t-56 78l-57-57q25-23 39.5-54t14.5-66q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 36 14.5 66.5T374-360l-57 57Z" />
  </svg>
)
