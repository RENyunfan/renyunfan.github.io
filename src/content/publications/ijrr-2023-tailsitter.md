---
title: Trajectory Generation and Tracking Control for Aggressive Tail-Sitter Flights
year: 2023
venue: IJRR
authors:
  - Guozheng Lu
  - Yixi Cai
  - Nan Cheng
  - Fanze Kong
  - Yunfan Ren
  - Fu Zhang
summary: We address the theoretical and practical problems related to the
  trajectory generation and tracking control of tail-sitter UAVs. Theoretically,
  we focus on the differential flatness property with full exploitation of
  actual UAV aerodynamic models, which lays a foundation for g...
image: /content-assets/publications/ijrr-2023-tailsitter/featured.png
assets:
  - /content-assets/publications/ijrr-2023-tailsitter/cite.bib
  - /content-assets/publications/ijrr-2023-tailsitter/featured.png
links:
  - label: PDF
    url: papers/2023ijrr_tail.pdf
  - label: Video
    url: https://youtu.be/2x_bLbVuyrk?si=annpTouL_Km7x2es
  - label: Source
    url: https://journals.sagepub.com/doi/abs/10.1177/02783649231207655
featured: false
---

We address the theoretical and practical problems related to the trajectory generation and tracking control of tail-sitter UAVs. Theoretically, we focus on the differential flatness property with full exploitation of actual UAV aerodynamic models, which lays a foundation for generating dynamically feasible trajectory and achieving high-performance tracking control. We have found that a tail-sitter is differentially flat with accurate (not simplified) aerodynamic models within the entire flight envelope, by specifying coordinate flight condition and choosing the vehicle position as the flat output. This fundamental property allows us to fully exploit the high-fidelity aerodynamic models in the trajectory planning and tracking control to achieve accurate tail-sitter flights. Particularly, an optimization-based trajectory planner for tail-sitters is proposed to design high-quality, smooth trajectories with consideration of kinodynamic constraints, singularity-free constraints, and actuator saturation. The planned trajectory of flat output is transformed into state trajectory in real time with optional consideration of wind in environments. To track the state trajectory, a global, singularity-free, and minimally parameterized on-manifold MPC is developed, which fully leverages the accurate aerodynamic model to achieve high-accuracy trajectory tracking within the whole flight envelope. The proposed algorithms are implemented on our quadrotor tail-sitter prototype, “Hong Hu,” and their effectiveness are demonstrated through extensive real-world experiments in both indoor and outdoor field tests, including agile SE(3) flight through consecutive narrow windows requiring specific attitude and with speed up to 10 m/s, typical tail-sitter maneuvers (transition, level flight, and loiter) with speed up to 20 m/s, and extremely aggressive aerobatic maneuvers (Wingover, Loop, Vertical Eight, and Cuban Eight) with acceleration up to 2.5 g. The video demonstration is available at https://youtu.be/2x_bLbVuyrk?si=annpTouL_Km7x2es.
