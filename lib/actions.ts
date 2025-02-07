'use server'

import { z } from 'zod';
 
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

export interface FormState {
  errors: any,
  inputs: any,
  success: boolean
}
 
export async function send(prevState: FormState, formData: FormData): Promise<FormState> {

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const validatedFields = schema.safeParse({
    name,
    email,
    message
  });
 
  // Return early if the form data is invalid while keeping
  // the inputs inserted by the user in the form
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      inputs: { name, email, message },
      success: false
    }
  }

  // TODO: Send a real email or message to the server
  // Simulating an API delay
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  return {
    errors: {},
    inputs: {},
    success: true
  }
}
