---
title: "Rog-map: An efficient robocentric occupancy grid map for large-scene and
  high-resolution lidar-based motion planning"
year: 2024
venue: In IROS 2024
authors:
  - Yunfan Ren
  - Yixi Cai
  - Fangcheng Zhu
  - Siqi Liang
  - Fu Zhang
summary: Recent advances in LiDAR technology have opened up new possibilities
  for robotic navigation. Given the widespread use of occupancy grid maps (OGMs)
  in robotic motion planning, this paper aims to address the challenges of
  integrating LiDAR with OGMs. To this end, we propose ROG...
image: /content-assets/publications/iros2024-rog/featured.png
assets:
  - /content-assets/publications/iros2024-rog/cite.bib
  - /content-assets/publications/iros2024-rog/featured.png
links:
  - label: PDF
    url: /papers/2024iros_rog.pdf
  - label: Code
    url: https://github.com/hku-mars/ROG-Map
  - label: Video
    url: https://youtu.be/eDkwGXCea7w?si=EYx1zsZteYjyAkiR
  - label: Source
    url: https://ieeexplore.ieee.org/document/10802303
featured: false
---

Recent advances in LiDAR technology have opened up new possibilities for robotic navigation. Given the widespread use of occupancy grid maps (OGMs) in robotic motion planning, this paper aims to address the challenges of integrating LiDAR with OGMs. To this end, we propose ROG-Map, a uniform grid-based OGM that maintains a local map moving along with the robot to enable efficient map operation and reduce memory costs for large-scene autonomous flight. Moreover, we present a novel incremental obstacle inflation method that significantly reduces the computational cost of inflation. The proposed method outperforms state-of-the-art methods on various public datasets. To demonstrate the effectiveness and efficiency of ROG-Map, we integrate it into a complete quadrotor system and perform autonomous flights against both small obstacles and large-scale scenes. During real-world flight tests with a 0.05 m resolution local map and 30 m×30 m×6 m local map size, ROG-Map takes only 29.8 % of frame time on average to update the map at a frame rate of 50 Hz (i.e., 5.96 ms in 20 ms), including 0.33 % (i.e., 0.66 ms) to perform obstacle inflation, which represents only half of the total map updating time when compared to the state-of-the-art baseline. We release ROG-Map as an open-source ROS package1 to promote the development of LiDAR-based motion planning.
