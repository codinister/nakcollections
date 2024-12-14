import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'comp_name',
      title: 'Company Name',
      type: 'string',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'phone1',
      title: 'Phone 1',
      type: 'string',
    }),

    defineField({
      name: 'phone2',
      title: 'Phone 2',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),

    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),

    defineField({
      name: 'mainImage',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'pageheader',
      title: 'Page image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
   
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

 
})
