---
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git log:*)
description: Create a git commit using conventional commit format
---

## Instructions

Use conventional commit message format and put files being changed at the end. And then put a brief description of the changes.

## Conventional Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependencies, configs

## Commit Message Format

```
<type>: <short description>

<brief description of changes>

Files changed:
- file1.ts
- file2.astro

Closes #<issue-number> (if applicable)
```

## GitHub Issue Keywords

If the changes are related to a GitHub issue, include one of these keywords followed by the issue number:

- `Closes #123` - Closes the issue when merged
- `Fixes #123` - Fixes and closes the issue when merged
- `Resolves #123` - Resolves and closes the issue when merged
- `Refs #123` - References the issue without closing it

## Steps

1. Run `git status` to see changed files
2. Run `git diff --cached` or `git diff` to understand the changes
3. Run `git log -3 --oneline` to see recent commit style
4. Stage relevant files with `git add`
5. Create commit with the format above

End the commit message with:
```
Co-Authored-By: Claude <noreply@anthropic.com>
```
