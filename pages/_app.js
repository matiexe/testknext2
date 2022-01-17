import "../css/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Kaizen-IT</title>
                <meta />

                <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
      crossOrigin="anonymous"
      referrerpolicy="no-referrer"
    />
    {/*<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>*/}
    
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Quattrocento+Sans:ital,wght@0,700;1,700&display=swap" rel="stylesheet"/>
            
            </Head>
        
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
