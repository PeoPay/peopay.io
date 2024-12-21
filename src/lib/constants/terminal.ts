import { ShieldCheck, Code2, Network, KeySquare } from 'lucide-react';
import type { Skill } from '@/lib/types/skills';

export const SKILLS: Skill[] = [
  { icon: ShieldCheck, label: 'Blockchain Security', color: 'text-green-500' },
  { icon: Network, label: 'Network Architecture', color: 'text-purple-500' },
  { icon: Code2, label: 'Information Security', color: 'text-yellow-500' },
  { icon: KeySquare, label: 'Cryptography', color: 'text-red-500' },
] as const;

export const TERMINAL_PROMPT = "[01x.arec1b0@peopay ~]$";