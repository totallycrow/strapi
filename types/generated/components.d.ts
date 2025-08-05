import type { Schema, Struct } from '@strapi/strapi';

export interface GenericAdsenseBlock extends Struct.ComponentSchema {
  collectionName: 'components_generic_adsense_blocks';
  info: {
    displayName: 'AdsenseBlock';
    icon: 'shoppingCart';
  };
  attributes: {
    desktopOnly: Schema.Attribute.Boolean;
    format: Schema.Attribute.String;
    label: Schema.Attribute.String;
    responsive: Schema.Attribute.Boolean;
    slotId: Schema.Attribute.String;
  };
}

export interface GenericContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_generic_content_blocks';
  info: {
    description: '';
    displayName: 'TextBlock';
    icon: 'brush';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface GenericCustomAdBreak extends Struct.ComponentSchema {
  collectionName: 'components_generic_custom_ad_breaks';
  info: {
    displayName: 'customAdBreak';
  };
  attributes: {
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GenericGifEmbed extends Struct.ComponentSchema {
  collectionName: 'components_generic_gif_embeds';
  info: {
    displayName: 'GifEmbed';
    icon: 'play';
  };
  attributes: {
    alt: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface GenericHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_generic_hero_images';
  info: {
    description: '';
    displayName: 'HeroImage';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GenericImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_generic_image_blocks';
  info: {
    description: '';
    displayName: 'ImageBlock';
    icon: 'landscape';
  };
  attributes: {
    altText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GenericImageLink extends Struct.ComponentSchema {
  collectionName: 'components_generic_image_links';
  info: {
    displayName: 'ImageLink';
    icon: 'exit';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    url: Schema.Attribute.String;
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

export interface GenericVideoEmbed extends Struct.ComponentSchema {
  collectionName: 'components_generic_video_embeds';
  info: {
    displayName: 'videoEmbed';
    icon: 'television';
  };
  attributes: {
    caption: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'generic.adsense-block': GenericAdsenseBlock;
      'generic.content-block': GenericContentBlock;
      'generic.custom-ad-break': GenericCustomAdBreak;
      'generic.gif-embed': GenericGifEmbed;
      'generic.hero-image': GenericHeroImage;
      'generic.image-block': GenericImageBlock;
      'generic.image-link': GenericImageLink;
      'generic.seo': GenericSeo;
      'generic.video-embed': GenericVideoEmbed;
    }
  }
}
