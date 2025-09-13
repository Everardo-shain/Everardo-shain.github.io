---
title: "Tomato Harvesting Robot"
date: 2022-02-16T08:06:25+06:00
description: Tomato Harvesting Robot project
menu:
  sidebar:
    name: Tomato Harvesting Robot
    identifier: tomato-harvesting-robot
    parent: projects
    weight: 70
hero: hero.png
tags:
- Automation
- Arduino
- UR10e
categories:
- Automation
---

## Overview
Project in collaboration with Mondragon Unibertsitatea, Tecnológico de Monterrey campuses Puebla and Queretaro. My team and I worked on the End-Effector Subsystem where we designed and built a 3D-printed prototype of a robot gripper capable of collecting tomatoes using as sensors and actuators a limit switch, a potentiometer and a stepper motor. I had the specific task of writing the code of the embedded system that controlled its movement using an Arduino UNO, and we also programmed an UR10e industrial robot to follow a certain trajectory, mounted the gripper and tested the whole system which successfully completed the tasks of collecting a tomato and placing it on a container. 

I improved my collaborative skills by working in person with my 4 teammates and by also being in touch with all the other teams from different campuses on their progress.

---

## Tools
### Hardware
- **Arduino UNO**: microcontroller board.
- **Potentiometer**: position sensor (gripper closed or opened).
- **Stepper motor**: gear movement.
- **UR10e**: robotic arm integration.
- **3D printing**: parts manufacturing
- **Gears**: motion transmission. 

### Software
- **Arduino**: programming language for embedded software development.
- **Arduino IDE**: software environment for writing and running Arduino code.
- **PolyScope X**: UR10e control.
- **SolidWorks**: 3D design.

---

## Objectives
- Design a mechanical assembly to do the task of clamping and cutting the vegetable from the stem. 
- Perform simulations of maximum applied force to detect weak points in parts and assembly. 
- Carry out the electrical design including sensors and actuators in the end-effector. 
- Manufacture the prototype using additive manufacturing. 
- Design control for the end-effector. 

---

## Video
{{< youtube NaoElE4skmY>}}

---

## Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; place-items: center;">
    {{< lightbox-img src="gallery/ur10e.png" alt="Grpper and UR10e assembly concept">}}
    {{< lightbox-img src="gallery/parts.png" alt="Gripper parts concept">}}
    {{< lightbox-img src="gallery/front.png" alt="Gripper front view">}}
    {{< lightbox-img src="gallery/side.png" alt="Gripper side view">}}
    {{< lightbox-img src="gallery/team.png" alt="Project team">}}
    {{< lightbox-img src="gallery/certificate.png" alt="Participation certificate">}}
</div>