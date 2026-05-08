FROM php:8.2-apache

# Activar mod_rewrite
RUN a2enmod rewrite

# Instalar Node.js
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Copiar proyecto
COPY . /var/www/html/

# Instalar dependencias
WORKDIR /var/www/html

RUN npm install
RUN npx gulp

# Apache apuntando a /public
RUN sed -i 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/000-default.conf

EXPOSE 80