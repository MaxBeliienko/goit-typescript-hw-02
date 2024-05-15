export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  alternative_slugs: {
    en: string;
  };
}
