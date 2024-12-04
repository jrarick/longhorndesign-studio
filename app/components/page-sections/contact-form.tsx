import { getInputProps, getTextareaProps } from '@conform-to/react'
import { Form } from 'react-router'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export default function ContactForm({
  form,
  fields,
  lastResult,
}: {
  form: any
  fields: any
  lastResult: any
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <p className="text-xl text-stone-200">
          What are you waiting for cowpoke? Let's start
        </p>
        <Form
          className="grid grid-cols-2 gap-5"
          action="/"
          method="post"
          onSubmit={form.onSubmit}
          id={form.id}
        >
          <Input
            aria-label="Name"
            placeholder="Name"
            {...getInputProps(fields.name, { type: 'text' })}
          />
          <Input
            aria-label="Email Address"
            placeholder="Email Address"
            {...getInputProps(fields.email, { type: 'email' })}
          />
          <Textarea
            aria-label="Message"
            placeholder="Message"
            className="col-span-2 min-h-48"
            {...getTextareaProps(fields.message)}
          />
          <Button type="submit" className="font-semibold">
            Send Message
          </Button>
        </Form>
      </div>
    </div>
  )
}
