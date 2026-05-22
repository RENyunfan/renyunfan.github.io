---
title: "MARSIM: A Light-Weight Point-Realistic Simulator for LiDAR-Based UAVs"
year: 2023
venue: RA-L
authors:
  - Fanze Kong
  - Xiyuan Liu
  - Benxu Tang
  - Jiarong Lin
  - Yunfan Ren
  - Yixi Cai
  - Fangcheng Zhu
  - Nan Chen
  - Fu Zhang
summary: The emergence of LiDAR sensors have brought new opportunities for
  autonomous unmanned aerial vehicles (UAVs) by advancing navigation safety and
  computation efficiency. Yet the successful developments of LiDAR-based UAVs
  must rely on extensive simulations. Existing simulators c...
image: /content-assets/publications/ral-2023-marsim/featured.png
assets:
  - /content-assets/publications/ral-2023-marsim/cite.bib
  - /content-assets/publications/ral-2023-marsim/featured.png
links:
  - label: PDF
    url: papers/2023ral_marsim.pdf
  - label: Code
    url: https://github.com/hku-mars/MARSIM
  - label: Video
    url: https://youtu.be/EZFxTkqqat4?si=-RXifLsumz_Ataqe
  - label: Source
    url: https://ieeexplore.ieee.org/abstract/document/10091117
featured: false
---

The emergence of LiDAR sensors have brought new opportunities for autonomous unmanned aerial vehicles (UAVs) by advancing navigation safety and computation efficiency. Yet the successful developments of LiDAR-based UAVs must rely on extensive simulations. Existing simulators can hardly perform simulations of real-world environments due to the requirements of dense mesh maps that are difficult to obtain. Therefore, we develop a point-realistic simulator of real-world scenes for LiDAR-based UAVs. The key idea is the underlying point rendering method, where we construct a depth image directly from the point cloud map and interpolate it to obtain realistic LiDAR point measurements. Our developed simulator is able to run on a light-weight computing platform and supports the simulation of LiDARs with different resolution and scanning patterns, dynamic obstacles, and multi-UAV systems. Developed in the ROS framework, the simulator can easily communicate with other key modules of an autonomous robot, such as perception, state estimation, planning, and control. Finally, the simulator provides 10 high-resolution point cloud maps of various real-world environments, including forests of different densities, historic building, office, parking garage, and various complex indoor environments. Evaluation results show that the developed simulator achieves superior performance in terms of time and memory consumption against Gazebo and that the simulated UAV flights highly match the actual one in real-world environments. We believe such a point-realistic and light-weight simulator is crucial to bridge the gap between UAV simulation and experiments and will significantly facilitate the research of LiDAR-based autonomous UAVs in the future.
