---
layout: default
title: "Cosmolet"
slug: "cosmolet"
icon: "fas fa-network-wired"
color: "green"
order: 2
featured: true
excerpt: "A network fusion layer bridging Kubernetes and Bare Metal Networks. Simplifies cross-domain connectivity, BGP-based routing, and multi-cluster networking."
---

<section class="section" style="background-color: var(--bg-secondary);">
    <div class="container">
        <h2 style="text-align: center;">Network Fusion Layer for Modern Infrastructure</h2>
        <p style="text-align: center;">Cosmolet is a L3 Kubernetes Load Balancer fusing the network between Kubernetes CNI and bare metal networks truly vendor-agnostic way. It simplifies cross-domain connectivity, BGP-based routing, and multi-cluster networking for high-performance data centers, providing a horizontal scaling solution at Network Level</p>
        <div class="buttons" style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
            <a href="https://github.com/platformbuilds/cosmolet" target="_blank" class="btn btn-primary btn-header" style="margin-right: 10px; filter: grayscale(100%); min-width: 160px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 8px;">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                GitHub
            </a>
            <a href="/contact/" class="btn btn-primary btn-header" style="min-width: 160px;">
                Get Started
            </a>
        </div>
    </div>
</section>

<section class="section" style="background-color: var(--bg-secondary);">
    <div class="container">
        <img src="/assets/images/cosmolet.png" alt="Cosmolet Architecture Diagram" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
    </div>
</section>

