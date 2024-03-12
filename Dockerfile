FROM node:20-alpine as build
WORKDIR /home/nkl/frontend/
RUN deluser --remove-home node && \
    addgroup nkl && \
    adduser -D -G nkl -s /bin/zsh nkl && \
    chown -R nkl:nkl /home/nkl
USER nkl
COPY package*.json yarn.lock angular.json tsconfig*.json custom-webpack.config.js ./
RUN yarn install
ENV PATH="./node_modules/.bin:$PATH"
COPY --chown=nkl:nkl src ./src
RUN yarn ng build

FROM build as dev
USER root
RUN apk update && apk upgrade && \
    apk --no-cache add zsh git curl
USER nkl
RUN zsh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -t robbyrussell -p git -p zsh-autosuggestions -p zsh-completions && \
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions && \
    git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-completions

EXPOSE 4200
CMD ["yarn", "ng", "serve", "--host", "0.0.0.0", "--poll=2000"]
