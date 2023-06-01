import { Metadata } from 'next'

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getData(id)
  return {
    title: post.title,
  }
}

async function getData(id: string) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 60, // cache
      },
    })
    return res.json()
  } catch (error) {}
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id)
	console.log("Server component");
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}
