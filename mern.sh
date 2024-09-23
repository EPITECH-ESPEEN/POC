#!/bin/bash

# Require 'concurrently' package
# npm install concurrently

BACKEND_DIR="./MERN"
FRONTEND_DIR="./MERN/front-end"

concurrently \
  "cd $BACKEND_DIR && npm run dev" \
  "cd $FRONTEND_DIR && npm start"
