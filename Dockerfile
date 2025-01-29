FROM node:20-alpine AS base
WORKDIR /home/nkl/frontend/
RUN deluser --remove-home node && \
    addgroup nkl && \
    adduser -D -G nkl -s /bin/zsh nkl && \
    chown -R nkl:nkl /home/nkl
RUN corepack enable
USER nkl

FROM base AS dev
USER root
RUN apk --no-cache add zsh git curl grep
USER nkl
COPY setup_dev_env.sh /home/nkl/setup_dev_env.sh
RUN sh /home/nkl/setup_dev_env.sh
COPY frontend/package*.json frontend/yarn.lock frontend/angular.json frontend/tsconfig*.json frontend/custom-webpack.config.ts ./
RUN yarn install
EXPOSE 4200

FROM base AS prod
ARG COMMIT_SHA
ARG BUILD_SOURCE_MAP
ARG SENTRY_AUTH_TOKEN
ARG SENTRY_ORG
ARG SENTRY_PROJECT
ARG SENTRY_DSN
COPY frontend/package*.json frontend/yarn.lock frontend/angular.json frontend/tsconfig*.json frontend/custom-webpack.config.ts ./
COPY frontend/src ./src
RUN yarn workspaces focus --production
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
