import Link from 'next/link';

const sections = [
  {
    title: 'Linux',
    href: '/docs/linux',
    description: 'Commands, admin, and shell scripting',
  },
  {
    title: 'Networking',
    href: '/docs/networking',
    description: 'OSI/TCP-IP, VPC, DNS, and routing',
  },
  {
    title: 'AWS',
    href: '/docs/aws',
    description: 'IAM, compute, storage, data, and AI',
  },
  {
    title: 'Azure',
    href: '/docs/azure',
    description: 'Azure cloud and Azure DevOps',
  },
  {
    title: 'GCP',
    href: '/docs/gcp',
    description: 'IAM, Compute, networking, and GKE',
  },
  {
    title: 'DevOps',
    href: '/docs/devops',
    description: 'Git, Jenkins, Docker, Terraform',
  },
  {
    title: 'Kubernetes',
    href: '/docs/kubernetes',
    description: 'Architecture, workloads, and ops',
  },
  {
    title: 'DevSecOps',
    href: '/docs/devsecops',
    description: 'OWASP, SAST/DAST, and hardening',
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-1 flex-col justify-center gap-10 px-6 py-16">
      <div className="space-y-4 text-center">
        <p className="text-fd-muted-foreground text-sm tracking-wide uppercase">
          Titanium Plus curriculum notes
        </p>
        <h1 className="text-4xl font-bold tracking-tight">CloudOps Docs</h1>
        <p className="text-fd-muted-foreground mx-auto max-w-2xl text-lg">
          Dummy documentation for Cloud, DevOps, and AI topics — Linux through
          DevSecOps — with interactive MDX tabs and callouts.
        </p>
        <Link
          href="/docs/linux"
          className="bg-fd-primary text-fd-primary-foreground inline-flex rounded-full px-5 py-2.5 text-sm font-medium"
        >
          Open docs
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="hover:bg-fd-accent border-fd-border rounded-xl border p-5 text-left transition-colors"
          >
            <h2 className="font-semibold">{section.title}</h2>
            <p className="text-fd-muted-foreground mt-1 text-sm">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
