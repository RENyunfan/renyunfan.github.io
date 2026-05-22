---
title: Online Whole-Body Motion Planning for Quadrotor using Multi-Resolution Search
year: 2023
venue: In ICRA 2023
authors:
  - Yunfan Ren
  - Siqi Liang
  - Fangcheng Zhu
  - Guozheng Lu
  - Fu Zhang
summary: In this paper, we address the problem of online quadrotor whole-body
  motion planning (SE(3) planning) in unknown and unstructured environments. We
  propose a novel multi-resolution search method, which discovers narrow areas
  requiring full pose planning and normal areas requiri...
image: /content-assets/publications/icra-2023-se3/featured.png
assets:
  - /content-assets/publications/icra-2023-se3/cite.bib
  - /content-assets/publications/icra-2023-se3/featured.png
links:
  - label: PDF
    url: /papers/2023icra_se3.pdf
  - label: Video
    url: https://youtu.be/0q5mA9vijMY?si=KeMCdYWJPCC8D0vC
  - label: Source
    url: https://ieeexplore.ieee.org/document/10160767
featured: true
---

In this paper, we address the problem of online quadrotor whole-body motion planning (SE(3) planning) in unknown and unstructured environments. We propose a novel multi-resolution search method, which discovers narrow areas requiring full pose planning and normal areas requiring only position planning. As a consequence, a quadrotor planning problem is decomposed into several SE(3) (if necessary) and R3 sub-problems. To fly through the discovered narrow areas, a carefully designed corridor generation strategy for narrow areas is proposed, which significantly increases the planning success rate. The overall problem decomposition and hierarchical planning framework substantially accelerate the planning process, making it possible to work online with fully onboard sensing and computation in unknown environments. Extensive simulation benchmark comparisons show that the proposed method is one to several orders of magnitude faster than the state-of-the-art methods in computation time while maintaining high planning success rate. The proposed method is finally integrated into a LiDAR-based autonomous quadrotor, and various real-world experiments in unknown and unstructured environments are conducted to demonstrate the outstanding performance of the proposed method.
