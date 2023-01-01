function App() {
  return (
    <div className="main-wrap">
      <main>
        <div className="mobileImgWrapper"></div>

        <div className="textArea">
          <h1>
            Get <span className="insights">insights</span> that help your
            business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <ul>
            <li>
              <span className="listNumber">10k+ </span>
              <span className="stat">companies</span>
            </li>
            <li>
              <span className="listNumber">314</span>
              <span className="stat">templates</span>
            </li>
            <li>
              <span className="listNumber">12M+</span>
              <span className="stat">queries</span>
            </li>
          </ul>
        </div>

        <div className="desktopImgWrapper"></div>
      </main>
    </div>
  );
}

export default App;
