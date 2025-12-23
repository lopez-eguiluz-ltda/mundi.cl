FROM mcr.microsoft.com/vscode/devcontainers/base:0-focal

ENV DEBIAN_FRONTEND=noninteractive
SHELL ["/bin/bash", "-lc"]

# Install Node 22 from NodeSource, plus git and build tools. Enable pnpm via corepack.
RUN apt-get update \
  && apt-get install -y curl git build-essential ca-certificates gnupg2 --no-install-recommends \
  && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
  && apt-get install -y nodejs \
  && npm install -g pnpm@10.25.0 \
  && rm -rf /var/lib/apt/lists/*

USER vscode
WORKDIR /workspace
