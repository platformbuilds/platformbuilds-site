---
layout: page
title: "Resources"
subtitle: "Platform engineering insights, guides, and tools to help your teams build better systems"
---

## Latest Blog Posts

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">

{% for post in site.posts limit:6 %}
<article class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
  <div class="p-6">
    <div class="flex items-center text-sm text-gray-500 mb-3">
      <time datetime="{{ post.date | date_to_xmlschema }}">
        {{ post.date | date: "%B %d, %Y" }}
      </time>
      {% if post.categories %}
      <span class="mx-2">•</span>
      {% for category in post.categories limit:1 %}
      <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{{ category }}</span>
      {% endfor %}
      {% endif %}
    </div>
    
    <h3 class="text-xl font-bold text-gray-900 mb-3">
      <a href="{{ post.url | relative_url }}" class="hover:text-blue-600 transition-colors">
        {{ post.title }}
      </a>
    </h3>
    
    {% if post.excerpt %}
    <p class="text-gray-600 mb-4 line-clamp-3">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    {% endif %}
    
    <a href="{{ post.url | relative_url }}" class="text-blue-600 font-medium hover:text-blue-800 transition-colors">
      Read More <i class="fas fa-arrow-right ml-1"></i>
    </a>
  </div>
</article>
{% endfor %}

</div>

<div class="text-center">
  <a href="/blog/" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
    View All Posts
  </a>
</div>

---

## Platform Engineering Guides

### Getting Started
- **[Platform Engineering 101](/guides/platform-engineering-101/)** - Introduction to platform engineering concepts and benefits
- **[Building Your First Platform Team](/guides/building-platform-team/)** - How to structure and organize platform engineering teams
- **[Developer Experience Metrics](/guides/developer-experience-metrics/)** - Measuring the success of your developer platform

### Technical Implementation
- **[Kubernetes Platform Patterns](/guides/kubernetes-platform-patterns/)** - Best practices for building platforms on Kubernetes
- **[CI/CD Pipeline Architecture](/guides/cicd-pipeline-architecture/)** - Designing scalable deployment pipelines
- **[Infrastructure as Code Strategies](/guides/iac-strategies/)** - Terraform and other IaC best practices

### Site Reliability Engineering
- **[SLI/SLO Implementation Guide](/guides/sli-slo-implementation/)** - Setting up effective reliability targets
- **[Incident Response Playbooks](/guides/incident-response/)** - Building efficient incident management processes
- **[Chaos Engineering Practices](/guides/chaos-engineering/)** - Proactive reliability testing strategies

### Observability & Monitoring
- **[OpenTelemetry Implementation](/guides/opentelemetry-implementation/)** - Complete observability setup guide
- **[Monitoring Best Practices](/guides/monitoring-best-practices/)** - Effective monitoring and alerting strategies
- **[Performance Optimization](/guides/performance-optimization/)** - Application and infrastructure tuning

---

## Tools & Templates

### Infrastructure Templates
- **[AWS Landing Zone Template](https://github.com/platformbuilds-org/aws-landing-zone)** - Production-ready AWS multi-account setup
- **[Kubernetes Platform Starter](https://github.com/platformbuilds-org/k8s-platform-starter)** - Bootstrap a Kubernetes-based developer platform
- **[Terraform Modules](https://github.com/platformbuilds-org/terraform-modules)** - Reusable infrastructure components

### CI/CD Templates
- **[GitLab CI Templates](https://github.com/platformbuilds-org/gitlab-ci-templates)** - Standardized pipeline configurations
- **[GitHub Actions Workflows](https://github.com/platformbuilds-org/github-actions-workflows)** - Reusable workflow templates
- **[ArgoCD Applications](https://github.com/platformbuilds-org/argocd-applications)** - GitOps deployment patterns

### Observability Configurations
- **[Grafana Dashboards](https://github.com/platformbuilds-org/grafana-dashboards)** - Platform and application monitoring dashboards
- **[Prometheus Rules](https://github.com/platformbuilds-org/prometheus-rules)** - Alerting rules and recording rules
- **[OpenTelemetry Configs](https://github.com/platformbuilds-org/otel-configs)** - Collector and instrumentation configurations

---

## Whitepapers & Research

### Platform Engineering
- **[The State of Platform Engineering 2024](/whitepapers/state-of-platform-engineering-2024.pdf)** - Industry trends and adoption patterns
- **[ROI of Platform Engineering](/whitepapers/roi-platform-engineering.pdf)** - Measuring business impact and value
- **[Platform Team Operating Models](/whitepapers/platform-team-operating-models.pdf)** - Organizational structures and best practices

### Site Reliability Engineering
- **[SRE Maturity Model](/whitepapers/sre-maturity-model.pdf)** - Assessing and improving SRE capabilities
- **[Error Budget Implementation](/whitepapers/error-budget-implementation.pdf)** - Balancing reliability and velocity
- **[Incident Management Excellence](/whitepapers/incident-management-excellence.pdf)** - Building world-class incident response

### Cloud Native
- **[Kubernetes Security Best Practices](/whitepapers/kubernetes-security.pdf)** - Comprehensive security guide
- **[Multi-Cloud Platform Strategies](/whitepapers/multi-cloud-platforms.pdf)** - Avoiding vendor lock-in
- **[Cost Optimization for Cloud Platforms](/whitepapers/cloud-cost-optimization.pdf)** - FinOps for platform teams

---

## Webinars & Events

### Upcoming Webinars
- **December 15, 2025**: "Building Self-Service Platforms with Kubernetes"
- **January 20, 2026**: "SRE Practices for Startups"
- **February 10, 2026**: "OpenTelemetry Implementation Workshop"

### Conference Talks
- **KubeCon 2024**: "Platform Engineering Patterns for Enterprise Scale"
- **SREcon 2024**: "Implementing Error Budgets That Actually Work"
- **PlatformCon 2024**: "Developer Experience: Beyond Just Tools"

[Subscribe to our newsletter](/newsletter/) to get notified about upcoming events and new resources.

---

## Community

### Open Source Projects
We actively contribute to and maintain several open-source projects:

- **[Platform Starter Kit](https://github.com/platformbuilds-org/platform-starter-kit)** - Opinionated starter for building internal developer platforms
- **[SRE Toolkit](https://github.com/platformbuilds-org/sre-toolkit)** - Collection of SRE tools and scripts
- **[Observability Stack](https://github.com/platformbuilds-org/observability-stack)** - Complete observability solution with Helm charts

### Platform Engineering Slack
Join our Slack community to connect with other platform engineers, share knowledge, and get help with your implementations.

[Join Platform Engineering Slack](https://platformbuilds-community.slack.com)

### Monthly Meetups
We host monthly virtual meetups covering platform engineering topics:
- Technical deep-dives
- Case study presentations  
- Tool demonstrations
- Q&A with experts

[Join our next meetup](https://www.meetup.com/platform-engineering-meetup/)

---

## Newsletter

Stay up to date with the latest platform engineering trends, tools, and best practices.

<div class="bg-blue-50 border border-blue-200 rounded-lg p-8 my-8">
<h3 class="text-2xl font-bold text-gray-900 mb-4">Platform Engineering Weekly</h3>
<p class="text-gray-600 mb-6">
Get curated platform engineering content, tools, and insights delivered to your inbox every week.
</p>
<form action="https://formspree.io/f/newsletter-signup" method="POST" class="flex flex-col sm:flex-row gap-4">
  <input type="email" name="email" placeholder="Enter your email" required
         class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
  <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
    Subscribe
  </button>
</form>
</div>

---

*Have a suggestion for new content or resources? [Contact us](/contact/) - we'd love to hear from you!*