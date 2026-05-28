---
layout: default
title: Home
---

<div class="welcome-section">
  <h2 class="page-title">Welcome to My Blog</h2>
  <p class="welcome-text">Explore tutorials, tech articles, and more in this cyberpunk digital realm.</p>
</div>

## Latest Posts

<div class="posts-grid">
{% for post in site.posts %}
  <article class="post-card">
    <h3 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }} | {{ post.categories | join: ', ' }}</p>
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    <div class="post-tags">
      {% for tag in post.tags %}
        <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
  </article>
{% endfor %}
</div>

## Categories

<div class="categories-section">
  <h3 class="section-title">Browse by Category</h3>
  <ul class="category-list">
  {% for category in site.categories %}
    <li><a href="{{ "/categories/" | relative_url }}#{{ category[0] }}">{{ category[0] | capitalize }} ({{ category[1].size }})</a></li>
  {% endfor %}
  </ul>
</div>
