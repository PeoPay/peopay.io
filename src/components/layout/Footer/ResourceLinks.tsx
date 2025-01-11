export function ResourceLinks() {
  return (
    <ul className="space-y-2">
      <li>
        <a
          href="https://docs.peopay.io/"
          className="text-muted-foreground hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </li>
      <li>
        <a
          href="https://github.com/PeoPay"
          className="text-muted-foreground hover:text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}