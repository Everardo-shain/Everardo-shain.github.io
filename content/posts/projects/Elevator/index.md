---
title: "Elevator"
date: 2021-11-18T08:06:25+06:00
description: Elevator project
menu:
  sidebar:
    name: Elevator
    identifier: elevator
    parent: projects
    weight: 80
hero: multimedia/imagenes.png
tags:
- Automation
- PLC
categories:
- Automation
---

This project involves programming a simulated 4-floor elevator on a PLC using TIA Portal. Most of the code is written in SCL, with less than 30% implemented in ladder logic. The simulation replicates real-world elevator functionality and meets all 11 requirements defined in the project guidelines, including the development of a fully functional HMI.

Peer-review meetings with the project supervisor and exhaustive research were conducted on the proper functioning of real-world elevators, as some corner cases were not defined in the project requirements.

---

## Key Features
- Moves up and down without exceeding the limits, according to elevator logic.  
- Doors open and close within the defined limits.  
- Doors reopen if the presence sensor is activated while closing.  
- While moving up or down, the elevator can be interrupted by another call, as long as it is within the allowed call intervals.  
- Calls that did not interrupt the process are stored in memory.  
- The elevator adjusts its speed based on the starting and destination floors.  
- The alarm is activated and displayed as a signal; the emergency stop halts all ongoing processes.  
- If there is an overweight condition, the doors do not close, and no actions are performed.  
- All indicators function correctly.  
- There is an HMI showing simulations of the elevator doors, as well as an HMI with the internal elevator panel.  
- The HMI panel includes a button that activates the elevator’s master mode, which disables the automatic mode memory. In master mode, the elevator performs requested actions in real time without storing them in memory. Additional buttons allow door opening and closing.

## Tools
- **4-Story Elevator 2D Virtual Machine**: simulation of the elevator sensors and actuators
- **TIA Portal**: SCL and ladder programming logic, HMI design
- **SIMATIC S7-PLCSIM Advanced V3.0**: simulation of a SIMATIC S7-1500 CPU 1516-3 PN/DP
## Video
{{< youtube OM1dn-VYwz8 >}}

## Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 10px;">
    {{< lightbox-img src="multimedia/imagenes.png">}}
</div>