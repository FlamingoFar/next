import Image from "next/image"
import Link from "next/link"
import Router from "next/router"

export default function Home( {res} ) {
  console.log(res)
  return (<>
            <a onClick={() => Router.push("testsude")}>testside</a>
            <h1>lol</h1>
            <Image
                src="https://images.dog.ceo/breeds/dalmatian/cooper2.jpg"
                layout="fill"
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
            />
          </>
  )
}


export async function getServerSideProps() {
  const url = "https://catfact.ninja/fact"
  const conn = await fetch(url)
  const res = await conn.json()
  console.log(res)

  return {
      props: {
        res: res
      }
  }

}