import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.preprocess(
    (value) => (value === '' ? undefined : value),
    z.string({ required_error: 'Email is required' }).email('Email is invalid')
  ),
  message: z.preprocess(
    (value) => (value === '' ? undefined : value),
    z
      .string({ required_error: 'Message is required' })
      .min(10, 'Message is too short')
      .max(100, 'Message is too long')
  ),
})

export type ContactForm = z.infer<typeof contactFormSchema>
