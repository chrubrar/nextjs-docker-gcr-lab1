import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>hello GCP Docker Lab</h1><br />
        <h3>We meet again</h3> <br />
        <h3>Taigy is the best</h3>< br />
        <Link href="https://www.cnn.com">CNN</Link>
      </div>
    </main>
  )
}
