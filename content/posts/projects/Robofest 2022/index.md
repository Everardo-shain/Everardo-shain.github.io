---
title: "Robofest 2022 | Robociety"
date: 2022-03-26T08:06:25+06:00
description: Robofest 2022 project
menu:
  sidebar:
    name: Robofest 2022
    identifier: robofest 2022
    parent: projects
    weight: 60
hero: hero.png
tags:
- Embedded
- Arduino
categories:
- Embedded
---

## Overview
This project was a Sumo robot for the international competition Robofest 2022, fulfilling the task of pushing three bottles without falling off the table, plus an unknown initial task to be coded during the competition itself. Although my main responsibility was software development, I also contributed to the robot’s design to ensure it met the competition’s weight and size requirements.

This was part of my two-year participation as a member of Robociety, a robotics student association. Through this project, I not only developed hard skills in robot design and programming but also soft skills by mentoring new members.

---

## Tools
### Hardware

- **Arduino Nano**: microcontroller board.
- **DC motors**: robot movement.
- **Infrared sensors**: fall detection.
- **SHARP distance sensors**: object detection.
- **Push button**: emergency stop and unknown task.
- **Photoresistor**: light detection for potential unknown task.

### Software

- **Arduino**: programming language for embedded software development.
- **Arduino IDE**: software environment for writing and running Arduino code.

---

## Programming Logic
- At the start of the round, the robot performs the required unknown task. In our case, the task was to push a button, then move slightly backwards and make a 360° turn.
- Afterwards, the robot moves forward until it detects either an object with the distance sensors or a potential fall with the infrared sensors.
  - If an object is detected by the lateral sensors, the robot turns until the central sensor detects the object.
  - If a potential fall is detected, the robot reverses slightly—while still checking that it won’t fall—and then turns to the opposite side.

Notes:
* The code was organized into two sections: decision logic and motor control.
* For time control, the function millis was used instead of delay, allowing the sensors to keep working continuously.

---

## Guidelines
### Time Trial Round
1. Judge will measure the time taken for each robot (one per table) to push 3 bottles off the table, then stop after the last bottle is off.
2. Maximum time given is 2 minutes.
3. Unknown Task must be used to initiate the robot or it will be penalized and not allowed to continue.
4. Time will be recorded to 1/100 of a second.
5. If a robot commits “Sumocide” by falling off the table, survival time and number of bottles pushed off the table will be recorded.
6. Robot must remain on the table for at least 3 seconds after any bottle is pushed off or it will be penalized.
7. For robots that push off all the bottles and survive, time will continue to be counted until the robot comes to a complete stop for at least 10 seconds.  The robot must stay stopped for at least 10 seconds to indicate it is done, but the 10 seconds will not be included in the “completion time”.

### Head to Head
1. A maximum of 2 minutes is given for each game.
2. At the start of each game, the judge will announce (a) the location on the table and (b) orientation of the robots on the table.
3. Teams will place their robots on the field according the judge’s instructions.
4. The Unknown Task must be used to start the robot.
5. If the robot fails to move, the robot automatically loses the game, unless the other robot also fails to move,  in which case it is a tie.
6. If the robot fails the unknown starting requirement, the robot automatically loses the game, unless the other robot also fails the unknown starting requirement,  in which case it is a tie.
7. The bottle is placed at an unknown location equidistant from the two robots. The bottle location can be different for each game.
8. After the start, students/judges must move at least 1 meter away from the table edges until after the end of the game.
9. If the bottle is pushed off the table unintentionally, the game continues with head-to-head sumo wrestling.
10. If any piece/part of the robot comes off the robot, and subsequently falls on the floor, the opposing robot will be IMMEDIATELY declared the winner.
11. One battery change is allowed during the head to head matches.
12. A robot is declared the winner of a game if one of the following criteria is met:
    - It intentionally pushes the bottle off the table and then remains intact and on the table for at least 3 seconds.
    - It intentionally or unintentionally pushes the opponent off the table and then remains intact and on the table for at least 3 seconds.
    - It remains intact and on the table for at least 3 seconds after the opponent has committed “Sumocide” by falling off the table.
    - If its opponent first pushes the bottle off the table but then commits “Sumocide” before the judge reaches the end of the 3 second count, the robot must remain intact and on the table for an additional 3 seconds to win the game.
    - If the result is unclear, the game will be declared a tie and replayed.

---

## Video
{{< youtube e-Wuxif8ChU>}}

---

## Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; place-items: center;">
    {{< lightbox-img src="gallery/team.png">}}
    {{< lightbox-img src="gallery/poster.png">}}
    {{< lightbox-img src="gallery/medal.png">}}
    {{< lightbox-img src="gallery/certificate.png">}}
</div>