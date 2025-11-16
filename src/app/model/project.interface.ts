interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  tech: string[];
  showFullDescription?: boolean; // add this
}