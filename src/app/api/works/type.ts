export interface WorkData {
  id: number;
  authorId: number;
  authorName?: string;
  title: string;
  coverImageUrl: string;
  description?: string;
}

export interface WorksProps {
  works: WorkData[];
}
