import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'g9095k4oim',
  apiKey: process.env.API_KEY!,
})
