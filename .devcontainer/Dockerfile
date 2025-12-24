FROM mcr.microsoft.com/vscode/devcontainers/base:0-focal

ENV DEBIAN_FRONTEND=noninteractive
SHELL ["/bin/bash", "-lc"]

# Install build tools and nvm; install Node (LTS) via nvm and pnpm
ENV NVM_DIR=/usr/local/nvm
RUN apt-get update \
  && apt-get install -y curl git build-essential ca-certificates gnupg2 --no-install-recommends \
  && mkdir -p $NVM_DIR \
  && curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash \
  && chmod -R 755 $NVM_DIR \
  && printf 'export NVM_DIR="/usr/local/nvm"\n[ -s "/usr/local/nvm/nvm.sh" ] && \. "/usr/local/nvm/nvm.sh"\n' > /etc/profile.d/nvm.sh \
  && /bin/bash -lc "source /etc/profile.d/nvm.sh && nvm install --lts && nvm alias default lts/* && npm install -g pnpm@10.25.0" \
  && rm -rf /var/lib/apt/lists/*

USER vscode
WORKDIR /workspace
