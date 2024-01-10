---
sidebar_position: 1
title: Solution Document
tags:
  - solution document
  - SAD
  - documentation
  - C4 model
---

# Solution Document

:::note
_Different organization may use different templates for 'design' or 'solution document'. Below I'm trying to cover the most popular and useful sections.
Specific sections and documentation approach is a good subject for discussion on interview._ 
:::


<!-- ```plantuml
@startuml

scale 1.5

skinparam ParticipantBorderColor black
skinparam ParticipantBackgroundColor white
skinparam ArrowColor black
skinparam Shadowing false
skinparam lifeLineStrategy strictuml
skinparam SequenceLifeLineBorderColor grey
skinparam SequenceBoxBorderColor transparent
skinparam sequence {
DividerBackgroundColor white
DividerBorderColor grey
DividerBorderThickness 1
}

title Sequence Diagram (test)
actor Customer

participant storefront as "Storefront" order 1
participant api as "API" order 2
participant db as "DB" order 3

Customer -> storefront: Open "Projects" page
storefront -> api: Get Projects
api -> db: fetch data

@enduml
```


## TBD
## TBD
## TBD -->



## Stakeholders
***

| Name | Role | Notes |
| -------------------- | ----------------------------------| ---------------------------------- |
| Alex Surma | PO | Representing a "biz" part and requirements |
| Alex Surma | Solution Architect | Drives a solution and technical design |
| Alex Surma | FE and BE Dev | I'm doing dev too ;) |
| Alex Surma | QA | Again me ;) |
| Alex Surma | SRE/DevOps | Have to play this role too |
| N/A | HRs | Users of my public personal 'CV' site |
| N/A | Architects/Directors/<br /> Tech leads | People who might interview me, reviewers of current documentation,<br /> back-end components, API, source code |


## Definitions, Acronyms, Abbreviations
***

| Term | Description | Reference |
| -------------------- | ----------------------------------| ----------------------------------------------- |
| CV | Curriculum Vitae. A CV is a comprehensive document that outlines a person's education, work experience, skills, achievements, and other relevant information. | |
| C4 model | One of approaches for diagramming and documenting software architectures| [https://c4model.com/](https://c4model.com/) |
| Quality Attribute | Quality attributes in software architecture refer to the various characteristics or properties that define the overall quality and behavior of a software system. These attributes are crucial in determining how well a system performs and meets its intended objectives. Sometimes are still referred as NFRs  | |
| MACH | Modern enterprise technology that is **M**icroservices-based, **A**PI-first, **C**loud-native SaaS, and **H**eadless | [https://machalliance.org/](https://machalliance.org/) |

## Overview
***
### Context
:::note
[[TODO:Section description]]
:::
Problem statement:
* me as an **interviewer** always find hard to check 'architect' skills and experience without looking into real deliverables and artifacts. What I usually get is a PDF file and have to prepare questions that should somehow confirm past experience       
* me as an **interviewee** want to better and more efficiently present myself as a professional engineer/architect. Working on large enterprice projects with lot of legacy solutions makes it hard to share outcomes of my work. Want to have something more then plain, boring text in PDF (that can be easily AI generated nowadays). Set of artifacts I can elaborate on, use as a starting points or references during potential white-boarding sessions with my interviewers

![Context Diagram](./images/cv-context.png)
:::info
C4 Model has been used for creating an above diagram. However in real live it doesn't always have to be formal and may depend on the audience/stakeholders
<br />
Example - TBD<br />
Example - TBD<br />

:::

  
demonstrate design, documentation, tech skills as a set of artifacts rather than text in MS word file/PDF

### Business goals
If I were to define something measurable here I would do this as a 'interview to offer' KPI
e.g. increase 'interview to offer' rate from 10% to 30%

### Quality attributes
#### Global
| Category | Sub category | Detailed requirement | How to measure |
| :------------------- | :---------------------------- | ------------------------------------------- | ----------------------- |
| Maintainability | Simplicity | Overall solution shouldn't be 'overengineered' and should serve its main purpose of presenting design/documentation/tech skills | [Manual] system audit |
|                 | Code quality | All project code should have a minimum quality that will be defined through quality gate tool ||
| Presentability | Presentability | CV UI and project documentation should have a public access, so it's easy to share and present on interview  | |
|                | Up to date tools / technologies | Common sense here. As this is a 'pet like' project I can spend much time on adding the most modern.  | |
| Availability | Uptime | Not a strong requirement in my case. I can 'shutdown' all components without business impact  | |
|||||


#### API
| Category | Sub category | Detailed requirement | How to measure |
| -------------------- | ----------------------------- | ------------------------------------------- | ----------------------- |
|Performance|Latency|API average response time should be less than 100 ms|Adding this to see if i can challenge myself and measure|
| | | ||
|||||



## Dependencies & assumptions
Description with assumptions, constraints and dependencies with others

# Solution Design
:::note
[[TODO:Section description]]
:::

High level diagram representation for solution.

If replatforming or significant changes should include both 'as is' and 'to be' sections

Baseline Design/Architecture
Target Design/Architecture

Should include all necessary views  e.g

Logical View
Components
Data View
Infrastructure / Deployment View
[Any other views to be placed here]


May also include ''addressing quality attributes' if applicable e.g 

Addressing Key Quality Attributes

Availability
....
Usability



## API Specification
Link to [SwaggerHub](https://design.api.3stripes.io/home) to the API specification.

## Database schema
Entities represtantion for data model based on [PlantUML](https://plantuml.com/ie-diagram) format.



# Architecture decision records
| Issue | Impact | Status |
| ---------------------- | ---------------------------------- | ----------------------------------- |
| | | |

# Change Log
# References
# Appendix
## Examples