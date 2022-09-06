import { serverSupabaseUser } from '#supabase/server'

const data = [
  { id: 0, email: 'admin@untitled.com', content: 'My note 1' },
  { id: 1, email: 'admin@untitled.com', content: 'Secret stuff' },
  { id: 2, email: 'admin@untitled.com', content: 'Do not share with not matt' },
]

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  return data.filter((note) => note.email === user.email)
})