# Jinjinjinyh 的博客

使用 Jekyll 构建并托管在 GitHub Pages 上的个人博客。

## 功能特性

- ✨ 简洁现代的设计
- 📝 易于撰写博客文章
- 📱 响应式布局
- 🔧 可自定义主题
- 🚀 快速轻量

## 快速开始

### 前置要求

- Docker（运行在 WSL Ubuntu 中）
- Git

### 开发环境

1. **启动开发服务器**：
   ```bash
   wsl -d Ubuntu -- bash -c "docker rm -f jekyll-blog 2>/dev/null; docker run -d --name jekyll-blog -v ~/projects/blog:/srv/jekyll -p 4000:4000 --user root jekyll/jekyll:4.2.2 bash -c 'bundle install && jekyll serve --host 0.0.0.0'"
   ```

2. **访问博客**：
   打开浏览器访问 `http://localhost:4000`

3. **编辑文件**：
   在 `~/projects/blog/` 目录中编辑文件，更改会自动生效。

### Docker 启动（WSL 重启后需要执行）

```bash
wsl -d Ubuntu -- bash -c "sudo nohup dockerd > /var/log/dockerd.log 2>&1 &"
```

### 部署到 GitHub Pages

1. 提交更改：
   ```bash
   git add .
   git commit -m "Update blog content"
   ```

2. 推送到 GitHub：
   ```bash
   git push origin main
   ```

3. 在仓库设置中启用 GitHub Pages：
   - 进入 Settings > Pages
   - 选择分支：`main`
   - 选择文件夹：`/ (root)`
   - 点击 "Save"

## 项目结构

```
.
├── _config.yml          # 网站配置
├── _posts/              # 博客文章
├── _layouts/            # 页面布局
├── _includes/           # 可复用组件
├── _sass/               # Sass 样式表
├── assets/              # 静态资源（CSS, JS, 图片）
├── index.markdown       # 首页
├── about.markdown       # 关于页面
├── 404.html             # 404 页面
└── README.md            # 说明文档
```

## 撰写新文章

在 `_posts/` 目录中创建新文件，格式为：
```
YYYY-MM-DD-title-of-post.md
```

示例 Front Matter：
```yaml
---
layout: post
title: "我的第一篇博客"
date: 2024-01-01 12:00:00
categories: [教程, jekyll]
tags: [jekyll, 教程, 博客]
---
```

## 自定义配置

### 更换主题

编辑 `_config.yml` 更改主题：
```yaml
theme: minima  # 或其他 Jekyll 主题
```

### 添加自定义 CSS

创建 `assets/css/style.scss` 并添加自定义样式。

## 许可证

MIT License
