---
title: "US Children Adoption Statistical Inference"
date: 2023-11-23T08:06:25+06:00
description: US Children Adoption Statistical Inference project
menu:
  sidebar:
    name: US Children Adoption Statistical Inference
    identifier: children-adoption
    parent: projects
    weight: 30
hero: hero.png
tags:
- Data Science
- Statistical Inference
- R
categories:
- Data and Optimization
---

## Overview
Project focused on understanding behaviors on the United States children adoption using a dataset from Centers for Disease Control and Prevention,  where a total of 3 hypotheses were tested using R on RStudio. My team and I performed some data cleaning to avoid missing values and separate our variables of interest to them visualize them with bar plots and pie charts. For all the hypotheses we identified the Independent 2-group Mann-Whitney U Test as the best choice and performed it, then we reinforced our analysis by applying a parametric bootstrapping and power calculation where all 3 hypotheses got a good power greater than 80%.

Our final insights were:
- Does already having biological children affect the age of adoption? **Yes**, parents with no biological children tend to adopt younger children.
- Does the ability to have biological children affect the level of coping with the day-to-day demands of parenthood? **No**.
- Does the parents knowing the adopted children before adopting affect on the relationship between parent and child? **No**.

On this project I learned the importance of data cleaning, how to choose and apply statistical tests using R language, and how dataset interpretation and a correct hypothesis design can contribute to maximizing the value of the analysis.

---

## Tools
- **R**: programming of data cleaning and statistical analysis.
- **RStudio**: programming IDE. 

---

## Tasks
- Designed 3 hypotheses about a US Children Adoption dataset from Centers for Disease Control and Prevention.
- Checked the assumptions of our data to choose the best statistical test, considering factors like data dependency and distribution.
- Built a parametric bootstrapping simulation.
- Performed the chosen statistical tests for each hypothesis.
- Captured the p-value and decided whether to reject or not reject the null hypothesis.
- Calculated the statistical power.

---

## Dataset
### Description
This survey provides nationally representative estimates on the characteristics, pre-adoption experiences, and post-adoption support experiences of families of adopted children with special health care needs ages 0 to 15 years. These children were identified in other SLAITS surveys as being adopted through the US foster care system, domestic private adoption agencies, or international adoption.
### Source
https://www.cdc.gov/nchs/slaits/nsapsn.htm\
### Data Cleaning
The NaN values were removed, the “don't know” and “refused” categories were ignored, and the dataset was divided into the remaining categories. The data to be analyzed are the age of adoption finalization, the level of coping with parenthood and level of relationship. All of them are ordinal categorical data, because their categories have a clear order. All of them are independent.

---

## Statistical Test Selection
### U test (Mann-Whitney)
The data to analyze is on ordinal level of measure and assumed to be independent. The aim of this test is to compare the medians of each group, in order to know if there is a significant difference between them.
### Bootstraping
We will implement the **parametric boostrapping** with multinomial distribution to generate the new data for the simulation. We will compare the estimate value of the U test (difference in location).
1. Generate the new data with the multinomial random function.
2. Perform the Mann-Whitney U-Test and return the estimate value (difference in location between both groups).
3. Generate the distribution of 999 bootstrapped results and plot them. 
4. Calculate the percentile confidence interval, uncertainty, p-value and power. 

---

## Results
### Hypothesis 1
> Does already having biological children affect on the age of adoption?

**Independent 2-group Mann-Whitney U Test**
| P-value | 95% Confidence interval |
|---------|--------------------|
| 2.2e-16 | -1.9999 -0.9999 |

The p-value is smaller than the significance level 0.05 and the confidence interval does not include 0, we **reject the null hypothesis**, the medians from both groups are different. Final decision will be made with bootstrapping results.

**Bootstrapping**
| P-value | 95% Confidence interval | Power |
|---------|--------------------|----------------|
| 0.001 | -1 -1 | 0.8078 |

- The distribution of all the 999 bootstrapping results seems relatively close to a normal distribution. 
- Although we get a different p-value than the regular Mann-Whitney U Test, it is very close and it is still  smaller than the significance level 0.05 and the confidence interval does not include 0, we still **reject the null hypothesis**.
- All the values from the histogram are negative which means that the median from group 1 is smaller than the median from group 2, **parents with no biological children tend to adopt younger children**.
- The power is good (above 80%) with the help of increasing sample sizes by 10X. Without increasing sample sizes it was still above 70%.

### Hypothesis 2
> Does the ability to have biological children affect on the level of coping with the day to day demands of parenthood?

**Independent 2-group Mann-Whitney U Test**
| P-value | 95% Confidence interval |
|---------|--------------------|
| 0.9014 | -1.8662e-05 4.8935e-05 |

The p-value is greater than the significance level 0.05 and the confidence interval includes 0, we do **not reject the null hypothesis**, the medians from both groups are equal. Final decision will be made with bootstrapping results.

**Bootstrapping**
| P-value | 95% Confidence interval | Power |
|---------|--------------------|----------------|
| 0.6767 | -0.0001 0.0001 | 0.8108 |

- The distribution of all the 999 bootstrapping results seems relatively close to a normal distribution. 
- Although we get a different p-value than the regular Mann-Whitney U Test, it is very close and is still considerably greater than the significance level 0.05 and the confidence interval includes 0, we get to the same conclusion of **not rejecting the null hypothesis**.
- This means that **the ability to have biological children doesn’t influence the level of coping with the day to day demands of parenthood**.
- The power is good (above 80%) with the help of increasing sample sizes by 10X. Without increasing sample sizes, it was still above 70%.


### Hypothesis 3
> Does the parents knowing the adopted children before adopting affect on the relationship between parent and child?

**Independent 2-group Mann-Whitney U Test**
| P-value | 95% Confidence interval |
|---------|--------------------|
| 0.407 | -9.5141e-07 8.1519e-05 |

The p-value is greater than the significance level 0.05 and the confidence interval includes 0, we do **not reject the null hypothesis**, the medians from both groups are equal. Final decision will be made with bootstrapping results.

**Bootstrapping**
| P-value | 95% Confidence interval | Power |
|---------|--------------------|----------------|
| 0.4384 | -0.0001 0.0001 | 0.8268 |

- The distribution of all the 999 bootstrapping results seems relatively close to a normal distribution. 
- Although we get a different p-value than the regular Mann-Whitney U Test, it is very close and it is still considerably greater than the significance level 0.05 and the confidence interval includes 0, we get to the same conclusion of **not rejecting the null hypothesis**.
- This means that **adoptive parents have previous knowledge of adopted children doesn't influence the quality of the relationship between adoptive parents and children**. 
- The power is good (above 80%) without the need of increasing sample sizes.


---


## Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px; place-items: center;">
    {{< lightbox-img src="gallery/hypothesis-1.png">}}
    {{< lightbox-img src="gallery/hypothesis-2.png">}}
    {{< lightbox-img src="gallery/hypothesis-3.png">}}
    {{< lightbox-img src="gallery/results.png">}}
</div>