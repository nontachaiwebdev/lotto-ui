import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Mitr" rel="stylesheet" />
    </Head>
    <style>{`
      *{
        font-family: 'Mitr', sans-serif;
      }

      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)
