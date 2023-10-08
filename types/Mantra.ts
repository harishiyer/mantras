import { PortableTextBlock } from "sanity";

export type Mantra = {
  _id: string;
  _craftedAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
