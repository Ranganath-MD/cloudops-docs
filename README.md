# CloudOps Docs

Documentation site built with [Fumadocs](https://fumadocs.dev) and Next.js.

## Sections

- **Networking** — VPC, DNS, load balancing
- **AWS** — Compute and storage
- **DevOps** — GitOps and observability
- **Kubernetes** — Clusters and workloads

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and browse `/docs`.

## Content

MDX lives in `content/docs/<section>/`. Each section is a root folder (`"root": true` in `meta.json`) and appears as a header tab.
