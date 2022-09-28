export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6334ad6c71621e0223e6c15f',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-phil-studio',
                  apiId: '610e3e0e-32fe-4ef3-bf3d-427204bf7e3c'
                },
                {
                  buildHookId: '6334ad6c36f82d00a4451a66',
                  title: 'Blog Website',
                  name: 'sanity-blog-phil',
                  apiId: '7449a75e-f162-4c6d-82cd-1ed20dafa1d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattnaz/sanity-blog-phil',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-blog-phil.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
