export default interface IAnimalsResponse {
  entries: Entry[];
  meta: AnimalsResponseMeta;
}

interface Entry {
  meta: EntryMeta;
  fields: Fields;
}

interface Fields {
  image: Image;
}

interface Image {
  url: string;
  tags: [];
  uuid: string;
  title: string;
  alt_text: null;
  description: null;
  content_type: ContentType;
}

enum ContentType {
  ImageJPEG = "image/jpeg",
}

interface EntryMeta {
  name: string;
  slug: string;
  tags: any[];
  type: Type;
  uuid: string;
  space: Space;
  author: any;
  locale: Locale;
  excerpt: string;
  private: boolean;
  targets: any[];
  category: null;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  unpublish_at: null;
  version_type: VersionType;
  category_name: null;
  category_slug: null;
  available_locales: Locale[];
}

enum Locale {
  Es = "es",
}

enum Space {
  Animals = "animals",
}

enum Type {
  Game = "game",
}

enum VersionType {
  Current = "current",
}

interface AnimalsResponseMeta {
  total_entries: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}
