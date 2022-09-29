export const useUser = () => useState('user', () => null)
export const useExpand = () => useState<boolean>('expand', () => true)
export const useAdmin = () => useState<boolean>('admin', () => false)