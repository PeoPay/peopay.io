export function ResourceLinks() {
  return (
    <ul className="space-y-2">
      <li>
        <a
          href="https://docs.peopay.io/"
          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
          <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/PeoPay"
          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
        </a>
      </li>
    </ul>
  );
}