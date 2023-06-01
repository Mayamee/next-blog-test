'use client' // должна
export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>Ooops. {error.message}</h1>
}