<section class="section">
    <div class="container">
    <h3>Core Capabilities</h3>
        <div class="grid grid-2">
            <div class="card">
                <h4>BGP Service Controller</h4>
                <ul>
                <li>Native Kubernetes BGP integration</li>
                <li>Automatic service advertisement</li>
                <li>Vendor Agnostic - Chose your network and CNI</li>
                <li>Route health monitoring</li>
                </ul>
            </div>
            <div class="card">
                <h4>Cross-Domain Connectivity</h4>
                <ul>
                <li>Bridge Kubernetes and bare metal networks</li>
                <li>Seamless service discovery across domains</li>
                <li>Unified networking policies</li>
                <li>Multi-protocol support</li>
                </ul>
            </div>
            <div class="card">
                <h4>Multi-Cluster Networking</h4>
                <ul>
                <li>Cluster federation support</li>
                <li>Service mesh integration</li>
                <li>Global load balancing</li>
                <li>Disaster recovery automation</li>
                </ul>
            </div>
            <div class="card">
                <h4>High-Performance Routing</h4>
                <ul>
                <li>Optimized for data center workloads</li>
                <li>Low-latency path selection(BGP tuning)</li>
                <li>Traffic engineering capabilities</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="section" style="background-color: var(--bg-secondary);">
    <div class="container">
    <h3>Architecture</h3>
        <div class="grid grid-3">
            <div class="card">
                <h4>Control Plane</h4>
                <ul>
                <li>Kubernetes-native controller</li>
                <li>BGP speaker implementation</li>
                <li>Service mesh integration</li>
                <li>Policy engine</li>
                </ul>
            </div>
            <div class="card">
                <h4>Data Plane</h4>
                <ul>
                <li>High-performance packet forwarding</li>
                <li>ECMP (Equal Cost Multi-Path) routing</li>
                <li>Health check integration</li>
                <li>Metrics and monitoring</li>
                </ul>
            </div>
            <div class="card">
                <h4>Management Plane</h4>
                <ul>
                <li>Web-based dashboard</li>
                <li>CLI tools for automation</li>
                <li>API for programmatic access</li>
                <li>Integration with GitOps workflows</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
    <h3>Key Features</h3>
        <div class="grid grid-2">
            <div class="card">
                <h4>Kubernetes Integration</h4>
                <ul>
                <li>Kube-Native - No CRDs</li>
                <li>Helm chart deployment</li>
                <li>RBAC security model</li>
                </ul>
            </div>
            <div class="card">
                <h4>BGP Protocol Support</h4>
                <ul>
                <li>BGP with IPv6 Unnumbered </li>
                <li>Route reflector support</li>
                <li>Graceful restart capabilities</li>
                <li>Advanced path attributes</li>
                </ul>
            </div>
            <div class="card">
                <h4>Network Policies</h4>
                <ul>
                <li>Kubernetes NetworkPolicy enforcement</li>
                <li>Any CNI, Any Bare Metal Network Fabric</li>
                <li>Microsegmentation support</li>
                <li>Zero-trust networking</li>
                </ul>
            </div>
            <div class="card">
                <h4>Observability</h4>
                <ul>
                <li>OpenTelemetry metrics export</li>
                <li>Distributed tracing support</li>
                <li>Real-time network topology</li>
                <li>Performance analytics</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="section" style="background-color: var(--bg-secondary);">
    <div class="container">
    <h3>Use Cases</h3>
        <div class="grid grid-2">
            <div class="card">
                <h4>Data Center Modernization</h4>
                <ul>
                <li>Legacy infrastructure integration</li>
                <li>Gradual Kubernetes adoption</li>
                <li>Hybrid cloud connectivity</li>
                <li>Service migration strategies</li>
                </ul>
            </div>
            <div class="card">
                <h4>Edge Computing</h4>
                <ul>
                <li>Edge-to-core connectivity</li>
                <li>Distributed application deployment</li>
                <li>Bandwidth optimization</li>
                <li>Resilient networking</li>
                </ul>
            </div>
            <div class="card">
                <h4>Service Mesh Enhancement</h4>
                <ul>
                <li>Chose any popular Service Mesh</li>
                <li>Service discovery enhancement</li>
                <li>Cross-cluster communication</li>
                </ul>
            </div>
            <div class="card">
                <h4>Network Automation</h4>
                <ul>
                <li>Infrastructure as Code (IaC)</li>
                <li>GitOps-driven networking</li>
                <li>Automated failover</li>
                <li>Self-healing networks</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
    <h3>Deployment Models</h3>
        <div class="grid grid-3">
            <div class="card">
                <h4>Standalone Deployment</h4>
                <ul>
                <li>Single cluster networking</li>
                <li>Basic BGP advertisement</li>
                <li>Simple service discovery</li>
                <li>Entry-level features</li>
                </ul>
            </div>
            <div class="card">
                <h4>Multi-Cluster Federation</h4>
                <ul>
                <li>Cross-cluster service mesh</li>
                <li>Disaster recovery</li>
                <li>Advanced traffic management</li>
                </ul>
            </div>
            <div class="card">
                <h4>Hybrid Infrastructure</h4>
                <ul>
                <li>Kubernetes and bare metal integration</li>
                <li>Legacy system connectivity</li>
                <li>Migration assistance</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="section" style="background-color: var(--bg-secondary);">
    <div class="container">
    <h3>Benefits</h3>
        <div class="grid grid-2">
            <div class="card">
                <h4>Simplified Operations</h4>
                <ul>
                <li>Reduced network complexity</li>
                <li>Automated configuration</li>
                <li>Self-healing capabilities</li>
                <li>Centralized management</li>
                </ul>
            </div>
            <div class="card">
                <h4>Enhanced Performance</h4>
                <ul>
                <li>Optimized routing decisions</li>
                <li>Low-latency communication</li>
                <li>High availability design</li>
                <li>Scalable architecture</li>
                </ul>
            </div>
            <div class="card">
                <h4>Cost Efficiency</h4>
                <ul>
                <li>Open source licensing</li>
                <li>Reduced vendor dependencies</li>
                <li>Efficient resource utilization</li>
                <li>Lower operational overhead</li>
                </ul>
            </div>
            <div class="card">
                <h4>Future-Proof Design</h4>
                <ul>
                <li>Cloud-native architecture</li>
                <li>Standards-based protocols</li>
                <li>Extensible framework</li>
                <li>Community-driven development</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
    <h3>Getting Started</h3>
        <div class="grid grid-3">
            <div class="card">
                <h4>Prerequisites</h4>
                <ul>
                <li>Kubernetes cluster (1.20+)</li>
                <li>BGP-capable network infrastructure</li>
                <li>Basic understanding of Kubernetes networking</li>
                <li>Administrative access to network devices</li>
                </ul>
            </div>
            <div class="card">
                <h4>Installation Steps</h4>
                <ol>
                <li>Clone the <a href="https://github.com/platformbuilds/cosmolet" target="_blank" rel="noopener">Cosmolet repository</a></li>
                <li>Review the deployment documentation</li>
                <li>Configure BGP peering relationships</li>
                <li>Deploy using Helm</li>
                <li>Verify connectivity and routing</li>
                </ol>
            </div>
            <div class="card">
                <h4>Configuration Examples</h4>
                <ul>
                <li>Basic service advertisement</li>
                <li>Multi-cluster setup</li>
                <li>Policy configuration</li>
                <li>Integration with service mesh</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="section" style="background-color: var(--bg-secondary);">
    <div class="container">
    <h3>Community and Support</h3>
        <div class="grid grid-3">
            <div class="card">
                <h4>Open Source Community</h4>
                <ul>
                <li>Apache 2.0 license</li>
                <li>CNCF Ready</li>
                <li>Vendor Agnostic</li>
                <li>Sovereign Ready</li>
                </ul>
            </div>
            <div class="card">
                <h4>Documentation</h4>
                <ul>
                <li>Comprehensive setup guides</li>
                <li>API reference documentation</li>
                <li>Best practices and tutorials</li>
                <li>Troubleshooting guides</li>
                </ul>
            </div>
            <div class="card">
                <h4>Integration Support</h4>
                <ul>
                <li>Kubernetes ecosystem compatibility</li>
                <li>Service mesh integration guidance</li>
                <li>Monitoring and observability setup using MiradorStack</li>
                </ul>
            </div>
        </div>
        <div class="buttons" style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
            <a href="https://github.com/platformbuilds/cosmolet" target="_blank" class="btn btn-primary btn-header" style="margin-right: 10px; filter: grayscale(100%); min-width: 160px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 8px;">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                GitHub
            </a>
            <a href="/contact/" class="btn btn-primary btn-header" style="min-width: 160px;">
                Get Started
            </a>
        </div>
    </div>
</section>
<div class="container">
    <p><em>All projects are Apache 2.0 licensed, ensuring complete freedom for network innovation.</em></p>
</div>