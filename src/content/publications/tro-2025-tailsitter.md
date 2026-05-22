---
title: Autonomous Tail-Sitter Flights in Unknown Environments
year: 2025
venue: T-RO
authors:
  - Guozheng Lu
  - Yunfan Ren
  - et al.
summary: Maybe the first autonomous tailsitter eVTOL that can avoid obstacles in
  unknown environments with onboard sensing and computation and flying at a
  high-speed over 15 m/s.
image: /content-assets/publications/tro-2025-tailsitter/featured.png
assets:
  - /content-assets/publications/tro-2025-tailsitter/cite.bib
  - /content-assets/publications/tro-2025-tailsitter/featured.png
links:
  - label: PDF
    url: papers/2024tro_tail
  - label: Video
    url: https://youtu.be/OvqhlB2h3k8?si=W96YTWw1RMZVG83X
  - label: Source
    url: https://ieeexplore.ieee.org/abstract/document/10829730
featured: true
---

Trajectory generation for fully autonomous flights of tail-sitter unmanned aerial vehicles (UAVs) presents substantial challenges due to their highly nonlinear aerodynamics. In this article, we introduce, to the best of the authors' knowledge, the world's first fully autonomous tail-sitter UAV capable of high-speed navigation in unknown, cluttered environments. The UAV autonomy is enabled by cutting-edge technologies including LiDAR-based sensing, differential-flatness-based trajectory planning and control with purely onboard computation. In particular, we propose an optimization-based tail-sitter trajectory planning framework that generates high-speed, collision-free, and dynamically-feasible trajectories. To efficiently and reliably solve this nonlinear, constrained problem, we develop an efficient feasibility-assured solver, Efficient Feasibility-assured OPTimization solver (EFOPT), tailored for the online planning of tail-sitter UAVs. We conduct extensive simulation studies to benchmark EFOPT's superiority in planning tasks against conventional nonlinear programming solvers. We also demonstrate exhaustive experiments of aggressive autonomous flights with speeds up to 15 m/s in various real-world environments, including indoor laboratories, underground parking lots, and outdoor parks.
