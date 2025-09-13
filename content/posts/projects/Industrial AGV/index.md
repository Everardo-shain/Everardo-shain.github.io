---
title: "Industrial AGV"
date: 2022-12-05T08:06:25+06:00
description: Industrial AGV project
menu:
  sidebar:
    name: Industrial AGV
    identifier: industrial-agv
    parent: projects
    weight: 40
hero: hero.png
tags:
- Navigation
- Arduino
- ROS
categories:
- Control and Navigation
---

## Overview

This was a team project in which we upgraded an existing Ackerman vehicle by turning it into an Automated Guided Vehicle. This was achieved by using ROS as framework on a NVIDIA Jetson Xavier computer and with the implementation of navigation concepts such as mapping, path planning and motion control. As a result, we managed to navigate the AGV inside a closed environment by setting a goal position and avoiding collisions. 

My main role was as software developer, although I also contributed to hardware adaptations whenever we faced challenges translating our software output to the vehicle.

---

## Tools

### Hardware

- **RPLIDAR A3**: laser sensor for mapping and object detection.
- **NVIDIA Jetson Xavier**: main computer running all the software.
- **Arduino Mega 2560**: microcontroller board.
- **DC motors**: movement of the AGV steering and acceleration.
- **DC-DC converter modules**: DC motor and NVIDIA Jetson Xavier power supply.
- **5V Step-Down converter**: power supply for acceleration and steering H-bridges, relay module, and RC receiver.
- **RC controller**: controlling AGV in manual mode.

### Software
- **Python**: programming language for communication between TEB local planner output and Arduino IDE.
- **Arduino**: programming language for embedded software development.
- **Arduino IDE**: software environment for writing and running Arduino code.
- **ROS**: framework for robot communication.
- **Hector SLAM**: mapping of CIMA space.
- **GIMP**: map refinement and editing.
- **RViz**: visualization of map and robot navigation.
- **TEB local planner**: navigation algorithm.
- **SolidWorks**: CAD of RPLIDAR A3 and NVIDIA Jetson Xavier mounting bases.
- **Alltrax 39 Controller Pro**: traction motor controller.

---

## Key Improvements
- Damaged steering motor replacement.
- Electronic circuit organization.
- Attachment of the NVIDIA Jetson Xavier and RPLIDAR A3 to the AGV using custom laser-cut bases.
- Mapped an engineering laboratory called CIMA.
- Added the navigation system by using a RPLIDAR A3 and Hector SLAM.
- Added path planning with TEB local planner, with the desired linear and angular velocities as output.
- Added a toggle to switch between autonomous and manual mode with an RC controller in case human intervention was needed.

---

## Video
{{< youtube e6znDIl7ap0>}}

---

## Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; place-items: center;">
    {{< lightbox-img src="gallery/agv.png" alt="Front and back of the AGV">}}
    {{< lightbox-img src="gallery/circuit.png" alt="Electronic circuit">}}
    {{< lightbox-img src="gallery/frame-tree.png" alt="ROS frame tree">}}
    {{< lightbox-img src="gallery/map.png" alt="CIMA map">}}
    {{< lightbox-img src="gallery/path.png" alt="Sample path">}}
</div>