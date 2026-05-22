---
title: Large-Scale Multi-Session Point-Cloud Map Merging
year: 2024
venue: RA-L
authors:
  - Hairuo Wei
  - Rundong Li
  - Yixi Cai
  - Chongjian Yuan
  - Yunfan Ren
  - Zuhao Zou
  - Huajie Wu
  - Chunran Zheng
  - Shunbo Zhou
  - Kaiwen Xue
  - Fu Zhang
summary: Autonomous flight for quadrotors in environments with suddenly
  appearing objects and disturbances still faces significant challenges. In this
  work, we propose an integrated planning and control framework called IPC.
  Specifically, we design a framework consisting of a lightweig...
image: /content-assets/publications/ral-2024-lamm/featured.png
assets:
  - /content-assets/publications/ral-2024-lamm/cite.bib
  - /content-assets/publications/ral-2024-lamm/featured.png
links:
  - label: PDF
    url: papers/2024ral_lamm.pdf
  - label: Code
    url: https://github.com/hku-mars/LAMM
  - label: Video
    url: https://youtu.be/X2WSILJe-Ew?si=xwzg6SsXvCMsoqPD
  - label: Source
    url: https://ieeexplore.ieee.org/document/10759717
featured: false
---

Autonomous flight for quadrotors in environments with suddenly appearing objects and disturbances still faces significant challenges. In this work, we propose an integrated planning and control framework called IPC. Specifically, we design a framework consisting of a lightweight frontend and an MPC backend. On the frontend, we employ the A* algorithm to generate the reference path on a local map. On the backend, we model the trajectory planning and control problem as a linear model predictive control (MPC) problem. In the MPC formulation, the quadrotor is modeled as a high-order integral system (a linear system) to follow the reference path from the frontend. We use a series of convex polyhedrons (i.e., Safe Flight Corridor, SFC) to represent the free space in the environment and employ the multiple hyperplanes of the polyhedrons as a linear inequality constraint of the MPC problem to ensure flight safety. In this way, the linear MPC generates control actions that strictly meet the safety constraints in a short time (2 - 3.5 ms). Then, the control actions of the linear MPC (i.e., jerk) are transformed to the actual control commands (i.e., angular velocity and throttle) through the differential flatness of the quadrotor. Since the MPC computes the control actions directly according to the obstacles and quadrotor's state at a rather high frequency (i.e., 100 Hz), it improves the quadrotor's response speed to dynamic obstacles and disturbance rejection ability to external disturbances. In simulation experiments involving avoiding a suddenly appearing object, our method outperforms state-of-the-art baselines in terms of success rate. Furthermore, we validate our method in real-world environments with dynamic objects and disturbances using a fully autonomous LiDAR-based quadrotor system, achieving autonomous navigation at velocities up to 5.86 m/s in dense forests. Our IPC is released as a ROS package on GitHub as open source software.
