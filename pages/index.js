import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Weather app</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className="main">
				<header className="header">
					<h1 className="header__title">
						Check current weather
					</h1>
				</header>
				<Dashboard/>
			</main>
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        
        .main {
            padding: 0 15px;
         }
        
        .header  {
            padding: 40px 0 0;
        }
        .header__title {
            text-align: center;
            font-weight: 200;
            font-size: 40px;
        }

      `}</style>
		</div>
	)
}
