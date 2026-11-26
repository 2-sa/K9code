<p align="center">
  <a href="https://github.com/2-sa/K9code">
    <img src="./assets/prod/logo.svg" width="80" height="80" alt="K9 Code logo" />
  </a>
</p>

<h1 align="center">K9 Code</h1>

<p align="center">The open-source control plane for coding agents.</p>

<p align="center">
  <a href="https://github.com/2-sa/K9code/releases"><strong>Releases</strong></a> ·
  <a href="#install">Install</a> ·
  <a href="#build-from-source">Build from source</a> ·
  <a href="./docs/README.md">Docs</a> ·
  <a href="https://github.com/2-sa/K9code/issues">Issues</a>
</p>

> **Note:** K9 Code is an unofficial fork based on the MIT-licensed [T3 Code](https://github.com/pingdotgg/t3code) source code. It is not affiliated with, endorsed by, or maintained by T3 Tools, Inc.

K9 Code runs the coding agents on your machine and gives them one fast interface.

It works with Claude Code, Codex, Cursor, OpenCode, Grok Build, Antigravity, Kiro, Pi, Muse Code, fx, and any [ACP](./docs/user/providers-acp.md) agent. If an agent is set up on your computer, K9 Code can control it.

## What you get

- **Your subscriptions.** K9 Code does not resell tokens. It drives the agents you are already signed in to.
- **Every agent in one place.** Change models in the middle of a thread. Let Claude hand a task to Codex.
- **Desktop and web.** One server powers the desktop app and the web UI, keeping every view in sync.
- **Remote ready.** Run agents on any machine and connect over your local network, Tailscale, or a [remote relay](./docs/user/remote-access.md).
- **Git built in.** Each thread can work in its own worktree. Review the diff, then commit, push, and open a pull request with one button.
- **Fast.** Built for low latency with a lightweight WebSocket server and responsive UI.
- **Open.** Source code is MIT licensed (see [License and attribution](#license-and-attribution)).

## Install

### Windows desktop app

Download the latest Windows installer (`K9-Code-<version>-x64.exe`) from [GitHub Releases](https://github.com/2-sa/K9code/releases).

Windows installers are built and published through the [`K9 Windows Release`](./.github/workflows/k9-windows-release.yml) workflow, and installed builds check `2-sa/K9code` releases for updates.

### Command line

Install the CLI (`t3`) from `2-sa/K9code` release archives, then run `t3` to start the server and open the web app.

On Windows, in PowerShell:

```powershell
irm https://raw.githubusercontent.com/2-sa/K9code/main/scripts/install.ps1 | iex
```

On macOS or Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/2-sa/K9code/main/scripts/install.sh | sh
```

### Sign in to an agent

K9 Code needs at least one agent that is installed and signed in. For example, install [Claude Code](https://claude.com/product/claude-code) and run `claude auth login`, or install [Codex CLI](https://developers.openai.com/codex/cli) and run `codex login`.

See [Provider setup](./docs/user/install.md#providers) for per-agent setup steps.

## Build from source

Clone the repository and run the development environment locally with [Vite+](https://viteplus.dev):

```bash
git clone https://github.com/2-sa/K9code.git
cd K9code
vp i
vp run dev
```

See the [development runbook](./docs/operations/00_development.md#first-checkout) for prerequisites and setup details, and the [architecture overview](./docs/internals/01_architecture.md) for how K9 Code is structured.

## Documentation

- [Install and first run](./docs/user/install.md)
- [Remote access from another machine](./docs/user/remote-access.md)
- [Permission modes](./docs/user/permission-modes.md)
- [Source control](./docs/user/source-control.md)
- [Connect outside agents over MCP](./docs/user/outside-agents.md)
- [FAQ](./docs/user/faq.md)

[All docs](./docs/README.md) has the full list.

## License and attribution

The source code in this repository is licensed under the [MIT License](./LICENSE).

K9 Code is an **unofficial fork** based on the MIT-licensed [T3 Code](https://github.com/pingdotgg/t3code) source code and is **not affiliated with, endorsed by, or maintained by T3 Tools, Inc.** The MIT License applies only to the source code and does not grant any rights to T3 Tools, Inc.'s trademarks, logos, or branding. See [TRADEMARK.md](./TRADEMARK.md) for upstream trademark terms.
