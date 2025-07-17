import type { Schema, Struct } from '@strapi/strapi';

export interface GenericHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_generic_hero_images';
  info: {
    displayName: 'hero-image';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GenericSeo extends Struct.ComponentSchema {
  collectionName: 'components_generic_seos';
  info: {
    displayName: 'seo';
    icon: 'bulletList';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'generic.hero-image': GenericHeroImage;
      'generic.seo': GenericSeo;
    }
  }
}
