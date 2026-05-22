---
title: "Fast-livo2: Fast, direct lidar-inertial-visual odometry"
year: 2024
venue: T-RO
authors:
  - Chunran Zheng
  - Wei Xu
  - Zuhao Zou
  - Tong Hua
  - Chongjian Yuan
  - Dongjiao He
  - Bingyang Zhou
  - Zheng Liu
  - Jiarong Lin
  - Fangcheng Zhu
  - Yunfan Ren
  - Rong Wang
  - Fanle Meng
  - Fu Zhang
summary: Fast, direct and tightly-coupled LiDAR-inertial-visual odometry.
image: /content-assets/publications/tro-2024-fast-livo2/featured.png
assets:
  - /content-assets/publications/tro-2024-fast-livo2/cite.bib
  - /content-assets/publications/tro-2024-fast-livo2/featured.png
links:
  - label: PDF
    url: papers/2024tro_livo2.pdf
  - label: Code
    url: https://github.com/hku-mars/FAST-LIVO2
  - label: Video
    url: https://youtu.be/6dF2DzgbtlY?si=dxPe8-enE0nCtL5l
  - label: Source
    url: https://ieeexplore.ieee.org/document/10757429
featured: true
---

This paper presents FAST-LIVO2, a fast and direct LiDAR-inertial-visual odometry framework designed for accurate and robust state estimation in SLAM tasks, enabling real-time robotic applications. FAST-LIVO2 integrates IMU, LiDAR, and image data through an efficient error-state iterated Kalman filter (ESIKF). To address the dimensional mismatch between LiDAR and image measurements, we adopt a sequential update strategy. Efficiency is further enhanced using direct methods for LiDAR and visual data fusion - the LiDAR module registers raw points without extracting features, while the visual module minimizes photometric errors without relying on feature extraction. Both LiDAR and visual measurements are fused into a unified voxel map. The LiDAR module constructs the geometric structure, while the visual module links image patches to LiDAR points, enabling precise image alignment. Plane priors from LiDAR points improve alignment accuracy and are refined dynamically during the process. Additionally, an on-demand raycast operation and real-time image exposure estimation enhance robustness. Extensive experiments on benchmark and custom datasets demonstrate that FAST-LIVO2 outperforms state-of-the-art systems in accuracy, robustness, and efficiency. Key modules are validated, and we showcase three applications - UAV navigation highlighting real-time capabilities, airborne mapping demonstrating high accuracy, and 3D model rendering (mesh-based and NeRF-based) showcasing suitability for dense mapping. Code and datasets are open-sourced on GitHub to benefit the robotics community.
