---
layout: home
title: Home
---

Welcome to my blog! 🎉

Here you'll find tutorials, tips, and stories about web development, programming, and technology.

## Latest Posts

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url }})
{{ post.date | date: "%B %d, %Y" }} - {{ post.excerpt | strip_html | truncatewords: 20 }}
{% endfor %}

## About Me

I'm a software developer passionate about building amazing things on the web. Check out my [About](/about/) page to learn more!

## Categories

{% for category in site.categories %}
- [{{ category[0] }}](#) ({{ category[1].size }} posts)
{% endfor %}
