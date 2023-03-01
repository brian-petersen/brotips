import { getRandomTip } from './tips'

export function getRandomTipUrl() {
  return `/tips/${getRandomTip().id}`
}
