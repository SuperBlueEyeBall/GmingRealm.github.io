#!/bin/bash
# Stage and commit the first 50 untracked folders from gfiles folder

batch_size=50
counter=0

# Find untracked folders directly in the gfiles directory
for folder in gfiles/*; do
  if [ -d "$folder" ] && [ "$(git status --porcelain "$folder")" ]; then
    git add "$folder"
    counter=$((counter+1))

    # Stop after staging 50 folders
    if [ $counter -ge $batch_size ]; then
      break
    fi
  fi
done

# Commit the changes
if [ $counter -gt 0 ]; then
  git commit -m "Staged and committed first $counter untracked folders from gfiles"
  echo "Committed $counter folders."
else
  echo "No untracked folders to commit."
fi
