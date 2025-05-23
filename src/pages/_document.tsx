import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    
    return (
      <Html lang="en">
        <Head>
          {/* Add a custom script to help fix path issues with Next.js on GitHub Pages */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  // Fix base path for assets on GitHub Pages
                  var basePath = "${basePath}";
                  if (basePath && window.location.hostname.includes('github.io')) {
                    // Check if we need to add the basePath to asset URLs
                    document.querySelectorAll('link[href^="/_next"], script[src^="/_next"]').forEach(function(el) {
                      var attrName = el.tagName === 'LINK' ? 'href' : 'src';
                      if (!el.getAttribute(attrName).includes(basePath)) {
                        el.setAttribute(attrName, basePath + el.getAttribute(attrName));
                      }
                    });
                  }
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );  }
}

export default MyDocument;
