<div align="center"  style="margin-bottom:30px">
<img href="https://tg-eco-blog.netlify.app/"><img src="https://api.netlify.com/api/v1/badges/3be71899-cdb2-4b37-a1d2-e48acde5a706/deploy-status" alt="TG eco blog Netlify deploy status"/></a>
</div>

# TG Eco blog

A personal blog built with [GatsbyJS](https://github.com/gatsbyjs/gatsby/) and [TypeScript](https://www.typescriptlang.org/), styled with [Emotion](https://emotion.sh/docs/introduction) and deployed to / hosted on [Netlify](https://www.netlify.com/). It uses the [Gatsby material starter](https://github.com/Vagr9K/gatsby-material-starter) from [Ruben Harutyunyan](https://twitter.com/Vagr9K).

## Getting Started

```bash
  yarn install
  yarn develop
```

### NetlifyCMS

First of all, make sure to edit `static/admin/config.yml` and add your [GitHub/NetlifyId credentials](https://www.netlifycms.org/docs/authentication-backends/):

```yml
backend:
  name: github # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: main # Branch to update
  repo: tgdev/tg-eco-blog # Repo for pushing new commits
```

You can visit `/admin/` after and will be greeted by a login dialog (depending on the auth provider you ave chosen above).

If want to customize Netlify CMS, e.g. registering custom widgets or styling the preview pane, you can do so by editing `src/netlifycms/index.js`:

```js
import CMS from 'netlify-cms-app';

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
    },
  },
});
```

For NetlifyCMS specific issues visit the [official documentation](https://www.netlifycms.org/docs/intro/).
