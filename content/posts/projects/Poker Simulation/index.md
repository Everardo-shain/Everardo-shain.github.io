---
title: "Poker Simulation"
date: 2024-08-13T08:06:25+06:00
description: Poker Simulation project
menu:
  sidebar:
    name: Poker Simulation
    identifier: poker-simulation
    parent: projects
    weight: 20
hero: hero.png
tags:
- Software
- C
categories:
- Software
---

## Overview
This project was part of the Introductory C Programming specialization from Coursera, and it was developed through the entire duration of the different courses divided into smaller sections. All the code was written in C language, with the use of advanced concepts such as arrays, pointers, debugging and memory allocation. 

The main task was to develop a functional poker simulator, starting with a correct card representation, building decks, implementing an extensive hand evaluation function to end with a Monte Carlo simulation system with 10000 trials for evaluating hand probabilities.

---

## Tools
- **C**: programming language.
- **GDB**: debugger.
- **Valgrind**:memory debugging.
- **GNU Emacs**: text editor.

---

## Tasks
### Cards
- Represented playing cards in code using **structs** and **enums**.  
- Validated that cards had correct values and suits.  
- Converted cards and hand rankings into human-readable text.  
- Implemented functions to translate between textual card representations and their internal data structures.  
- Created a way to map numbers (0–51) to unique cards in a deck.  
- Wrote test code in a separate file to check that everything worked as expected.  

### Test Cases
- Learned how poker hands are evaluated (detecting straights, flushes, pairs, full house, etc.) and how to determine the winning hand.  
- Wrote **test cases** to cover different scenarios and hand types.  
- Designed tests to catch common programming mistakes such as:  
  - Off-by-one errors in straight detection.  
  - Incorrect logic for straight flushes (checking straight and flush separately).  
  - Mistakes in selecting the correct 5 cards (especially in two-pair tie-breaking).  
  - Errors in iterating over suits or counting cards.  
- Used the provided shell script to run my tests against multiple broken implementations. 

### Decks
- Started working with decks and hands of cards represented as **arrays of pointers**.  
- Implemented core deck functions:  
  - Printing hands in a readable format.  
  - Checking if a card exists in a deck.  
  - Shuffling a deck using pseudo-random numbers.  
  - Validating a full deck to ensure it contains every card exactly once.  
- Tested my functions using the provided test program, which:  
  - Built a full 52-card deck and shuffled it multiple times.  
  - Verified the deck contains every card exactly once.  
  - Created smaller hands and checked the correct existance of their cards.  
  - Ran 50 million shuffles of a 5-card hand to test the statistical fairness of the shuffle (checking that all 120 possible hands appeared with roughly equal probability).  
- Adjusted my shuffle algorithm until results fell within the expected probability range (about 0.823%–0.843% occurrence per hand).  

### Hand Evaluation
- Started with sorting cards by value and suit in descending order.
- Used an enum-based ranking system to classify hands.
- Implemented detection of flushes (5+ cards of the same suit).
- Implemented detection of N-of-a-kind (pairs, three-of-a-kind, four-of-a-kind).
- Used arrays of counts to track repeated values.
- Implemented identification of secondary pairs for full house or two pairs.
- Handled Ace-low and Ace-high straights.
- Implemented lexicographic comparison of card values to break ties.
- Built structured evaluations containing the ranking and the 5 cards used for it.
- Verified correctness using prewritten test infrastructure.
- **Debugged** using **gdb** and breakpoints.

### Poker
- Built functions to construct specialized decks by excluding given cards or building remaining decks from multiple hands.
- Implemented **memory management** with proper deallocation to prevent leaks using **malloc/realloc/free**. Used **Valgrind** for memory debugging.
- Implemented array-based match counting to identify N-of-a-kind patterns.
- Handled unknown/future cards using placeholder management and pointer-based updates.
- Implemented functionality to map future cards from shuffled decks into placeholders.
- Developed input parsing to read hands from files, supporting both known and future cards.
- Enforced input validation to ensure all poker hands have at least 5 cards.
- Built modular testing programs for verification.
- Developed a Monte Carlo simulation system with 10000 trials for evaluating hand probabilities.
- Implemented shuffling, hand comparison, and repeated trials to determine win/tie statistics.
- Used probability reporting with formatted output including win ratios and ties.
- Created a **Makefile** for automated builds and debugging support.
- Optimized performance with compiler flags for faster simulations.
- Verified functionality with provided test cases and probabilistic benchmarks.

---

## Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; place-items: center;">
    {{< lightbox-img src="gallery/sample-round.png">}}
    {{< lightbox-img src="gallery/monte-carlo.png">}}
</div>