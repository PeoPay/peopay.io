import { Mail, Github, Wallet } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Wallet className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">PeoPay-Core</span>
            </div>
            <p className="text-muted-foreground">
              Empowering communities through blockchain technology
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#solution" className="text-muted-foreground hover:text-primary">
                  Solution
                </a>
              </li>
              <li>
                <a href="#education" className="text-muted-foreground hover:text-primary">
                  Education
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
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
                  href="https://github.com/dkrizhanovskyi"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:dan@peopay.io"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  dan@peopay.io
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@peopay.io"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@peopay.io
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dkrizhanovskyi"
                  className="text-muted-foreground hover:text-primary flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PeoPay-Core. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}