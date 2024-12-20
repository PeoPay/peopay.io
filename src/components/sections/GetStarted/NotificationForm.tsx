import { memo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const NotificationForm = memo(function NotificationForm() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "You're on the list!",
      description: "We'll notify you when we launch.",
    });
    
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10"
          required
        />
        <Bell className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>
      
      <Button 
        type="submit" 
        className="w-full group relative overflow-hidden"
      >
        Notify Me
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      </Button>
    </form>
  );
});