---
title: "Swarm-LIO2: Decentralized Efficient LiDAR-Inertial Odometry for Aerial
  Swarm Systems"
year: 2024
venue: T-RO
authors:
  - Fangcheng Zhu
  - Yunfan Ren
  - Longji Yin
  - Fanze Kong
  - Qingbo Liu
  - Ruize Xue
  - Wenyi Liu
  - Yixi Cai
  - Guozheng Lu
  - Haotian Li
  - Fu Zhang
summary: Decentralized, robust and efficient LiDAR-inertial odometry for a swarm
  of aerial robots with centimeter-level accuracy/
image: /content-assets/publications/tro-2024-swarm-lio2/featured.png
assets:
  - /content-assets/publications/tro-2024-swarm-lio2/cite.bib
  - /content-assets/publications/tro-2024-swarm-lio2/featured.png
links:
  - label: PDF
    url: papers/2024tro_slio2
  - label: Code
    url: https://github.com/hku-mars/Swarm-LIO2
  - label: Video
    url: https://youtu.be/Q7cJ9iRhlrY?si=k5RKMNKniX-fK-Fp
  - label: Source
    url: https://ieeexplore.ieee.org/abstract/document/10816004
featured: true
---

Aerial swarm systems possess immense potential in various aspects, such as cooperative exploration, target tracking, and search and rescue. Efficient accurate self- and mutual state estimation are the critical preconditions for completing these swarm tasks, which remain challenging research topics. This article proposes Swarm-LIO2, a fully decentralized, plug-and-play, computationally efficient, and bandwidth-efficient light detection and ranging (LiDAR)-inertial odometry for aerial swarm systems. Swarm-LIO2 uses a decentralized plug-and-play network as the communication infrastructure. Only bandwidth-efficient and low-dimensional information is exchanged, including identity, ego state, mutual observation measurements, and global extrinsic transformations. To support the plug and play of new teammate participants, Swarm-LIO2 detects potential teammate autonomous aerial vehicles (AAVs) and initializes the temporal offset and global extrinsic transformation all automatically. To enhance the initialization efficiency, novel reflectivity-based AAV detection, trajectory matching, and factor graph optimization methods are proposed. For state estimation, Swarm-LIO2 fuses LiDAR, inertial measurement units, and mutual observation measurements within an efficient error state iterated Kalman filter (ESIKF) framework, with careful compensation of temporal delay and modeling of measurements to enhance the accuracy and consistency. Moreover, the proposed ESIKF framework leverages the global extrinsic for ego state estimation in the case of LiDAR degeneration or refines the global extrinsic along with the ego state estimation otherwise. To enhance the scalability, Swarm-LIO2 introduces a novel marginalization method in the ESIKF, which prevents the growth of computational time with swarm size. Extensive simulation and real-world experiments demonstrate the broad adaptability to large-scale aerial swarm systems and complicated scenarios, including GPS-denied scenes and degenerated scenes for cameras or LiDARs. The experimental results showcase the centimeter-level localization accuracy, which outperforms other state-of-the-art LiDAR-inertial odometry for a single-AAV system. Furthermore, diverse applications demonstrate the potential of Swarm-LIO2 to serve as a reliable infrastructure for various aerial swarm missions.
