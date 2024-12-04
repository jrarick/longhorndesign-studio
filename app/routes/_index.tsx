import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import {
  useActionData
} from 'react-router'
import { Resend } from 'resend'
import ContactForm from '~/components/page-sections/contact-form'
import Hero from '~/components/page-sections/hero'
import Info from '~/components/page-sections/info'
import Steps from '~/components/page-sections/steps'
import { contactFormSchema } from '~/schemas/contact-form'
import type { Route } from './+types/_index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix on Cloudflare!',
    },
  ]
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const submission = parseWithZod(formData, { schema: contactFormSchema })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  // const resend = new Resend(process.env.RESEND_API_KEY)
  const resend = new Resend(import.meta.env.RESEND_API_KEY)

  const { data, error } = await resend.emails.send({
    from: 'Contact Form <josh@longhorndesign.studio>',
    to: 'josh@longhorndesign.studio',
    subject: 'New Contact Form Submission',
    html: `
      
    `,
  })
}

export default function Index() {
  const lastResult = useActionData<typeof action>()
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactFormSchema })
    },
    shouldValidate: 'onSubmit',
    shouldRevalidate: 'onInput',
  })

  return (
    <>
      <Hero />
      <Info />
      <Steps />
      <ContactForm form={form} fields={fields} lastResult={lastResult} />
    </>
  )
}
