export type MultimediaItem = {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
};

export type TopStoryItem = {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  multimedia: MultimediaItem[];
  short_url: string;
};

export type TopStoriesResponse = {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: TopStoryItem[];
};

export type NewswireItem = {
  slug_name: string;
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  item_type: string;
  source: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  multimedia: MultimediaItem[];
  short_url: string;
};

export type NewswireResponse = {
  status: string;
  copyright: string;
  num_results: number;
  results: NewswireItem[];
};
