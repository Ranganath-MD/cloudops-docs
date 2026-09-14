---
name: cloud-devops-interview-docs
description: >-
  Creates focused, interview-ready documentation for one Cloud or DevOps topic.
  Use when the user asks for interview prep docs, revision notes, or topic
  documentation such as VPC, IAM, Docker, Kubernetes, CI/CD, Terraform, or
  similar AWS/Linux/DevOps subjects.
---

# Cloud and DevOps Interview Docs

Create **focused, interview-ready documentation** for the topic the user named.

Help the user: understand it, why it exists, how it works, how DevOps uses it, and how to answer interview questions. Use simple English. Stay concise. Skip unnecessary theory.

## Workflow

1. Identify the **one** requested topic.
2. Unless the user already named sections, ask which to include, then wait.
3. Write **one file** for that topic only. Generate **only selected sections**.
4. Do not generate a course, roadmap, prerequisites, or related-topic documents.

If the user already specified sections (e.g. "sections 1, 3 and 5"), generate those immediately.

Invalid section numbers: ask them to pick from 1–6.

## Section picker

Ask with this exact prompt when sections are not specified:

```text
Which sections would you like to include?

1. What Is It?
2. Why Do We Need It?
3. How Does It Work?
4. Real-World DevOps Example
5. Interview Questions & Answers
6. Quick Revision

Enter section numbers (e.g. 1,2,3,5,6) or "all".
```

| User says | Generate |
| --- | --- |
| `all` | Sections 1–6 |
| numbers, e.g. `1,2,3,5,6` | Only those numbers |
| `interview only` | 1, 2, 5, 6 |

Output one markdown file named after the topic (e.g. `vpc.md`). Place it next to similar docs if a path is obvious; otherwise ask once.

You may **mention** related ideas (subnet, CIDR, route table, IGW, NAT, security group) inside selected sections. Do not write separate docs for them.

## Sections

Use these headings. Do not add extra sections.

### 1. What Is It?

Simple definition, technical meaning when useful, a short analogy if it helps. No history.

Example: a VPC is a logically isolated virtual network in AWS where you deploy and control resources such as EC2 instances, load balancers, and databases.

### 2. Why Do We Need It?

Problem it solves, why it exists, why DevOps uses it, what breaks without it. Explain **why before how**.

### 3. How Does It Work?

Main components, how they interact, important flow, short step-by-step. Interview-useful detail only.

Small ASCII or Mermaid diagram only if it clarifies. Explain the diagram in one or two sentences.

```text
Internet
   |
   v
Load Balancer
   |
   +------> EC2 Instance
   |
   +------> EC2 Instance
              |
              v
           Database
```

### 4. Real-World DevOps Example

One practical production-style example (AWS, EC2, VPC, Docker, Kubernetes, CI/CD, Linux, load balancers, databases). Few commands, each explained briefly. No full lab unless asked.

### 5. Interview Questions & Answers

Most important section. Questions **about this topic only**.

Use categories that fit; do not force all of them:

- **Basic** — fundamentals
- **Practical** — real usage
- **Scenario-based** — troubleshooting, architecture, security, scale, production
- **Senior** — design, trade-offs, availability, reliability (when relevant)

Each answer: 2–5 sentences, spoken-interview style — direct, simple, correct, practical.

**Question: What is a VPC?**

**Answer:** A VPC is an isolated virtual network in AWS where we deploy resources such as EC2 instances, load balancers, and databases. It lets us control IP ranges, subnets, routing, and network access.

Cover questions like: what / why / how, where used, production use, components, similar-concept differences, trade-offs, troubleshooting, explaining it to another engineer.

### 6. Quick Revision

5–10 short bullets for last-minute review.

```text
- VPC = isolated virtual network in AWS
- Subnet = smaller network inside a VPC
- Route Table = controls where network traffic goes
- Internet Gateway = provides internet connectivity
- NAT Gateway = allows private resources to access the internet
- Security Group = stateful virtual firewall
```

## Style

- Short paragraphs. Practical examples. Tables when they help.
- Expand an acronym on first use: CI/CD means Continuous Integration and Continuous Delivery.
- Avoid repetition, complex English, huge command lists, textbook padding.
- Default length: concise to medium. Expand only if the user asks for detail, a deep dive, basics-from-scratch, or a full hands-on.

## AWS

If the user asks for AWS hands-on steps, always name the principal.

```text
Principal: IAM User

Why:
This is a normal AWS operation and does not require the root user.
```

For apps on EC2 calling AWS APIs:

```text
Principal: IAM Role attached to EC2

Why:
The application can use temporary credentials through the role
instead of storing AWS access keys on the server.
```

Prefer IAM users or roles. Do not recommend the root user for routine work.

## Goal

Understand the topic → understand its DevOps usage → answer interview questions confidently.
