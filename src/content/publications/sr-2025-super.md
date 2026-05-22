---
title: Safety-assured High-speed Navigation for MAVs
year: 2025
venue: Science Robotics
authors:
  - Yunfan Ren
  - Fangcheng Zhu
  - et al.
summary: High-speed and safe autonomous navigation for MAVs in unknown
  environments with fully onboard LiDAR-centric sensing and computation to
  achieve high-speed flights over 20 m/s
image: /content-assets/publications/sr-2025-super/featured.png
assets:
  - /content-assets/publications/sr-2025-super/cite.bib
  - /content-assets/publications/sr-2025-super/featured.png
links:
  - label: PDF
    url: https://www.science.org/doi/10.1126/scirobotics.ado6187
  - label: Code
    url: https://github.com/hku-mars/SUPER
  - label: Video
    url: https://youtu.be/GPHuzG0ANmI?si=VdXA5hRcDOPL7MpA
  - label: Source
    url: https://www.science.org/doi/10.1126/scirobotics.ado6187
featured: true
---

Micro air vehicles (MAVs) capable of high-speed autonomous navigation in unknown environments have the potential to improve applications like search and rescue and disaster relief, where timely and safe navigation is critical. However, achieving autonomous, safe, and high-speed MAV navigation faces systematic challenges, necessitating reduced vehicle weight and size for high-speed maneuvering, strong sensing capability for detecting obstacles at a distance, and advanced planning and control algorithms maximizing flight speed while ensuring obstacle avoidance. Here, we present the safety-assured high-speed aerial robot (SUPER), a compact MAV with a 280-millimeter wheelbase and a thrust-to-weight ratio greater than 5.0, enabling agile flight in cluttered environments. SUPER uses a lightweight three-dimensional light detection and ranging (LIDAR) sensor for accurate, long-range obstacle detection. To ensure high-speed flight while maintaining safety, we introduced an efficient planning framework that directly plans trajectories using LIDAR point clouds. In each replanning cycle, two trajectories were generated. One in known free spaces to ensure safety and another in both known and unknown spaces to maximize speed. Compared with baseline methods, this framework reduced failure rates by 35.9 times while flying faster and with half the planning time. In real-world tests, SUPER achieved autonomous flights at speeds exceeding 20 meters per second, successfully avoiding thin obstacles and navigating narrow spaces. SUPER represents a milestone in autonomous MAV systems, bridging the gap from laboratory research to real-world applications.
