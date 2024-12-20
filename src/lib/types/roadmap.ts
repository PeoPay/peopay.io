export interface Milestone {
  title: string;
  timeline: string;
  objectives: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface RoadmapPhase {
  phase: string;
  milestones: Milestone[];
}