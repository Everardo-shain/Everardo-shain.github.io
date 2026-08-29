---
title: "Next Best View | Master's Thesis"
date: 2026-07-31T08:06:25+06:00
description: Next Best View project
menu:
  sidebar:
    name: Next Best View
    identifier: next-best-view
    parent: projects
    weight: 10
hero: hero.png
tags:
- Optimization
- C
categories:
- Data and Optimization
---

## Overview
This study was made with the purpose of understanding the impact of the objective function and optimization methods on the Next Best View problem, which consists in finding the next position that the sensor or camera needs to take to scan an object or scenery in its totality. 

A simulated 5-Degree-of-Freedom mobile robot with a mounted simulated range sensor was used on a Virtual Reality Modeling Language environment, and the space discretization was made using a voxel map. For the objective function, two main factors were included: an area factor to make sure that the image taken by the sensor provides the best possible information, and a motion factor made up of distance and energy sub-factors to reduce the resources used by the robot, making multiple experiments on a laboratory scene to determine their best arrangement on the final objective function. Global optimization tasks such as a backstepping technique to escape local minima and a dynamic change in the objective function were implemented. The retrievement of the scene was made on an iterative process, with each iteration needing an optimization process for which three different methods were tested: Nelder-Mead, an Evolution Strategy, and Simulated Annealing. 

A set of experiments comparing the three methods in computational time and retrievement efficiency were made on three different environments with increasing difficulty to test their repeatability, with them being a laboratory model, a room with a cube and a pyramid inside it, and a study room with multiple furniture and windows.

A second study extended this work in two directions. First, the objective function was redesigned into a fully parametric multi-factor formulation by repeating the tuining process of each factor now using the optimal parameters of the two most effective optimization methods (Evolution Strategy and Simulated Annealing) identified in the first study. Second, since the optimization's decision variables (the sensor's position and orientation) are susceptible to odometric error in a future physical implementation, a robust optimization technique was introduced that evaluates candidate views not just at their nominal point but across a sampled neighborhood, favoring views whose performance remains stable under slight positioning error.

---

## Tools
- **C**: programming language.
- **GCC 4.2.4**: compiler.
- **Ubuntu 8.04**: Linux operating system.
- **VRML**: triangular mesh from input model.
- **LaTeX**: thesis technical writing.

---

## Objectives
- Build a principal area factor aiming at retrieving the model.
- Formulate a distance factor to reduce the total distance covered by the robot.
- Add an energy factor focused on optimizing the movements of the sensor.
- Consider a quality factor to improve the voxels mean quality.
- Find the best arrangement of this factors into a single objective function.
- Provide an algorithm that finds an optimal solution and minimizes computational time.

---

## Iterative Process

**Initial Steps**
The following steps are executed only once.

1. **Start**: Begin with an empty voxel map.
2. **Initialization**: Initialize the sensor at a starting position inside the scene.
3. **First Scan**: Take an initial range image and update the voxel map with this first set of data.

**Main Iteration Loop (Global optimization)**
The following steps are repeated until a stopping condition is met.

4. **Find Next View (Local optimization)**: Run an optimization process to determine the Next-Best-View for scanning.
5. **Scan and Update**: Move to the calculated Next-Best-View, take a new range image, and update the voxel map.
6. **Check Stopping Criteria**: Evaluate if the process should terminate when the scene is considered complete or a predefined limit for the number of views has been reached.
   - If NO, repeat the loop by returning to step 4.
   - If YES, exit the loop and proceed to the final step.
7. **Finish**: The process concludes, resulting in the final voxel map.

---

## Objective Function
Contains the following factors:
- **Area factor $f_{\text{A}}$**: aims at retrieving the model. Has a dynamic change of function during the simulation. *It is defined as the primary factor*.
- **Motion factor $f_{\text{M}}$**: reduce the robot´s resource consumption. *It is defined as the secondary factor, with both of its sub-factors having their own weights inside it*.
  - **Distance sub-factor $f_{\text{D}}$**: reduce the total distance covered by the robot.
  - **Energy sub-factor $f_{\text{E}}$**: aims at optimizing the movements of the sensor.
- **Quality factor $f_{\text{Q}}$**: improve the voxels mean quality. *After conducting several experiments, it was decided that the objective function should not include a quality factor*.

The final function is defined as:
$$
f = f_{\text{A}} \cdot f_{\text{M}}, \quad f_{\text{M}} = 0.7f_{\text{D}} + 0.3f_{\text{E}}
$$

---

## Optimization Algorithms
- Nelder-Mead algorithm:
  - Conventional method.
  - Local search without memory.
