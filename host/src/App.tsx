import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Header = React.lazy(() => import("remote1/Header"));
const Footer = React.lazy(() => import("remote2/Footer"));

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<div>Loading...</div>}>
        {showHeader && <Header />}
        <button onClick={() => setShowHeader(true)}>Show header</button>
        <div className="my-80">Host Component</div>
        {showFooter && <Footer />}
        <button onClick={() => setShowFooter(true)}>Show footer</button>
      </Suspense>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
