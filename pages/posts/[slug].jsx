export default function ( {slug, res} ) {
    console.log(res)
    return (
            <>
                <h1>Dette er side {slug}</h1>
                <p>{res.fact}</p>
            </>
            )
}

// getStaticProps fetcher content og bygger en html-side når vi builder projectet
// God til sider der sjældent opdateres - dårlig til sider der hele tiden opdateres
export async function getStaticProps(context) {

    // De her server functioner kan modtage context
    // Herunder vil man kunne finde "slug", eller URL-params som: blabla.dk/?id=12&poelse=true
    const slug = context.params.slug
    const url = "https://catfact.ninja/fact"
    const conn = await fetch(url)
    const res = await conn.json()
  
    return {
        props: {
          res: res,
          slug: slug,
        }
    }
}


// Hvis vi bruger getStaticProps på en slug-side, skal vi fortælle hvilke URL'er / HTML-filer der skal genereres
export async function getStaticPaths() {
    // nu er det hardcoded, men optimalt vil man hente siderne via API'en
    return {
      paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
      fallback: false,
    }
  }