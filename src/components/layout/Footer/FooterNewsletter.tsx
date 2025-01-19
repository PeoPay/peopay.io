import { memo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const FooterNewsletter = memo(function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated with our latest news.",
    });

    setEmail('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
        <p className="text-muted-foreground">
          Subscribe to our newsletter for updates and announcements.
        </p>
      </div>

      <form 
        name="newsletter" 
        method="POST" 
        data-netlify="true" 
        onSubmit={handleSubmit} 
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="newsletter" />

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full"
          />
        </div>

        <Button type="submit" className="flex items-center space-x-2">
          <Send className="w-4 h-4" />
          <span>Subscribe</span>
        </Button>
      </form>
    </div>
  );
});
