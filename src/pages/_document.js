import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body style={{ margin: 0, fontFamily: "'Comic Neue', cursive", WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", backgroundImage: "linear-gradient(to top, #11a2e9, #83b5f0, #b9cbf5, #e1e3fa, #ffffff)", backgroundRepeat: "no-repeat", backgroundSize: "cover", minHeight: "100vh" }}>
            <Main />
            <NextScript />
</body>
      </Html>
    );
  }
}

export default MyDocument;
