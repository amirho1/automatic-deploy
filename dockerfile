FROM node
WORKDIR /app/
COPY ./package.json ./yarn.lock /app/
RUN useradd -r --password admin  admin && yarn install && chown admin /app/
COPY . /app/
EXPOSE 3001
CMD ["yarn", "start"]
