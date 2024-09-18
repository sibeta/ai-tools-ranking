# Use an official Nginx image as a base
FROM nginx:alpine

# Copy the HTML, CSS, and JS files to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js

# Expose port 80
EXPOSE 80
