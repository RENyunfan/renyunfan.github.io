---
title: "Bubble planner: Planning high-speed smooth quadrotor trajectories using
  receding corridors"
year: 2022
venue: In IROS 2022
authors:
  - Yunfan Ren
  - Fangcheng Zhu, Liu Wenyi, Zhepei Wang, Yi Lin, Fei Gao, Fu Zhang.
summary: Quadrotors are agile platforms. With human experts, they can perform
  extremely high-speed flights in cluttered environments. However, fully
  autonomous flight at high speed remains a significant challenge. In this work,
  we propose a motion planning algorithm based on the corrid...
image: /content-assets/publications/iros2022-bubble/featured.png
assets:
  - /content-assets/publications/iros2022-bubble/2022iros_bubble.pdf
  - /content-assets/publications/iros2022-bubble/cite.bib
  - /content-assets/publications/iros2022-bubble/conference-paper.pdf
  - /content-assets/publications/iros2022-bubble/featured.png
links:
  - label: PDF
    url: /papers/2022iros_bubble.pdf
  - label: Video
    url: https://www.youtube.com/watch?v=GpATPwibJ1k&ab_channel=MARSLABHKU
featured: false
---

Quadrotors are agile platforms. With human experts, they can perform extremely high-speed flights in cluttered environments. However, fully autonomous flight at high speed remains a significant challenge. In this work, we propose a motion planning algorithm based on the corridor-constrained minimum control effort trajectory optimization (MINCO) framework. Specifically, we use a series of overlapping spheres to represent the free space of the environment and propose two novel designs that enable the algorithm to plan high-speed quadrotor trajectories in real-time. One is a sampling-based corridor generation method that generates spheres with large overlapped areas (hence overall corridor size) between two neighboring spheres. The second is a Receding Horizon Corridors (RHC) strategy, where part of the previously generated corridor is reused in each replan. Together, these two designs enlarge the corridor spaces in accordance with the quadrotor's current state and hence allow the quadrotor to maneuver at high speeds. We benchmark our algorithm against other state-of-the-art planning methods to show its superiority in simulation. Comprehensive ablation studies are also conducted to show the necessity of the two designs. The proposed method is finally evaluated on an autonomous LiDAR-navigated quadrotor UAV in woods environments, achieving flight speeds over 13.7 m/s without any prior map of the environment or external localization facility.
