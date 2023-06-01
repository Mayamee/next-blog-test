import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/postывs', {
    next: {
      revalidate: 60, // cache
    },
  })
  if (!res.ok) throw new Error('Unable to fetch data')
  return res.json()
}

export default async function Blog() {
  const posts = await getData()
  return (
    <>
      <h1>Welcome to Mayamee blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
