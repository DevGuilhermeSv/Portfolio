FROM pierrezemb/gostatic
COPY ./dist/portfolio-angular /srv/http/
CMD ["-fallback",  "index.html"]

