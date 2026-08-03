export default function Footer() {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="copyright text-center">
        <p>© <span id="year">{new Date().getFullYear()}</span> <strong className="px-1">Shariful Islam</strong> • All Rights Reserved</p>
      </div>
      <div className="credits text-center">
        <a href="https://github.com/Sharif2023" target="_blank" rel="noopener noreferrer">Visit My GitHub</a>
      </div>
    </footer>
  );
}