- (1+1)-ES: 
  - Metaheuristic.
  - Random strategy.
- Simulated annealing:
  - Metaheuristic.
  - Probabilistic method.

---

## Results

### Room with objects
<div style="overflow-x:auto;">

| Method              | Accumulated distance (m) | Accumulated energy | Retrievement (%) | Time (s) |
|--------------------|--------------------|----------------|----------|-----------|
| **Nelder-Mead**        | 98.435             | 5.230          | 83.47    | 131.053   |
| **(1+1)-ES**           | 119.858            | 6.013          | 84.03    | 34.733    |
| **Simulated annealing** | 146.451            | 6.218          | 83.54    | 35.720    |

</div>

### Study room
<div style="overflow-x:auto;">

| Method              | Accumulated distance (m) | Accumulated energy | Retrievement (%) | Time (s) |
|--------------------|--------------------|----------------|----------|-----------|
| **Nelder-Mead**        | 316.973            | 21.902         | 92.41    | 183.333   |
| **(1+1)-ES**           | 283.049            | 23.260         | 89.17    | 25.027    |
| **Simulated annealing** | 287.862           | 28.270         | 90.26    | 22.813    |

</div>

### Laboratory
<div style="overflow-x:auto;">

| Method              | Accumulated distance (m) | Accumulated energy | Retrievement (%) | Time (s)  |
|--------------------|--------------------|----------------|----------|-----------|
| **Nelder-Mead**        | 327.351            | 19.118         | 89.51    | 297.067   |
| **(1+1)-ES**           | 272.077            | 16.544         | 87.78    | 120.493   |
| **Simulated annealing** | 317.389            | 22.772         | 87.69    | 176.307   |

</div>

---

## Extended Work
---

### Function Redesign
Since the previous objective function was designed and tuned before the optimal optimization methods had been established, this contribution retunes the objective function from scratch, revisiting the formulation of each of its original factors along with their relative weights. Following the corresponding experiments, the function was indeed improved, with the new proposed equation being:

$$
f = f_{\text{A}} \cdot (0.5f_{\text{M}}+0.5f_{\text{Q}}), \quad f_{\text{M}} = 0.3f_{\text{D}} + 0.7f_{\text{E}}
$$

### Robust Optimization
Since the sensor's position and orientation are the optimization's decision variables, a future physical implementation of this system would be subject to odometric error as the robot may not reach the exact position and orientation selected by the optimizer. To address this without needing better odometry hardware, a **robust optimization** technique was developed that shields the selection process itself against this error.

For each candidate view, the objective function is evaluated not only at the nominal (intended) point but also at *k* = 5 sampled points within a bounded neighborhood (± 0.20 m in each position axis, consistent with realistic odometric error for a mobile robot). The final score blends the nominal evaluation with the expected value across this neighborhood, weighted by a tunable parameter μ:

- **μ = 0** recovers the original, non-robust process (useful as a baseline).
- **μ = 0.4** was found to be the optimal weight, cutting the accumulated sensitivity to positioning error (a custom "neighborhood degradation" metric) by **39.5%**, at a modest **26.1%** cost in overall ranked performance.

Validation with simulated odometric perturbations confirmed the benefit: the robust configuration passed the 85% retrieval threshold in all four scene-method combinations tested, while the non-robust baseline failed in one, showing that robust optimization meaningfully improves reliability precisely in the conditions where the non-robust approach breaks down.

---

## Publications
- **Thesis**: E. Shain Ruvalcaba, *"View planning for three-dimensional environment reconstruction using the Next Best View method"*, 2024.  
  DOI: [10.60473/ritec.31](https://doi.org/10.60473/ritec.31).  
  Defense unanimously approved by a three-person committee.

- **First journal article**: E. Shain-Ruvalcaba, E. López-Damian, *"Tuning and Comparison of Optimization Algorithms for the Next Best View Problematic,"* in *IEEE Access*, vol. 12, pp. 185567–185585, 2024.  
  DOI: [10.1109/ACCESS.2024.3513154](https://doi.org/10.1109/ACCESS.2024.3513154).

- **Second journal article**: E. Shain-Ruvalcaba, E. López-Damian, *"Multi-Factor and Odometric Aware Optimization for Next-Best-View 3D Reconstruction,"* submitted to *IEEE Access*, Aug. 2026 (under review).

---

## Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; place-items: center;">
    {{< lightbox-img src="gallery/robot.png">}}
    {{< lightbox-img src="gallery/sensor.png">}}
    {{< lightbox-img src="gallery/room.png">}}
    {{< lightbox-img src="gallery/study.png">}}
    {{< lightbox-img src="gallery/laboratory.png">}}
</div>