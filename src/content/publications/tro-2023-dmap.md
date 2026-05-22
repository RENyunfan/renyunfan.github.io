---
title: Occupancy grid mapping without ray-casting for high-resolution lidar sensors
year: 2023
venue: T-RO
authors:
  - Yixi Cai
  - Fanze Kong
  - Yunfan Ren
  - Fangcheng Zhu
  - Jiarong Lin
  - Fu Zhang
summary: Occupancy mapping is a fundamental component of robotic systems to
  reason about the unknown and known regions of the environment. This article
  presents an efficient occupancy mapping framework for high-resolution light
  detection and ranging (LiDAR) sensors, termed D-Map. The f...
image: /content-assets/publications/tro-2023-dmap/featured.png
assets:
  - /content-assets/publications/tro-2023-dmap/cite.bib
  - /content-assets/publications/tro-2023-dmap/featured.png
links:
  - label: PDF
    url: papers/2023tro_dmap.pdf
  - label: Code
    url: https://github.com/hku-mars/D-Map
  - label: Video
    url: https://youtu.be/m5QQPbkYYnA?si=xjlbE7-TbINIqza9
  - label: Source
    url: https://ieeexplore.ieee.org/document/10286126
featured: false
---

Occupancy mapping is a fundamental component of robotic systems to reason about the unknown and known regions of the environment. This article presents an efficient occupancy mapping framework for high-resolution light detection and ranging (LiDAR) sensors, termed D-Map. The framework introduces three main novelties to address the computational efficiency challenges of occupancy mapping. First, we use a depth image to determine the occupancy state of regions instead of the traditional ray-casting method. Second, we introduce an efficient on-tree update strategy on a tree-based map structure. These two techniques avoid redundant visits to small cells, significantly reducing the number of cells to be updated. Third, we remove known cells from the map at each update by leveraging the low false alarm rate of LiDAR sensors. This approach not only enhances our framework's update efficiency by reducing map size but also endows it with an interesting decremental property, which we have named D-Map. To support our design, we provide theoretical analyzes of the accuracy of the depth image projection and time complexity of occupancy updates. Furthermore, we conduct extensive benchmark experiments on various LiDAR sensors in both public and private datasets. Our framework demonstrates superior efficiency in comparison with other state-of-the-art methods while maintaining comparable mapping accuracy and high memory efficiency. We demonstrate two real-world applications of D-Map for real-time occupancy mapping on a handheld device and an aerial platform carrying a high-resolution LiDAR.
