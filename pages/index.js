import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Social media feed</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main>
				<header className="header">
					<div className="container">
						<div className="column">
							<h1 className="header__title">
								Social Media feed
							</h1>
						</div>
					</div>
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
        
        .header  {
            padding: 40px 0;
        }
        .header__title {
            text-align: center;
            font-weight: 300;
            font-size: 45px;
        }
        
        .container {
          max-width: 1180px;
          padding-left: 10px;
          padding-right: 10px;
          display: flex;
          margin-left: auto;
          margin-right: auto;
          flex-wrap: wrap;
        }
        
        .column {
          flex: 1 1 25%;
          min-width: 290px;
          padding-left: 10px;
          padding-right: 10px;
          margin-top: 25px;
        }

      `}</style>
		</div>
	)
}
