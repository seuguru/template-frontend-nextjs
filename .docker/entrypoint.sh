#!/bin/bash
set -e

SUDO=''

# If current user is not root, try to run with sudo
if (( $EUID != 0 )); then
  SUDO='sudo'
fi

if [ ! -f ".env.local" ]; then
  $SUDO cp /app/.env.local.example /app/.env.local
fi

exec "$@"