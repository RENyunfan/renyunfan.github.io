---
title: Real-time Bandwidth-efficient Occupancy Grid Map Synchronization for
  Multi-Robot Systems
year: 2024
venue: In IROS 2024
authors:
  - Liuyu Shi
  - Longji Yin
  - Fanze Kong
  - Yunfan Ren
  - Benxu Tang
  - Fu Zhang
summary: Robot swarms are increasingly being applied in various domains.
  However, due to the inherent limitation imposed by low real-time communication
  bandwidth, the synchronization of environmental information among multiple
  robots remains a persistent and challenging problem in prac...
image: /content-assets/publications/iros2024-ogm-sync/featured.png
assets:
  - /content-assets/publications/iros2024-ogm-sync/cite.bib
  - /content-assets/publications/iros2024-ogm-sync/featured.png
links:
  - label: PDF
    url: /papers/2024iros_rog.pdf
  - label: Code
    url: https://github.com/hku-mars/ROG-Map
  - label: Video
    url: https://youtu.be/ZQXo5RkOfS4?si=Tx3m6gi_K-NENksM
  - label: Source
    url: https://ieeexplore.ieee.org/document/10802281
featured: false
---

Robot swarms are increasingly being applied in various domains. However, due to the inherent limitation imposed by low real-time communication bandwidth, the synchronization of environmental information among multiple robots remains a persistent and challenging problem in practical applications. In response to this challenge, we introduce a comprehensive framework for synchronizing occupancy grid maps (OGMs) in practical multi-robot systems that operate under communication bandwidth constraints. In our research, we elaborately design the data structure of transmitted local OGMs and employ the Hilbert space-filling curve for voxel sorting. By adopting this approach, data redundancy is effectively increased, resulting in lower information entropy for compression and significantly reducing the volume of communication data. Finally, our framework outperforms the benchmark method by reducing the average and maximum bandwidth usage by more than 10 times in high-resolution scenarios. Moreover, our method has been successfully applied in the multi-UAV autonomous navigation application, demonstrating its real-time and bandwidth-efficient nature, as well as its practical value.
