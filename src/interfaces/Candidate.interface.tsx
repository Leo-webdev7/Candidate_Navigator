// TODO: Create an interface for the Candidate objects returned by the API
// Interface for GitHub user profile
export interface Candidate {
  login: string;
  id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  bio?: string;
  status?: 'accepted' | 'rejected';
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}


