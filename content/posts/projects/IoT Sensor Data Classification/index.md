---
title: "IoT Sensor Data Classification"
date: 2021-10-29T08:06:25+06:00
description: IoT Sensor Data Classification project
menu:
  sidebar:
    name: IoT Sensor Data Classification
    identifier: iot-sensor-data-classification
    parent: projects
    weight: 90
hero: hero.png
tags:
- Data Science
- Machine Learning
- IoT
- Python
- Arduino
categories:
- Data and Optimization
---

## Overview
This was an IoT project in which I implemented two machine learning algorithms, K-Nearest Neighbors (KNN) and Decision Tree, in Python to classify data collected from an MMA7361 accelerometer and a DHT11 temperature/humidity sensor connected to a NodeMCU ESP32 microcontroller. The sensors were programmed and tested using Arduino IDE, with data transmitted both through wired serial communication and wirelessly via MQTT using Mosquitto and OpenSSL for secure transfer. I organized the workflow on Jupyter Notebook, where I processed the collected data, labeled different scenarios (dark room, sunny room, bathroom, sensor movement types), and split it into training and testing sets. Both algorithms achieved good results, with accuracies above 97%, including perfect classification with the Decision Tree on the accelerometer dataset.

---

## Tools
### Hardware
- **NodeMCU ESP32**: microcontroller board.
- **MMA7361**: accelerometer module.
- **DHT11**: humidity and temperature sensor.

### Software
- **Arduino**: programming language for embedded software development.
- **Python**: programming language used for machine learning tasks.
- **Jupyter Notebook**: Python coding platform.
- **Arduino IDE**: software environment for writing and running Arduino code.
- **Blynk**: IoT software platform.
- **Mosquitto**: message broker for wireless data transmission.
- **OpenSSL**: key generation for wireless data transmission.

---

## Process
### Blynk
- Created a project using ESP32 Dev Board and WiFi communication.
- Added a SuperChart plot with X, Y and Z visualization.
- Assigned a virtual port to each axis.
- Programmed the ESP32 board with Arduino IDE, containing sensor reading and communication with Blynk using token, network and password values.
- Plotted real-time data from accelerometer values.
### Data Collection
**DHT11**
- Loaded Adafruit_Sensor and DHT libraries on Arduino IDE.
- Obtained humidity and temperature sensor readings for 3 minutes with 1 second between measurements, testing 3 scenarios:
    - Dark study room.
    - Sunny room.
    - Bathroom.

**Accelerometer**
- Obtained X, Y and Z acceleration components and computed $a=\sqrt{a_x^2+a_y^2+a_z^2}$, testing 2 scenarios:
    - Shake sensor manually.
    - Put sensor on table and shake by hitting it.
### Data Transmission
**Wired data transmission**
- Installed pip pyserial.
- Wrote a python code that received data from Arduino IDE and stored it on a .csv file.
- Executed .py file with CMD. 

**Wireless data transmission**
- Downloaded Mosquitto and OpenSSL.
- Communicated Mosquitto with a defined port, with the need of creating firewall rules.
- Downloaded PubSubClient library on Arduino IDE.
- Modified Arduino code to include connection with MQTT Broker.
- Installed "paho" and "requests" in Python.
- Coded a .py file that received the data sent by Arduino IDE and created .csv files.
### Machine Learning
- Read .csv file and plot data.
- Import sklearn libraries.
- Merged all data and added label column.
- Separated the label column and changed data type to list.
- Splitted data into 65% training and 35% testing.

**KNN**
- Created model with training data using "KNeighboursClassifier". Used $k=23$ for DHT11 and $k=16$ for accelerometer.
- Tested the model and determined its accuracy with knn.score and with a confusion matrix.

**Decision Tree**
- Built model with "tree.DecisionTreeClassifier" with $criterion=entropy$.
- Fit the model with same training data as before.
- Tested the model and determined its accuracy with knn.score and with a confusion matrix.

---

## Results

### DHT11
<div style="overflow-x:auto;">

| Method        | Accuracy | Confusion Matrix |
|---------------|----------|------------------|
| **KNN**       | 0.9793     | (show matrix below) |
| **Decision Tree** | 0.9845 | (show matrix below) |

</div>

<br>

**KNN Confusion Matrix**
<div style="overflow-x:auto;">

|               | Predicted: Dark | Predicted: Sunny | Predicted: Bathroom |
|---------------|--------------------|--------------------|--------------------|
|  **Actual: Dark**  | 69                 | 0                 | 0                 |
|  **Actual: Sunny**  | 0                  | 64                | 0                 |
|  **Actual: Bathroom**  | 0                  | 4                | 56                 |

</div>

<br>

**Decision Tree Confusion Matrix**
<div style="overflow-x:auto;">

|               | Predicted: Dark | Predicted: Sunny | Predicted: Bathroom |
|---------------|--------------------|--------------------|--------------------|
|  **Actual: Dark**  | 69                 | 0                 | 0                 |
|  **Actual: Sunny**  | 0                  | 62                | 2                 |
|  **Actual: Bathroom**  | 0                  | 1                | 59                 |

</div>

### Accelerometer
<div style="overflow-x:auto;">

| Method        | Accuracy | Confusion Matrix |
|---------------|----------|------------------|
| **KNN**       | 0.9892     | (show matrix below) |
| **Decision Tree** | 1 | (show matrix below) |

</div>

<br>

**KNN Confusion Matrix**
<div style="overflow-x:auto;">

|               | Predicted: Shake | Predicted: Hit | 
|---------------|--------------------|--------------------|
|  **Actual: Shake**  | 38                 | 0                 |
|  **Actual: Hit**  | 1                  | 54                |

</div>

<br>

**Decision Tree Confusion Matrix**
<div style="overflow-x:auto;">

|               | Predicted: Shake | Predicted: Hit | 
|---------------|--------------------|--------------------|
|  **Actual: Shake**  | 38                 | 0                 |
|  **Actual: Hit**  | 0                  | 55                |

</div>

---

## Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; place-items: center;">
    {{< lightbox-img src="gallery/circuit.png">}}
    {{< lightbox-img src="gallery/blynk.png">}}
    {{< lightbox-img src="gallery/dht11.png">}}
    {{< lightbox-img src="gallery/accelerometer.png">}}
</div>