export interface Profile {
  id: string;
  username: string;
  full_name: string;
  avatar_url: string | null;
  headline: string | null;
  bio: string | null;
  location: string | null;
  open_to_work: boolean;
  is_public: boolean;
  stack: string[];
  github_url: string | null;
  linkedin_url: string | null;
  website_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  user_id: string;
  title: string;
  description: string;
  tech_stack: string[];
  repo_url: string | null;
  live_url: string | null;
  thumbnail_url: string | null;
  status: 'Live' | 'WIP' | 'Open Source';
  created_at: string;
}
