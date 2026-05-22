---
title: "Bubble Explorer: Fast UAV Exploration in Large-Scale and Cluttered
  3D-Environments Using Occlusion-Free Spheres"
year: 2023
venue: In IROS 2023
authors:
  - Benxu Tang
  - Yunfan Ren
  - Fangcheng Zhu
  - Rui He
  - Siqi Liang
  - Fanze Kong
  - Fu Zhang
summary: Autonomous exploration is a crucial aspect of robotics that has
  numerous applications. Most of the existing methods greedily choose goals that
  maximize immediate reward. This strategy is computationally efficient but
  insufficient for overall exploration efficiency. In recent y...
image: /content-assets/publications/iros2023-bubble-exp/featured.png
assets:
  - /content-assets/publications/iros2023-bubble-exp/cite.bib
  - /content-assets/publications/iros2023-bubble-exp/featured.png
links:
  - label: PDF
    url: /papers/2023iros_bubexp.pdf
  - label: Video
    url: https://www.youtube.com/watch?v=4FqgNSbrx04&ab_channel=MARSLABHKU
  - label: Source
    url: https://ieeexplore.ieee.org/abstract/document/10342348
featured: false
---

Autonomous exploration is a crucial aspect of robotics that has numerous applications. Most of the existing methods greedily choose goals that maximize immediate reward. This strategy is computationally efficient but insufficient for overall exploration efficiency. In recent years, some state-of-the-art methods are proposed, which generate a global coverage path and significantly improve overall exploration efficiency. However, global optimization produces high computational overhead, leading to low-frequency planner updates and inconsistent planning motion. In this work, we propose a novel method to support fast UAV exploration in large-scale and cluttered 3-D environments. We introduce a computationally low-cost viewpoints generation method using occlusion-free spheres. Additionally, we combine greedy strategy with global optimization, which considers both computational and exploration efficiency. We benchmark our method against state-of-the-art methods to showcase its superiority in terms of exploration efficiency and computational time. We conduct various real-world experiments to demonstrate the excellent performance of our method in large-scale and cluttered environments.
