import React from 'react'
import { IconProps } from './types.js'

export const IconPaidRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-1 280q14 0 24.5-10.5T514-235v-15q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q20 0 35 7t25 19q10 12 22.5 16.5t23.5-.5q15-6 20.5-20.5T606-653q-16-23-39.5-39T516-710v-15q0-14-10.5-24.5T481-760q-14 0-24.5 10.5T446-725v15q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-26 0-47-12.5T404-364q-8-14-21-19t-26 0q-14 5-20.5 19t-.5 27q16 34 43 55.5t65 29.5v17q0 14 10.5 24.5T479-200Z" />
  </svg>
)
