type Props = {
  children?: any,
  pageTitle: string // Utiliser 'string' avec une minuscule
};

export function Layout({ children, pageTitle }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
        />
      </head>
      <body>
        <h1>Welcome to EuroPark!</h1>
        <div id="logo">
          <img
            src="/static/parking.png" 
            alt="Image Parking"
            width="250px"
            height="250px"
          />
        </div>
        <div id="links">
          <p>
            Save time and money with EuroPark! Enjoy a 100% contactless parking
            experience for a short or long duration in our car parks in Europe!
          </p>
          <a href="/cities">&#11093; Our Cities</a>
          <br />
          <a href="/parkings">&#11093; Our Car Parks</a>
        </div>
        <div id="content">
          {children}
        </div>
      </body>
    </html>
  );
}
