import Image from "next/future/image"
import Router from "next/router"

export default function Home( {res} ) {
  const imgStyle = {width: "100%", height: "auto"}
  return (<>
            <a onClick={() => Router.push("posts/1")}>testside 1</a>
            <a onClick={() => Router.push("posts/2")}>testside 2</a>
            <h1>lol</h1>
            <p>{res.fact}</p>
            <div>
              <Image src="https://images.dog.ceo/breeds/dalmatian/cooper2.jpg" width="300" height="200"/>
            </div>
          </>
  )
}

// getServerSideProps er js-kode som afvikles på serveren - altså inden htmlen ender hos brugeren
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