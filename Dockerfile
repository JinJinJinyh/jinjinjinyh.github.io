FROM jekyll/jekyll:4.3
WORKDIR /srv/jekyll
COPY . .
EXPOSE 4000
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
