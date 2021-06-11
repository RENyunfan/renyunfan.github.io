---
type: photo
title: SLAM-Based Binocular Camera Self-Calibration
date: 2020-05-15 15:45:20
category: Project
photos:
- https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/coordinate.png
- https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/slam3.png
- https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/SLAM1.png

tags:
- project
description:  SLAM-Based Binocular Camera Self-Calibration
---

# CS294-167 Final Project: SLAM-Based Binocular Camera Self-Calibration

> 	Yunfan Ren
> 	Harbin Institute of Technology
> 	Shenzhen, China
> 	renyunfan@berkeley.edu
> 	
> 	Wenzhe Tong
> 	Harbin Institute of Technology
> 	Weihai, China
> 	wenzhe.t99@berkeley.edu

# Abstract

The calibration problem of binocular camera is critical for its practical application, such as robotic and autopilot vehicles. However, most existing calibration methods are based on manual off-line algorithms for specific reference targets or pattern. And these methods cannot calibrate multi-view cameras with less overlap. So we propose a SLAM-based self-calibration method to achieve automatic and accurate calibration of the binocular camera extrinsic in a short period without auxiliary equipment and special calibration markers, assuming the intrinsic parameters of the left and right cameras are known in advance. The main contribution of this paper is to use the Simultaneous localization and mapping(SLAM) algorithm as our main tool for the calibration method. The method mainly consists of two parts: SLAM-based construction of 3D scene point map and camera trajectory and extrinsic recovery based on optimization. In the first part, we obtained the real-time pose of the left-eye and right-eye cameras through SLAM we implement ourselves. In the second part, extrinsic parameters are calibrated through the 3D trajectory of the two camera. We performed statistics on the respective poses of the two cameras at each moment in the entire calibration process, and obtained the final extrinsic of the binocular camera using the optimization method.

# Introduction

Binocular cameras have important applications in the fields of robots, drones, and autonomous driving due to their good bionic characteristics and simple structure. The baseline length of the binocular camera is an important performance indicator. Li.'s research\cite{binoculareerror} points out that the depth error of a binocular camera and the distance of the measured object is called a square ratio. Simply put, if there is a longer baseline, we can detect a larger range within a certain error range.  Therefore, in large scenes such as autonomous driving, we usually use two cameras and brackets of the same specification to form a large binocular camera. In this way, the camera calibration work can be hard.

Such problems often exist in large-scale binocular cameras: Binocular cameras often change due to temperature, vibration and other reasons. Therefore, university research teams, autonomous driving companies and the auto parts market industry must frequently re-calibrate the binocular platform to ensure the accuracy of the results. As we all know, the calibration and re-calibration of the drilling rig has always been a burden for each user, which requires professional knowledge, special equipment and a lot of working time \cite{errorcause}. Therefore, it is necessary to study an automatic, robust, real-time calibration algorithm without having to obtain information on the environment, personnel supervision, and auxiliary equipment in advance.

Due to these problems, we propose a SLAM-based multi-angle camera calibration method, which includes but is not limited to binocular cameras, and does not require initial relative positions between cameras.

# Overview

## 1) Get geometry information from SLAM algorithm

At first we do the SLAM-based construction of 3D scene point map and camera trajectory. We use OpenCV to get the ORB-feature from the scences.

![frature](https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/frature.png)

Then we use SLAM algorithm to get the 3D landmark map and cameral trajectory:

![flow](https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/flow.png)

We do the SLAM work for each of the 2 eyes and get 2 seperate 3D point map and cameral trajectory:

![slam3](https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/slam3.png)

The output of SLAM part is as follow

![SLAM1](https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/SLAM1.png)

## 2) Extrinsic recovery

When we get the 3D Map and camera trajectory, we first align the point cloud througn ICP algorithm.

![ICP](https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/ICP.png)

After alignment, the trajectory of the two camera is shown as follow

![image-20200618110303137](https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/image-20200618110303137.png)

Then we do the optimization algorithm

Firstly, need to define the coordinates and transformations in the motion of camera rig. 
As shown below ![coordinate](https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/coordinate.png)

the SLAM-world frame is left-eye(cam0) initial frame, denotes $l0$ frame. Also, the right-eye(cam1) initial frame denotes $r0$ frame. In the step $i$ of the motion, for left-eye frame and right-eye frame, we denote them as $li$ and $ri$ frame
$$
\begin{aligned}
            T^* &=\arg\min_ {T\in SE(3)} \sum_{i=0}^n ||G_{li}^{-1}TG_{ri} - T||_f^2 \\
            T^* &=   \begin{bmatrix}
                    R^* & t^*\\
                    0_{1\times3} & 1
                    \end{bmatrix}
            \end{aligned}
$$
Finally we get the optimal extrinsics.

# Results

![image-20200618110708540](https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/img/image-20200618110708540.png)

# See more

[PDF version](https://kevin-1257631984.cos.ap-guangzhou.myqcloud.com/paper/CS294_Final_Project.pdf)



