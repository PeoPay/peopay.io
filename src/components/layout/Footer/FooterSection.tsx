interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold tracking-wide text-lg">{title}</h3>
      {children}
    </div>
  );
}