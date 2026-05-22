---
title: "Immesh: An immediate lidar localization and meshing framework"
year: 2023
venue: T-RO
authors:
  - Jiarong Lin
  - Chongjian Yuan
  - Yixi Cai
  - Haotian Li
  - Yunfan Ren
  - Yuying Zou
  - Xiaoping Hong
  - Fu Zhang
summary: In this article, we propose a novel light detection and ranging
  (LiDAR)(-inertial) odometry and mapping framework to achieve the goal of
  simultaneous localization and meshing in real time. This proposed framework
  termed immediately meshing (ImMesh) comprises four tightly-coupl...
image: /content-assets/publications/tro-2023-immesh/featured.png
assets:
  - /content-assets/publications/tro-2023-immesh/cite.bib
  - /content-assets/publications/tro-2023-immesh/featured.png
links:
  - label: PDF
    url: papers/2023tro_immesh.pdf
  - label: Code
    url: https://github.com/hku-mars/ImMesh
  - label: Video
    url: https://youtu.be/pzT2fMwz428?si=yNTlIdKfn6mDyaNq
  - label: Source
    url: https://ieeexplore.ieee.org/document/10304337
featured: false
---

In this article, we propose a novel light detection and ranging (LiDAR)(-inertial) odometry and mapping framework to achieve the goal of simultaneous localization and meshing in real time. This proposed framework termed immediately meshing (ImMesh) comprises four tightly-coupled modules - receiver, localization, meshing, and broadcaster. The localization module first utilizes the preprocessed sensor data from the receiver, estimates the sensor pose online by registering LiDAR scans to maps, and dynamically grows the map. Then, our meshing module takes the registered LiDAR scan for incrementally reconstructing the triangle mesh on the fly. Finally, the real-time odometry, map, and mesh are published via our broadcaster. The primary contribution of this work is the meshing module, which represents a scene by an efficient voxel structure, performs fast finding of voxels observed by new scans, and incrementally reconstructs triangle facets in each voxel. This voxel-wise meshing operation is delicately designed for the purpose of efficiency; it first performs a dimension reduction by projecting 3-D points to a 2-D local plane contained in the voxel, and then executes the meshing operation with pull, commit, and push steps for incremental reconstruction of triangle facets. To the best of authors' knowledge, this is the first work in the literature that can reconstruct online the triangle mesh of large-scale scenes, just relying on a standard CPU without GPU acceleration.
