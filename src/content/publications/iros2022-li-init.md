---
title: Robust Real-time LiDAR-inertial Initialization
year: 2022
venue: In IROS 2022
authors:
  - Fangcheng Zhu
  - Yunfan Ren
  - Fu Zhang
summary: For most LiDAR-inertial odometry, accurate initial states, including
  temporal offset and extrinsic transfor-mation between LiDAR and 6-axis IMUs,
  play a significant role and are often considered as prerequisites. However,
  such information may not be always available in customi...
assets:
  - /content-assets/publications/iros2022-li-init/cite.bib
links:
  - label: PDF
    url: /papers/2022iros_li.pdf
  - label: Code
    url: https://github.com/hku-mars/LiDAR_IMU_Init
  - label: Video
    url: https://youtu.be/WiHgcPpKwvU?si=8vLJbw3QCuzzhf1E
featured: false
---

For most LiDAR-inertial odometry, accurate initial states, including temporal offset and extrinsic transfor-mation between LiDAR and 6-axis IMUs, play a significant role and are often considered as prerequisites. However, such information may not be always available in customized LiDAR-inertial systems. In this paper, we propose LI-Init - a full and real-time LiDAR-inertial system initialization process that calibrates the temporal offset and extrinsic parameter between LiDARs and IMUs, and also the gravity vector and IMU bias by aligning the state estimated from LiDAR measurements with that measured by IMU. We implement the proposed method as an initialization module, which can automatically detects the degree of excitation of the collected data and calibrate, on-the-fly, the temporal offset, extrinsic, gravity vector, and IMU bias, which are then used as high-quality initial state values for real-time LiDAR-inertial odometry systems. Experiments conducted with different types of LiDARs and LiDAR-inertial combinations show the robustness, adaptability and efficiency of our initialization method. The implementation of our LiDAR-inertial initialization procedure LI-Init and test data are open-sourced on Github11https://www.github.com/hku-mars/LiDAR IMU Init and also integrated into a state-of-the-art LiDAR-inertial odometry system FAST-LIO2.
