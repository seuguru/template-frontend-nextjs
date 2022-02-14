FROM node:14.17.0-alpine3.13
LABEL maintainer "Seu Guru <tech@seuguru.com.br>"

ENV PORT=3030

RUN apk add --no-cache sudo bash git libc6-compat zsh-vcs

RUN deluser --remove-home node && \
    adduser --disabled-password --gecos '' -S -G wheel -u 1000 seuguru && \
    echo '%wheel ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER seuguru

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.1/zsh-in-docker.sh)" -- \
    -t https://github.com/denysdovhan/spaceship-prompt \
    -a 'SPACESHIP_PROMPT_ADD_NEWLINE="false"' \
    -a 'SPACESHIP_CHAR_SYMBOL="🚀 "' \
    -p git \
    -p https://github.com/zdharma-continuum/fast-syntax-highlighting \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions

COPY .docker/entrypoint.sh /usr/bin/
RUN sudo chmod +x /usr/bin/entrypoint.sh

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn config set cache-folder .yarn-cache
RUN yarn install --network-timeout 100000

EXPOSE $PORT

ENTRYPOINT ["entrypoint.sh"]
CMD ["tail", "-f"]