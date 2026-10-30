---
name: Dependency override precedence
description: pnpm override precedence when root package and workspace settings coexist
---

When root package.json contains pnpm.overrides, use that effective override map for security constraints rather than assuming overrides in pnpm-workspace.yaml will also apply.

**Why:** Both configuration surfaces coexist in this project, and workspace-only overrides did not affect resolved dependencies while root overrides were present.

**How to apply:** Preserve existing security constraints and verify actual resolved package versions and a fresh dependency audit after changes; configuration text alone is not evidence of remediation.
