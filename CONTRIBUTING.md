# Contributing

This is the Maddy Group website. Every change reaches the live site the same way: a branch, a pull request, a passing set of checks, one teammate's approval, then a merge to `master`, which Vercel deploys automatically.

## Set up once

You need Node 22 (see `.nvmrc`; with nvm, run `nvm use`) and write access to `brigdethe/sam-tsx`.

```sh
git clone git@github.com:brigdethe/sam-tsx.git
cd sam-tsx
npm install                         # also installs the git hooks
npx playwright install chromium     # browser for the tests
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

Already working from a fork? Point your clone at the main repo instead:

```sh
git remote set-url origin git@github.com:brigdethe/sam-tsx.git
```

## Make a change

```sh
git switch master && git pull
git switch -c fix/contact-footer    # feature/…, fix/…, content/…, chore/…
npm run dev                         # http://localhost:8080, reloads on save
```

Before opening a pull request:

```sh
npm run check       # typecheck, lint, formatting, build
npm run test:e2e    # browser tests on desktop and phone (a few minutes)
```

`npm run format` fixes formatting; `npx playwright test --ui` shows the browser tests running step by step.

### Git hooks

They run automatically:

- **On commit:** ESLint and Prettier fix up the files you're committing.
- **On push:** typecheck, lint and the script-integrity check. The browser tests are left to CI because they take a few minutes.

## Open a pull request

1. `git push -u origin your-branch`, then open a pull request against `master`.
2. Wait for the checks:
   - **checks**: lint, formatting, typecheck, build
   - **e2e**: the browser tests. If they fail, download the `playwright-report` artifact from the run to see screenshots and traces.
   - **Vercel**: posts a preview link. Open it and look at your change on desktop and on a phone.
3. Ask a teammate for a review. You need one approval, and pushing new commits clears earlier approvals.
4. Merge. Vercel deploys `master` to production within a minute or two.

`master` is protected: no direct pushes, no force pushes, and no merging while a check is red or without an approval.

## After it goes live

The **Live site check** workflow runs the read-only `@smoke` browser tests against the production site after every deploy. If they fail, it opens a GitHub issue labelled `production` with a link to the test report.

To run the same check yourself:

```sh
BASE_URL=https://sam-tsx.vercel.app npm run test:smoke
```

## If production breaks

1. **Roll back first.** In Vercel → Deployments, open the last good production deployment → **Promote**. The site is restored in seconds.
2. **Then fix forward.** Revert the pull request on GitHub (it creates a revert PR) or open a fix PR. Add a browser test for the bug so it can't come back.

## Writing tests

Tests live in `tests/e2e/`.

- **Read-only tests:** tag them `@smoke` in the `describe` title. These are the ones that run against the live site, so they must not submit forms or change anything.
- **Page helpers:** use `gotoReady()` from `tests/e2e/helpers.ts` so the test waits for the page loader to finish.
- **New pages:** pages in `src/sitePages.ts` are picked up automatically by the page and layout tests.

## Dependencies

Dependabot opens weekly pull requests for npm packages and GitHub Actions. They go through the same checks and need an approval like any other change.
