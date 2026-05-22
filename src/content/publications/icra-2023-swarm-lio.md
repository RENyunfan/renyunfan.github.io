---
title: "Swarm-LIO: Decentralized Swarm LiDAR-inertial Odometry"
year: 2023
venue: In ICRA 2023
authors:
  - Fangcheng Zhu
  - Yunfan Ren
  - Fanze Kong
  - Huajie Wu
  - Siqi Liang
  - Nan Chen
  - Wei Xu
  - Fu Zhang
summary: Accurate self and relative state estimation are the critical
  preconditions for completing swarm tasks, e.g., collaborative autonomous
  exploration, target tracking, search and rescue. This paper proposes Swarm-LIO
  - a fully decentralized state estimation method for aerial swarm...
image: /content-assets/publications/icra-2023-swarm-lio/featured.png
assets:
  - /content-assets/publications/icra-2023-swarm-lio/cite.bib
  - /content-assets/publications/icra-2023-swarm-lio/featured.png
links:
  - label: PDF
    url: /papers/2023icra_slio1.pdf
  - label: Video
    url: https://youtu.be/MxeoKVXrmEs?si=iLEiZoychOpVtWgY
  - label: Source
    url: https://ieeexplore.ieee.org/document/10161355
featured: false
---

Accurate self and relative state estimation are the critical preconditions for completing swarm tasks, e.g., collaborative autonomous exploration, target tracking, search and rescue. This paper proposes Swarm-LIO - a fully decentralized state estimation method for aerial swarm systems, in which each drone performs precise ego-state estimation, exchanges ego-state and mutual observation information by wireless communication, and estimates relative state with respect to (w.r.t.) the rest of UAVs, all in real-time and only based on LiDAR-inertial measurements. A novel 3D LiDAR-based drone detection, identification and tracking method is proposed to obtain observations of teammate drones. The mutual observation measurements are then tightly-coupled with IMU and LiDAR measurements to perform real-time and accurate estimation of ego-state and relative state jointly. Extensive real-world experiments show the broad adaptability to complicated scenarios, including GPS-denied scenes, degenerate scenes for camera (dark night) or LiDAR (facing a single wall). Compared with ground-truth provided by motion capture system, the result shows the centimeter-level localization accuracy which outperforms other state-of-the-art LiDAR-inertial odometry for single UAV system.
