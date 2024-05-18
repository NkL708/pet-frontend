FROM node:20-alpine as base
WORKDIR /home/nkl/frontend/
RUN deluser --remove-home node && \
    addgroup nkl && \
    adduser -D -G nkl -s /bin/zsh nkl && \
    chown -R nkl:nkl /home/nkl
USER nkl
COPY package*.json yarn.lock angular.json tsconfig*.json custom-webpack.config.ts ./
RUN yarn install
ENV PATH="./node_modules/.bin:$PATH"
COPY --chown=nkl:nkl src ./src

FROM base as dev
USER root
RUN apk update && apk upgrade && \
    apk --no-cache add zsh git curl grep
USER nkl
RUN zsh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -t robbyrussell -p git -p zsh-autosuggestions -p zsh-completions && \
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions && \
    git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-completions
EXPOSE 4200

FROM base as prod
ARG COMMIT_SHA
ARG BUILD_SOURCE_MAP
ARG SENTRY_AUTH_TOKEN
ARG SENTRY_ORG
ARG SENTRY_PROJECT
ARG SENTRY_DSN
RUN set -e; \
    if [ "$BUILD_SOURCE_MAP" = "true" ]; then \
    yarn ng build --source-map; \
    sentry-cli releases new "$COMMIT_SHA" --project "$SENTRY_PROJECT" && \
    sentry-cli releases files "$COMMIT_SHA" upload-sourcemaps ./dist/frontend/ --url-prefix '~/' && \
    sentry-cli releases finalize "$COMMIT_SHA"; \
    find ./dist/frontend -name '*.map' -type f -delete; \
    else \
    yarn ng build; \
    fi
