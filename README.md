# Jinjinjinyh's Blog

A personal blog built with Jekyll and hosted on GitHub Pages.

## Features

- ✨ Clean and modern design
- 📝 Easy to write blog posts
- 📱 Responsive layout
- 🔧 Customizable themes
- 🚀 Fast and lightweight

## Quick Start

### Prerequisites

- Docker (running in WSL Ubuntu)
- Git

### Development

1. **Start the development server**:
   ```bash
   wsl -d Ubuntu -- bash -c "docker rm -f jekyll-blog 2>/dev/null; docker run -d --name jekyll-blog -v ~/projects/blog:/srv/jekyll -p 4000:4000 --user root jekyll/jekyll:4.2.2 bash -c 'bundle install && jekyll serve --host 0.0.0.0'"
   ```

2. **Access the blog**:
   Open your browser and visit `http://localhost:4000`

3. **Edit files**:
   Edit files in `~/projects/blog/` directory. Changes will be automatically reflected.

### Docker Setup (Required after WSL restart)

```bash
wsl -d Ubuntu -- bash -c "sudo nohup dockerd > /var/log/dockerd.log 2>&1 &"
```

### Deployment

To deploy to GitHub Pages:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update blog content"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```

3. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _posts/              # Blog posts
├── _layouts/            # Page layouts
├── _includes/           # Reusable components
├── _sass/               # Sass stylesheets
├── assets/              # Static assets (CSS, JS, images)
├── index.markdown       # Home page
├── about.markdown       # About page
├── 404.html             # 404 page
└── README.md            # This file
```

## Writing a New Post

Create a new file in `_posts/` directory with the format:
```
YYYY-MM-DD-title-of-post.md
```

Example front matter:
```yaml
---
layout: post
title: "My First Blog Post"
date: 2024-01-01 12:00:00
categories: [tutorial, jekyll]
tags: [jekyll, tutorial, blog]
---
```

## Customization

### Changing the Theme

Edit `_config.yml` to change the theme:
```yaml
theme: minima  # or any other Jekyll theme
```

### Adding Custom CSS

Create `assets/css/style.scss` and add your custom styles.

## License

MIT License
