#!/bin/bash

# studio-skills sync script
# Usage: ./sync-script.sh --type next.js --target ~/projects/my-project
#        ./sync-script.sh --sync

set -e

STUDIO_SKILLS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SYNC_CONFIG="$HOME/.studio-skills-sync.json"

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
  echo -e "${GREEN}[studio-skills]${NC} $1"
}

log_warn() {
  echo -e "${YELLOW}[studio-skills]${NC} $1"
}

log_error() {
  echo -e "${RED}[studio-skills]${NC} $1"
}

# Function to copy skills to a project
sync_to_project() {
  local project_type=$1
  local target_dir=$2

  if [ ! -d "$target_dir" ]; then
    log_error "Target directory does not exist: $target_dir"
    exit 1
  fi

  # Create .claude directory structure
  mkdir -p "$target_dir/.claude/skills"

  log_info "Syncing skills to $target_dir (type: $project_type)"

  # Copy universal skills
  if [ -d "$STUDIO_SKILLS_DIR/.github/skills" ]; then
    cp -r "$STUDIO_SKILLS_DIR/.github/skills"/* "$target_dir/.claude/skills/" 2>/dev/null || true
    log_info "Copied core skills"
  fi

  # Copy coding skills based on project type
  case $project_type in
    next.js|nextjs)
      [ -d "$STUDIO_SKILLS_DIR/coding/nextjs" ] && cp -r "$STUDIO_SKILLS_DIR/coding/nextjs"/* "$target_dir/.claude/skills/" || log_warn "No Next.js skills found"
      ;;
    expo)
      [ -d "$STUDIO_SKILLS_DIR/coding/expo" ] && cp -r "$STUDIO_SKILLS_DIR/coding/expo"/* "$target_dir/.claude/skills/" || log_warn "No Expo skills found"
      ;;
    react)
      [ -d "$STUDIO_SKILLS_DIR/coding/react" ] && cp -r "$STUDIO_SKILLS_DIR/coding/react"/* "$target_dir/.claude/skills/" || log_warn "No React skills found"
      ;;
  esac

  # Copy architecture & business resources
  if [ -d "$STUDIO_SKILLS_DIR/architecture" ]; then
    mkdir -p "$target_dir/.claude/architecture"
    cp -r "$STUDIO_SKILLS_DIR/architecture"/* "$target_dir/.claude/architecture/" 2>/dev/null || true
  fi

  if [ -d "$STUDIO_SKILLS_DIR/business" ]; then
    mkdir -p "$target_dir/.claude/business"
    cp -r "$STUDIO_SKILLS_DIR/business"/* "$target_dir/.claude/business/" 2>/dev/null || true
  fi

  # Copy design tokens
  if [ -d "$STUDIO_SKILLS_DIR/design" ]; then
    mkdir -p "$target_dir/.claude/design"
    cp -r "$STUDIO_SKILLS_DIR/design"/* "$target_dir/.claude/design/" 2>/dev/null || true
  fi

  log_info "✓ Sync complete for $target_dir"

  # Save sync config for --sync later
  if ! command -v jq &> /dev/null; then
    log_warn "jq not found, skipping config save (can't update sync config)"
    return
  fi

  if [ ! -f "$SYNC_CONFIG" ]; then
    echo "[]" > "$SYNC_CONFIG"
  fi

  # Add to sync config if not already there
  if ! jq -e --arg path "$target_dir" --arg type "$project_type" '.[] | select(.path == $path and .type == $type)' "$SYNC_CONFIG" > /dev/null 2>&1; then
    jq --arg path "$target_dir" --arg type "$project_type" '. += [{path: $path, type: $type, synced_at: now | todate}]' "$SYNC_CONFIG" > "${SYNC_CONFIG}.tmp" && mv "${SYNC_CONFIG}.tmp" "$SYNC_CONFIG"
    log_info "Saved sync config"
  fi
}

# Function to sync all previously synced projects
sync_all() {
  if [ ! -f "$SYNC_CONFIG" ]; then
    log_warn "No projects to sync (run with --type and --target first)"
    return
  fi

  if ! command -v jq &> /dev/null; then
    log_error "jq is required for --sync. Install with: brew install jq"
    exit 1
  fi

  log_info "Syncing all projects..."

  jq -r '.[] | "\(.path)|\(.type)"' "$SYNC_CONFIG" | while IFS='|' read -r path type; do
    if [ -d "$path" ]; then
      sync_to_project "$type" "$path"
    else
      log_warn "Project path not found, skipping: $path"
    fi
  done

  log_info "✓ All projects synced"
}

# Parse arguments
if [ $# -eq 0 ]; then
  echo "Usage: $0 --type <project-type> --target <path>"
  echo "       $0 --sync"
  echo ""
  echo "Project types: next.js, expo, react"
  echo ""
  echo "Examples:"
  echo "  $0 --type next.js --target ~/projects/my-app"
  echo "  $0 --sync"
  exit 1
fi

PROJECT_TYPE=""
TARGET_DIR=""

while [[ $# -gt 0 ]]; do
  case $1 in
    --type)
      PROJECT_TYPE="$2"
      shift 2
      ;;
    --target)
      TARGET_DIR="$2"
      shift 2
      ;;
    --sync)
      sync_all
      exit 0
      ;;
    *)
      log_error "Unknown option: $1"
      exit 1
      ;;
  esac
done

if [ -z "$PROJECT_TYPE" ] || [ -z "$TARGET_DIR" ]; then
  log_error "Both --type and --target are required"
  exit 1
fi

sync_to_project "$PROJECT_TYPE" "$TARGET_DIR"
