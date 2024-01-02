import { createClient } from '@/utils/supabase/server'
import Header from '@/components/Header'
import { cookies } from 'next/headers'

export default async function Index() {
  const cookieStore = cookies()
  // const supabase = createClient(cookieStore)

  // const { data: { user }, } = await supabase.auth.getUser()

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col gap-14 max-w-4xl px-3 py-16 lg:py-24  text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12">
          <h1 className="sr-only">Document Chat Application</h1>
          <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
            Chat with your files using <strong>Supabase</strong>
          </p>

        </div>
      </div>
    </div>
  )
}
