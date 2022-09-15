export const useUser = () => useState('user', () => null)
export const useDrawer = () => useState<boolean>('drawer', () => false)